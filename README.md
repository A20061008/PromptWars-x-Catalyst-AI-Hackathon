# Everwell

A multilingual elder-care coordination demo with a browser frontend (`Index.html`, `styles.css`, and `app.js`) and a Python standard-library API (`server.py`). The included sample profile, names, medicines, and appointments are fictional.

## Run the full-stack demo

1. Install Python 3.
2. From this folder, run `python server.py`.
3. Open `http://127.0.0.1:4173`.
4. Choose **Continue as guest** for sample data, create a demo account, or sign in with the family PIN (`1234` by default).
5. Use **Admin** for the separate demo administrator PIN (`5678` by default).

Set `DEMO_PIN` and `ADMIN_PIN` to different four-digit values to change the demo PINs. The API binds to loopback only. Care data and password hashes are stored under `data/`, which is excluded from version control. Account passwords are scrypt-hashed; this local demo is not production authentication.

Run API checks with `python -m unittest discover -s test -p "test_*.py"` (or `npm test`).

## API

- `GET /api/health` — local service status.
- `POST /api/chat` with `{"question":"..."}` — returns offline app-help answers from the Python chatbot.
- `POST /api/login` with `{"mode":"guest"}`, `{"mode":"pin","pin":"1234"}`, `{"mode":"admin","pin":"5678"}`, or account credentials — creates a same-site, HTTP-only demo session cookie.
- `POST /api/register` with a name, email, and password (8–128 characters) — creates a local demo account and session.
- `GET /api/session` — returns the current demo role and display name.
- `GET /api/state` — reads the shared sample household after sign-in.
- `PUT /api/state` — validates and atomically saves medication, appointment, and routine updates.
- `POST /api/tasks` / `GET /api/tasks` — lets signed-in household members and guests submit requests; users see their own, while administrators see all.
- `PATCH /api/tasks/:id` — administrator-only status and reply updates, visible to the original requester.
- `GET /api/admin/medications` and `POST /api/admin/medications/:id/verify` — administrator-only medication review and verification records.
- `GET /api/admin/overview` — one administrator-only response containing request, medication, and feedback data for the dashboard.
- `POST /api/feedback` — signed-in member/guest app ratings and optional comments; submissions are limited per session.
- `GET /api/admin/feedback` and `PATCH /api/admin/feedback/:id` — administrator-only feedback summary, review status, and internal note.
- `POST /api/logout` — clears the current session.

The server stores sessions in memory, household care data and administrator requests/reviews in separate versioned JSON files. Restarting the server invalidates sessions; the passcode is shared demo access, not per-person identity.

## Standalone preview

Open `Index.html` directly in a browser. This local-only mode accepts any four digits and keeps demo changes in browser storage. The full-stack mode validates the configured passcode and stores changes through the local API.

## Included features

- Separate Overview, My medicines, Appointments, Reports, Daily routines, Care circle, AI Solutions & Preventions, and Emergency pages with working navigation and browser back/forward support.
- Section-specific summaries and filters for medication doses and appointments, routine completion progress, and care-circle sharing status.
- Sign in, local account registration, guest access, a distinct administrator PIN flow, and a localized logout option for every role.
- Role-specific navigation: administrators get the care desk, reports, and emergency tools; household-only pages stay in the member/guest menu.
- A role-gated administrator care desk that receives household member and guest requests, sends status/reply updates back to each requester, and records medication reviews without changing dose-taken status.
- An administrator overview with request completion/urgency metrics, request activity by role, a recent activity feed, and user-submitted app satisfaction feedback for review.
- Administrator contact tools for India emergency/ambulance calls, user-approved nearby-hospital Maps searches, and user-entered doctor phone numbers with tap-to-call links.
- A Python app-help chatbot for questions about using Everwell. It runs locally without a model or API key; medical and emergency safety boundaries still apply.
- Prevention reminders and conservative symptom-escalation guidance; emergency actions are tap-to-call links and optional user-triggered hospital map lookup.
- Medication schedule, taken-dose tracking, and daily routine check-offs.
- A caregiver-readable, current-day medication snapshot with print/save-PDF and spreadsheet-safe CSV export; it does not invent historical adherence.
- Upcoming visits, adding a medicine or appointment, and user-initiated Google Calendar event links.
- Shared-care-circle sample view and an intent-based care assistant with medical-safety boundaries.
- English, Hindi, Kannada, Telugu, Tamil, Malayalam, Marathi, Odia, Bengali, Punjabi, and Gujarati interface options.
- Bounded text-size controls on the sign-in screen and in the dashboard, with a saved preference.
- Persistent light and dark themes with accessible toggle controls on the sign-in screen and dashboard.
- An animated product tour plus a local, four-slide illustrated tutorial on the sign-in screen and in the dashboard.
- JSON API with passcode sessions, input validation, rate limiting, same-origin checks, security headers, and atomic local-file persistence.

## Demo limitations and safety

This is a local hackathon prototype, not a medical device or production patient-record system. It does not send email or push reminders, contact caregivers, provide diagnosis, or call a live AI model. The app-help chatbot uses local keyword matching, has no live AI model or web access, and cannot reliably recognize every emergency. Its emergency guidance is not monitoring; do not wait for the assistant—call local emergency services directly. In India, the visible 112/108 links open the device's dialer only after the user taps them; the app does not dispatch an ambulance. Location is requested only after the user taps **Use my location**, and coordinates are sent to Maps only if the user then opens the map link. The demo roles share one household dataset and are not production authorization. Do not enter real patient information or reuse a personal password.

Care requests are visible to the administrator in the app, but do not trigger email, push, or out-of-app alerts. Guest requests are scoped to that browser session. Medication verification records that an administrator reviewed the current entry; it does not verify ingestion or replace clinician confirmation. Nearby hospitals are searched through Maps after a user-initiated location request, and doctor numbers are entered manually; there is no live provider directory or automatic calling.

The medication report reflects only the current schedule and each medicine's current taken/not-marked-taken flag. It is not a dose history or a clinical record; “Needs confirmation” does not mean a dose was missed.

Google Calendar links open Google's event-creation page only when the user chooses one; no Google account data is read. Fonts are requested from Google Fonts when the browser is online. No Google API credentials or third-party AI credentials are required.

Before any real deployment, replace demo access with a properly reviewed identity provider, per-user authorization and consent, encrypted database/storage and backups, audit trails, secure email/push delivery, clinical review, privacy/legal review, emergency-service integrations, and TLS termination. The local JSON store, default PINs, and sample accounts are not suitable for real healthcare data.
