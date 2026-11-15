"""Python standard-library server for the Everwell local demo."""

import base64
import hashlib
import hmac
import json
import os
import re
import secrets
import threading
import time
import uuid
from datetime import date, datetime, timedelta, timezone
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlsplit

from chatbot import answer_app_question


MAX_BODY_BYTES = 64 * 1024
SESSION_TTL_SECONDS = 8 * 60 * 60
LOGIN_WINDOW_SECONDS = 15 * 60
LOGIN_MAX_ATTEMPTS = 5
ROOT = Path(__file__).resolve().parent
STATIC_FILES = {
    "/": ("Index.html", "text/html; charset=utf-8"),
    "/Index.html": ("Index.html", "text/html; charset=utf-8"),
    "/styles.css": ("styles.css", "text/css; charset=utf-8"),
    "/app.js": ("app.js", "text/javascript; charset=utf-8"),
    "/chatbot.js": ("chatbot.js", "text/javascript; charset=utf-8"),
    "/evaluation.js": ("evaluation.js", "text/javascript; charset=utf-8"),
    "/theme.js": ("theme.js", "text/javascript; charset=utf-8"),
}
SECURITY_HEADERS = {
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Permissions-Policy": "camera=(), microphone=(), geolocation=(self)",
    "Content-Security-Policy": (
        "default-src 'self'; script-src 'self' 'unsafe-inline'; "
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; "
        "font-src https://fonts.gstatic.com; img-src 'self' data:; "
        "connect-src 'self'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'"
    ),
}


class HttpError(Exception):
    def __init__(self, status, message):
        super().__init__(message)
        self.status = status


def is_string(value, max_length):
    return isinstance(value, str) and len(value) <= max_length


def is_non_empty_string(value, max_length):
    return is_string(value, max_length) and bool(value.strip())


def js_or_empty(value):
    return value if value else ""


def is_valid_date(value):
    if not isinstance(value, str) or not re.fullmatch(r"\d{4}-\d{2}-\d{2}", value):
        return False
    try:
        return date.fromisoformat(value).isoformat() == value
    except ValueError:
        return False


def local_date_offset(days):
    return (date.today() + timedelta(days=days)).isoformat()


def seed_state():
    return {
        "format": "everwell-care-state",
        "version": 1,
        "doses": [
            {"name": "Vitamin D3", "details": "1 softgel · with breakfast", "time": "8:00 AM", "icon": "☀️", "taken": True},
            {"name": "Amlodipine", "details": "5 mg · after breakfast", "time": "8:30 AM", "icon": "🌿", "taken": True},
            {"name": "Calcium + D", "details": "1 tablet · with water", "time": "1:00 PM", "icon": "💧", "taken": False},
            {"name": "Evening medicine", "details": "As prescribed · after dinner", "time": "8:00 PM", "icon": "🌙", "taken": False},
        ],
        "appointments": [
            {"name": "Dr. Meera Shah", "kind": "Cardiology · City Care Clinic", "time": "10:30 AM", "place": "City Care Clinic", "date": local_date_offset(1)},
            {"name": "Annual wellness check", "kind": "Dr. Arjun Rao · Family medicine", "time": "11:00 AM", "place": "Sunrise Medical Centre", "date": local_date_offset(5)},
        ],
        "routines": [
            {"icon": "💧", "name": "drinking", "note": "8:30 AM · morning", "done": True},
            {"icon": "🧘", "name": "gentleMovement", "note": "10:00 AM · 10 min", "done": False},
            {"icon": "🌱", "name": "walkOutside", "note": "5:30 PM · if you feel up to it", "done": False},
        ],
    }


def validate_list(value, field, validator, max_items):
    if not isinstance(value, list) or len(value) > max_items:
        raise HttpError(400, f"Invalid {field} list.")
    if not all(validator(item) for item in value):
        raise HttpError(400, f"Invalid {field} entry.")
    return value


def validate_state(payload):
    if not isinstance(payload, dict):
        raise HttpError(400, "Expected a care-data object.")

    def valid_dose(item):
        return (
            isinstance(item, dict)
            and is_non_empty_string(item.get("name"), 100)
            and is_string(js_or_empty(item.get("details")), 160)
            and is_string(js_or_empty(item.get("time")), 40)
            and is_string(js_or_empty(item.get("icon")), 16)
            and type(item.get("taken")) is bool
        )

    def valid_appointment(item):
        return (
            isinstance(item, dict)
            and is_non_empty_string(item.get("name"), 120)
            and is_string(js_or_empty(item.get("kind")), 160)
            and is_string(js_or_empty(item.get("place")), 120)
            and is_string(js_or_empty(item.get("location")), 120)
            and is_string(js_or_empty(item.get("time")), 40)
            and is_string(item.get("date"), 10)
            and is_valid_date(item.get("date"))
        )

    def valid_routine(item):
        return (
            isinstance(item, dict)
            and is_non_empty_string(item.get("name"), 60)
            and is_string(js_or_empty(item.get("icon")), 16)
            and is_string(js_or_empty(item.get("note")), 120)
            and type(item.get("done")) is bool
        )

    return {
        "doses": validate_list(payload.get("doses"), "medicine", valid_dose, 100),
        "appointments": validate_list(payload.get("appointments"), "appointment", valid_appointment, 100),
        "routines": validate_list(payload.get("routines"), "routine", valid_routine, 30),
    }


def validate_task_input(payload):
    categories = ("care", "medication", "appointment", "contact", "other")
    if (
        not isinstance(payload, dict)
        or not is_non_empty_string(payload.get("title"), 100)
        or not is_string(js_or_empty(payload.get("details")), 500)
        or payload.get("category") not in categories
        or payload.get("priority") not in ("normal", "urgent")
    ):
        raise HttpError(400, "Enter a title, category, priority, and details up to 500 characters.")
    return {
        "title": payload["title"].strip(),
        "details": js_or_empty(payload.get("details")).strip(),
        "category": payload["category"],
        "priority": payload["priority"],
    }


def valid_email(value):
    return (
        isinstance(value, str)
        and len(value) <= 254
        and re.fullmatch(r"[^\s@]+@[^\s@]+\.[^\s@]+", value) is not None
    )


def hash_password(password, salt=None):
    salt = salt or secrets.token_bytes(16)
    derived = hashlib.scrypt(password.encode("utf-8"), salt=salt, n=16384, r=8, p=1, dklen=64)
    return {
        "salt": base64.urlsafe_b64encode(salt).decode("ascii").rstrip("="),
        "hash": base64.urlsafe_b64encode(derived).decode("ascii").rstrip("="),
    }


def verify_password(password, salt_value, hash_value):
    try:
        salt = base64.urlsafe_b64decode(salt_value + "=" * (-len(salt_value) % 4))
        expected = base64.urlsafe_b64decode(hash_value + "=" * (-len(hash_value) % 4))
        if len(salt) != 16 or len(expected) != 64:
            return False
        actual = hashlib.scrypt(password.encode("utf-8"), salt=salt, n=16384, r=8, p=1, dklen=64)
        return hmac.compare_digest(actual, expected)
    except (ValueError, TypeError):
        return False


def medication_id(dose):
    value = [dose["name"], js_or_empty(dose.get("details")), js_or_empty(dose.get("time")), dose["taken"]]
    serialized = json.dumps(value, ensure_ascii=False, separators=(",", ":"))
    return hashlib.sha256(serialized.encode("utf-8")).hexdigest()[:24]


def iso_now():
    return datetime.now(timezone.utc).isoformat(timespec="milliseconds").replace("+00:00", "Z")


class DataStore:
    def __init__(self, directory):
        self.directory = Path(directory)
        self.state_file = self.directory / "care-state.json"
        self.accounts_file = self.directory / "accounts.json"
        self.tasks_file = self.directory / "care-tasks.json"
        self.feedback_file = self.directory / "user-feedback.json"
        self.lock = threading.RLock()

    def _read_json(self, path):
        with path.open("r", encoding="utf-8") as file:
            return json.load(file)

    def _write_json(self, path, value):
        self.directory.mkdir(parents=True, exist_ok=True)
        temporary = path.with_name(f"{path.name}.{os.getpid()}.{secrets.token_hex(6)}.tmp")
        try:
            with temporary.open("w", encoding="utf-8") as file:
                os.chmod(temporary, 0o600)
                json.dump(value, file, ensure_ascii=False, indent=2)
            os.replace(temporary, path)
        except Exception:
            try:
                temporary.unlink(missing_ok=True)
            except OSError:
                pass
            raise

    def read_state(self):
        with self.lock:
            self.directory.mkdir(parents=True, exist_ok=True)
            try:
                state = self._read_json(self.state_file)
            except FileNotFoundError:
                state = seed_state()
                self._write_json(self.state_file, state)
                return state
            if not isinstance(state, dict) or state.get("format") != "everwell-care-state" or state.get("version") != 1:
                raise ValueError("Care data format is not supported.")
            try:
                checked = validate_state(state)
            except HttpError as error:
                raise ValueError("Care data file contains invalid records.") from error
            return {"format": state["format"], "version": state["version"], **checked}

    def write_state(self, state):
        with self.lock:
            self._write_json(self.state_file, state)

    def read_accounts(self):
        with self.lock:
            try:
                state = self._read_json(self.accounts_file)
            except FileNotFoundError:
                return {"format": "everwell-accounts", "version": 1, "accounts": []}
            valid = (
                isinstance(state, dict)
                and state.get("format") == "everwell-accounts"
                and state.get("version") == 1
                and isinstance(state.get("accounts"), list)
                and all(
                    isinstance(account, dict)
                    and isinstance(account.get("id"), str)
                    and is_non_empty_string(account.get("name"), 80)
                    and valid_email(account.get("email"))
                    and isinstance(account.get("salt"), str)
                    and isinstance(account.get("passwordHash"), str)
                    and isinstance(account.get("createdAt"), str)
                    for account in state["accounts"]
                )
            )
            if not valid:
                raise ValueError("Account data format is not supported.")
            return state

    def read_tasks(self):
        with self.lock:
            self.directory.mkdir(parents=True, exist_ok=True)
            try:
                state = self._read_json(self.tasks_file)
            except FileNotFoundError:
                state = {"format": "everwell-care-tasks", "version": 1, "tasks": [], "medicationReviews": []}
                self._write_json(self.tasks_file, state)
                return state

            def valid_task(task):
                return (
                    isinstance(task, dict)
                    and isinstance(task.get("id"), str)
                    and isinstance(task.get("requesterId"), str)
                    and task.get("requesterRole") in ("guest", "member")
                    and is_non_empty_string(task.get("requesterName"), 80)
                    and is_non_empty_string(task.get("title"), 100)
                    and is_string(js_or_empty(task.get("details")), 500)
                    and task.get("category") in ("care", "medication", "appointment", "contact", "other")
                    and task.get("priority") in ("normal", "urgent")
                    and task.get("status") in ("open", "in_progress", "completed")
                    and is_string(js_or_empty(task.get("adminNote")), 500)
                    and isinstance(task.get("createdAt"), str)
                    and isinstance(task.get("updatedAt"), str)
                )

            def valid_review(review):
                return (
                    isinstance(review, dict)
                    and isinstance(review.get("medicationId"), str)
                    and re.fullmatch(r"[a-f0-9]{24}", review["medicationId"]) is not None
                    and is_non_empty_string(review.get("medicineName"), 100)
                    and is_string(js_or_empty(review.get("details")), 160)
                    and is_string(js_or_empty(review.get("time")), 40)
                    and is_non_empty_string(review.get("reviewedBy"), 80)
                    and isinstance(review.get("reviewedAt"), str)
                )

            if (
                not isinstance(state, dict)
                or state.get("format") != "everwell-care-tasks"
                or state.get("version") != 1
                or not isinstance(state.get("tasks"), list)
                or len(state["tasks"]) > 500
                or not all(valid_task(task) for task in state["tasks"])
                or not isinstance(state.get("medicationReviews"), list)
                or len(state["medicationReviews"]) > 100
                or not all(valid_review(review) for review in state["medicationReviews"])
            ):
                raise ValueError("Care task data format is not supported or contains invalid records.")
            return state

    def register_account(self, account):
        with self.lock:
            state = self.read_accounts()
            if any(existing["email"] == account["email"] for existing in state["accounts"]):
                raise HttpError(409, "An account with that email already exists.")
            state["accounts"].append(account)
            self._write_json(self.accounts_file, state)

    def update_state(self, update):
        with self.lock:
            current = self.read_state()
            next_state = {"format": current["format"], "version": current["version"], **update}
            self._write_json(self.state_file, next_state)
            return next_state

    def update_tasks(self, operation):
        with self.lock:
            state = self.read_tasks()
            result = operation(state)
            self._write_json(self.tasks_file, state)
            return result

    def read_feedback(self):
        with self.lock:
            self.directory.mkdir(parents=True, exist_ok=True)
            try:
                state = self._read_json(self.feedback_file)
            except FileNotFoundError:
                state = {"format": "everwell-user-feedback", "version": 1, "entries": []}
                self._write_json(self.feedback_file, state)
                return state
            valid_entry = lambda entry: (
                isinstance(entry, dict)
                and isinstance(entry.get("id"), str)
                and entry.get("role") in ("guest", "member")
                and type(entry.get("rating")) is int
                and 1 <= entry["rating"] <= 5
                and entry.get("category") in ("ease", "features", "accessibility", "reliability", "other")
                and is_string(js_or_empty(entry.get("comment")), 500)
                and isinstance(entry.get("createdAt"), str)
                and entry.get("status") in ("new", "reviewed")
                and is_string(js_or_empty(entry.get("adminNote")), 500)
            )
            if (
                not isinstance(state, dict)
                or state.get("format") != "everwell-user-feedback"
                or state.get("version") != 1
                or not isinstance(state.get("entries"), list)
                or len(state["entries"]) > 500
                or not all(valid_entry(entry) for entry in state["entries"])
            ):
                raise ValueError("User feedback data format is not supported or contains invalid entries.")
            return state

    def update_feedback(self, operation):
        with self.lock:
            state = self.read_feedback()
            result = operation(state)
            self._write_json(self.feedback_file, state)
            return result


class EverwellServer(ThreadingHTTPServer):
    daemon_threads = True
    allow_reuse_address = True


def create_server(options=None):
    options = options or {}
    pin = options.get("pin") or os.environ.get("DEMO_PIN", "1234")
    admin_pin = options.get("adminPin") or os.environ.get("ADMIN_PIN", "5678")
    if not re.fullmatch(r"\d{4}", pin):
        raise ValueError("DEMO_PIN must be exactly four digits.")
    if not re.fullmatch(r"\d{4}", admin_pin):
        raise ValueError("ADMIN_PIN must be exactly four digits.")
    if admin_pin == pin:
        raise ValueError("ADMIN_PIN must differ from DEMO_PIN.")

    data_dir = options.get("dataDir") or ROOT / "data"
    store = DataStore(data_dir)
    secure_cookies = options.get("secureCookies")
    if secure_cookies is None:
        secure_cookies = os.environ.get("COOKIE_SECURE") == "true"
    sessions = {}
    login_attempts = {}
    feedback_submissions = {}
    auth_lock = threading.RLock()

    class Handler(BaseHTTPRequestHandler):
        server_version = "EverwellPython/1.0"

        def log_message(self, fmt, *args):
            print(f"{self.log_date_time_string()} {fmt % args}", flush=True)

        def _send_json(self, status, value, headers=None):
            body = json.dumps(value, ensure_ascii=False, separators=(",", ":")).encode("utf-8")
            self.send_response(status)
            for name, val in SECURITY_HEADERS.items():
                self.send_header(name, val)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self.send_header("Cache-Control", "no-store")
            for name, val in (headers or {}).items():
                self.send_header(name, val)
            self.end_headers()
            self.wfile.write(body)

        def _send_asset(self, file_name, content_type):
            asset = (ROOT / file_name).read_bytes()
            self.send_response(200)
            for name, val in SECURITY_HEADERS.items():
                self.send_header(name, val)
            self.send_header("Content-Type", content_type)
            self.send_header("Content-Length", str(len(asset)))
            self.send_header("Cache-Control", "no-cache")
            self.end_headers()
            self.wfile.write(asset)

        def _read_json(self):
            try:
                length = int(self.headers.get("Content-Length", "0"))
            except ValueError as error:
                raise HttpError(400, "Request body must be valid JSON.") from error
            if length < 0:
                raise HttpError(400, "Request body must be valid JSON.")
            if length > MAX_BODY_BYTES:
                raise HttpError(413, "Request body is too large.")
            body = self.rfile.read(length)
            try:
                return json.loads(body.decode("utf-8"))
            except (UnicodeDecodeError, json.JSONDecodeError) as error:
                raise HttpError(400, "Request body must be valid JSON.") from error

        def _check_same_origin(self):
            origin = self.headers.get("Origin")
            if not origin:
                return
            try:
                if urlsplit(origin).netloc != self.headers.get("Host"):
                    raise HttpError(403, "Cross-origin request denied.")
            except ValueError as error:
                raise HttpError(403, "Invalid request origin.") from error

        def _cookie(self, name):
            for part in self.headers.get("Cookie", "").split(";"):
                key, separator, value = part.strip().partition("=")
                if separator and key == name:
                    return value
            return ""

        def _create_session(self, user, status=200):
            token = secrets.token_urlsafe(32)
            principal = {
                "principalId": user.get("principalId") or str(uuid.uuid4()),
                "expiresAt": time.time() + SESSION_TTL_SECONDS,
                **user,
            }
            with auth_lock:
                sessions[token] = principal
            cookie = (
                f"everwell_session={token}; HttpOnly; SameSite=Strict; Path=/; "
                f"Max-Age={SESSION_TTL_SECONDS}"
            )
            if secure_cookies:
                cookie += "; Secure"
            self._send_json(status, {"ok": True, "role": principal["role"], "name": principal["name"]},
                            {"Set-Cookie": cookie})

        def _get_session(self):
            token = self._cookie("everwell_session")
            with auth_lock:
                session = sessions.get(token)
                if not session or session["expiresAt"] <= time.time():
                    if session:
                        sessions.pop(token, None)
                    raise HttpError(401, "Please enter your family access PIN again.")
                session["expiresAt"] = time.time() + SESSION_TTL_SECONDS
                return dict(session)

        def _login(self):
            self._check_same_origin()
            input_data = self._read_json()
            if not isinstance(input_data, dict):
                raise HttpError(400, "Expected sign-in details.")
            if input_data.get("mode") == "guest":
                return self._create_session({"role": "guest", "name": "Guest"})

            address = self.client_address[0] if self.client_address else "unknown"
            now = time.time()
            with auth_lock:
                attempt = login_attempts.get(address)
                if attempt and now - attempt["startedAt"] < LOGIN_WINDOW_SECONDS and attempt["count"] >= LOGIN_MAX_ATTEMPTS:
                    raise HttpError(429, "Too many attempts. Please wait 15 minutes and try again.")

            user = None
            mode = input_data.get("mode")
            if mode == "account" and valid_email(input_data.get("email")) and isinstance(input_data.get("password"), str) and len(input_data["password"]) <= 128:
                account_state = store.read_accounts()
                email = input_data["email"].strip().lower()
                account = next((item for item in account_state["accounts"] if item["email"] == email), None)
                if account and verify_password(input_data["password"], account["salt"], account["passwordHash"]):
                    user = {"role": "member", "name": account["name"], "principalId": account["id"]}
            elif mode == "admin":
                provided = input_data.get("pin") if isinstance(input_data.get("pin"), str) else ""
                if re.fullmatch(r"\d{4}", provided) and hmac.compare_digest(provided, admin_pin):
                    user = {"role": "admin", "name": "Administrator", "principalId": "administrator"}
            elif not mode or mode == "pin":
                provided = input_data.get("pin") if isinstance(input_data.get("pin"), str) else ""
                if re.fullmatch(r"\d{4}", provided) and hmac.compare_digest(provided, pin):
                    user = {"role": "member", "name": "Ananya Rao", "principalId": "family-pin-member"}
            elif mode != "account":
                raise HttpError(400, "Unsupported sign-in method.")

            if not user:
                with auth_lock:
                    current = login_attempts.get(address)
                    if not current or now - current["startedAt"] >= LOGIN_WINDOW_SECONDS:
                        current = {"startedAt": now, "count": 0}
                    current["count"] += 1
                    login_attempts[address] = current
                raise HttpError(401, "The sign-in details were not recognized. Please try again.")
            with auth_lock:
                login_attempts.pop(address, None)
            self._create_session(user)

        def _register(self):
            self._check_same_origin()
            input_data = self._read_json()
            if (
                not isinstance(input_data, dict)
                or not is_non_empty_string(input_data.get("name"), 80)
                or len(input_data["name"].strip()) < 2
                or not valid_email(input_data.get("email"))
                or not isinstance(input_data.get("password"), str)
                or not 8 <= len(input_data["password"]) <= 128
            ):
                raise HttpError(400, "Enter a name, valid email, and password with at least 8 characters.")
            email = input_data["email"].strip().lower()
            credentials = hash_password(input_data["password"])
            account = {
                "id": str(uuid.uuid4()),
                "name": input_data["name"].strip(),
                "email": email,
                "salt": credentials["salt"],
                "passwordHash": credentials["hash"],
                "createdAt": iso_now(),
            }
            store.register_account(account)
            self._create_session(
                {"role": "member", "name": account["name"], "principalId": account["id"]},
                status=201,
            )

        def _dispatch(self):
            path = urlsplit(self.path).path
            method = self.command

            if path == "/api/health" and method == "GET":
                return self._send_json(200, {"ok": True, "service": "everwell-demo-api"})
            if path == "/api/login" and method == "POST":
                return self._login()
            if path == "/api/register" and method == "POST":
                return self._register()
            if path == "/api/logout" and method == "POST":
                token = self._cookie("everwell_session")
                with auth_lock:
                    sessions.pop(token, None)
                    feedback_submissions.pop(token, None)
                return self._send_json(200, {"ok": True}, {
                    "Set-Cookie": "everwell_session=; HttpOnly; SameSite=Strict; Path=/; Max-Age=0"
                })
            if path == "/api/session" and method == "GET":
                session = self._get_session()
                return self._send_json(200, {
                    "authenticated": True, "role": session["role"], "name": session["name"]
                })
            if path == "/api/state" and method == "GET":
                self._get_session()
                state = store.read_state()
                return self._send_json(200, {key: state[key] for key in ("doses", "appointments", "routines")})
            if path == "/api/state" and method == "PUT":
                self._check_same_origin()
                self._get_session()
                update = validate_state(self._read_json())
                saved = store.update_state(update)
                return self._send_json(200, {key: saved[key] for key in ("doses", "appointments", "routines")})
            if path == "/api/chat" and method == "POST":
                self._check_same_origin()
                input_data = self._read_json()
                if not isinstance(input_data, dict) or not is_non_empty_string(input_data.get("question"), 1000):
                    raise HttpError(400, "Enter a question about using Everwell (up to 1000 characters).")
                return self._send_json(200, {"answer": answer_app_question(input_data["question"])})
            if path == "/api/feedback" and method == "POST":
                self._check_same_origin()
                session = self._get_session()
                if session["role"] == "admin":
                    raise HttpError(403, "Administrators cannot submit household app feedback.")
                input_data = self._read_json()
                if (
                    not isinstance(input_data, dict)
                    or type(input_data.get("rating")) is not int
                    or not 1 <= input_data["rating"] <= 5
                    or input_data.get("category") not in ("ease", "features", "accessibility", "reliability", "other")
                    or not is_string(js_or_empty(input_data.get("comment")), 500)
                ):
                    raise HttpError(400, "Provide a rating, feedback category, and a comment up to 500 characters.")
                token = self._cookie("everwell_session")
                with auth_lock:
                    if feedback_submissions.get(token, 0) >= 3:
                        raise HttpError(429, "The feedback limit for this session has been reached.")
                    feedback_submissions[token] = feedback_submissions.get(token, 0) + 1
                entry = {
                    "id": str(uuid.uuid4()),
                    "role": session["role"],
                    "rating": input_data["rating"],
                    "category": input_data["category"],
                    "comment": js_or_empty(input_data.get("comment")).strip(),
                    "createdAt": iso_now(),
                    "status": "new",
                    "adminNote": "",
                }

                def add_feedback(state):
                    if len(state["entries"]) >= 500:
                        raise HttpError(429, "The app feedback limit has been reached.")
                    state["entries"].append(entry)
                    return entry

                try:
                    store.update_feedback(add_feedback)
                except Exception:
                    with auth_lock:
                        feedback_submissions[token] -= 1
                    raise
                return self._send_json(201, {"feedback": {"id": entry["id"], "status": entry["status"]}})
            if path == "/api/admin/feedback" and method == "GET":
                session = self._get_session()
                if session["role"] != "admin":
                    raise HttpError(403, "Administrator access is required.")
                entries = store.read_feedback()["entries"]
                ordered = sorted(entries, key=lambda entry: entry["createdAt"], reverse=True)
                return self._send_json(200, {
                    "entries": ordered,
                    "summary": {
                        "count": len(entries),
                        "averageRating": round(sum(item["rating"] for item in entries) / len(entries), 1) if entries else None,
                        "newCount": sum(item["status"] == "new" for item in entries),
                    },
                })

            feedback_match = re.fullmatch(r"/api/admin/feedback/([0-9a-f-]{36})", path, re.IGNORECASE)
            if feedback_match and method == "PATCH":
                self._check_same_origin()
                session = self._get_session()
                if session["role"] != "admin":
                    raise HttpError(403, "Administrator access is required.")
                input_data = self._read_json()
                if (
                    not isinstance(input_data, dict)
                    or input_data.get("status") not in ("new", "reviewed")
                    or not is_string(js_or_empty(input_data.get("adminNote")), 500)
                ):
                    raise HttpError(400, "Provide a valid feedback status and administrator note.")

                def review_feedback(state):
                    entry = next((item for item in state["entries"] if item["id"] == feedback_match.group(1)), None)
                    if not entry:
                        raise HttpError(404, "Feedback entry not found.")
                    entry["status"] = input_data["status"]
                    entry["adminNote"] = js_or_empty(input_data.get("adminNote")).strip()
                    return entry

                reviewed = store.update_feedback(review_feedback)
                return self._send_json(200, {"feedback": reviewed})
            if path == "/api/tasks" and method == "GET":
                session = self._get_session()
                state = store.read_tasks()
                tasks = state["tasks"] if session["role"] == "admin" else [
                    task for task in state["tasks"] if task["requesterId"] == session["principalId"]
                ]
                tasks = sorted(tasks, key=lambda task: task["createdAt"], reverse=True)
                return self._send_json(200, {"tasks": tasks})
            if path == "/api/tasks" and method == "POST":
                self._check_same_origin()
                session = self._get_session()
                if session["role"] == "admin":
                    raise HttpError(403, "Administrators cannot submit household requests.")
                now = iso_now()
                task = {
                    "id": str(uuid.uuid4()),
                    "requesterId": session["principalId"],
                    "requesterRole": session["role"],
                    "requesterName": session["name"],
                    **validate_task_input(self._read_json()),
                    "status": "open",
                    "adminNote": "",
                    "createdAt": now,
                    "updatedAt": now,
                }

                def add_task(state):
                    if len(state["tasks"]) >= 500 or sum(
                        item["requesterId"] == session["principalId"] for item in state["tasks"]
                    ) >= 50:
                        raise HttpError(429, "The care request limit has been reached. Please contact the administrator directly.")
                    state["tasks"].append(task)
                    return task

                store.update_tasks(add_task)
                return self._send_json(201, {"task": task})

            task_match = re.fullmatch(r"/api/tasks/([0-9a-f-]{36})", path, re.IGNORECASE)
            if task_match and method == "PATCH":
                self._check_same_origin()
                session = self._get_session()
                if session["role"] != "admin":
                    raise HttpError(403, "Only administrators can update household requests.")
                input_data = self._read_json()
                if (
                    not isinstance(input_data, dict)
                    or input_data.get("status") not in ("open", "in_progress", "completed")
                    or not is_string(js_or_empty(input_data.get("adminNote")), 500)
                ):
                    raise HttpError(400, "Provide a valid request status and update note.")

                def update_task(state):
                    index = next((i for i, task in enumerate(state["tasks"]) if task["id"] == task_match.group(1)), -1)
                    if index < 0:
                        raise HttpError(404, "Care request not found.")
                    updated = {
                        **state["tasks"][index],
                        "status": input_data["status"],
                        "adminNote": js_or_empty(input_data.get("adminNote")).strip(),
                        "updatedAt": iso_now(),
                    }
                    state["tasks"][index] = updated
                    return updated

                return self._send_json(200, {"task": store.update_tasks(update_task)})

            if path == "/api/admin/medications" and method == "GET":
                session = self._get_session()
                if session["role"] != "admin":
                    raise HttpError(403, "Administrator access is required.")
                care_state = store.read_state()
                task_state = store.read_tasks()
                medications = []
                for dose in care_state["doses"]:
                    identifier = medication_id(dose)
                    review = next((item for item in task_state["medicationReviews"] if item["medicationId"] == identifier), None)
                    medications.append({
                        "id": identifier,
                        "name": dose["name"],
                        "details": js_or_empty(dose.get("details")),
                        "time": js_or_empty(dose.get("time")),
                        "taken": dose["taken"],
                        "review": review,
                    })
                return self._send_json(200, {"medications": medications})

            review_match = re.fullmatch(r"/api/admin/medications/([a-f0-9]{24})/verify", path, re.IGNORECASE)
            if review_match and method == "POST":
                self._check_same_origin()
                session = self._get_session()
                if session["role"] != "admin":
                    raise HttpError(403, "Administrator access is required.")
                review_result = {}

                def verify_medication(task_state):
                    care_state = store.read_state()
                    dose = next((item for item in care_state["doses"] if medication_id(item) == review_match.group(1)), None)
                    if not dose:
                        raise HttpError(404, "The medication is no longer in the current care plan.")
                    current_ids = {medication_id(item) for item in care_state["doses"]}
                    task_state["medicationReviews"] = [
                        item for item in task_state["medicationReviews"] if item["medicationId"] in current_ids
                    ]
                    review = {
                        "medicationId": review_match.group(1),
                        "medicineName": dose["name"],
                        "details": js_or_empty(dose.get("details")),
                        "time": js_or_empty(dose.get("time")),
                        "reviewedBy": session["name"],
                        "reviewedAt": iso_now(),
                    }
                    task_state["medicationReviews"] = [
                        item for item in task_state["medicationReviews"]
                        if item["medicationId"] != review["medicationId"]
                    ]
                    task_state["medicationReviews"].append(review)
                    review_result["review"] = review
                    return review

                store.update_tasks(verify_medication)
                return self._send_json(200, review_result)

            if method == "GET" and path in STATIC_FILES:
                file_name, content_type = STATIC_FILES[path]
                return self._send_asset(file_name, content_type)

            self._send_json(404, {"error": "Not found."})

        def _handle_request(self):
            try:
                self._dispatch()
            except HttpError as error:
                self._send_json(error.status, {"error": str(error)})
            except (BrokenPipeError, ConnectionResetError):
                return
            except Exception:
                import traceback
                traceback.print_exc()
                if not self.wfile.closed:
                    try:
                        self._send_json(500, {"error": "The demo server could not complete that request."})
                    except (BrokenPipeError, ConnectionResetError):
                        pass

        do_GET = _handle_request
        do_POST = _handle_request
        do_PUT = _handle_request
        do_PATCH = _handle_request

    return EverwellServer(options.get("address", ("127.0.0.1", 0)), Handler)


def main():
    port = int(os.environ.get("PORT", "4173"))
    if not 0 < port < 65536:
        raise ValueError("PORT must be between 1 and 65535.")
    server = create_server({"address": ("127.0.0.1", port)})
    print(f"Everwell demo running at http://127.0.0.1:{port}", flush=True)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
