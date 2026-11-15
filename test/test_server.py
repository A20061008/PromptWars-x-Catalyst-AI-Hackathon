import http.client
import json
import tempfile
import threading
import unittest
from pathlib import Path

from server import create_server


class ServerTestCase(unittest.TestCase):
    def setUp(self):
        self.temporary_directory = tempfile.TemporaryDirectory()
        self.server = create_server({
            "pin": "2468",
            "adminPin": "1357",
            "dataDir": self.temporary_directory.name,
        })
        self.thread = threading.Thread(target=self.server.serve_forever, daemon=True)
        self.thread.start()
        self.host, self.port = self.server.server_address

    def tearDown(self):
        self.server.shutdown()
        self.server.server_close()
        self.thread.join(timeout=3)
        self.temporary_directory.cleanup()

    def request(self, method, path, body=None, cookie=None, origin=None):
        connection = http.client.HTTPConnection(self.host, self.port)
        headers = {}
        if body is not None:
            headers["Content-Type"] = "application/json"
        if cookie:
            headers["Cookie"] = cookie
        if origin:
            headers["Origin"] = origin
        encoded = json.dumps(body) if body is not None else None
        connection.request(method, path, body=encoded, headers=headers)
        response = connection.getresponse()
        result = response.read()
        content_type = response.headers.get("Content-Type", "")
        parsed = json.loads(result) if result and "application/json" in content_type else result
        values = (response.status, response.headers, parsed)
        connection.close()
        return values

    def login(self, details):
        status, headers, body = self.request("POST", "/api/login", details)
        self.assertEqual(status, 200)
        return headers.get("Set-Cookie").split(";", 1)[0]


class ApiTests(ServerTestCase):
    def test_api_protects_and_persists_care_state(self):
        status, headers, _ = self.request("GET", "/styles.css")
        self.assertEqual(status, 200)
        self.assertIn("text/css", headers.get("Content-Type"))
        status, _, _ = self.request("GET", "/chatbot.js")
        self.assertEqual(status, 200)
        status, _, _ = self.request("GET", "/evaluation.js")
        self.assertEqual(status, 200)
        status, _, _ = self.request("GET", "/theme.js")
        self.assertEqual(status, 200)
        self.assertEqual(self.request("GET", "/toString")[0], 404)
        self.assertEqual(self.request("GET", "/api/state")[0], 401)

        self.assertEqual(self.request("POST", "/api/login", {"pin": "0000"})[0], 401)
        cookie = self.login({"mode": "pin", "pin": "2468"})
        status, _, state = self.request("GET", "/api/state", cookie=cookie)
        self.assertEqual(status, 200)
        self.assertEqual(len(state["doses"]), 4)

        state["doses"][0]["taken"] = False
        status, _, _ = self.request("PUT", "/api/state", state, cookie, f"http://{self.host}:{self.port}")
        self.assertEqual(status, 200)
        saved = json.loads((Path(self.temporary_directory.name) / "care-state.json").read_text(encoding="utf-8"))
        self.assertFalse(saved["doses"][0]["taken"])

        invalid = {"doses": "not a list", "appointments": [], "routines": []}
        self.assertEqual(self.request("PUT", "/api/state", invalid, cookie, f"http://{self.host}:{self.port}")[0], 400)
        self.assertEqual(self.request("PUT", "/api/state", state, cookie, "https://attacker.example")[0], 403)

    def test_registration_login_and_session_revocation(self):
        origin = f"http://{self.host}:{self.port}"
        status, headers, result = self.request(
            "POST",
            "/api/register",
            {"name": "Test Caregiver", "email": "CARE@example.com", "password": "secure-demo-pass"},
            origin=origin,
        )
        self.assertEqual(status, 201)
        self.assertEqual(result["role"], "member")
        cookie = headers.get("Set-Cookie").split(";", 1)[0]
        stored = json.loads((Path(self.temporary_directory.name) / "accounts.json").read_text(encoding="utf-8"))
        self.assertEqual(stored["accounts"][0]["email"], "care@example.com")
        self.assertNotIn("secure-demo-pass", stored["accounts"][0]["passwordHash"])

        self.assertEqual(self.request(
            "POST",
            "/api/register",
            {"name": "Another Caregiver", "email": "care@example.com", "password": "another-demo-pass"},
            origin=origin,
        )[0], 409)
        self.assertEqual(self.request(
            "POST",
            "/api/login",
            {"mode": "account", "email": "Care@example.com", "password": "secure-demo-pass"},
            origin=origin,
        )[0], 200)
        self.assertEqual(self.request("GET", "/api/session", cookie=cookie)[2]["name"], "Test Caregiver")
        self.assertEqual(self.request("POST", "/api/logout", cookie=cookie)[0], 200)
        self.assertEqual(self.request("GET", "/api/session", cookie=cookie)[0], 401)
        self.assertEqual(self.request(
            "POST",
            "/api/register",
            {"name": "Caregiver", "email": "weak@example.com", "password": "short"},
            origin=origin,
        )[0], 400)

    def test_tasks_and_medication_review_are_role_gated(self):
        origin = f"http://{self.host}:{self.port}"
        member = self.login({"mode": "pin", "pin": "2468"})
        guest = self.login({"mode": "guest"})
        admin = self.login({"mode": "admin", "pin": "1357"})
        request = {
            "title": "Help with the care routine",
            "details": "Please help coordinate this.",
            "category": "care",
            "priority": "normal",
        }
        status, _, member_task = self.request("POST", "/api/tasks", request, member, origin)
        self.assertEqual(status, 201)
        status, _, guest_task = self.request("POST", "/api/tasks", request, guest, origin)
        self.assertEqual(status, 201)
        self.assertEqual(len(self.request("GET", "/api/tasks", cookie=member)[2]["tasks"]), 1)
        self.assertEqual(len(self.request("GET", "/api/tasks", cookie=admin)[2]["tasks"]), 2)

        task_id = guest_task["task"]["id"]
        self.assertEqual(self.request(
            "PATCH", f"/api/tasks/{task_id}", {"status": "completed", "adminNote": "Done"},
            guest, origin,
        )[0], 403)
        status, _, _ = self.request(
            "PATCH", f"/api/tasks/{task_id}", {"status": "in_progress", "adminNote": "Checking"},
            admin, origin,
        )
        self.assertEqual(status, 200)

        self.assertEqual(self.request("GET", "/api/admin/medications", cookie=guest)[0], 403)
        medications = self.request("GET", "/api/admin/medications", cookie=admin)[2]["medications"]
        self.assertEqual(len(medications), 4)
        review_path = f"/api/admin/medications/{medications[0]['id']}/verify"
        self.assertEqual(self.request("POST", review_path, cookie=guest, origin=origin)[0], 403)
        self.assertEqual(self.request("POST", review_path, cookie=admin, origin=origin)[0], 200)
        current = self.request("GET", "/api/admin/medications", cookie=admin)[2]["medications"][0]
        self.assertEqual(current["review"]["reviewedBy"], "Administrator")

    def test_app_feedback_is_limited_to_users_and_reviewable_by_admin(self):
        origin = f"http://{self.host}:{self.port}"
        guest = self.login({"mode": "guest"})
        member = self.login({"mode": "pin", "pin": "2468"})
        admin = self.login({"mode": "admin", "pin": "1357"})
        payload = {
            "rating": 5,
            "category": "ease",
            "comment": "The medicine schedule is easy to understand.",
        }

        self.assertEqual(self.request("POST", "/api/feedback", payload, origin=origin)[0], 401)
        status, _, submitted = self.request("POST", "/api/feedback", payload, guest, origin)
        self.assertEqual(status, 201)
        feedback_id = submitted["feedback"]["id"]
        self.assertEqual(self.request("GET", "/api/admin/feedback", cookie=member)[0], 403)
        self.assertEqual(self.request(
            "POST", "/api/feedback", payload, admin, origin,
        )[0], 403)
        self.assertEqual(self.request(
            "POST", "/api/feedback", {**payload, "rating": 0}, member, origin,
        )[0], 400)

        status, _, result = self.request("GET", "/api/admin/feedback", cookie=admin)
        self.assertEqual(status, 200)
        self.assertEqual(result["summary"], {"count": 1, "averageRating": 5.0, "newCount": 1})
        self.assertNotIn("principalId", result["entries"][0])

        review_path = f"/api/admin/feedback/{feedback_id}"
        self.assertEqual(self.request(
            "PATCH", review_path, {"status": "reviewed", "adminNote": "Consider clearer labels."},
            member, origin,
        )[0], 403)
        status, _, reviewed = self.request(
            "PATCH", review_path, {"status": "reviewed", "adminNote": "Consider clearer labels."},
            admin, origin,
        )
        self.assertEqual(status, 200)
        self.assertEqual(reviewed["feedback"]["status"], "reviewed")
        self.assertEqual(
            self.request("GET", "/api/admin/feedback", cookie=admin)[2]["summary"]["newCount"],
            0,
        )

    def test_python_chatbot_answers_app_questions_without_session(self):
        status, _, response = self.request("POST", "/api/chat", {"question": "How do I export a report?"})
        self.assertEqual(status, 200)
        self.assertIn("CSV", response["answer"])
        self.assertEqual(
            self.request("POST", "/api/chat", {"question": " "})[0],
            400,
        )
        status, _, response = self.request(
            "POST",
            "/api/chat",
            {"question": "Someone is having chest pain"},
        )
        self.assertEqual(status, 200)
        self.assertIn("112", response["answer"])
        status, _, response = self.request(
            "POST",
            "/api/chat",
            {"question": "Can I take an extra dose?"},
        )
        self.assertEqual(status, 200)
        self.assertIn("can't diagnose", response["answer"])


if __name__ == "__main__":
    unittest.main()
