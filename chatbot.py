"""Offline app-help chatbot for the Everwell demo."""

import re


ANSWERS = [
    (("emergency", "chest pain", "can't breathe", "cannot breathe", "can't catch breath", "shortness of breath", "difficulty breathing", "not breathing", "unconscious", "stroke", "no pulse", "severe injury", "severe bleeding", "severe pain", "urgent help"),
     "If someone may be in immediate danger, do not wait for this chat. In India, call 112 for emergency services or 108 for an ambulance. This demo is not monitored and cannot contact emergency services."),
    (("pain", "symptom", "dizzy", "medical advice", "diagnose", "extra dose", "double dose", "missed dose", "take twice", "stop taking", "increase dose", "change my medicine"),
     "I can help organize information, but I can't diagnose symptoms or advise changing a medicine. For concerning symptoms, contact your clinician. For severe or sudden symptoms, seek urgent local medical help."),
    (("medicine", "medication", "dose", "pill", "prescription", "mark as taken", "add a medicine"),
     "Open My medicines to view the schedule and mark doses as taken. Use Add new to add an entry. The app only tracks the information entered here; follow the clinician's instructions and confirm medicine questions with a pharmacist or clinician."),
    (("appointment", "appointments", "doctor visit", "clinic", "calendar"),
     "Open Appointments to view upcoming visits or choose Add new to add one. Calendar links open Google's event-creation page only when you choose them; the app does not read your Google account."),
    (("routine", "routines", "daily", "habit", "water", "exercise", "walk"),
     "Open Daily routines to see and check off the sample daily activities. Choose activities that feel safe and follow your clinician's advice."),
    (("report", "reports", "csv", "spreadsheet", "export", "print", "pdf"),
     "Open Reports to view the current medication schedule and its taken/not-marked-taken flags. You can print or save it as PDF, or export CSV. It is not a dose history or a clinical record."),
    (("family", "invite", "care circle", "care-circle", "caregiver"),
     "Open Care circle to view the sample family members. The invite action is a demo and does not send an invitation or contact anyone."),
    (("request", "care desk", "administrator", "admin", "help request"),
     "Household members and guests can submit care requests from the Care circle page and view updates there. The administrator can review requests in the Admin care desk. Requests do not trigger email, push notifications, or out-of-app alerts."),
    (("language", "translate", "hindi", "kannada", "telugu", "tamil", "malayalam", "marathi", "odia", "bengali", "punjabi", "gujarati"),
     "Use the language menu on the sign-in screen or dashboard to change the interface language. The demo supports English, Hindi, Kannada, Telugu, Tamil, Malayalam, Marathi, Odia, Bengali, Punjabi, and Gujarati."),
    (("tour", "tutorial", "product tour", "demo", "getting started"),
     "Choose the product-tour button to see an overview, or open the sign-in screen's tutorial for a short walkthrough. You can continue as a guest to explore sample data."),
    (("ai", "assistant", "chatbot", "chat", "prevention", "symptom"),
     "The assistant can explain app features and offer limited care-organization guidance. It does not use a live AI model or web search, cannot diagnose, and must not be used for emergencies. Contact a clinician for medical advice."),
    (("login", "sign in", "sign-in", "pin", "password", "account", "guest"),
     "You can continue as a guest, create a demo account, or sign in with the family PIN (1234 by default). The separate administrator demo PIN is 5678 by default. DEMO_PIN and ADMIN_PIN can change the PINs; this local demo is not production authentication."),
    (("data", "privacy", "stored", "storage", "save", "saved", "security"),
     "This local demo stores care data in JSON files under data/ and account password hashes locally. Sessions are held in memory and expire when the server restarts. Do not enter real patient information or reuse a personal password."),
    (("server", "start", "run", "install", "localhost", "browser", "open the app"),
     "Run `python server.py` from the project folder, then open http://127.0.0.1:4173. Python 3 is required; the server uses only Python's standard library. You can also open Index.html directly for the standalone browser preview."),
    (("overview", "dashboard", "home", "navigation", "page", "screen", "where", "features", "menu", "sections"),
     "The navigation includes Overview, My medicines, Appointments, Reports, Daily routines, Care circle, AI Solutions & Preventions, and Emergency. Use the menu to switch sections; administrators also have an Admin care desk."),
    (("hospital", "location", "maps", "nearby"),
     "Open Emergency options and choose Use my location to look for nearby hospitals. Location is requested only after you tap, and is shared with Maps only if you open the map link."),
]

FALLBACK = (
    "I can answer questions about using Everwell: sign-in, medicines, appointments, "
    "routines, reports, Care circle, the admin desk, languages, and the local demo. "
    "Tell me which screen or feature you mean. I can't diagnose or replace a clinician."
)


def answer_app_question(question):
    """Return a bounded answer about the app without sending data to an external service."""
    normalized = re.sub(r"\s+", " ", question.casefold()).strip()
    if not normalized:
        return FALLBACK

    for keywords, answer in ANSWERS:
        if any(keyword in normalized for keyword in keywords):
            return answer
    return FALLBACK
