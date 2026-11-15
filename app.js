const languages = [
  ['en', 'English'],
  ['hi', 'हिन्दी'],
  ['kn', 'ಕನ್ನಡ'],
  ['te', 'తెలుగు'],
  ['ta', 'தமிழ்'],
  ['ml', 'മലയാളം'],
  ['mr', 'मराठी'],
  ['or', 'ଓଡ଼ିଆ'],
  ['bn', 'বাংলা'],
  ['pa', 'ਪੰਜਾਬੀ'],
  ['gu', 'ગુજરાતી'],
]
const translations = {
  en: {
    menu: 'MENU',
    navOverview: 'Overview',
    navMedicines: 'My medicines',
    navAppointments: 'Appointments',
    navRoutines: 'Daily routines',
    navCircle: 'Care circle',
    careCircle: 'Your care circle',
    membersOnline: '4 people keeping in touch',
    profileLabel: 'Your health profile',
    crumbHome: 'Home',
    overviewEyebrow: 'YOUR HEALTH, AT A GLANCE',
    greeting: 'Good morning',
    welcome: "A new day is a fresh start. Here's your gentle plan for today.",
    todayDoses: "Today's medicines",
    of: 'of',
    dosesCompleted: 'doses taken so far',
    nextVisit: 'Next appointment',
    tomorrow: 'Tomorrow',
    doctorVisit: 'Dr. Meera Shah · 10:30 AM',
    wellbeing: 'Wellbeing streak',
    days: 'days',
    greatConsistency: "You're doing wonderfully",
    members: 'members',
    allConnected: 'All connected and up to date',
    medicineSchedule: 'Medicine schedule',
    stayOnTrack: "One dose at a time. You've got this.",
    addMedicine: 'Add medicine',
    remindersLocal: 'Reminders are shown here in this demo',
    scheduleSynced: 'Updated just now ✓',
    appointmentsTitle: 'Upcoming appointments',
    planTogether: 'The people and places supporting your health.',
    addNew: 'Add new',
    routinesTitle: 'Little things that help',
    dailyRhythm: 'Your everyday wellbeing rhythm',
    circleTitle: 'Your care circle',
    alwaysInYourCorner: 'Always in your corner',
    viewAll: 'View all',
    sharedWithLove: 'Shared with love',
    familyUpdates: 'Your family can see your care updates and help when you need them.',
    disclaimer:
      "Everwell is a care-organizing demo, not a medical device. Always follow your clinician's instructions. Demo information is stored only in this browser.",
    askEverwell: 'Ask Everwell',
    assistantTitle: 'Everwell companion',
    assistantStatus: 'Here to help, not replace your doctor',
    assistantGreeting:
      'Hi, Ananya! 🌿 I can help organize your care, explain how to use this app, or find your next reminder. What would be helpful?',
    chatPlaceholder: 'Ask me anything about your care…',
    loginTitle: 'Care feels better <em>together.</em>',
    loginLead:
      'A gentler way to stay on top of medicines, appointments, and everyday wellbeing—with your family by your side.',
    pinLabel: 'Your family access PIN',
    continue: 'Continue to Everwell →',
    pinNote:
      'Demo access: enter any 4 digits. This sample runs locally; it does not provide real account security or send email.',
    dailyCare: "TODAY'S CARE",
    tourTitle: 'A little care, right on time.',
    tourCopy: 'Gentle reminders for the things that keep you feeling your best.',
    tourButton: '✓  Morning medicine taken',
    tourCaption: 'A quick look around Everwell',
    tourSub: 'A 42-second product tour',
    loginWelcome: 'Welcome to your care space.',
    doseTaken: 'Taken',
    markTaken: 'Mark taken',
    doseMissed: 'Missed',
    upcoming: 'Upcoming',
    done: 'Done',
    routineDone: 'Done for today',
    addMedicineTitle: 'Add a medicine',
    addAppointmentTitle: 'Add an appointment',
    medicineName: 'Medicine name',
    dosage: 'Dosage',
    time: 'Reminder time',
    frequency: 'Frequency',
    doctorName: 'Doctor / clinic',
    visitDate: 'Date',
    visitTime: 'Time',
    location: 'Location',
    cancel: 'Cancel',
    save: 'Save',
    tourModalTitle: 'Meet your calmer care routine',
    tourModalText:
      'Keep medicines, meaningful routines, and the people who care all in one gentle place. This interactive demo is a preview; it does not play recorded video.',
    tourPlay: '▶  Play tour',
    tourPause: 'Ⅱ  Pause tour',
    takenToast: 'Marked as taken. Your care circle can see this update.',
    routineToast: 'Routine updated for today.',
    medicineAdded: 'Medicine added to your schedule.',
    appointmentAdded: 'Appointment added to your calendar.',
    enterPin: 'Please enter at least 4 digits for demo access.',
    sent: 'Your message was sent.',
    inviteDemo:
      'Family invitations are part of this demo. Secure sharing requires a connected account.',
    drinking: 'Drink a glass of water',
    gentleMovement: 'Gentle movement',
    walkOutside: 'A little fresh air',
    goodMorning: 'Good morning',
    goodAfternoon: 'Good afternoon',
    goodEvening: 'Good evening',
  },
  hi: {
    menu: 'मेन्यू',
    navOverview: 'अवलोकन',
    navMedicines: 'मेरी दवाइयाँ',
    navAppointments: 'अपॉइंटमेंट',
    navRoutines: 'दैनिक दिनचर्या',
    navCircle: 'देखभाल समूह',
    careCircle: 'आपका देखभाल समूह',
    membersOnline: '4 लोग जुड़े हुए हैं',
    profileLabel: 'आपकी स्वास्थ्य प्रोफ़ाइल',
    crumbHome: 'होम',
    overviewEyebrow: 'आपका स्वास्थ्य, एक नज़र में',
    greeting: 'सुप्रभात',
    welcome: 'नया दिन एक नई शुरुआत है। आज की आपकी योजना यहाँ है।',
    todayDoses: 'आज की दवाइयाँ',
    of: 'में से',
    dosesCompleted: 'दवाइयाँ ली गईं',
    nextVisit: 'अगली अपॉइंटमेंट',
    tomorrow: 'कल',
    doctorVisit: 'डॉ. मीरा शाह · सुबह 10:30',
    wellbeing: 'सेहत की लय',
    days: 'दिन',
    greatConsistency: 'आप बहुत अच्छा कर रही हैं',
    members: 'सदस्य',
    allConnected: 'सभी जुड़े हुए हैं',
    medicineSchedule: 'दवा का समय',
    stayOnTrack: 'एक बार में एक खुराक। आप कर सकती हैं।',
    addMedicine: 'दवा जोड़ें',
    remindersLocal: 'इस डेमो में रिमाइंडर यहाँ दिखते हैं',
    scheduleSynced: 'अभी अपडेट किया गया ✓',
    appointmentsTitle: 'आने वाली अपॉइंटमेंट',
    planTogether: 'आपके स्वास्थ्य में साथ देने वाले लोग और स्थान।',
    addNew: 'नई जोड़ें',
    routinesTitle: 'छोटी आदतें, बेहतर सेहत',
    dailyRhythm: 'आपकी रोज़ की सेहत की लय',
    circleTitle: 'आपका देखभाल समूह',
    alwaysInYourCorner: 'हमेशा आपके साथ',
    viewAll: 'सभी देखें',
    sharedWithLove: 'अपनों के साथ साझा',
    familyUpdates: 'आपका परिवार आपकी देखभाल के अपडेट देख सकता है।',
    disclaimer:
      'Everwell देखभाल व्यवस्थित करने का डेमो है, चिकित्सा उपकरण नहीं। डॉक्टर के निर्देशों का पालन करें। डेमो जानकारी केवल इस ब्राउज़र में सेव होती है।',
    askEverwell: 'Everwell से पूछें',
    assistantTitle: 'Everwell साथी',
    assistantStatus: 'सहायता के लिए, डॉक्टर का विकल्प नहीं',
    assistantGreeting:
      'नमस्ते, अनन्या! 🌿 मैं आपकी देखभाल व्यवस्थित करने, ऐप समझाने या अगला रिमाइंडर ढूँढने में मदद कर सकती हूँ।',
    chatPlaceholder: 'अपनी देखभाल के बारे में पूछें…',
    loginTitle: 'देखभाल बेहतर होती है <em>साथ में।</em>',
    loginLead: 'दवाइयों, अपॉइंटमेंट और रोज़मर्रा की सेहत का ध्यान रखने का आसान तरीका—परिवार के साथ।',
    pinLabel: 'परिवार का एक्सेस PIN',
    continue: 'Everwell पर जाएँ →',
    pinNote: 'डेमो: कोई भी 4 अंक डालें। यह नमूना स्थानीय रूप से चलता है; असली सुरक्षा या ईमेल नहीं देता।',
    dailyCare: 'आज की देखभाल',
    tourTitle: 'समय पर थोड़ी देखभाल।',
    tourCopy: 'आपको बेहतर महसूस कराने वाली चीज़ों के लिए सहज रिमाइंडर।',
    tourButton: '✓  सुबह की दवा ली',
    tourCaption: 'Everwell की एक झलक',
    tourSub: '42 सेकंड का प्रोडक्ट टूर',
    loginWelcome: 'आपके देखभाल स्थान में स्वागत है।',
    doseTaken: 'ली गई',
    markTaken: 'ली गई चिह्नित करें',
    doseMissed: 'छूटी',
    upcoming: 'आने वाली',
    done: 'हो गया',
    routineDone: 'आज के लिए पूरा',
    addMedicineTitle: 'दवा जोड़ें',
    addAppointmentTitle: 'अपॉइंटमेंट जोड़ें',
    medicineName: 'दवा का नाम',
    dosage: 'खुराक',
    time: 'रिमाइंडर समय',
    frequency: 'आवृत्ति',
    doctorName: 'डॉक्टर / क्लिनिक',
    visitDate: 'तारीख',
    visitTime: 'समय',
    location: 'स्थान',
    cancel: 'रद्द करें',
    save: 'सेव करें',
    tourModalTitle: 'अपनी आसान देखभाल दिनचर्या देखें',
    tourModalText:
      'दवाइयाँ, रोज़ की अच्छी आदतें और अपने प्रियजनों को एक साथ रखें। यह इंटरैक्टिव डेमो है, रिकॉर्ड किया गया वीडियो नहीं।',
    tourPlay: '▶  टूर चलाएँ',
    tourPause: 'Ⅱ  टूर रोकें',
    takenToast: 'दवा ली गई चिह्नित। आपका परिवार यह अपडेट देख सकता है।',
    routineToast: 'आज की दिनचर्या अपडेट हुई।',
    medicineAdded: 'दवा समय-सूची में जुड़ गई।',
    appointmentAdded: 'अपॉइंटमेंट कैलेंडर में जुड़ी।',
    enterPin: 'डेमो के लिए कम से कम 4 अंक डालें।',
    sent: 'आपका संदेश भेजा गया।',
    inviteDemo: 'परिवार के निमंत्रण इस डेमो का हिस्सा हैं। सुरक्षित साझाकरण के लिए खाता चाहिए।',
    drinking: 'एक गिलास पानी पिएँ',
    gentleMovement: 'हल्का व्यायाम',
    walkOutside: 'थोड़ी ताज़ी हवा लें',
    goodMorning: 'सुप्रभात',
    goodAfternoon: 'शुभ दोपहर',
    goodEvening: 'शुभ संध्या',
  },
  kn: {
    menu: 'ಮೆನು',
    navOverview: 'ಅವಲೋಕನ',
    navMedicines: 'ನನ್ನ ಔಷಧಿಗಳು',
    navAppointments: 'ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್‌ಗಳು',
    navRoutines: 'ದೈನಂದಿನ ಕ್ರಮಗಳು',
    navCircle: 'ಆರೈಕೆ ಬಳಗ',
    careCircle: 'ನಿಮ್ಮ ಆರೈಕೆ ಬಳಗ',
    membersOnline: '4 ಜನ ಸಂಪರ್ಕದಲ್ಲಿದ್ದಾರೆ',
    profileLabel: 'ನಿಮ್ಮ ಆರೋಗ್ಯ ಪ್ರೊಫೈಲ್',
    crumbHome: 'ಮುಖಪುಟ',
    overviewEyebrow: 'ನಿಮ್ಮ ಆರೋಗ್ಯ, ಒಂದು ನೋಟದಲ್ಲಿ',
    greeting: 'ಶುಭೋದಯ',
    welcome: 'ಹೊಸ ದಿನ ಹೊಸ ಆರಂಭ. ಇಂದಿನ ನಿಮ್ಮ ಆರೈಕೆ ಯೋಜನೆ ಇಲ್ಲಿದೆ.',
    todayDoses: 'ಇಂದಿನ ಔಷಧಿಗಳು',
    of: 'ರಲ್ಲಿ',
    dosesCompleted: 'ಔಷಧಿ ತೆಗೆದುಕೊಳ್ಳಲಾಗಿದೆ',
    nextVisit: 'ಮುಂದಿನ ಭೇಟಿ',
    tomorrow: 'ನಾಳೆ',
    wellbeing: 'ಆರೋಗ್ಯದ ನಿರಂತರತೆ',
    days: 'ದಿನಗಳು',
    greatConsistency: 'ನೀವು ಉತ್ತಮವಾಗಿ ಮಾಡುತ್ತಿದ್ದೀರಿ',
    members: 'ಸದಸ್ಯರು',
    allConnected: 'ಎಲ್ಲರೂ ಸಂಪರ್ಕದಲ್ಲಿದ್ದಾರೆ',
    medicineSchedule: 'ಔಷಧಿ ವೇಳಾಪಟ್ಟಿ',
    stayOnTrack: 'ಒಂದು ಬಾರಿ ಒಂದು ಡೋಸ್. ನೀವು ಮಾಡಬಲ್ಲಿರಿ.',
    addMedicine: 'ಔಷಧಿ ಸೇರಿಸಿ',
    remindersLocal: 'ಈ ಡೆಮೋದಲ್ಲಿ ನೆನಪಿಸುವಿಕೆಗಳು ಇಲ್ಲಿ ಕಾಣುತ್ತವೆ',
    scheduleSynced: 'ಈಗಷ್ಟೇ ನವೀಕರಿಸಲಾಗಿದೆ ✓',
    appointmentsTitle: 'ಮುಂಬರುವ ಭೇಟಿಗಳು',
    planTogether: 'ನಿಮ್ಮ ಆರೋಗ್ಯಕ್ಕೆ ಬೆಂಬಲ ನೀಡುವ ಜನರು ಮತ್ತು ಸ್ಥಳಗಳು.',
    addNew: 'ಹೊಸದನ್ನು ಸೇರಿಸಿ',
    routinesTitle: 'ಸಹಾಯ ಮಾಡುವ ಸಣ್ಣ ವಿಷಯಗಳು',
    dailyRhythm: 'ನಿಮ್ಮ ದೈನಂದಿನ ಆರೋಗ್ಯ ಕ್ರಮ',
    circleTitle: 'ನಿಮ್ಮ ಆರೈಕೆ ಬಳಗ',
    alwaysInYourCorner: 'ಯಾವಾಗಲೂ ನಿಮ್ಮ ಜೊತೆ',
    viewAll: 'ಎಲ್ಲವನ್ನೂ ನೋಡಿ',
    sharedWithLove: 'ಪ್ರೀತಿಯಿಂದ ಹಂಚಲಾಗಿದೆ',
    familyUpdates: 'ನಿಮ್ಮ ಕುಟುಂಬವು ಆರೈಕೆ ನವೀಕರಣಗಳನ್ನು ನೋಡಬಹುದು.',
    disclaimer:
      'Everwell ಆರೈಕೆ ವ್ಯವಸ್ಥೆಗೊಳಿಸುವ ಡೆಮೋ, ವೈದ್ಯಕೀಯ ಸಾಧನವಲ್ಲ. ವೈದ್ಯರ ಸೂಚನೆಗಳನ್ನು ಅನುಸರಿಸಿ. ಡೆಮೋ ಮಾಹಿತಿ ಈ ಬ್ರೌಸರ್‌ನಲ್ಲಿ ಮಾತ್ರ ಉಳಿಯುತ್ತದೆ.',
    askEverwell: 'Everwell ಅನ್ನು ಕೇಳಿ',
    assistantTitle: 'Everwell ಸಹಚರ',
    assistantStatus: 'ಸಹಾಯಕ್ಕಾಗಿ, ವೈದ್ಯರ ಬದಲಿಯಲ್ಲ',
    assistantGreeting:
      'ನಮಸ್ಕಾರ ಅನನ್ಯಾ! 🌿 ನಿಮ್ಮ ಆರೈಕೆಯನ್ನು ವ್ಯವಸ್ಥೆಗೊಳಿಸಲು, ಈ ಆ್ಯಪ್ ವಿವರಿಸಲು ಅಥವಾ ಮುಂದಿನ ನೆನಪಿಸುವಿಕೆಯನ್ನು ಹುಡುಕಲು ನಾನು ಸಹಾಯ ಮಾಡಬಲ್ಲೆ.',
    chatPlaceholder: 'ನಿಮ್ಮ ಆರೈಕೆಯ ಬಗ್ಗೆ ಕೇಳಿ…',
    loginTitle: 'ಆರೈಕೆ ಚೆನ್ನಾಗಿರುತ್ತದೆ <em>ಒಟ್ಟಿಗೆ.</em>',
    loginLead: 'ಔಷಧಿ, ಭೇಟಿ ಮತ್ತು ದೈನಂದಿನ ಆರೋಗ್ಯವನ್ನು ನೋಡಿಕೊಳ್ಳಲು ಕುಟುಂಬದ ಜೊತೆಯಲ್ಲಿರುವ ಸುಲಭ ಮಾರ್ಗ.',
    pinLabel: 'ಕುಟುಂಬ ಪ್ರವೇಶ PIN',
    continue: 'Everwell ಗೆ ಮುಂದುವರಿಯಿರಿ →',
    pinNote: 'ಡೆಮೋ: ಯಾವುದೇ 4 ಅಂಕಿಗಳನ್ನು ನಮೂದಿಸಿ. ಇದು ಸ್ಥಳೀಯ ಮಾದರಿ; ನಿಜವಾದ ಸುರಕ್ಷತೆ ಅಥವಾ ಇಮೇಲ್ ನೀಡುವುದಿಲ್ಲ.',
    dailyCare: 'ಇಂದಿನ ಆರೈಕೆ',
    tourTitle: 'ಸಮಯಕ್ಕೆ ಸರಿಯಾದ ಆರೈಕೆ.',
    tourCopy: 'ನೀವು ಚೆನ್ನಾಗಿರಲು ಸೌಮ್ಯ ನೆನಪಿಸುವಿಕೆಗಳು.',
    tourButton: '✓  ಬೆಳಗಿನ ಔಷಧಿ ತೆಗೆದುಕೊಂಡಿದೆ',
    tourCaption: 'Everwell ನ ಒಂದು ನೋಟ',
    tourSub: '42-ಸೆಕೆಂಡ್ ಉತ್ಪನ್ನ ಪರಿಚಯ',
    loginWelcome: 'ನಿಮ್ಮ ಆರೈಕೆ ಸ್ಥಳಕ್ಕೆ ಸ್ವಾಗತ.',
    doseTaken: 'ತೆಗೆದುಕೊಂಡಿದೆ',
    markTaken: 'ತೆಗೆದುಕೊಂಡಿದೆ ಎಂದು ಗುರುತಿಸಿ',
    doseMissed: 'ತಪ್ಪಿದೆ',
    upcoming: 'ಮುಂಬರುವ',
    done: 'ಮುಗಿದಿದೆ',
    routineDone: 'ಇಂದಿಗೆ ಮುಗಿದಿದೆ',
    addMedicineTitle: 'ಔಷಧಿ ಸೇರಿಸಿ',
    addAppointmentTitle: 'ಭೇಟಿ ಸೇರಿಸಿ',
    medicineName: 'ಔಷಧಿಯ ಹೆಸರು',
    dosage: 'ಡೋಸ್',
    time: 'ನೆನಪಿಸುವ ಸಮಯ',
    frequency: 'ಆವರ್ತನೆ',
    doctorName: 'ವೈದ್ಯರು / ಕ್ಲಿನಿಕ್',
    visitDate: 'ದಿನಾಂಕ',
    visitTime: 'ಸಮಯ',
    location: 'ಸ್ಥಳ',
    cancel: 'ರದ್ದುಮಾಡಿ',
    save: 'ಉಳಿಸಿ',
    tourModalTitle: 'ನಿಮ್ಮ ಶಾಂತ ಆರೈಕೆ ಕ್ರಮವನ್ನು ಪರಿಚಯಿಸಿ',
    tourModalText:
      'ಔಷಧಿ, ದಿನಚರಿ ಮತ್ತು ಆರೈಕೆ ಮಾಡುವವರನ್ನು ಒಂದೇ ಸ್ಥಳದಲ್ಲಿ ಇರಿಸಿ. ಇದು ಸಂವಾದಾತ್ಮಕ ಡೆಮೋ, ರೆಕಾರ್ಡ್ ಮಾಡಿದ ವೀಡಿಯೊ ಅಲ್ಲ.',
    tourPlay: '▶  ಪರಿಚಯ ವೀಕ್ಷಿಸಿ',
    tourPause: 'Ⅱ  ಪರಿಚಯ ವಿರಾಮ',
    takenToast: 'ತೆಗೆದುಕೊಂಡಿದೆ ಎಂದು ಗುರುತಿಸಲಾಗಿದೆ. ನಿಮ್ಮ ಆರೈಕೆ ಬಳಗ ಈ ನವೀಕರಣವನ್ನು ನೋಡಬಹುದು.',
    routineToast: 'ಇಂದಿನ ಕ್ರಮ ನವೀಕರಿಸಲಾಗಿದೆ.',
    medicineAdded: 'ಔಷಧಿ ವೇಳಾಪಟ್ಟಿಗೆ ಸೇರಿಸಲಾಗಿದೆ.',
    appointmentAdded: 'ಭೇಟಿಯನ್ನು ಕ್ಯಾಲೆಂಡರ್‌ಗೆ ಸೇರಿಸಲಾಗಿದೆ.',
    enterPin: 'ಡೆಮೋ ಪ್ರವೇಶಕ್ಕೆ ಕನಿಷ್ಠ 4 ಅಂಕಿಗಳನ್ನು ನಮೂದಿಸಿ.',
    sent: 'ನಿಮ್ಮ ಸಂದೇಶ ಕಳುಹಿಸಲಾಗಿದೆ.',
    inviteDemo: 'ಕುಟುಂಬದ ಆಹ್ವಾನಗಳು ಈ ಡೆಮೋದಲ್ಲಿವೆ. ಸುರಕ್ಷಿತ ಹಂಚಿಕೆಗೆ ಸಂಪರ್ಕಿತ ಖಾತೆ ಬೇಕು.',
    drinking: 'ಒಂದು ಲೋಟ ನೀರು ಕುಡಿಯಿರಿ',
    gentleMovement: 'ಸೌಮ್ಯ ವ್ಯಾಯಾಮ',
    walkOutside: 'ಸ್ವಲ್ಪ ತಾಜಾ ಗಾಳಿ',
  },
  te: {
    menu: 'మెను',
    navOverview: 'అవలోకనం',
    navMedicines: 'నా మందులు',
    navAppointments: 'అపాయింట్‌మెంట్‌లు',
    navRoutines: 'రోజువారీ అలవాట్లు',
    navCircle: 'సంరక్షణ బృందం',
    careCircle: 'మీ సంరక్షణ బృందం',
    membersOnline: '4 మంది తోడుగా ఉన్నారు',
    profileLabel: 'మీ ఆరోగ్య ప్రొఫైల్',
    crumbHome: 'హోమ్',
    overviewEyebrow: 'మీ ఆరోగ్యం, ఒక్క చూపులో',
    greeting: 'శుభోదయం',
    welcome: 'కొత్త రోజు ఒక కొత్త ఆరంభం. ఈరోజు మీ సంరక్షణ ప్రణాళిక ఇదిగో.',
    todayDoses: 'ఈరోజు మందులు',
    of: 'లో',
    dosesCompleted: 'మందులు తీసుకున్నారు',
    nextVisit: 'తదుపరి అపాయింట్‌మెంట్',
    tomorrow: 'రేపు',
    wellbeing: 'ఆరోగ్య పరంపర',
    days: 'రోజులు',
    greatConsistency: 'మీరు అద్భుతంగా చేస్తున్నారు',
    members: 'సభ్యులు',
    allConnected: 'అందరూ అనుసంధానమై ఉన్నారు',
    medicineSchedule: 'మందుల షెడ్యూల్',
    stayOnTrack: 'ఒక్కసారి ఒక్క మోతాదు. మీరు చేయగలరు.',
    addMedicine: 'మందు చేర్చండి',
    remindersLocal: 'ఈ డెమోలో రిమైండర్లు ఇక్కడ చూపబడతాయి',
    scheduleSynced: 'ఇప్పుడే నవీకరించబడింది ✓',
    appointmentsTitle: 'రాబోయే అపాయింట్‌మెంట్‌లు',
    planTogether: 'మీ ఆరోగ్యానికి తోడ్పడే వ్యక్తులు మరియు ప్రదేశాలు.',
    addNew: 'కొత్తది చేర్చండి',
    routinesTitle: 'సహాయపడే చిన్న విషయాలు',
    dailyRhythm: 'మీ రోజువారీ ఆరోగ్య అలవాటు',
    circleTitle: 'మీ సంరక్షణ బృందం',
    alwaysInYourCorner: 'ఎల్లప్పుడూ మీతోనే',
    viewAll: 'అన్నీ చూడండి',
    sharedWithLove: 'ప్రేమతో పంచుకోబడింది',
    familyUpdates: 'మీ కుటుంబం సంరక్షణ నవీకరణలు చూడగలరు.',
    disclaimer:
      'Everwell సంరక్షణ నిర్వహణ డెమో మాత్రమే, వైద్య పరికరం కాదు. వైద్యుని సూచనలు పాటించండి. డెమో సమాచారం ఈ బ్రౌజర్‌లోనే ఉంటుంది.',
    askEverwell: 'Everwellని అడగండి',
    assistantTitle: 'Everwell సహచరుడు',
    assistantStatus: 'సహాయం కోసం, వైద్యునికి ప్రత్యామ్నాయం కాదు',
    assistantGreeting: 'నమస్కారం అనన్యా! 🌿 మీ సంరక్షణను నిర్వహించడంలో, యాప్‌ని వివరించడంలో సహాయం చేయగలను.',
    chatPlaceholder: 'మీ సంరక్షణ గురించి అడగండి…',
    loginTitle: 'సంరక్షణ మెరుగ్గా ఉంటుంది <em>కలిసుంటే.</em>',
    loginLead: 'మందులు, అపాయింట్‌మెంట్‌లు మరియు రోజువారీ ఆరోగ్యాన్ని కుటుంబంతో కలిసి చూసుకునే సులభమైన మార్గం.',
    pinLabel: 'కుటుంబ యాక్సెస్ PIN',
    continue: 'Everwellకి కొనసాగండి →',
    pinNote: 'డెమో: ఏవైనా 4 అంకెలు నమోదు చేయండి. ఇది స్థానిక నమూనా; నిజమైన భద్రత లేదా ఇమెయిల్ అందించదు.',
    dailyCare: 'ఈరోజు సంరక్షణ',
    tourTitle: 'సమయానికి చిన్న సంరక్షణ.',
    tourCopy: 'మీ ఆరోగ్యానికి సున్నితమైన రిమైండర్‌లు.',
    tourButton: '✓  ఉదయం మందు తీసుకున్నారు',
    tourCaption: 'Everwell పరిచయం',
    tourSub: '42 సెకన్ల ఉత్పత్తి పరిచయం',
    loginWelcome: 'మీ సంరక్షణ ప్రదేశానికి స్వాగతం.',
    doseTaken: 'తీసుకున్నారు',
    markTaken: 'తీసుకున్నట్లు గుర్తించండి',
    doseMissed: 'తప్పింది',
    upcoming: 'రాబోయేవి',
    done: 'పూర్తయింది',
    routineDone: 'ఈరోజుకి పూర్తయింది',
    addMedicineTitle: 'మందు చేర్చండి',
    addAppointmentTitle: 'అపాయింట్‌మెంట్ చేర్చండి',
    medicineName: 'మందు పేరు',
    dosage: 'మోతాదు',
    time: 'రిమైండర్ సమయం',
    frequency: 'పునరావృతం',
    doctorName: 'వైద్యుడు / క్లినిక్',
    visitDate: 'తేదీ',
    visitTime: 'సమయం',
    location: 'ప్రదేశం',
    cancel: 'రద్దు',
    save: 'భద్రపరచు',
    tourModalTitle: 'మీ సులభమైన సంరక్షణను పరిచయం చేసుకోండి',
    tourModalText: 'మందులు, రోజువారీ అలవాట్లు, సంరక్షకులను ఒకేచోట ఉంచండి. ఇది పరస్పర డెమో, రికార్డ్ చేసిన వీడియో కాదు.',
    tourPlay: '▶  పరిచయం చూడండి',
    tourPause: 'Ⅱ  పరిచయం ఆపండి',
    takenToast: 'తీసుకున్నట్లు గుర్తించారు. మీ సంరక్షణ బృందం ఈ నవీకరణను చూడగలరు.',
    routineToast: 'ఈరోజు అలవాటు నవీకరించబడింది.',
    medicineAdded: 'మందు షెడ్యూల్‌లో చేర్చబడింది.',
    appointmentAdded: 'అపాయింట్‌మెంట్ క్యాలెండర్‌లో చేర్చబడింది.',
    enterPin: 'డెమో కోసం కనీసం 4 అంకెలు నమోదు చేయండి.',
    sent: 'మీ సందేశం పంపబడింది.',
    inviteDemo: 'కుటుంబ ఆహ్వానాలు డెమోలో భాగం. సురక్షిత భాగస్వామ్యానికి ఖాతా అవసరం.',
    drinking: 'ఒక గ్లాసు నీరు తాగండి',
    gentleMovement: 'తేలికపాటి కదలికలు',
    walkOutside: 'కాస్త స్వచ్ఛమైన గాలి',
  },
  ta: {
    menu: 'பட்டியல்',
    navOverview: 'கண்ணோட்டம்',
    navMedicines: 'என் மருந்துகள்',
    navAppointments: 'சந்திப்புகள்',
    navRoutines: 'தினசரி வழக்கம்',
    navCircle: 'பராமரிப்பு குழு',
    careCircle: 'உங்கள் பராமரிப்பு குழு',
    membersOnline: '4 பேர் தொடர்பில் உள்ளனர்',
    profileLabel: 'உங்கள் சுகாதார விவரம்',
    crumbHome: 'முகப்பு',
    overviewEyebrow: 'உங்கள் ஆரோக்கியம், ஒரே பார்வையில்',
    greeting: 'காலை வணக்கம்',
    welcome: 'புதிய நாள் ஒரு புதிய தொடக்கம். இன்றைய உங்கள் பராமரிப்பு திட்டம் இதோ.',
    todayDoses: 'இன்றைய மருந்துகள்',
    of: 'இல்',
    dosesCompleted: 'மருந்துகள் எடுத்தவை',
    nextVisit: 'அடுத்த சந்திப்பு',
    tomorrow: 'நாளை',
    wellbeing: 'நலத் தொடர்',
    days: 'நாட்கள்',
    greatConsistency: 'நீங்கள் சிறப்பாக செய்கிறீர்கள்',
    members: 'உறுப்பினர்கள்',
    allConnected: 'அனைவரும் இணைந்துள்ளனர்',
    medicineSchedule: 'மருந்து அட்டவணை',
    stayOnTrack: 'ஒரு நேரத்தில் ஒரு மருந்து. உங்களால் முடியும்.',
    addMedicine: 'மருந்தைச் சேர்',
    remindersLocal: 'இந்த மாதிரியில் நினைவூட்டல்கள் இங்கே காட்டப்படும்',
    scheduleSynced: 'இப்போது புதுப்பிக்கப்பட்டது ✓',
    appointmentsTitle: 'வரவிருக்கும் சந்திப்புகள்',
    planTogether: 'உங்கள் ஆரோக்கியத்திற்கு துணை நிற்போர்.',
    addNew: 'புதியதைச் சேர்',
    routinesTitle: 'உதவும் சிறிய விஷயங்கள்',
    dailyRhythm: 'உங்கள் தினசரி நல வழக்கம்',
    circleTitle: 'உங்கள் பராமரிப்பு குழு',
    alwaysInYourCorner: 'எப்போதும் உங்கள் பக்கம்',
    viewAll: 'அனைத்தையும் காண்க',
    sharedWithLove: 'அன்புடன் பகிரப்பட்டது',
    familyUpdates: 'உங்கள் குடும்பம் பராமரிப்பு புதுப்பிப்புகளைக் காணலாம்.',
    disclaimer:
      'Everwell ஒரு பராமரிப்பு ஒழுங்கமைப்பு மாதிரி; மருத்துவ சாதனம் அல்ல. மருத்துவர் அறிவுரைகளைப் பின்பற்றவும். மாதிரித் தகவல் இந்த உலாவியில் மட்டுமே இருக்கும்.',
    askEverwell: 'Everwell-ஐ கேளுங்கள்',
    assistantTitle: 'Everwell துணைவர்',
    assistantStatus: 'உதவிக்கு, மருத்துவருக்கு மாற்றல்ல',
    assistantGreeting:
      'வணக்கம் அனன்யா! 🌿 உங்கள் பராமரிப்பை ஒழுங்கமைக்கவும், அடுத்த நினைவூட்டலைக் கண்டறியவும் உதவுகிறேன்.',
    chatPlaceholder: 'உங்கள் பராமரிப்பு பற்றி கேளுங்கள்…',
    loginTitle: 'பராமரிப்பு சிறப்பாகும் <em>ஒன்றாக.</em>',
    loginLead: 'மருந்துகள், சந்திப்புகள் மற்றும் அன்றாட நலனைக் குடும்பத்துடன் கவனிக்கும் எளிய வழி.',
    pinLabel: 'குடும்ப அணுகல் PIN',
    continue: 'Everwell-க்கு தொடர்க →',
    pinNote:
      'மாதிரி: ஏதேனும் 4 இலக்கங்களை உள்ளிடவும். இது உள்ளூர் மாதிரி; உண்மையான பாதுகாப்பு அல்லது மின்னஞ்சல் இல்லை.',
    dailyCare: 'இன்றைய பராமரிப்பு',
    tourTitle: 'சரியான நேரத்தில் சிறு கவனம்.',
    tourCopy: 'உங்களை நலமாக வைத்திருக்கும் மென்மையான நினைவூட்டல்கள்.',
    tourButton: '✓  காலை மருந்து எடுத்தது',
    tourCaption: 'Everwell ஒரு சிறு பார்வை',
    tourSub: '42 விநாடி அறிமுகம்',
    loginWelcome: 'உங்கள் பராமரிப்பு இடத்திற்கு வரவேற்கிறோம்.',
    doseTaken: 'எடுத்தது',
    markTaken: 'எடுத்ததாகக் குறி',
    doseMissed: 'தவறியது',
    upcoming: 'வரவிருக்கும்',
    done: 'முடிந்தது',
    routineDone: 'இன்றைக்கு முடிந்தது',
    addMedicineTitle: 'மருந்தைச் சேர்',
    addAppointmentTitle: 'சந்திப்பைச் சேர்',
    medicineName: 'மருந்தின் பெயர்',
    dosage: 'அளவு',
    time: 'நினைவூட்டும் நேரம்',
    frequency: 'அடிக்கடி',
    doctorName: 'மருத்துவர் / மருத்துவமனை',
    visitDate: 'தேதி',
    visitTime: 'நேரம்',
    location: 'இடம்',
    cancel: 'ரத்துசெய்',
    save: 'சேமி',
    tourModalTitle: 'அமைதியான பராமரிப்பு வழக்கம்',
    tourModalText:
      'மருந்துகள், நல்ல பழக்கங்கள் மற்றும் அன்பானவர்களை ஒரே இடத்தில் வைத்திருங்கள். இது ஒரு செயல்முறை மாதிரி; பதிவு செய்யப்பட்ட காணொளி அல்ல.',
    tourPlay: '▶  அறிமுகத்தை இயக்கு',
    tourPause: 'Ⅱ  இடைநிறுத்து',
    takenToast: 'எடுத்ததாகக் குறிக்கப்பட்டது. உங்கள் குழு புதுப்பிப்பைக் காணலாம்.',
    routineToast: 'இன்றைய வழக்கம் புதுப்பிக்கப்பட்டது.',
    medicineAdded: 'மருந்து அட்டவணையில் சேர்க்கப்பட்டது.',
    appointmentAdded: 'சந்திப்பு நாள்காட்டியில் சேர்க்கப்பட்டது.',
    enterPin: 'மாதிரிக்கு குறைந்தது 4 இலக்கங்களை உள்ளிடவும்.',
    sent: 'உங்கள் செய்தி அனுப்பப்பட்டது.',
    inviteDemo: 'குடும்ப அழைப்புகள் மாதிரியில் உள்ளன. பாதுகாப்பான பகிர்வுக்குக் கணக்கு தேவை.',
    drinking: 'ஒரு குவளை தண்ணீர் குடிக்கவும்',
    gentleMovement: 'மெதுவான அசைவுகள்',
    walkOutside: 'சிறிது காற்று வாங்குங்கள்',
  },
  ml: {
    menu: 'മെനു',
    navOverview: 'അവലോകനം',
    navMedicines: 'എന്റെ മരുന്നുകൾ',
    navAppointments: 'അപ്പോയിന്റ്മെന്റുകൾ',
    navRoutines: 'ദൈനംദിനചര്യ',
    navCircle: 'പരിചരണ വലയം',
    careCircle: 'നിങ്ങളുടെ പരിചരണ വലയം',
    membersOnline: '4 പേർ ബന്ധപ്പെട്ടു',
    profileLabel: 'ആരോഗ്യ പ്രൊഫൈൽ',
    crumbHome: 'ഹോം',
    overviewEyebrow: 'നിങ്ങളുടെ ആരോഗ്യം, ഒറ്റനോട്ടത്തിൽ',
    greeting: 'സുപ്രഭാതം',
    welcome: 'പുതിയ ദിവസം പുതിയ തുടക്കം. ഇന്നത്തെ പരിചരണ പദ്ധതി ഇതാ.',
    todayDoses: 'ഇന്നത്തെ മരുന്നുകൾ',
    of: 'ൽ',
    dosesCompleted: 'മരുന്നുകൾ കഴിച്ചു',
    nextVisit: 'അടുത്ത അപ്പോയിന്റ്മെന്റ്',
    tomorrow: 'നാളെ',
    wellbeing: 'ആരോഗ്യ തുടർച്ച',
    days: 'ദിവസങ്ങൾ',
    greatConsistency: 'നിങ്ങൾ നന്നായി ചെയ്യുന്നു',
    members: 'അംഗങ്ങൾ',
    allConnected: 'എല്ലാവരും ബന്ധപ്പെട്ടു',
    medicineSchedule: 'മരുന്ന് ക്രമം',
    stayOnTrack: 'ഒരു സമയം ഒരു ഡോസ്. നിങ്ങൾക്ക് കഴിയും.',
    addMedicine: 'മരുന്ന് ചേർക്കുക',
    remindersLocal: 'ഈ ഡെമോയിൽ ഓർമ്മപ്പെടുത്തലുകൾ ഇവിടെ കാണാം',
    scheduleSynced: 'ഇപ്പോൾ പുതുക്കി ✓',
    appointmentsTitle: 'വരാനിരിക്കുന്ന അപ്പോയിന്റ്മെന്റുകൾ',
    planTogether: 'ആരോഗ്യത്തിന് ഒപ്പമുള്ള ആളുകളും ഇടങ്ങളും.',
    addNew: 'പുതിയത് ചേർക്കുക',
    routinesTitle: 'സഹായിക്കുന്ന ചെറിയ കാര്യങ്ങൾ',
    dailyRhythm: 'ദൈനംദിന ആരോഗ്യ ശീലം',
    circleTitle: 'നിങ്ങളുടെ പരിചരണ വലയം',
    alwaysInYourCorner: 'എപ്പോഴും ഒപ്പം',
    viewAll: 'എല്ലാം കാണുക',
    sharedWithLove: 'സ്നേഹത്തോടെ പങ്കിട്ടു',
    familyUpdates: 'കുടുംബത്തിന് പരിചരണ അപ്‌ഡേറ്റുകൾ കാണാം.',
    disclaimer:
      'Everwell പരിചരണം ക്രമീകരിക്കാനുള്ള ഡെമോയാണ്, വൈദ്യ ഉപകരണമല്ല. ഡോക്ടറുടെ നിർദ്ദേശങ്ങൾ പാലിക്കുക. ഡെമോ വിവരങ്ങൾ ഈ ബ്രൗസറിൽ മാത്രം സൂക്ഷിക്കുന്നു.',
    askEverwell: 'Everwell-നോട് ചോദിക്കൂ',
    assistantTitle: 'Everwell സഹായി',
    assistantStatus: 'സഹായത്തിന്, ഡോക്ടർക്ക് പകരമല്ല',
    assistantGreeting:
      'നമസ്കാരം അനന്യാ! 🌿 പരിചരണം ക്രമീകരിക്കാനും അടുത്ത ഓർമ്മപ്പെടുത്തൽ കണ്ടെത്താനും ഞാൻ സഹായിക്കും.',
    chatPlaceholder: 'പരിചരണത്തെക്കുറിച്ച് ചോദിക്കൂ…',
    loginTitle: 'പരിചരണം മെച്ചമാണ് <em>ഒരുമിച്ച്.</em>',
    loginLead: 'മരുന്നുകളും അപ്പോയിന്റ്മെന്റുകളും ദൈനംദിന ആരോഗ്യവും കുടുംബത്തോടൊപ്പം ശ്രദ്ധിക്കാനുള്ള ലളിതമായ വഴി.',
    pinLabel: 'കുടുംബ ആക്സസ് PIN',
    continue: 'Everwell-ലേക്ക് തുടരുക →',
    pinNote: 'ഡെമോ: ഏതെങ്കിലും 4 അക്കങ്ങൾ നൽകുക. ഇത് പ്രാദേശിക മാതൃകയാണ്; യഥാർത്ഥ സുരക്ഷയോ ഇമെയിലോ ഇല്ല.',
    dailyCare: 'ഇന്നത്തെ പരിചരണം',
    tourTitle: 'കൃത്യസമയത്ത് ചെറിയ പരിചരണം.',
    tourCopy: 'ആരോഗ്യത്തിന് സഹായകമായ സൗമ്യ ഓർമ്മപ്പെടുത്തലുകൾ.',
    tourButton: '✓  രാവിലെ മരുന്ന് കഴിച്ചു',
    tourCaption: 'Everwell ഒരു പരിചയം',
    tourSub: '42 സെക്കൻഡ് ഉൽപ്പന്ന ടൂർ',
    loginWelcome: 'പരിചരണ ഇടത്തിലേക്ക് സ്വാഗതം.',
    doseTaken: 'കഴിച്ചു',
    markTaken: 'കഴിച്ചതായി അടയാളപ്പെടുത്തുക',
    doseMissed: 'മുടങ്ങി',
    upcoming: 'വരാനിരിക്കുന്നത്',
    done: 'കഴിഞ്ഞു',
    routineDone: 'ഇന്നത്തേക്ക് കഴിഞ്ഞു',
    addMedicineTitle: 'മരുന്ന് ചേർക്കുക',
    addAppointmentTitle: 'അപ്പോയിന്റ്മെന്റ് ചേർക്കുക',
    medicineName: 'മരുന്നിന്റെ പേര്',
    dosage: 'ഡോസ്',
    time: 'ഓർമ്മപ്പെടുത്തൽ സമയം',
    frequency: 'ആവൃത്തി',
    doctorName: 'ഡോക്ടർ / ക്ലിനിക്',
    visitDate: 'തീയതി',
    visitTime: 'സമയം',
    location: 'സ്ഥലം',
    cancel: 'റദ്ദാക്കുക',
    save: 'സേവ് ചെയ്യുക',
    tourModalTitle: 'സുഖകരമായ പരിചരണക്രമം പരിചയപ്പെടാം',
    tourModalText:
      'മരുന്നുകൾ, ദിനചര്യ, പ്രിയപ്പെട്ടവർ എന്നിവ ഒരിടത്ത്. ഇത് ഇന്ററാക്ടീവ് ഡെമോയാണ്; റെക്കോർഡ് ചെയ്ത വീഡിയോയല്ല.',
    tourPlay: '▶  ടൂർ തുടങ്ങുക',
    tourPause: 'Ⅱ  ടൂർ നിർത്തുക',
    takenToast: 'കഴിച്ചതായി അടയാളപ്പെടുത്തി. കുടുംബത്തിന് ഈ അപ്‌ഡേറ്റ് കാണാം.',
    routineToast: 'ഇന്നത്തെ ശീലം പുതുക്കി.',
    medicineAdded: 'മരുന്ന് ക്രമത്തിൽ ചേർത്തു.',
    appointmentAdded: 'അപ്പോയിന്റ്മെന്റ് കലണ്ടറിൽ ചേർത്തു.',
    enterPin: 'ഡെമോയ്ക്ക് കുറഞ്ഞത് 4 അക്കങ്ങൾ നൽകുക.',
    sent: 'സന്ദേശം അയച്ചു.',
    inviteDemo: 'കുടുംബ ക്ഷണങ്ങൾ ഡെമോയിലാണ്. സുരക്ഷിത പങ്കിടലിന് അക്കൗണ്ട് വേണം.',
    drinking: 'ഒരു ഗ്ലാസ് വെള്ളം കുടിക്കുക',
    gentleMovement: 'സൗമ്യമായ വ്യായാമം',
    walkOutside: 'കുറച്ച് ശുദ്ധവായു',
  },
  mr: {
    menu: 'मेनू',
    navOverview: 'आढावा',
    navMedicines: 'माझी औषधे',
    navAppointments: 'भेटी',
    navRoutines: 'दैनंदिन दिनक्रम',
    navCircle: 'काळजी गट',
    careCircle: 'तुमचा काळजी गट',
    membersOnline: '4 जण संपर्कात आहेत',
    profileLabel: 'तुमची आरोग्य माहिती',
    crumbHome: 'मुख्यपृष्ठ',
    overviewEyebrow: 'तुमचे आरोग्य, एका नजरेत',
    greeting: 'शुभ सकाळ',
    welcome: 'नवा दिवस, नवी सुरुवात. आजचा तुमचा काळजी आराखडा इथे आहे.',
    todayDoses: 'आजची औषधे',
    of: 'पैकी',
    dosesCompleted: 'औषधे घेतली',
    nextVisit: 'पुढची भेट',
    tomorrow: 'उद्या',
    wellbeing: 'आरोग्याची लय',
    days: 'दिवस',
    greatConsistency: 'तुम्ही छान करत आहात',
    members: 'सदस्य',
    allConnected: 'सर्वजण जोडलेले आहेत',
    medicineSchedule: 'औषधांचे वेळापत्रक',
    stayOnTrack: 'एका वेळी एक डोस. तुम्हाला जमेल.',
    addMedicine: 'औषध जोडा',
    remindersLocal: 'या डेमोमध्ये सूचना येथे दिसतात',
    scheduleSynced: 'आत्ताच अद्ययावत ✓',
    appointmentsTitle: 'आगामी भेटी',
    planTogether: 'तुमच्या आरोग्याला साथ देणारी माणसे आणि ठिकाणे.',
    addNew: 'नवी भेट जोडा',
    routinesTitle: 'मदत करणाऱ्या छोट्या गोष्टी',
    dailyRhythm: 'तुमचा रोजचा आरोग्य दिनक्रम',
    circleTitle: 'तुमचा काळजी गट',
    alwaysInYourCorner: 'नेहमी तुमच्या सोबत',
    viewAll: 'सर्व पहा',
    sharedWithLove: 'प्रेमाने सामायिक',
    familyUpdates: 'कुटुंबीय तुमचे काळजीविषयक बदल पाहू शकतात.',
    disclaimer:
      'Everwell हे काळजी व्यवस्थापनाचे डेमो आहे, वैद्यकीय साधन नाही. डॉक्टरांच्या सूचनांचे पालन करा. डेमो माहिती फक्त या ब्राउझरमध्ये साठवली जाते.',
    askEverwell: 'Everwell ला विचारा',
    assistantTitle: 'Everwell सोबती',
    assistantStatus: 'मदतीसाठी, डॉक्टरांना पर्याय नाही',
    assistantGreeting:
      'नमस्कार अनन्या! 🌿 काळजी व्यवस्थापित करण्यात आणि पुढची सूचना शोधण्यात मी मदत करू शकते.',
    chatPlaceholder: 'तुमच्या काळजीबद्दल विचारा…',
    loginTitle: 'काळजी अधिक सुंदर वाटते <em>सोबत असताना.</em>',
    loginLead: 'औषधे, भेटी आणि रोजच्या आरोग्याची कुटुंबासोबत काळजी घेण्याचा सोपा मार्ग.',
    pinLabel: 'कुटुंब प्रवेश PIN',
    continue: 'Everwell वर पुढे जा →',
    pinNote: 'डेमो: कोणतेही 4 अंक टाका. हा स्थानिक नमुना आहे; खरी सुरक्षा किंवा ईमेल नाही.',
    dailyCare: 'आजची काळजी',
    tourTitle: 'वेळेवर थोडी काळजी.',
    tourCopy: 'तुम्हाला निरोगी ठेवण्यासाठी सौम्य सूचना.',
    tourButton: '✓  सकाळचे औषध घेतले',
    tourCaption: 'Everwell ची छोटी ओळख',
    tourSub: '42 सेकंदांची माहिती',
    loginWelcome: 'तुमच्या काळजी जागेत स्वागत.',
    doseTaken: 'घेतले',
    markTaken: 'घेतले असे नोंदवा',
    doseMissed: 'चुकले',
    upcoming: 'आगामी',
    done: 'झाले',
    routineDone: 'आजसाठी पूर्ण',
    addMedicineTitle: 'औषध जोडा',
    addAppointmentTitle: 'भेट जोडा',
    medicineName: 'औषधाचे नाव',
    dosage: 'डोस',
    time: 'सूचनेची वेळ',
    frequency: 'वारंवारता',
    doctorName: 'डॉक्टर / दवाखाना',
    visitDate: 'तारीख',
    visitTime: 'वेळ',
    location: 'ठिकाण',
    cancel: 'रद्द करा',
    save: 'जतन करा',
    tourModalTitle: 'शांत काळजी दिनक्रमाची ओळख',
    tourModalText:
      'औषधे, आरोग्याच्या सवयी आणि आपली माणसे एकत्र ठेवा. हा परस्परसंवादी डेमो आहे, रेकॉर्ड केलेला व्हिडिओ नाही.',
    tourPlay: '▶  ओळख सुरू करा',
    tourPause: 'Ⅱ  थांबवा',
    takenToast: 'औषध घेतल्याची नोंद झाली. कुटुंबीय बदल पाहू शकतात.',
    routineToast: 'आजचा दिनक्रम अद्ययावत.',
    medicineAdded: 'औषध वेळापत्रकात जोडले.',
    appointmentAdded: 'भेट कॅलेंडरमध्ये जोडली.',
    enterPin: 'डेमोसाठी किमान 4 अंक टाका.',
    sent: 'संदेश पाठवला.',
    inviteDemo: 'कुटुंबाचे आमंत्रण डेमोमध्ये आहे. सुरक्षित सामायिकरणासाठी खाते हवे.',
    drinking: 'एक ग्लास पाणी प्या',
    gentleMovement: 'हलका व्यायाम',
    walkOutside: 'थोडी ताजी हवा',
  },
  or: {
    menu: 'ମେନୁ',
    navOverview: 'ସମୀକ୍ଷା',
    navMedicines: 'ମୋ ଔଷଧ',
    navAppointments: 'ଡାକ୍ତରୀ ସାକ୍ଷାତ',
    navRoutines: 'ଦୈନିକ ଅଭ୍ୟାସ',
    navCircle: 'ଯତ୍ନ ଗୋଷ୍ଠୀ',
    careCircle: 'ଆପଣଙ୍କ ଯତ୍ନ ଗୋଷ୍ଠୀ',
    membersOnline: '4 ଜଣ ସମ୍ପର୍କରେ ଅଛନ୍ତି',
    profileLabel: 'ଆପଣଙ୍କ ସ୍ୱାସ୍ଥ୍ୟ ପ୍ରୋଫାଇଲ୍',
    crumbHome: 'ମୂଳପୃଷ୍ଠା',
    overviewEyebrow: 'ଆପଣଙ୍କ ସ୍ୱାସ୍ଥ୍ୟ, ଗୋଟିଏ ନଜରରେ',
    greeting: 'ଶୁଭ ସକାଳ',
    welcome: 'ନୂଆ ଦିନ, ନୂଆ ଆରମ୍ଭ। ଆଜିର ଯତ୍ନ ଯୋଜନା ଏଠାରେ।',
    todayDoses: 'ଆଜିର ଔଷଧ',
    of: 'ରୁ',
    dosesCompleted: 'ଔଷଧ ଖାଇଛନ୍ତି',
    nextVisit: 'ପରବର୍ତ୍ତୀ ସାକ୍ଷାତ',
    tomorrow: 'ଆସନ୍ତାକାଲି',
    wellbeing: 'ସୁସ୍ଥତାର ଧାରା',
    days: 'ଦିନ',
    greatConsistency: 'ଆପଣ ଭଲ କରୁଛନ୍ତି',
    members: 'ସଦସ୍ୟ',
    allConnected: 'ସମସ୍ତେ ଯୋଡ଼ି ହୋଇଛନ୍ତି',
    medicineSchedule: 'ଔଷଧ ସମୟସୂଚୀ',
    stayOnTrack: 'ଗୋଟିଏ ଥରରେ ଗୋଟିଏ ଡୋଜ୍। ଆପଣ ପାରିବେ।',
    addMedicine: 'ଔଷଧ ଯୋଡ଼ନ୍ତୁ',
    remindersLocal: 'ଏହି ଡେମୋରେ ମନେପକାଇବା ଏଠାରେ ଦେଖାଯାଏ',
    scheduleSynced: 'ଏବେ ଅପଡେଟ୍ ହୋଇଛି ✓',
    appointmentsTitle: 'ଆଗାମୀ ସାକ୍ଷାତ',
    planTogether: 'ସ୍ୱାସ୍ଥ୍ୟରେ ସହାୟତା କରୁଥିବା ଲୋକ ଏବଂ ସ୍ଥାନ।',
    addNew: 'ନୂଆ ଯୋଡ଼ନ୍ତୁ',
    routinesTitle: 'ସହାୟତା କରୁଥିବା ଛୋଟ କଥା',
    dailyRhythm: 'ଆପଣଙ୍କ ଦୈନିକ ସୁସ୍ଥତା ଅଭ୍ୟାସ',
    circleTitle: 'ଆପଣଙ୍କ ଯତ୍ନ ଗୋଷ୍ଠୀ',
    alwaysInYourCorner: 'ସବୁବେଳେ ଆପଣଙ୍କ ସହିତ',
    viewAll: 'ସବୁ ଦେଖନ୍ତୁ',
    sharedWithLove: 'ସ୍ନେହରେ ଅଂଶୀଦାର',
    familyUpdates: 'ଆପଣଙ୍କ ପରିବାର ଯତ୍ନ ଅପଡେଟ୍ ଦେଖିପାରିବେ।',
    disclaimer:
      'Everwell ଯତ୍ନ ବ୍ୟବସ୍ଥାପନା ଡେମୋ, ଚିକିତ୍ସା ଉପକରଣ ନୁହେଁ। ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ମାନନ୍ତୁ। ଡେମୋ ସୂଚନା କେବଳ ଏହି ବ୍ରାଉଜରରେ ରହେ।',
    askEverwell: 'Everwellକୁ ପଚାରନ୍ତୁ',
    assistantTitle: 'Everwell ସାଥୀ',
    assistantStatus: 'ସହାୟତା ପାଇଁ, ଡାକ୍ତରଙ୍କ ବଦଳ ନୁହେଁ',
    assistantGreeting:
      'ନମସ୍କାର ଅନନ୍ୟା! 🌿 ଆପଣଙ୍କ ଯତ୍ନକୁ ସଜାଡ଼ିବା ଏବଂ ପରବର୍ତ୍ତୀ ମନେପକାଇବା ଖୋଜିବାରେ ମୁଁ ସାହାଯ୍ୟ କରିପାରିବି।',
    chatPlaceholder: 'ଯତ୍ନ ବିଷୟରେ ପଚାରନ୍ତୁ…',
    loginTitle: 'ଯତ୍ନ ଭଲ ଲାଗେ <em>ଏକାଠି।</em>',
    loginLead: 'ଔଷଧ, ସାକ୍ଷାତ ଓ ଦୈନିକ ସୁସ୍ଥତାର ଯତ୍ନ ପରିବାର ସହିତ ନେବାର ସହଜ ଉପାୟ।',
    pinLabel: 'ପରିବାର ପ୍ରବେଶ PIN',
    continue: 'Everwellକୁ ଆଗକୁ ବଢ଼ନ୍ତୁ →',
    pinNote: 'ଡେମୋ: ଯେକୌଣସି 4 ଅଙ୍କ ଦିଅନ୍ତୁ। ଏହା ସ୍ଥାନୀୟ ନମୁନା; ପ୍ରକୃତ ସୁରକ୍ଷା କିମ୍ବା ଇମେଲ୍ ନାହିଁ।',
    dailyCare: 'ଆଜିର ଯତ୍ନ',
    tourTitle: 'ଠିକ୍ ସମୟରେ ଟିକିଏ ଯତ୍ନ।',
    tourCopy: 'ଭଲ ରହିବା ପାଇଁ ସରଳ ମନେପକାଇବା।',
    tourButton: '✓  ସକାଳ ଔଷଧ ଖାଇଛନ୍ତି',
    tourCaption: 'Everwellର ଝଲକ',
    tourSub: '42 ସେକେଣ୍ଡର ଉତ୍ପାଦ ପରିଚୟ',
    loginWelcome: 'ଆପଣଙ୍କ ଯତ୍ନ ସ୍ଥାନକୁ ସ୍ୱାଗତ।',
    doseTaken: 'ଖାଇଛନ୍ତି',
    markTaken: 'ଖାଇଥିବା ଚିହ୍ନ କରନ୍ତୁ',
    doseMissed: 'ଛାଡ଼ିଗଲା',
    upcoming: 'ଆଗାମୀ',
    done: 'ସରିଲା',
    routineDone: 'ଆଜି ପାଇଁ ସରିଲା',
    addMedicineTitle: 'ଔଷଧ ଯୋଡ଼ନ୍ତୁ',
    addAppointmentTitle: 'ସାକ୍ଷାତ ଯୋଡ଼ନ୍ତୁ',
    medicineName: 'ଔଷଧ ନାମ',
    dosage: 'ଡୋଜ୍',
    time: 'ମନେପକାଇବା ସମୟ',
    frequency: 'ବାରମ୍ବାରତା',
    doctorName: 'ଡାକ୍ତର / କ୍ଲିନିକ୍',
    visitDate: 'ତାରିଖ',
    visitTime: 'ସମୟ',
    location: 'ସ୍ଥାନ',
    cancel: 'ବାତିଲ୍',
    save: 'ସଞ୍ଚୟ',
    tourModalTitle: 'ଶାନ୍ତ ଯତ୍ନ ଅଭ୍ୟାସ ଦେଖନ୍ତୁ',
    tourModalText:
      'ଔଷଧ, ସୁସ୍ଥ ଅଭ୍ୟାସ ଏବଂ ନିଜ ଲୋକଙ୍କୁ ଗୋଟିଏ ସ୍ଥାନରେ ରଖନ୍ତୁ। ଏହା ଏକ ଇଣ୍ଟରାକ୍ଟିଭ୍ ଡେମୋ, ରେକର୍ଡ ଭିଡିଓ ନୁହେଁ।',
    tourPlay: '▶  ଟୁର୍ ଚଲାନ୍ତୁ',
    tourPause: 'Ⅱ  ଟୁର୍ ବନ୍ଦ',
    takenToast: 'ଖାଇଥିବା ଚିହ୍ନ ହେଲା। ଯତ୍ନ ଗୋଷ୍ଠୀ ଅପଡେଟ୍ ଦେଖିପାରିବେ।',
    routineToast: 'ଆଜିର ଅଭ୍ୟାସ ଅପଡେଟ୍ ହେଲା।',
    medicineAdded: 'ଔଷଧ ସମୟସୂଚୀରେ ଯୋଡ଼ାଗଲା।',
    appointmentAdded: 'କ୍ୟାଲେଣ୍ଡରରେ ସାକ୍ଷାତ ଯୋଡ଼ାଗଲା।',
    enterPin: 'ଡେମୋ ପାଇଁ ଅତି କମରେ 4 ଅଙ୍କ ଦିଅନ୍ତୁ।',
    sent: 'ଆପଣଙ୍କ ବାର୍ତ୍ତା ପଠାଗଲା।',
    inviteDemo: 'ପରିବାର ନିମନ୍ତ୍ରଣ ଡେମୋର ଅଂଶ। ସୁରକ୍ଷିତ ଅଂଶୀଦାର ପାଇଁ ଖାତା ଦରକାର।',
    drinking: 'ଗୋଟିଏ ଗ୍ଲାସ୍ ପାଣି ପିଅନ୍ତୁ',
    gentleMovement: 'ହାଲୁକା ବ୍ୟାୟାମ',
    walkOutside: 'ଟିକିଏ ତାଜା ପବନ',
  },
  bn: {
    menu: 'মেনু',
    navOverview: 'সংক্ষিপ্ত বিবরণ',
    navMedicines: 'আমার ওষুধ',
    navAppointments: 'অ্যাপয়েন্টমেন্ট',
    navRoutines: 'দৈনন্দিন রুটিন',
    navCircle: 'যত্নের বৃত্ত',
    careCircle: 'আপনার যত্নের বৃত্ত',
    membersOnline: '4 জন যোগাযোগে আছেন',
    profileLabel: 'আপনার স্বাস্থ্য প্রোফাইল',
    crumbHome: 'হোম',
    overviewEyebrow: 'আপনার স্বাস্থ্য, এক নজরে',
    greeting: 'সুপ্রভাত',
    welcome: 'নতুন দিন, নতুন শুরু। আজকের যত্নের পরিকল্পনা এখানে।',
    todayDoses: 'আজকের ওষুধ',
    of: 'এর মধ্যে',
    dosesCompleted: 'ওষুধ নেওয়া হয়েছে',
    nextVisit: 'পরবর্তী অ্যাপয়েন্টমেন্ট',
    tomorrow: 'আগামীকাল',
    wellbeing: 'সুস্থতার ধারাবাহিকতা',
    days: 'দিন',
    greatConsistency: 'আপনি দারুণ করছেন',
    members: 'সদস্য',
    allConnected: 'সবাই সংযুক্ত',
    medicineSchedule: 'ওষুধের সময়সূচি',
    stayOnTrack: 'একবারে একটি ডোজ। আপনি পারবেন।',
    addMedicine: 'ওষুধ যোগ করুন',
    remindersLocal: 'এই ডেমোতে অনুস্মারক এখানে দেখানো হয়',
    scheduleSynced: 'এইমাত্র আপডেট হয়েছে ✓',
    appointmentsTitle: 'আসন্ন অ্যাপয়েন্টমেন্ট',
    planTogether: 'আপনার স্বাস্থ্যের সহায়ক মানুষ ও স্থান।',
    addNew: 'নতুন যোগ করুন',
    routinesTitle: 'সহায়ক ছোট বিষয়',
    dailyRhythm: 'আপনার দৈনন্দিন সুস্থতার ছন্দ',
    circleTitle: 'আপনার যত্নের বৃত্ত',
    alwaysInYourCorner: 'সবসময় আপনার পাশে',
    viewAll: 'সব দেখুন',
    sharedWithLove: 'ভালোবাসায় ভাগ করা',
    familyUpdates: 'পরিবারের সদস্যরা যত্নের আপডেট দেখতে পারেন।',
    disclaimer:
      'Everwell যত্ন সাজানোর ডেমো, চিকিৎসা যন্ত্র নয়। চিকিৎসকের নির্দেশ মানুন। ডেমো তথ্য শুধু এই ব্রাউজারে থাকে।',
    askEverwell: 'Everwell-কে জিজ্ঞাসা করুন',
    assistantTitle: 'Everwell সঙ্গী',
    assistantStatus: 'সহায়তার জন্য, চিকিৎসকের বিকল্প নয়',
    assistantGreeting:
      'নমস্কার অনন্যা! 🌿 যত্ন গুছিয়ে নিতে ও পরবর্তী অনুস্মারক খুঁজতে আমি সাহায্য করতে পারি।',
    chatPlaceholder: 'যত্ন সম্পর্কে জিজ্ঞাসা করুন…',
    loginTitle: 'যত্ন আরও ভালো লাগে <em>একসঙ্গে।</em>',
    loginLead: 'পরিবারের পাশে নিয়ে ওষুধ, অ্যাপয়েন্টমেন্ট ও দৈনন্দিন সুস্থতা দেখার সহজ উপায়।',
    pinLabel: 'পরিবারের অ্যাক্সেস PIN',
    continue: 'Everwell-এ এগিয়ে যান →',
    pinNote: 'ডেমো: যেকোনো 4টি সংখ্যা দিন। এটি স্থানীয় নমুনা; প্রকৃত সুরক্ষা বা ইমেল নেই।',
    dailyCare: 'আজকের যত্ন',
    tourTitle: 'সময়মতো একটু যত্ন।',
    tourCopy: 'ভালো থাকার জন্য কোমল অনুস্মারক।',
    tourButton: '✓  সকালের ওষুধ নেওয়া হয়েছে',
    tourCaption: 'Everwell-এর ছোট পরিচয়',
    tourSub: '42-সেকেন্ডের পণ্য পরিচিতি',
    loginWelcome: 'আপনার যত্নের জায়গায় স্বাগতম।',
    doseTaken: 'নেওয়া হয়েছে',
    markTaken: 'নেওয়া হয়েছে চিহ্নিত করুন',
    doseMissed: 'বাদ পড়েছে',
    upcoming: 'আসন্ন',
    done: 'সম্পন্ন',
    routineDone: 'আজকের জন্য সম্পন্ন',
    addMedicineTitle: 'ওষুধ যোগ করুন',
    addAppointmentTitle: 'অ্যাপয়েন্টমেন্ট যোগ করুন',
    medicineName: 'ওষুধের নাম',
    dosage: 'ডোজ',
    time: 'অনুস্মারক সময়',
    frequency: 'ঘনত্ব',
    doctorName: 'চিকিৎসক / ক্লিনিক',
    visitDate: 'তারিখ',
    visitTime: 'সময়',
    location: 'স্থান',
    cancel: 'বাতিল',
    save: 'সংরক্ষণ',
    tourModalTitle: 'শান্ত যত্নের রুটিনের সঙ্গে পরিচিত হন',
    tourModalText:
      'ওষুধ, ভালো অভ্যাস ও প্রিয়জনদের এক জায়গায় রাখুন। এটি ইন্টারেক্টিভ ডেমো, রেকর্ড করা ভিডিও নয়।',
    tourPlay: '▶  ট্যুর চালান',
    tourPause: 'Ⅱ  থামান',
    takenToast: 'নেওয়া হয়েছে চিহ্নিত। আপনার পরিবার আপডেট দেখতে পারে।',
    routineToast: 'আজকের রুটিন আপডেট হয়েছে।',
    medicineAdded: 'ওষুধের সময়সূচিতে যোগ হয়েছে।',
    appointmentAdded: 'ক্যালেন্ডারে অ্যাপয়েন্টমেন্ট যোগ হয়েছে।',
    enterPin: 'ডেমোর জন্য অন্তত 4টি সংখ্যা দিন।',
    sent: 'বার্তা পাঠানো হয়েছে।',
    inviteDemo: 'পরিবারের আমন্ত্রণ ডেমোর অংশ। নিরাপদ ভাগের জন্য অ্যাকাউন্ট প্রয়োজন।',
    drinking: 'এক গ্লাস জল পান করুন',
    gentleMovement: 'হালকা ব্যায়াম',
    walkOutside: 'একটু তাজা বাতাস',
  },
  pa: {
    menu: 'ਮੀਨੂ',
    navOverview: 'ਸੰਖੇਪ',
    navMedicines: 'ਮੇਰੀਆਂ ਦਵਾਈਆਂ',
    navAppointments: 'ਮੁਲਾਕਾਤਾਂ',
    navRoutines: 'ਰੋਜ਼ਾਨਾ ਰੁਟੀਨ',
    navCircle: 'ਦੇਖਭਾਲ ਸਮੂਹ',
    careCircle: 'ਤੁਹਾਡਾ ਦੇਖਭਾਲ ਸਮੂਹ',
    membersOnline: '4 ਜੀਅ ਸੰਪਰਕ ਵਿੱਚ ਹਨ',
    profileLabel: 'ਤੁਹਾਡੀ ਸਿਹਤ ਪ੍ਰੋਫਾਈਲ',
    crumbHome: 'ਮੁੱਖ ਪੰਨਾ',
    overviewEyebrow: 'ਤੁਹਾਡੀ ਸਿਹਤ, ਇੱਕ ਨਜ਼ਰ ਵਿੱਚ',
    greeting: 'ਸਤ ਸ੍ਰੀ ਅਕਾਲ',
    welcome: 'ਨਵਾਂ ਦਿਨ ਨਵੀਂ ਸ਼ੁਰੂਆਤ ਹੈ। ਅੱਜ ਦੀ ਦੇਖਭਾਲ ਯੋਜਨਾ ਇਹ ਰਹੀ।',
    todayDoses: 'ਅੱਜ ਦੀਆਂ ਦਵਾਈਆਂ',
    of: 'ਵਿੱਚੋਂ',
    dosesCompleted: 'ਦਵਾਈਆਂ ਲਈਆਂ',
    nextVisit: 'ਅਗਲੀ ਮੁਲਾਕਾਤ',
    tomorrow: 'ਭਲਕੇ',
    wellbeing: 'ਤੰਦਰੁਸਤੀ ਲੜੀ',
    days: 'ਦਿਨ',
    greatConsistency: 'ਤੁਸੀਂ ਬਹੁਤ ਵਧੀਆ ਕਰ ਰਹੇ ਹੋ',
    members: 'ਮੈਂਬਰ',
    allConnected: 'ਸਾਰੇ ਜੁੜੇ ਹੋਏ ਹਨ',
    medicineSchedule: 'ਦਵਾਈ ਸਮਾਂ-ਸੂਚੀ',
    stayOnTrack: 'ਇੱਕ ਵਾਰ ਇੱਕ ਖੁਰਾਕ। ਤੁਸੀਂ ਕਰ ਸਕਦੇ ਹੋ।',
    addMedicine: 'ਦਵਾਈ ਜੋੜੋ',
    remindersLocal: 'ਇਸ ਡੈਮੋ ਵਿੱਚ ਯਾਦ-ਦਹਾਨੀਆਂ ਇੱਥੇ ਦਿਖਦੀਆਂ ਹਨ',
    scheduleSynced: 'ਹੁਣੇ ਅਪਡੇਟ ਕੀਤਾ ✓',
    appointmentsTitle: 'ਆਉਣ ਵਾਲੀਆਂ ਮੁਲਾਕਾਤਾਂ',
    planTogether: 'ਤੁਹਾਡੀ ਸਿਹਤ ਦਾ ਸਾਥ ਦੇਣ ਵਾਲੇ ਲੋਕ ਅਤੇ ਥਾਵਾਂ।',
    addNew: 'ਨਵੀਂ ਜੋੜੋ',
    routinesTitle: 'ਮਦਦਗਾਰ ਛੋਟੀਆਂ ਗੱਲਾਂ',
    dailyRhythm: 'ਤੁਹਾਡੀ ਰੋਜ਼ਾਨਾ ਸਿਹਤ ਰੁਟੀਨ',
    circleTitle: 'ਤੁਹਾਡਾ ਦੇਖਭਾਲ ਸਮੂਹ',
    alwaysInYourCorner: 'ਹਮੇਸ਼ਾ ਤੁਹਾਡੇ ਨਾਲ',
    viewAll: 'ਸਭ ਵੇਖੋ',
    sharedWithLove: 'ਪਿਆਰ ਨਾਲ ਸਾਂਝਾ ਕੀਤਾ',
    familyUpdates: 'ਤੁਹਾਡਾ ਪਰਿਵਾਰ ਦੇਖਭਾਲ ਅਪਡੇਟ ਵੇਖ ਸਕਦਾ ਹੈ।',
    disclaimer:
      'Everwell ਦੇਖਭਾਲ ਪ੍ਰਬੰਧਨ ਡੈਮੋ ਹੈ, ਮੈਡੀਕਲ ਯੰਤਰ ਨਹੀਂ। ਡਾਕਟਰ ਦੀ ਸਲਾਹ ਮੰਨੋ। ਡੈਮੋ ਜਾਣਕਾਰੀ ਸਿਰਫ਼ ਇਸ ਬ੍ਰਾਊਜ਼ਰ ਵਿੱਚ ਰਹਿੰਦੀ ਹੈ।',
    askEverwell: 'Everwell ਨੂੰ ਪੁੱਛੋ',
    assistantTitle: 'Everwell ਸਾਥੀ',
    assistantStatus: 'ਮਦਦ ਲਈ, ਡਾਕਟਰ ਦਾ ਬਦਲ ਨਹੀਂ',
    assistantGreeting:
      'ਸਤ ਸ੍ਰੀ ਅਕਾਲ ਅਨਨਿਆ! 🌿 ਮੈਂ ਦੇਖਭਾਲ ਸੰਭਾਲਣ ਅਤੇ ਅਗਲੀ ਯਾਦ-ਦਹਾਨੀ ਲੱਭਣ ਵਿੱਚ ਮਦਦ ਕਰ ਸਕਦਾ ਹਾਂ।',
    chatPlaceholder: 'ਦੇਖਭਾਲ ਬਾਰੇ ਪੁੱਛੋ…',
    loginTitle: 'ਦੇਖਭਾਲ ਚੰਗੀ ਲੱਗਦੀ ਹੈ <em>ਇਕੱਠੇ।</em>',
    loginLead: 'ਪਰਿਵਾਰ ਨਾਲ ਮਿਲ ਕੇ ਦਵਾਈਆਂ, ਮੁਲਾਕਾਤਾਂ ਅਤੇ ਰੋਜ਼ਾਨਾ ਤੰਦਰੁਸਤੀ ਦਾ ਧਿਆਨ ਰੱਖਣ ਦਾ ਸੌਖਾ ਤਰੀਕਾ।',
    pinLabel: 'ਪਰਿਵਾਰ ਪਹੁੰਚ PIN',
    continue: 'Everwell ਨਾਲ ਜਾਰੀ ਰੱਖੋ →',
    pinNote: 'ਡੈਮੋ: ਕੋਈ ਵੀ 4 ਅੰਕ ਦਿਓ। ਇਹ ਸਥਾਨਕ ਨਮੂਨਾ ਹੈ; ਅਸਲੀ ਸੁਰੱਖਿਆ ਜਾਂ ਈਮੇਲ ਨਹੀਂ।',
    dailyCare: 'ਅੱਜ ਦੀ ਦੇਖਭਾਲ',
    tourTitle: 'ਸਮੇਂ ਸਿਰ ਥੋੜ੍ਹੀ ਦੇਖਭਾਲ।',
    tourCopy: 'ਤੰਦਰੁਸਤ ਰੱਖਣ ਲਈ ਨਰਮ ਯਾਦ-ਦਹਾਨੀਆਂ।',
    tourButton: '✓  ਸਵੇਰ ਦੀ ਦਵਾਈ ਲਈ',
    tourCaption: 'Everwell ਦੀ ਇੱਕ ਝਲਕ',
    tourSub: '42 ਸਕਿੰਟ ਦੀ ਜਾਣ-ਪਛਾਣ',
    loginWelcome: 'ਤੁਹਾਡੀ ਦੇਖਭਾਲ ਦੀ ਥਾਂ ਤੇ ਜੀ ਆਇਆਂ ਨੂੰ।',
    doseTaken: 'ਲਈ ਗਈ',
    markTaken: 'ਲਈ ਗਈ ਦਰਜ ਕਰੋ',
    doseMissed: 'ਰਹਿ ਗਈ',
    upcoming: 'ਆਉਣ ਵਾਲੀ',
    done: 'ਹੋ ਗਿਆ',
    routineDone: 'ਅੱਜ ਲਈ ਪੂਰਾ',
    addMedicineTitle: 'ਦਵਾਈ ਜੋੜੋ',
    addAppointmentTitle: 'ਮੁਲਾਕਾਤ ਜੋੜੋ',
    medicineName: 'ਦਵਾਈ ਦਾ ਨਾਂ',
    dosage: 'ਖੁਰਾਕ',
    time: 'ਯਾਦ-ਦਹਾਨੀ ਦਾ ਸਮਾਂ',
    frequency: 'ਕਿੰਨੀ ਵਾਰ',
    doctorName: 'ਡਾਕਟਰ / ਕਲੀਨਿਕ',
    visitDate: 'ਤਾਰੀਖ',
    visitTime: 'ਸਮਾਂ',
    location: 'ਥਾਂ',
    cancel: 'ਰੱਦ ਕਰੋ',
    save: 'ਸੰਭਾਲੋ',
    tourModalTitle: 'ਸੁਖਾਵੀਂ ਦੇਖਭਾਲ ਰੁਟੀਨ ਜਾਣੋ',
    tourModalText: 'ਦਵਾਈਆਂ, ਚੰਗੀਆਂ ਆਦਤਾਂ ਅਤੇ ਆਪਣਿਆਂ ਨੂੰ ਇੱਕ ਥਾਂ ਰੱਖੋ। ਇਹ ਇੰਟਰਐਕਟਿਵ ਡੈਮੋ ਹੈ, ਰਿਕਾਰਡ ਕੀਤੀ ਵੀਡੀਓ ਨਹੀਂ।',
    tourPlay: '▶  ਡੈਮੋ ਚਲਾਓ',
    tourPause: 'Ⅱ  ਰੋਕੋ',
    takenToast: 'ਲਈ ਗਈ ਦਰਜ ਹੋਈ। ਪਰਿਵਾਰ ਇਹ ਅਪਡੇਟ ਦੇਖ ਸਕਦਾ ਹੈ।',
    routineToast: 'ਅੱਜ ਦੀ ਰੁਟੀਨ ਅਪਡੇਟ ਹੋਈ।',
    medicineAdded: 'ਦਵਾਈ ਸਮਾਂ-ਸੂਚੀ ਵਿੱਚ ਜੋੜੀ ਗਈ।',
    appointmentAdded: 'ਮੁਲਾਕਾਤ ਕੈਲੰਡਰ ਵਿੱਚ ਜੋੜੀ ਗਈ।',
    enterPin: 'ਡੈਮੋ ਲਈ ਘੱਟੋ-ਘੱਟ 4 ਅੰਕ ਦਿਓ।',
    sent: 'ਤੁਹਾਡਾ ਸੁਨੇਹਾ ਭੇਜਿਆ ਗਿਆ।',
    inviteDemo: 'ਪਰਿਵਾਰਕ ਸੱਦੇ ਡੈਮੋ ਦਾ ਹਿੱਸਾ ਹਨ। ਸੁਰੱਖਿਅਤ ਸਾਂਝ ਲਈ ਖਾਤਾ ਚਾਹੀਦਾ ਹੈ।',
    drinking: 'ਇੱਕ ਗਲਾਸ ਪਾਣੀ ਪੀਓ',
    gentleMovement: 'ਹਲਕੀ ਕਸਰਤ',
    walkOutside: 'ਥੋੜ੍ਹੀ ਤਾਜ਼ੀ ਹਵਾ',
  },
  gu: {
    menu: 'મેનુ',
    navOverview: 'ઝાંખી',
    navMedicines: 'મારી દવાઓ',
    navAppointments: 'મુલાકાતો',
    navRoutines: 'દૈનિક દિનચર્યા',
    navCircle: 'સંભાળ જૂથ',
    careCircle: 'તમારું સંભાળ જૂથ',
    membersOnline: '4 લોકો સંપર્કમાં છે',
    profileLabel: 'તમારી આરોગ્ય પ્રોફાઇલ',
    crumbHome: 'હોમ',
    overviewEyebrow: 'તમારું સ્વાસ્થ્ય, એક નજરમાં',
    greeting: 'સુપ્રભાત',
    welcome: 'નવો દિવસ નવી શરૂઆત છે. આજની સંભાળની યોજના અહીં છે.',
    todayDoses: 'આજની દવાઓ',
    of: 'માંથી',
    dosesCompleted: 'દવાઓ લીધી',
    nextVisit: 'આગામી મુલાકાત',
    tomorrow: 'કાલે',
    wellbeing: 'તંદુરસ્તીની હારમાળા',
    days: 'દિવસ',
    greatConsistency: 'તમે ખૂબ સરસ કરી રહ્યાં છો',
    members: 'સભ્યો',
    allConnected: 'બધા જોડાયેલા છે',
    medicineSchedule: 'દવાનું સમયપત્રક',
    stayOnTrack: 'એક સમયે એક ડોઝ. તમે કરી શકો છો.',
    addMedicine: 'દવા ઉમેરો',
    remindersLocal: 'આ ડેમોમાં યાદ અપાવનાર અહીં દેખાશે',
    scheduleSynced: 'હમણાં જ અપડેટ થયું ✓',
    appointmentsTitle: 'આગામી મુલાકાતો',
    planTogether: 'તમારા સ્વાસ્થ્યને સાથ આપતા લોકો અને સ્થળો.',
    addNew: 'નવી ઉમેરો',
    routinesTitle: 'મદદરૂપ નાની બાબતો',
    dailyRhythm: 'તમારી દૈનિક આરોગ્ય દિનચર્યા',
    circleTitle: 'તમારું સંભાળ જૂથ',
    alwaysInYourCorner: 'હંમેશા તમારી સાથે',
    viewAll: 'બધું જુઓ',
    sharedWithLove: 'પ્રેમથી વહેંચ્યું',
    familyUpdates: 'તમારો પરિવાર સંભાળના અપડેટ જોઈ શકે છે.',
    disclaimer:
      'Everwell સંભાળ ગોઠવવાનો ડેમો છે, તબીબી સાધન નથી. ડૉક્ટરની સૂચના અનુસરો. ડેમોની માહિતી ફક્ત આ બ્રાઉઝરમાં રહે છે.',
    askEverwell: 'Everwell ને પૂછો',
    assistantTitle: 'Everwell સાથી',
    assistantStatus: 'મદદ માટે, ડૉક્ટરનો વિકલ્પ નથી',
    assistantGreeting: 'નમસ્તે અનન્યા! 🌿 સંભાળ ગોઠવવા અને આગામી યાદ અપાવનાર શોધવા હું મદદ કરી શકું છું.',
    chatPlaceholder: 'તમારી સંભાળ વિશે પૂછો…',
    loginTitle: 'સંભાળ વધુ સારી લાગે છે <em>સાથે.</em>',
    loginLead: 'પરિવારની સાથે દવાઓ, મુલાકાતો અને રોજિંદા આરોગ્યનું ધ્યાન રાખવાની સરળ રીત.',
    pinLabel: 'પરિવાર પ્રવેશ PIN',
    continue: 'Everwell સાથે આગળ વધો →',
    pinNote: 'ડેમો: કોઈપણ 4 અંક દાખલ કરો. આ સ્થાનિક નમૂનો છે; વાસ્તવિક સુરક્ષા કે ઈમેઇલ નથી.',
    dailyCare: 'આજની સંભાળ',
    tourTitle: 'સમયસર થોડી સંભાળ.',
    tourCopy: 'તમને સારું રાખવા માટે હળવી યાદ અપાવણીઓ.',
    tourButton: '✓  સવારની દવા લીધી',
    tourCaption: 'Everwell ની ટૂંકી ઝલક',
    tourSub: '42 સેકન્ડની ઓળખાણ',
    loginWelcome: 'તમારી સંભાળની જગ્યામાં સ્વાગત છે.',
    doseTaken: 'લીધી',
    markTaken: 'લીધી તરીકે નોંધો',
    doseMissed: 'છૂટી',
    upcoming: 'આગામી',
    done: 'થઈ ગયું',
    routineDone: 'આજ માટે પૂરું',
    addMedicineTitle: 'દવા ઉમેરો',
    addAppointmentTitle: 'મુલાકાત ઉમેરો',
    medicineName: 'દવાનું નામ',
    dosage: 'ડોઝ',
    time: 'યાદ અપાવવાનો સમય',
    frequency: 'આવર્તન',
    doctorName: 'ડૉક્ટર / ક્લિનિક',
    visitDate: 'તારીખ',
    visitTime: 'સમય',
    location: 'સ્થળ',
    cancel: 'રદ કરો',
    save: 'સાચવો',
    tourModalTitle: 'શાંત સંભાળની દિનચર્યા જાણો',
    tourModalText:
      'દવાઓ, સારી ટેવો અને પોતાના લોકોને એક જગ્યાએ રાખો. આ ઇન્ટરેક્ટિવ ડેમો છે, રેકોર્ડ કરેલો વિડિયો નથી.',
    tourPlay: '▶  ટૂર ચલાવો',
    tourPause: 'Ⅱ  ટૂર રોકો',
    takenToast: 'લીધી તરીકે નોંધ્યું. પરિવાર આ અપડેટ જોઈ શકે છે.',
    routineToast: 'આજની દિનચર્યા અપડેટ થઈ.',
    medicineAdded: 'દવા સમયપત્રકમાં ઉમેરાઈ.',
    appointmentAdded: 'મુલાકાત કૅલેન્ડરમાં ઉમેરાઈ.',
    enterPin: 'ડેમો માટે ઓછામાં ઓછા 4 અંક દાખલ કરો.',
    sent: 'તમારો સંદેશ મોકલાયો.',
    inviteDemo: 'પરિવારના આમંત્રણો ડેમોનો ભાગ છે. સુરક્ષિત વહેંચણી માટે ખાતું જરૂરી છે.',
    drinking: 'એક ગ્લાસ પાણી પીવો',
    gentleMovement: 'હળવી કસરત',
    walkOutside: 'થોડી તાજી હવા',
  },
}
const extraTranslations = {
  en: {
    pinNote:
      'Demo access only. Use the configured 4-digit passcode (1234 by default). Do not enter real patient information.',
    goodMorning: 'Good morning',
    goodAfternoon: 'Good afternoon',
    goodEvening: 'Good evening',
    waterRoutineNote: '8:30 AM · morning',
    movementRoutineNote: '10:00 AM · 10 min',
    walkRoutineNote: '5:30 PM · if you feel up to it',
    familyDaughter: 'Daughter · Primary caregiver',
    familySon: 'Son · Family member',
    familyCoordinator: 'Care coordinator',
    statusOnline: '● Online',
    statusInvited: 'Invited',
    onceDaily: 'Once daily',
    twiceDaily: 'Twice daily',
    asPrescribed: 'As prescribed',
    formMedicineHelp: 'Add a reminder to Ananya’s local demo schedule.',
    formAppointmentHelp: 'Add a visit to Ananya’s local demo calendar.',
    assistantHelp:
      'You can mark medicines as taken, add a medicine or appointment, track a daily routine, and view the care circle. Choose a language from the menu. This demo does not send reminders or contact caregivers.',
    assistantSafety:
      'I can help organize information, but I cannot diagnose symptoms or advise changing a medicine. Contact your clinician about concerning symptoms. For severe or sudden symptoms, seek urgent local medical help.',
    assistantAllTaken:
      'All medicines on today’s demo schedule are marked as taken. Please follow your clinician’s instructions.',
    assistantMedicinePrefix: 'You have {count} dose(s) still marked for today: {items}.',
    assistantMedicineSuffix: 'Please follow the schedule your clinician gave you.',
    assistantAppointmentPrefix: 'Your next listed visit is {name}, {date}, at {time}{place}.',
    assistantAppointmentSuffix: 'This is a demo reminder; confirm details with the clinic.',
    assistantNoAppointments:
      'There are no upcoming visits listed yet. Add one using the appointments card.',
    assistantRoutinePrefix: 'Your daily routine includes: {items}.',
    assistantRoutineSuffix:
      'Tap the switches to track them. Choose activities that feel safe and follow your clinician’s advice.',
    assistantFamilySuffix: ' Use the Care circle card to view the sample family members.',
    assistantFallback:
      'I can help find medicines, appointments, routines, or explain the app. I cannot diagnose or replace a clinician. What would you like to check?',
  },
  hi: {
    pinNote: 'डेमो: डिफ़ॉल्ट पासकोड 1234 है। वास्तविक रोगी की जानकारी न डालें।',
    goodMorning: 'सुप्रभात',
    goodAfternoon: 'शुभ दोपहर',
    goodEvening: 'शुभ संध्या',
    waterRoutineNote: 'सुबह 8:30 · सुबह',
    movementRoutineNote: 'सुबह 10:00 · 10 मिनट',
    walkRoutineNote: 'शाम 5:30 · यदि ठीक लगे',
    familyDaughter: 'बेटी · मुख्य देखभालकर्ता',
    familySon: 'बेटा · परिवार का सदस्य',
    familyCoordinator: 'देखभाल समन्वयक',
    statusOnline: '● ऑनलाइन',
    statusInvited: 'आमंत्रित',
    onceDaily: 'दिन में एक बार',
    twiceDaily: 'दिन में दो बार',
    asPrescribed: 'निर्देशानुसार',
    formMedicineHelp: 'अनन्या की डेमो दवा-सूची में रिमाइंडर जोड़ें।',
    formAppointmentHelp: 'अनन्या के डेमो कैलेंडर में मुलाकात जोड़ें।',
    assistantHelp:
      'दवाइयों को लिया हुआ चिह्नित करें, दवा या अपॉइंटमेंट जोड़ें और दिनचर्या देखें। यह डेमो रिमाइंडर नहीं भेजता।',
    assistantSafety:
      'मैं जानकारी व्यवस्थित कर सकती हूँ, पर बीमारी का निदान या दवा बदलने की सलाह नहीं देती। लक्षणों के लिए डॉक्टर से संपर्क करें; गंभीर या अचानक लक्षणों में तुरंत स्थानीय चिकित्सा सहायता लें।',
    assistantAllTaken: 'आज की डेमो सूची की सभी दवाइयाँ ली गई चिह्नित हैं। डॉक्टर के निर्देशों का पालन करें।',
    assistantMedicinePrefix: 'आज की {count} खुराक अभी बाकी चिह्नित हैं: {items}।',
    assistantMedicineSuffix: 'डॉक्टर द्वारा दिए समय-सारणी का पालन करें।',
    assistantAppointmentPrefix: 'आपकी अगली दर्ज मुलाकात {name}, {date}, {time} पर है{place}।',
    assistantAppointmentSuffix: 'यह डेमो रिमाइंडर है; क्लिनिक से पुष्टि करें।',
    assistantNoAppointments: 'कोई आगामी मुलाकात दर्ज नहीं है। अपॉइंटमेंट कार्ड से जोड़ें।',
    assistantRoutinePrefix: 'आपकी दिनचर्या में शामिल है: {items}।',
    assistantRoutineSuffix: 'इन्हें दर्ज करने के लिए स्विच दबाएँ। सुरक्षित गतिविधियाँ चुनें।',
    assistantFamilySuffix: ' देखभाल समूह कार्ड में परिवार के नमूना सदस्य देखें।',
    assistantFallback: 'मैं दवाइयाँ, अपॉइंटमेंट और दिनचर्या खोजने में मदद कर सकती हूँ। मैं डॉक्टर का विकल्प नहीं हूँ।',
  },
  kn: {
    pinNote: 'ಡೆಮೋ: ಡೀಫಾಲ್ಟ್ ಪಾಸ್‌ಕೋಡ್ 1234. ನಿಜವಾದ ರೋಗಿಯ ಮಾಹಿತಿಯನ್ನು ನಮೂದಿಸಬೇಡಿ.',
    goodMorning: 'ಶುಭೋದಯ',
    goodAfternoon: 'ಶುಭ ಮಧ್ಯಾಹ್ನ',
    goodEvening: 'ಶುಭ ಸಂಜೆ',
    waterRoutineNote: 'ಬೆಳಿಗ್ಗೆ 8:30 · ಬೆಳಗ್ಗೆ',
    movementRoutineNote: 'ಬೆಳಿಗ್ಗೆ 10:00 · 10 ನಿಮಿಷ',
    walkRoutineNote: 'ಸಂಜೆ 5:30 · ಇಷ್ಟವಿದ್ದರೆ',
    familyDaughter: 'ಮಗಳು · ಪ್ರಮುಖ ಆರೈಕೆದಾರರು',
    familySon: 'ಮಗ · ಕುಟುಂಬದ ಸದಸ್ಯ',
    familyCoordinator: 'ಆರೈಕೆ ಸಂಯೋಜಕರು',
    statusOnline: '● ಆನ್‌ಲೈನ್',
    statusInvited: 'ಆಹ್ವಾನಿಸಲಾಗಿದೆ',
    onceDaily: 'ದಿನಕ್ಕೆ ಒಮ್ಮೆ',
    twiceDaily: 'ದಿನಕ್ಕೆ ಎರಡು ಬಾರಿ',
    asPrescribed: 'ಸೂಚನೆಯಂತೆ',
    formMedicineHelp: 'ಅನನ್ಯಾ ಅವರ ಡೆಮೋ ಔಷಧಿ ವೇಳಾಪಟ್ಟಿಗೆ ನೆನಪಿಸುವಿಕೆ ಸೇರಿಸಿ.',
    formAppointmentHelp: 'ಅನನ್ಯಾ ಅವರ ಡೆಮೋ ಕ್ಯಾಲೆಂಡರ್‌ಗೆ ಭೇಟಿ ಸೇರಿಸಿ.',
    assistantHelp:
      'ಔಷಧಿ ತೆಗೆದುಕೊಂಡಿದೆ ಎಂದು ಗುರುತಿಸಿ, ಔಷಧಿ ಅಥವಾ ಭೇಟಿಯನ್ನು ಸೇರಿಸಿ, ದಿನಚರಿಯನ್ನು ಗಮನಿಸಿ. ಈ ಡೆಮೋ ನೆನಪಿಸುವಿಕೆ ಕಳುಹಿಸುವುದಿಲ್ಲ.',
    assistantSafety:
      'ನಾನು ಮಾಹಿತಿಯನ್ನು ವ್ಯವಸ್ಥೆಗೊಳಿಸಬಲ್ಲೆ, ಆದರೆ ರೋಗನಿರ್ಣಯ ಅಥವಾ ಔಷಧಿ ಬದಲಾವಣೆಯ ಸಲಹೆ ನೀಡುವುದಿಲ್ಲ. ತೊಂದರೆಯ ಲಕ್ಷಣಗಳಿಗೆ ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ; ತೀವ್ರ ಲಕ್ಷಣಗಳಿದ್ದರೆ ತುರ್ತು ವೈದ್ಯಕೀಯ ನೆರವು ಪಡೆಯಿರಿ.',
    assistantAllTaken:
      'ಇಂದಿನ ಡೆಮೋ ವೇಳಾಪಟ್ಟಿಯ ಎಲ್ಲಾ ಔಷಧಿಗಳನ್ನು ತೆಗೆದುಕೊಂಡಿದೆ ಎಂದು ಗುರುತಿಸಲಾಗಿದೆ. ವೈದ್ಯರ ಸೂಚನೆ ಪಾಲಿಸಿ.',
    assistantMedicinePrefix: 'ಇಂದು ಇನ್ನೂ {count} ಡೋಸ್ ಬಾಕಿಯಿದೆ: {items}.',
    assistantMedicineSuffix: 'ವೈದ್ಯರು ನೀಡಿದ ವೇಳಾಪಟ್ಟಿಯನ್ನು ಅನುಸರಿಸಿ.',
    assistantAppointmentPrefix: 'ನಿಮ್ಮ ಮುಂದಿನ ಭೇಟಿ {name}, {date}, {time}{place}.',
    assistantAppointmentSuffix: 'ಇದು ಡೆಮೋ ನೆನಪಿಸುವಿಕೆ; ಕ್ಲಿನಿಕ್‌ನಲ್ಲಿ ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.',
    assistantNoAppointments: 'ಯಾವುದೇ ಭೇಟಿ ಪಟ್ಟಿ ಮಾಡಿಲ್ಲ. ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ವಿಭಾಗದಲ್ಲಿ ಸೇರಿಸಿ.',
    assistantRoutinePrefix: 'ನಿಮ್ಮ ದೈನಂದಿನ ಕ್ರಮಗಳು: {items}.',
    assistantRoutineSuffix: 'ಟ್ರ್ಯಾಕ್ ಮಾಡಲು ಸ್ವಿಚ್ ಒತ್ತಿ. ಸುರಕ್ಷಿತ ಚಟುವಟಿಕೆಗಳನ್ನು ಆರಿಸಿ.',
    assistantFamilySuffix: ' ಆರೈಕೆ ಬಳಗದ ಮಾದರಿ ಸದಸ್ಯರನ್ನು ವೀಕ್ಷಿಸಿ.',
    assistantFallback: 'ಔಷಧಿ, ಭೇಟಿ ಅಥವಾ ದಿನಚರಿಯನ್ನು ಹುಡುಕಲು ನಾನು ಸಹಾಯ ಮಾಡಬಲ್ಲೆ. ವೈದ್ಯರ ಬದಲಿಯಲ್ಲ.',
  },
  te: {
    pinNote: 'డెమో: డిఫాల్ట్ పాస్‌కోడ్ 1234. నిజమైన రోగి సమాచారాన్ని నమోదు చేయవద్దు.',
    goodMorning: 'శుభోదయం',
    goodAfternoon: 'శుభ మధ్యాహ్నం',
    goodEvening: 'శుభ సాయంత్రం',
    waterRoutineNote: 'ఉదయం 8:30 · ఉదయం',
    movementRoutineNote: 'ఉదయం 10:00 · 10 నిమిషాలు',
    walkRoutineNote: 'సాయంత్రం 5:30 · మీకు అనిపిస్తే',
    familyDaughter: 'కుమార్తె · ప్రధాన సంరక్షకురాలు',
    familySon: 'కుమారుడు · కుటుంబ సభ్యుడు',
    familyCoordinator: 'సంరక్షణ సమన్వయకర్త',
    statusOnline: '● ఆన్‌లైన్',
    statusInvited: 'ఆహ్వానించారు',
    onceDaily: 'రోజుకు ఒకసారి',
    twiceDaily: 'రోజుకు రెండుసార్లు',
    asPrescribed: 'సూచించినట్లు',
    formMedicineHelp: 'అనన్య డెమో మందుల షెడ్యూల్‌కు రిమైండర్ చేర్చండి.',
    formAppointmentHelp: 'అనన్య డెమో క్యాలెండర్‌కు అపాయింట్‌మెంట్ చేర్చండి.',
    assistantHelp:
      'మందును తీసుకున్నట్లు గుర్తించండి, మందు లేదా అపాయింట్‌మెంట్ చేర్చండి, రోజువారీ అలవాట్లను చూడండి. ఈ డెమో రిమైండర్‌లు పంపదు.',
    assistantSafety:
      'నేను సమాచారాన్ని నిర్వహించగలను కానీ రోగ నిర్ధారణ లేదా మందు మార్చే సలహా ఇవ్వలేను. సమస్యాత్మక లక్షణాలకు వైద్యుడిని సంప్రదించండి; తీవ్రమైన లక్షణాలైతే అత్యవసర వైద్య సహాయం పొందండి.',
    assistantAllTaken: 'ఈరోజు డెమో షెడ్యూల్‌లోని అన్ని మందులు తీసుకున్నట్లు గుర్తించారు. వైద్యుని సూచనలు పాటించండి.',
    assistantMedicinePrefix: 'ఈరోజు ఇంకా {count} మోతాదు(లు) మిగిలి ఉన్నాయి: {items}.',
    assistantMedicineSuffix: 'వైద్యుడు సూచించిన షెడ్యూల్‌ను పాటించండి.',
    assistantAppointmentPrefix: 'మీ తదుపరి అపాయింట్‌మెంట్ {name}, {date}, {time}{place}.',
    assistantAppointmentSuffix: 'ఇది డెమో రిమైండర్; క్లినిక్‌తో నిర్ధారించండి.',
    assistantNoAppointments: 'రాబోయే అపాయింట్‌మెంట్‌లు లేవు. అపాయింట్‌మెంట్ కార్డ్‌లో చేర్చండి.',
    assistantRoutinePrefix: 'మీ రోజువారీ అలవాట్లు: {items}.',
    assistantRoutineSuffix: 'ట్రాక్ చేయడానికి స్విచ్‌లను నొక్కండి. సురక్షితమైన పనులను ఎంచుకోండి.',
    assistantFamilySuffix: ' సంరక్షణ బృందంలో నమూనా కుటుంబ సభ్యులను చూడండి.',
    assistantFallback:
      'మందులు, అపాయింట్‌మెంట్‌లు లేదా అలవాట్లను కనుగొనడంలో సహాయం చేస్తాను. నేను వైద్యుడికి ప్రత్యామ్నాయం కాదు.',
  },
  ta: {
    pinNote: 'மாதிரி: இயல்புநிலை கடவுக்குறியீடு 1234. உண்மையான நோயாளர் தகவலை உள்ளிட வேண்டாம்.',
    goodMorning: 'காலை வணக்கம்',
    goodAfternoon: 'மதிய வணக்கம்',
    goodEvening: 'மாலை வணக்கம்',
    waterRoutineNote: 'காலை 8:30 · காலை',
    movementRoutineNote: 'காலை 10:00 · 10 நிமிடம்',
    walkRoutineNote: 'மாலை 5:30 · விருப்பமிருந்தால்',
    familyDaughter: 'மகள் · முதன்மை பராமரிப்பாளர்',
    familySon: 'மகன் · குடும்ப உறுப்பினர்',
    familyCoordinator: 'பராமரிப்பு ஒருங்கிணைப்பாளர்',
    statusOnline: '● இணைப்பில்',
    statusInvited: 'அழைக்கப்பட்டார்',
    onceDaily: 'தினமும் ஒருமுறை',
    twiceDaily: 'தினமும் இருமுறை',
    asPrescribed: 'மருத்துவர் அறிவுறுத்தியபடி',
    formMedicineHelp: 'அனன்யாவின் மாதிரி மருந்து அட்டவணையில் நினைவூட்டலைச் சேர்க்கவும்.',
    formAppointmentHelp: 'அனன்யாவின் மாதிரி நாள்காட்டியில் சந்திப்பைச் சேர்க்கவும்.',
    assistantHelp:
      'மருந்தை எடுத்ததாகக் குறிக்கவும், மருந்து அல்லது சந்திப்பைச் சேர்க்கவும், தினசரி வழக்கத்தைக் கண்காணிக்கவும். இந்த மாதிரி நினைவூட்டல்களை அனுப்பாது.',
    assistantSafety:
      'தகவலை ஒழுங்கமைக்க உதவுவேன்; நோயறிதல் செய்யவோ மருந்தை மாற்றச் சொல்லவோ முடியாது. அறிகுறிகளுக்கு மருத்துவரை அணுகவும்; தீவிர அறிகுறிகளுக்கு உடனடி மருத்துவ உதவி பெறவும்.',
    assistantAllTaken:
      'இன்றைய மாதிரி அட்டவணையில் உள்ள எல்லா மருந்துகளும் எடுத்ததாகக் குறிக்கப்பட்டுள்ளன. மருத்துவர் அறிவுரையைப் பின்பற்றவும்.',
    assistantMedicinePrefix: 'இன்று இன்னும் {count} மருந்து(கள்) குறிக்கப்படவில்லை: {items}.',
    assistantMedicineSuffix: 'மருத்துவர் கொடுத்த அட்டவணையைப் பின்பற்றவும்.',
    assistantAppointmentPrefix: 'உங்கள் அடுத்த சந்திப்பு {name}, {date}, {time}{place}.',
    assistantAppointmentSuffix: 'இது மாதிரி நினைவூட்டல்; மருத்துவமனையில் உறுதிசெய்யவும்.',
    assistantNoAppointments: 'வரவிருக்கும் சந்திப்புகள் இல்லை. சந்திப்பு அட்டையில் சேர்க்கவும்.',
    assistantRoutinePrefix: 'உங்கள் தினசரி வழக்கம்: {items}.',
    assistantRoutineSuffix: 'கண்காணிக்க சுவிட்சுகளைத் தட்டவும். பாதுகாப்பான செயல்களைத் தேர்ந்தெடுக்கவும்.',
    assistantFamilySuffix: ' பராமரிப்பு குழுவில் குடும்ப உறுப்பினர்களைக் காண்க.',
    assistantFallback: 'மருந்துகள், சந்திப்புகள் அல்லது வழக்கத்தைக் கண்டறிய உதவுவேன். மருத்துவருக்கு மாற்றல்ல.',
  },
  ml: {
    pinNote: 'ഡെമോ: സ്ഥിരസ്ഥിതി പാസ്‌കോഡ് 1234. യഥാർത്ഥ രോഗിയുടെ വിവരങ്ങൾ നൽകരുത്.',
    goodMorning: 'സുപ്രഭാതം',
    goodAfternoon: 'ശുഭ ഉച്ചതിരിഞ്ഞ്',
    goodEvening: 'ശുഭ സായാഹ്നം',
    waterRoutineNote: 'രാവിലെ 8:30 · രാവിലെ',
    movementRoutineNote: 'രാവിലെ 10:00 · 10 മിനിറ്റ്',
    walkRoutineNote: 'വൈകിട്ട് 5:30 · തോന്നുന്നുവെങ്കിൽ',
    familyDaughter: 'മകൾ · പ്രധാന പരിചാരക',
    familySon: 'മകൻ · കുടുംബാംഗം',
    familyCoordinator: 'പരിചരണ ഏകോപകൻ',
    statusOnline: '● ഓൺലൈൻ',
    statusInvited: 'ക്ഷണിച്ചു',
    onceDaily: 'ദിവസത്തിൽ ഒരിക്കൽ',
    twiceDaily: 'ദിവസത്തിൽ രണ്ടുതവണ',
    asPrescribed: 'നിർദ്ദേശിച്ചതുപോലെ',
    formMedicineHelp: 'അനന്യയുടെ ഡെമോ മരുന്ന് ക്രമത്തിൽ ഓർമ്മപ്പെടുത്തൽ ചേർക്കുക.',
    formAppointmentHelp: 'അനന്യയുടെ ഡെമോ കലണ്ടറിൽ സന്ദർശനം ചേർക്കുക.',
    assistantHelp:
      'മരുന്ന് കഴിച്ചതായി അടയാളപ്പെടുത്തുക, മരുന്നോ അപ്പോയിന്റ്മെന്റോ ചേർക്കുക, ദിനചര്യ പരിശോധിക്കുക. ഈ ഡെമോ ഓർമ്മപ്പെടുത്തലുകൾ അയയ്ക്കില്ല.',
    assistantSafety:
      'വിവരങ്ങൾ ക്രമീകരിക്കാൻ സഹായിക്കാം; രോഗനിർണയമോ മരുന്ന് മാറ്റാനുള്ള ഉപദേശമോ നൽകില്ല. ആശങ്കയുള്ള ലക്ഷണങ്ങൾക്ക് ഡോക്ടറെ ബന്ധപ്പെടുക; ഗുരുതരമായാൽ അടിയന്തര ചികിത്സ തേടുക.',
    assistantAllTaken:
      'ഇന്നത്തെ ഡെമോ ക്രമത്തിലെ എല്ലാ മരുന്നുകളും കഴിച്ചതായി അടയാളപ്പെടുത്തി. ഡോക്ടറുടെ നിർദ്ദേശം പാലിക്കുക.',
    assistantMedicinePrefix: 'ഇന്ന് {count} ഡോസ് കൂടി ബാക്കിയുണ്ട്: {items}.',
    assistantMedicineSuffix: 'ഡോക്ടർ നൽകിയ ക്രമം പാലിക്കുക.',
    assistantAppointmentPrefix: 'അടുത്ത അപ്പോയിന്റ്മെന്റ് {name}, {date}, {time}{place}.',
    assistantAppointmentSuffix: 'ഇത് ഡെമോ ഓർമ്മപ്പെടുത്തലാണ്; ക്ലിനിക്കിൽ ഉറപ്പാക്കുക.',
    assistantNoAppointments: 'വരാനിരിക്കുന്ന അപ്പോയിന്റ്മെന്റുകളില്ല. അപ്പോയിന്റ്മെന്റ് കാർഡിൽ ചേർക്കുക.',
    assistantRoutinePrefix: 'ദൈനംദിനചര്യ: {items}.',
    assistantRoutineSuffix: 'ട്രാക്ക് ചെയ്യാൻ സ്വിച്ചുകൾ ഉപയോഗിക്കുക. സുരക്ഷിതമായ പ്രവർത്തനങ്ങൾ തിരഞ്ഞെടുക്കുക.',
    assistantFamilySuffix: ' പരിചരണ വലയത്തിലെ കുടുംബാംഗങ്ങളെ കാണുക.',
    assistantFallback: 'മരുന്നുകൾ, അപ്പോയിന്റ്മെന്റുകൾ, ദിനചര്യ എന്നിവ കണ്ടെത്താൻ സഹായിക്കാം. ഡോക്ടർക്ക് പകരമല്ല.',
  },
  mr: {
    pinNote: 'डेमो: डीफॉल्ट पासकोड 1234. रुग्णांची खरी माहिती टाकू नका.',
    goodMorning: 'शुभ सकाळ',
    goodAfternoon: 'शुभ दुपार',
    goodEvening: 'शुभ संध्याकाळ',
    waterRoutineNote: 'सकाळी 8:30 · सकाळ',
    movementRoutineNote: 'सकाळी 10:00 · 10 मिनिटे',
    walkRoutineNote: 'संध्याकाळी 5:30 · इच्छा असल्यास',
    familyDaughter: 'मुलगी · मुख्य काळजीवाहक',
    familySon: 'मुलगा · कुटुंब सदस्य',
    familyCoordinator: 'काळजी समन्वयक',
    statusOnline: '● ऑनलाइन',
    statusInvited: 'आमंत्रित',
    onceDaily: 'दिवसातून एकदा',
    twiceDaily: 'दिवसातून दोनदा',
    asPrescribed: 'डॉक्टरांच्या सूचनेनुसार',
    formMedicineHelp: 'अनन्याच्या डेमो औषध वेळापत्रकात सूचना जोडा.',
    formAppointmentHelp: 'अनन्याच्या डेमो दिनदर्शिकेत भेट जोडा.',
    assistantHelp: 'औषध घेतल्याची नोंद करा, औषध किंवा भेट जोडा आणि दिनक्रम पाहा. हा डेमो सूचना पाठवत नाही.',
    assistantSafety:
      'माहिती व्यवस्थित करण्यात मदत करू शकते; निदान किंवा औषध बदलण्याचा सल्ला देऊ शकत नाही. लक्षणांसाठी डॉक्टरांशी संपर्क साधा; गंभीर लक्षणांसाठी तातडीची मदत घ्या.',
    assistantAllTaken: 'आजच्या डेमो वेळापत्रकातील सर्व औषधे घेतल्याची नोंद आहे. डॉक्टरांच्या सूचनांचे पालन करा.',
    assistantMedicinePrefix: 'आजचे आणखी {count} डोस बाकी आहेत: {items}.',
    assistantMedicineSuffix: 'डॉक्टरांनी दिलेले वेळापत्रक पाळा.',
    assistantAppointmentPrefix: 'तुमची पुढची भेट {name}, {date}, {time}{place}.',
    assistantAppointmentSuffix: 'ही डेमो सूचना आहे; क्लिनिककडून खात्री करा.',
    assistantNoAppointments: 'आगामी भेटी नाहीत. भेटीच्या कार्डमधून जोडा.',
    assistantRoutinePrefix: 'तुमचा रोजचा दिनक्रम: {items}.',
    assistantRoutineSuffix: 'नोंद ठेवण्यासाठी स्विच वापरा. सुरक्षित कृती निवडा.',
    assistantFamilySuffix: ' काळजी गटात नमुना कुटुंबीय पहा.',
    assistantFallback: 'औषधे, भेटी किंवा दिनक्रम शोधण्यात मदत करू शकते. डॉक्टरांचा पर्याय नाही.',
  },
  or: {
    pinNote: 'ଡେମୋ: ଡିଫଲ୍ଟ ପାସକୋଡ୍ 1234। ପ୍ରକୃତ ରୋଗୀଙ୍କ ସୂଚନା ଦିଅନ୍ତୁ ନାହିଁ।',
    goodMorning: 'ଶୁଭ ସକାଳ',
    goodAfternoon: 'ଶୁଭ ଅପରାହ୍ନ',
    goodEvening: 'ଶୁଭ ସନ୍ଧ୍ୟା',
    waterRoutineNote: 'ସକାଳ 8:30 · ସକାଳ',
    movementRoutineNote: 'ସକାଳ 10:00 · 10 ମିନିଟ୍',
    walkRoutineNote: 'ସନ୍ଧ୍ୟା 5:30 · ଇଚ୍ଛା ହେଲେ',
    familyDaughter: 'ଝିଅ · ମୁଖ୍ୟ ଯତ୍ନକାରୀ',
    familySon: 'ପୁଅ · ପରିବାର ସଦସ୍ୟ',
    familyCoordinator: 'ଯତ୍ନ ସଂଯୋଜକ',
    statusOnline: '● ଅନଲାଇନ୍',
    statusInvited: 'ନିମନ୍ତ୍ରିତ',
    onceDaily: 'ଦିନକୁ ଥରେ',
    twiceDaily: 'ଦିନକୁ ଦୁଇଥର',
    asPrescribed: 'ପରାମର୍ଶ ଅନୁସାରେ',
    formMedicineHelp: 'ଅନନ୍ୟାଙ୍କ ଡେମୋ ଔଷଧ ସମୟସୂଚୀରେ ମନେପକାଇବା ଯୋଡ଼ନ୍ତୁ।',
    formAppointmentHelp: 'ଅନନ୍ୟାଙ୍କ ଡେମୋ କ୍ୟାଲେଣ୍ଡରରେ ସାକ୍ଷାତ ଯୋଡ଼ନ୍ତୁ।',
    assistantHelp:
      'ଔଷଧ ଖାଇଥିବା ଚିହ୍ନ କରନ୍ତୁ, ଔଷଧ କିମ୍ବା ସାକ୍ଷାତ ଯୋଡ଼ନ୍ତୁ ଏବଂ ଦୈନିକ ଅଭ୍ୟାସ ଦେଖନ୍ତୁ। ଏହି ଡେମୋ ମନେପକାଇବା ପଠାଏ ନାହିଁ।',
    assistantSafety:
      'ମୁଁ ସୂଚନା ସଜାଡ଼ିପାରିବି, ରୋଗ ନିର୍ଣ୍ଣୟ କିମ୍ବା ଔଷଧ ବଦଳାଇବାର ପରାମର୍ଶ ଦେଇପାରିବି ନାହିଁ। ଲକ୍ଷଣ ପାଇଁ ଡାକ୍ତରଙ୍କୁ ପଚାରନ୍ତୁ; ଗୁରୁତର ହେଲେ ଜରୁରୀ ସହାୟତା ନିଅନ୍ତୁ।',
    assistantAllTaken: 'ଆଜିର ଡେମୋ ତାଲିକାର ସମସ୍ତ ଔଷଧ ଖାଇଥିବା ଚିହ୍ନ ହୋଇଛି। ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ମାନନ୍ତୁ।',
    assistantMedicinePrefix: 'ଆଜି ଆଉ {count} ଡୋଜ୍ ବାକି ଅଛି: {items}।',
    assistantMedicineSuffix: 'ଡାକ୍ତରଙ୍କ ସମୟସୂଚୀ ଅନୁସରଣ କରନ୍ତୁ।',
    assistantAppointmentPrefix: 'ଆପଣଙ୍କ ପରବର୍ତ୍ତୀ ସାକ୍ଷାତ {name}, {date}, {time}{place}।',
    assistantAppointmentSuffix: 'ଏହା ଡେମୋ ମନେପକାଇବା; କ୍ଲିନିକ୍‌ରେ ନିଶ୍ଚିତ କରନ୍ତୁ।',
    assistantNoAppointments: 'ଆଗାମୀ ସାକ୍ଷାତ ନାହିଁ। ସାକ୍ଷାତ କାର୍ଡରେ ଯୋଡ଼ନ୍ତୁ।',
    assistantRoutinePrefix: 'ଆପଣଙ୍କ ଦୈନିକ ଅଭ୍ୟାସ: {items}।',
    assistantRoutineSuffix: 'ଟ୍ରାକ୍ କରିବାକୁ ସ୍ୱିଚ୍ ଦବାନ୍ତୁ। ନିରାପଦ କାର୍ଯ୍ୟ ବାଛନ୍ତୁ।',
    assistantFamilySuffix: ' ଯତ୍ନ ଗୋଷ୍ଠୀରେ ପରିବାରକୁ ଦେଖନ୍ତୁ।',
    assistantFallback: 'ଔଷଧ, ସାକ୍ଷାତ କିମ୍ବା ଅଭ୍ୟାସ ଖୋଜିବାରେ ସାହାଯ୍ୟ କରିବି। ଡାକ୍ତରଙ୍କ ବଦଳ ନୁହେଁ।',
  },
  bn: {
    pinNote: 'ডেমো: ডিফল্ট পাসকোড 1234। প্রকৃত রোগীর তথ্য দেবেন না।',
    goodMorning: 'সুপ্রভাত',
    goodAfternoon: 'শুভ অপরাহ্ণ',
    goodEvening: 'শুভ সন্ধ্যা',
    waterRoutineNote: 'সকাল 8:30 · সকাল',
    movementRoutineNote: 'সকাল 10:00 · 10 মিনিট',
    walkRoutineNote: 'বিকেল 5:30 · ইচ্ছা হলে',
    familyDaughter: 'মেয়ে · প্রধান পরিচর্যাকারী',
    familySon: 'ছেলে · পরিবারের সদস্য',
    familyCoordinator: 'যত্ন সমন্বয়কারী',
    statusOnline: '● অনলাইন',
    statusInvited: 'আমন্ত্রিত',
    onceDaily: 'দিনে একবার',
    twiceDaily: 'দিনে দুবার',
    asPrescribed: 'নির্দেশ অনুযায়ী',
    formMedicineHelp: 'অনন্যার ডেমো ওষুধের সময়সূচিতে অনুস্মারক যোগ করুন।',
    formAppointmentHelp: 'অনন্যার ডেমো ক্যালেন্ডারে অ্যাপয়েন্টমেন্ট যোগ করুন।',
    assistantHelp:
      'ওষুধ নেওয়া হয়েছে চিহ্নিত করুন, ওষুধ বা অ্যাপয়েন্টমেন্ট যোগ করুন এবং রুটিন দেখুন। এই ডেমো অনুস্মারক পাঠায় না।',
    assistantSafety:
      'আমি তথ্য গুছিয়ে দিতে পারি, রোগ নির্ণয় বা ওষুধ বদলানোর পরামর্শ দিতে পারি না। উপসর্গ হলে চিকিৎসকের সঙ্গে যোগাযোগ করুন; গুরুতর হলে জরুরি চিকিৎসা নিন।',
    assistantAllTaken: 'আজকের ডেমো তালিকার সব ওষুধ নেওয়া হয়েছে চিহ্নিত। চিকিৎসকের নির্দেশ মানুন।',
    assistantMedicinePrefix: 'আজ আরও {count}টি ডোজ বাকি আছে: {items}।',
    assistantMedicineSuffix: 'চিকিৎসকের সময়সূচি অনুসরণ করুন।',
    assistantAppointmentPrefix: 'আপনার পরবর্তী অ্যাপয়েন্টমেন্ট {name}, {date}, {time}{place}।',
    assistantAppointmentSuffix: 'এটি ডেমো অনুস্মারক; ক্লিনিকে নিশ্চিত করুন।',
    assistantNoAppointments: 'আসন্ন অ্যাপয়েন্টমেন্ট নেই। অ্যাপয়েন্টমেন্ট কার্ডে যোগ করুন।',
    assistantRoutinePrefix: 'আপনার দৈনন্দিন রুটিন: {items}।',
    assistantRoutineSuffix: 'ট্র্যাক করতে সুইচ চাপুন। নিরাপদ কাজ বেছে নিন।',
    assistantFamilySuffix: ' যত্নের বৃত্তে পরিবারের সদস্যদের দেখুন।',
    assistantFallback: 'ওষুধ, অ্যাপয়েন্টমেন্ট বা রুটিন খুঁজতে সাহায্য করতে পারি। চিকিৎসকের বিকল্প নই।',
  },
  pa: {
    pinNote: 'ਡੈਮੋ: ਮੂਲ ਪਾਸਕੋਡ 1234 ਹੈ। ਅਸਲ ਮਰੀਜ਼ ਦੀ ਜਾਣਕਾਰੀ ਨਾ ਪਾਓ।',
    goodMorning: 'ਸਤ ਸ੍ਰੀ ਅਕਾਲ',
    goodAfternoon: 'ਸ਼ੁਭ ਦੁਪਹਿਰ',
    goodEvening: 'ਸ਼ੁਭ ਸ਼ਾਮ',
    waterRoutineNote: 'ਸਵੇਰੇ 8:30 · ਸਵੇਰ',
    movementRoutineNote: 'ਸਵੇਰੇ 10:00 · 10 ਮਿੰਟ',
    walkRoutineNote: 'ਸ਼ਾਮ 5:30 · ਜੇ ਮਨ ਹੋਵੇ',
    familyDaughter: 'ਧੀ · ਮੁੱਖ ਦੇਖਭਾਲਕਰਤਾ',
    familySon: 'ਪੁੱਤਰ · ਪਰਿਵਾਰਕ ਮੈਂਬਰ',
    familyCoordinator: 'ਦੇਖਭਾਲ ਪ੍ਰਬੰਧਕ',
    statusOnline: '● ਆਨਲਾਈਨ',
    statusInvited: 'ਸੱਦਾ ਦਿੱਤਾ',
    onceDaily: 'ਰੋਜ਼ ਇੱਕ ਵਾਰ',
    twiceDaily: 'ਰੋਜ਼ ਦੋ ਵਾਰ',
    asPrescribed: 'ਡਾਕਟਰ ਦੀ ਹਦਾਇਤ ਮੁਤਾਬਕ',
    formMedicineHelp: 'ਅਨਨਿਆ ਦੇ ਡੈਮੋ ਦਵਾਈ ਸਮਾਂ-ਸੂਚੀ ਵਿੱਚ ਯਾਦ-ਦਹਾਨੀ ਜੋੜੋ।',
    formAppointmentHelp: 'ਅਨਨਿਆ ਦੇ ਡੈਮੋ ਕੈਲੰਡਰ ਵਿੱਚ ਮੁਲਾਕਾਤ ਜੋੜੋ।',
    assistantHelp: 'ਦਵਾਈ ਲਈ ਗਈ ਦਰਜ ਕਰੋ, ਦਵਾਈ ਜਾਂ ਮੁਲਾਕਾਤ ਜੋੜੋ ਅਤੇ ਰੁਟੀਨ ਵੇਖੋ। ਇਹ ਡੈਮੋ ਯਾਦ-ਦਹਾਨੀ ਨਹੀਂ ਭੇਜਦਾ।',
    assistantSafety:
      'ਮੈਂ ਜਾਣਕਾਰੀ ਸੰਭਾਲ ਸਕਦਾ ਹਾਂ ਪਰ ਬਿਮਾਰੀ ਦੀ ਪਛਾਣ ਜਾਂ ਦਵਾਈ ਬਦਲਣ ਦੀ ਸਲਾਹ ਨਹੀਂ ਦੇ ਸਕਦਾ। ਲੱਛਣਾਂ ਲਈ ਡਾਕਟਰ ਨਾਲ ਗੱਲ ਕਰੋ; ਗੰਭੀਰ ਹੋਣ ਤੇ ਤੁਰੰਤ ਡਾਕਟਰੀ ਮਦਦ ਲਵੋ।',
    assistantAllTaken: 'ਅੱਜ ਦੀ ਡੈਮੋ ਸੂਚੀ ਦੀਆਂ ਸਾਰੀਆਂ ਦਵਾਈਆਂ ਲਈਆਂ ਦਰਜ ਹਨ। ਡਾਕਟਰ ਦੀ ਸਲਾਹ ਮੰਨੋ।',
    assistantMedicinePrefix: 'ਅੱਜ ਦੀਆਂ {count} ਖੁਰਾਕਾਂ ਅਜੇ ਬਾਕੀ ਹਨ: {items}।',
    assistantMedicineSuffix: 'ਡਾਕਟਰ ਦੀ ਸਮਾਂ-ਸੂਚੀ ਮੰਨੋ।',
    assistantAppointmentPrefix: 'ਤੁਹਾਡੀ ਅਗਲੀ ਮੁਲਾਕਾਤ {name}, {date}, {time}{place} ਹੈ।',
    assistantAppointmentSuffix: 'ਇਹ ਡੈਮੋ ਯਾਦ-ਦਹਾਨੀ ਹੈ; ਕਲੀਨਿਕ ਤੋਂ ਪੁਸ਼ਟੀ ਕਰੋ।',
    assistantNoAppointments: 'ਕੋਈ ਆਉਣ ਵਾਲੀ ਮੁਲਾਕਾਤ ਨਹੀਂ। ਮੁਲਾਕਾਤ ਕਾਰਡ ਵਿੱਚ ਜੋੜੋ।',
    assistantRoutinePrefix: 'ਤੁਹਾਡੀ ਰੋਜ਼ਾਨਾ ਰੁਟੀਨ: {items}।',
    assistantRoutineSuffix: 'ਦਰਜ ਕਰਨ ਲਈ ਸਵਿੱਚ ਦਬਾਓ। ਸੁਰੱਖਿਅਤ ਕੰਮ ਚੁਣੋ।',
    assistantFamilySuffix: ' ਦੇਖਭਾਲ ਸਮੂਹ ਵਿੱਚ ਪਰਿਵਾਰਕ ਮੈਂਬਰ ਵੇਖੋ।',
    assistantFallback: 'ਦਵਾਈਆਂ, ਮੁਲਾਕਾਤਾਂ ਜਾਂ ਰੁਟੀਨ ਲੱਭਣ ਵਿੱਚ ਮਦਦ ਕਰ ਸਕਦਾ ਹਾਂ। ਡਾਕਟਰ ਦਾ ਬਦਲ ਨਹੀਂ।',
  },
  gu: {
    pinNote: 'ડેમો: મૂળ પાસકોડ 1234 છે. દર્દીની સાચી માહિતી દાખલ કરશો નહીં.',
    goodMorning: 'સુપ્રભાત',
    goodAfternoon: 'શુભ બપોર',
    goodEvening: 'શુભ સાંજ',
    waterRoutineNote: 'સવારે 8:30 · સવાર',
    movementRoutineNote: 'સવારે 10:00 · 10 મિનિટ',
    walkRoutineNote: 'સાંજે 5:30 · ઇચ્છા હોય તો',
    familyDaughter: 'પુત્રી · મુખ્ય સંભાળક',
    familySon: 'પુત્ર · પરિવારનો સભ્ય',
    familyCoordinator: 'સંભાળ સંયોજક',
    statusOnline: '● ઑનલાઇન',
    statusInvited: 'આમંત્રિત',
    onceDaily: 'દિવસમાં એકવાર',
    twiceDaily: 'દિવસમાં બે વાર',
    asPrescribed: 'સૂચના મુજબ',
    formMedicineHelp: 'અનન્યાના ડેમો દવા સમયપત્રકમાં યાદ અપાવનાર ઉમેરો.',
    formAppointmentHelp: 'અનન્યાના ડેમો કૅલેન્ડરમાં મુલાકાત ઉમેરો.',
    assistantHelp: 'દવા લીધી તરીકે નોંધો, દવા કે મુલાકાત ઉમેરો અને દિનચર્યા જુઓ. આ ડેમો યાદ અપાવતું નથી.',
    assistantSafety:
      'હું માહિતી ગોઠવી શકું છું, નિદાન કે દવા બદલવાની સલાહ આપી શકતો નથી. લક્ષણો માટે ડૉક્ટરનો સંપર્ક કરો; ગંભીર હોય તો તાત્કાલિક સારવાર મેળવો.',
    assistantAllTaken: 'આજની ડેમો યાદીની બધી દવાઓ લીધી તરીકે નોંધાઈ છે. ડૉક્ટરની સૂચના અનુસરો.',
    assistantMedicinePrefix: 'આજે હજુ {count} ડોઝ બાકી છે: {items}.',
    assistantMedicineSuffix: 'ડૉક્ટરના સમયપત્રકનું પાલન કરો.',
    assistantAppointmentPrefix: 'તમારી આગામી મુલાકાત {name}, {date}, {time}{place}.',
    assistantAppointmentSuffix: 'આ ડેમો યાદ અપાવનાર છે; ક્લિનિકમાં ખાતરી કરો.',
    assistantNoAppointments: 'આગામી મુલાકાતો નથી. મુલાકાત કાર્ડમાં ઉમેરો.',
    assistantRoutinePrefix: 'તમારી દૈનિક દિનચર્યા: {items}.',
    assistantRoutineSuffix: 'નોંધવા માટે સ્વિચ દબાવો. સલામત પ્રવૃત્તિઓ પસંદ કરો.',
    assistantFamilySuffix: ' સંભાળ જૂથમાં પરિવારના સભ્યો જુઓ.',
    assistantFallback: 'દવાઓ, મુલાકાતો અથવા દિનચર્યા શોધવામાં મદદ કરી શકું છું. ડૉક્ટરનો વિકલ્પ નથી.',
  },
}
Object.entries(extraTranslations).forEach(([code, values]) =>
  Object.assign(translations[code], values),
)
const english = translations.en
Object.assign(english, {
  pageMedicineTotal: 'Scheduled medicines',
  pageMedicineTotalNote: 'in your daily plan',
  pageMedicineTaken: 'Taken today',
  pageMedicineRemaining: 'Still to take',
  pageMedicineReminder: 'Check the times below',
  pageMedicineProgress: "Today's progress",
  pageMedicineProgressNote: 'based on marked doses',
  pageMedicineListNote: 'Review your plan and mark a dose when taken.',
  pageMedicineTipTitle: 'A gentle reminder',
  pageMedicineTip:
    'Use the schedule your clinician provided. If a dose is unclear or missed, check with your pharmacist or clinician rather than changing it yourself.',
  noMedicinesRemaining: 'No doses in this group.',
  pageAppointmentCount: 'Visits on your calendar',
  pageAppointmentCountNote: 'saved in this care plan',
  pageAppointmentUpcoming: 'Coming up',
  pageAppointmentUpcomingNote: 'upcoming visits',
  pageAppointmentListNote: 'Keep visit details and directions close at hand.',
  pageAppointmentPast: 'Past',
  pageAppointmentTipTitle: 'Before your visit',
  pageAppointmentTipOne: 'Write down questions you want to ask.',
  pageAppointmentTipTwo: 'Bring your current medicine list.',
  pageAppointmentTipThree: 'Confirm the time and location with the clinic.',
  pageCalendarNote: 'Calendar links open Google Calendar only when selected.',
  pageRoutineDone: 'Completed today',
  pageRoutineCount: 'daily routines',
  pageRoutineOf: 'of',
  pageRoutineProgress: "Today's rhythm",
  pageRoutineListNote: 'Tap a switch when you finish an activity.',
  pageRoutineTipTitle: 'Small steps count',
  pageRoutineTip:
    'Choose a comfortable pace. You can adjust your routines with support from your care team.',
  pageCircleMembers: 'People in your circle',
  pageCircleStatus: 'Sharing status',
  pageCircleDemo: 'Demo',
  pageCircleStatusNote: 'Sample household information',
  pageCircleShareTitle: 'Sharing with care',
  pageCircleShareCopy:
    'In a connected care plan, trusted family members can help keep routines and visits organized.',
  pageInviteFamily: 'Invite family',
  authSignIn: 'Sign in',
  authCreateAccount: 'Create account',
  authAdmin: 'Admin',
  authEmail: 'Email address',
  authPassword: 'Password',
  authName: 'Your name',
  authNewPassword: 'Create a password (8+ characters)',
  authAdminPin: 'Administrator PIN',
  authGuest: 'Continue as guest',
  authUsePin: 'Use family demo PIN',
  authDemoNote: 'Demo only. Do not enter real patient information or reuse a personal password.',
  authAccountNote: 'Sign in to your demo care account.',
  authRegisterNote: 'Accounts are stored only in this local demo. Do not use a personal password.',
  authAdminNote: 'Administrator access is for this local demo only.',
  authPinNote: 'Demo family PIN: 1234 by default. Change it with DEMO_PIN.',
  authRegisterSubmit: 'Create account',
  authAdminSubmit: 'Sign in as admin',
  authPinSubmit: 'Continue with PIN',
  authGuestNote: 'Guest access uses sample data. Your changes are shared in this demo household.',
  authServerRequired:
    'Account creation and admin access require the local server. Choose guest access for a standalone preview.',
  authRoleGuest: 'Guest access',
  authRoleMember: 'Family member',
  authRoleAdmin: 'Administrator',
  navAiSolutions: 'AI Solutions & Preventions',
  navEmergency: 'Emergency',
  pageWellbeingLabel: 'EARLY AWARENESS, GENTLE SUPPORT',
  pageAiLead: 'Notice changes early and share concerns with the care team.',
  pageAiSafetyTitle: 'Support, not diagnosis',
  pageAiSafetyCopy:
    'This demo offers general prevention reminders only. It cannot identify a condition or replace professional medical advice.',
  pageCheckInTitle: 'Care check-in',
  pageCheckInCopy: 'Choose the closest description to see a safe next step.',
  pageSymptomLabel: 'What has changed?',
  pageSymptomRoutine: 'No new or worsening concern',
  pageSymptomChange: 'A new or worsening symptom',
  pageSymptomUrgent: 'A severe or sudden warning sign',
  pageGetGuidance: 'Show suggested next step',
  pageRoutineGuidance: 'Keep following the care plan and share new concerns with the care team.',
  pageChangeGuidance:
    'Contact the person’s clinician promptly about a new or worsening symptom. Do not change medicines based on this demo.',
  pageUrgentGuidance:
    'Call 112 now for immediate danger or severe sudden symptoms. This app cannot contact emergency services.',
  pageRedFlagsTitle: 'Get urgent help for',
  pageRedFlagsCopy:
    'Sudden trouble breathing, chest pain, fainting or unresponsiveness, severe bleeding, or possible stroke signs such as face drooping, arm weakness, or speech trouble.',
  pageOpenEmergency: 'Open emergency options',
  pagePreventionMedicine: 'Medicine safety',
  pagePreventionMedicineCopy:
    'Use the prescribed schedule. Ask a clinician or pharmacist before changing or repeating a dose.',
  pagePreventionFalls: 'Reduce fall risks',
  pagePreventionFallsCopy:
    'Keep walkways lit and clear, use familiar supports, and report new dizziness or falls to a clinician.',
  pagePreventionHydration: 'Everyday comfort',
  pagePreventionHydrationCopy:
    'Offer fluids and rest as appropriate, while following any individual fluid or activity guidance from the care team.',
  pageEmergencyLabel: 'FAST, CLEAR OPTIONS',
  pageEmergencyLead: 'If someone may be in immediate danger, call local emergency services now.',
  pageEmergencyNow: 'Do not wait for this app in an emergency.',
  pageEmergencyAdvice: 'Call for urgent help and follow the dispatcher’s instructions.',
  pageEmergencyServices: 'Emergency services',
  pageEmergencyServicesCopy:
    'India emergency number. Use for immediate danger or severe sudden symptoms.',
  pageAmbulance: 'Ambulance',
  pageAmbulanceCopy: 'Call 108 where available in your state. If unavailable, call 112.',
  pageCallNow: 'Call now',
  pageFindHospital: 'Find nearby hospitals',
  pageLocationPrivacy:
    'Location is requested only after you tap; Maps opens only if you choose its link.',
  pageUseLocation: 'Use my location',
  pageLocationIdle: 'Your location is not being accessed.',
  pageLocationRequest: 'Requesting location permission…',
  pageLocationReady: 'Location ready. Open Maps only if you choose to share it there.',
  pageLocationDenied:
    'Location was unavailable or permission was denied. You can still call emergency services.',
  pageOpenMap: 'Open nearby hospitals in Maps',
  pageCallDoctor: 'Contact your doctor',
  pageDoctorNumberNote:
    'Enter a number you already trust. It stays in this page and is not sent to the server.',
  pageDoctorPhone: 'Doctor or clinic phone',
  pageCallDoctorNow: 'Call doctor',
  pageDoctorPhoneHelp:
    'Add a number to enable the call link. Your phone will ask before placing a call.',
  pageDoctorPhoneInvalid: 'Enter a valid phone number (7–15 digits).',
  pageDoctorPhoneReady: 'Ready. Tap Call doctor to place the call from your phone.',
})
english.authAdminNote = 'Demo administrator access. Default PIN: 5678 (change with ADMIN_PIN).'
english.pageAiSafetyCopy =
  'This demo offers general prevention reminders only. It does not monitor symptoms or alert caregivers, cannot identify a condition, and does not replace professional medical advice.'
Object.assign(english, {
  navAdmin: 'Admin desk',
  requestHelpTitle: 'Send a request to the care administrator',
  requestHelpCopy:
    'Your request will appear in the administrator’s care desk. You can follow its status here.',
  requestTitleLabel: 'What do you need help with?',
  requestCategoryLabel: 'Request type',
  requestDetailsLabel: 'Details',
  requestPriorityLabel: 'Priority',
  requestSubmit: 'Send to administrator',
  requestSafetyNote:
    'For an immediate emergency, call local emergency services. This request is not monitored as an emergency alert.',
  requestCare: 'Care support',
  requestMedication: 'Medication check',
  requestAppointment: 'Appointment',
  requestContact: 'Contact a doctor or hospital',
  requestOther: 'Other',
  requestNormal: 'Routine',
  requestUrgent: 'Urgent follow-up',
  requestLoadError: 'Could not load your care requests.',
  requestSubmitError: 'Your request could not be sent. Please try again.',
  requestSubmitted: 'Your request was sent to the care administrator.',
  requestSubmittedRefreshError:
    'Your request was sent, but its status could not be refreshed. Reopen Care circle to check.',
  requestNoTasks: 'You have not sent any requests yet.',
  taskStatusOpen: 'Received',
  taskStatusProgress: 'In progress',
  taskStatusCompleted: 'Completed',
  taskAssigned: 'Assigned to administrator',
  taskAdminReply: 'Administrator update',
  taskRequester: 'Requested by',
  taskUrgent: 'Urgent follow-up',
  adminTitle: 'Administrator care desk',
  adminLead:
    'Review household requests, verify medication check-ins, and reach local care contacts.',
  adminOpenRequests: 'Open requests',
  adminOpenRequestsNote: 'awaiting follow-up',
  adminMedicationCount: 'Medication entries',
  adminMedicationCountNote: 'in the shared care plan',
  adminVerifiedCount: 'Reviewed',
  adminVerifiedCountNote: 'medication check-ins',
  adminRequestsTitle: 'Requests from users and guests',
  adminRequestsCopy: 'Every submitted request is routed here for administrator follow-up.',
  adminNoRequests: 'No user or guest requests yet.',
  adminMedicationTitle: 'Medication verification',
  adminMedicationCopy:
    'Review the shared schedule and check-in status. Verification does not change whether a dose is marked taken.',
  adminMedicationEmpty: 'No medicines are listed in the shared care plan.',
  adminMarkReviewed: 'Mark reviewed',
  adminReviewed: 'Reviewed',
  adminReviewAgain: 'Review again',
  adminNotReviewed: 'Not reviewed yet',
  adminReviewError: 'Could not save this medication review.',
  adminTaskSave: 'Save update',
  adminTaskSaveError: 'Could not update this care request.',
  adminTaskSaved: 'The care request was updated.',
  adminReviewSaved: 'Medication review saved.',
  adminContactsTitle: 'Hospitals and doctor contacts',
  adminContactsCopy:
    'Calls happen only when you choose a call link. Use location search to open nearby hospitals in Maps.',
  adminLocationDenied:
    'Location was unavailable or permission was denied. You can still call emergency services.',
  adminLocationRequest: 'Requesting location permission…',
  adminLocationReady: 'Location ready. Open Maps only if you choose to share it there.',
  adminDoctorHelp:
    'Add a trusted number to enable the call link. Your phone will ask before placing a call.',
  adminDoctorInvalid: 'Enter a valid phone number (7–15 digits).',
  adminDoctorReady: 'Ready. Tap Call doctor to place the call from your phone.',
  adminOnly: 'This page is available to administrators only.',
})
Object.assign(english, {
  navReports: 'Reports',
  reportEyebrow: 'CLEAR SHARED CARE INFORMATION',
  reportLead: 'A simple medication snapshot for family members and caregivers.',
  reportMedicationTitle: 'MEDICATION REPORT',
  reportScope: 'Current daily plan · status for today only',
  reportGenerated: 'Prepared',
  reportTotal: 'Scheduled',
  reportTaken: 'Marked taken',
  reportPending: 'Needs confirmation',
  reportTableCaption: 'Medication plan and today’s check-in',
  reportMedicine: 'Medicine',
  reportInstructions: 'Dose / instructions',
  reportTime: 'Scheduled time',
  reportStatus: 'Today’s status',
  reportTakenStatus: 'Marked taken',
  reportPendingStatus: 'Needs confirmation',
  reportEmpty: 'No medicines are listed in this plan.',
  reportDisclaimer:
    'This is a convenience snapshot of the demo schedule, not a medical record. “Needs confirmation” means no one has marked that dose taken here; it does not confirm whether it was missed. Check with the person and follow the clinician’s instructions.',
  reportDownload: 'Download CSV',
  reportPrint: 'Print / Save PDF',
  textSize: 'Text size',
  decreaseText: 'Decrease text size',
  increaseText: 'Increase text size',
  tourSlideOneTitle: 'Keep medicines clear',
  tourSlideOneCopy: 'See today’s medicines, dose notes, and what is marked taken in one place.',
  tourSlideTwoTitle: 'Stay ready for visits',
  tourSlideTwoCopy: 'Keep appointment dates, clinic details, and calendar links together.',
  tourSlideThreeTitle: 'Build gentle routines',
  tourSlideThreeCopy: 'Track everyday wellbeing activities with simple check-ins.',
  tourSlideFourTitle: 'Find help quickly',
  tourSlideFourCopy: 'Open emergency call options or look for nearby hospitals when needed.',
})
const newNavTranslations = {
  hi: {
    navReports: 'रिपोर्ट',
    navAiSolutions: 'एआई समाधान और रोकथाम',
    navEmergency: 'आपातकाल',
    authGuest: 'अतिथि के रूप में जारी रखें',
  },
  kn: {
    navReports: 'ವರದಿಗಳು',
    navAiSolutions: 'AI ಪರಿಹಾರಗಳು ಮತ್ತು ತಡೆಗಟ್ಟುವಿಕೆ',
    navEmergency: 'ತುರ್ತು ಪರಿಸ್ಥಿತಿ',
    authGuest: 'ಅತಿಥಿಯಾಗಿ ಮುಂದುವರಿಯಿರಿ',
  },
  te: {
    navReports: 'నివేదికలు',
    navAiSolutions: 'AI పరిష్కారాలు మరియు నివారణలు',
    navEmergency: 'అత్యవసర పరిస్థితి',
    authGuest: 'అతిథిగా కొనసాగండి',
  },
  ta: {
    navReports: 'அறிக்கைகள்',
    navAiSolutions: 'AI தீர்வுகள் மற்றும் தடுப்பு',
    navEmergency: 'அவசரநிலை',
    authGuest: 'விருந்தினராகத் தொடரவும்',
  },
  ml: {
    navReports: 'റിപ്പോർട്ടുകൾ',
    navAiSolutions: 'AI പരിഹാരങ്ങളും പ്രതിരോധവും',
    navEmergency: 'അടിയന്തരാവസ്ഥ',
    authGuest: 'അതിഥിയായി തുടരുക',
  },
  mr: {
    navReports: 'अहवाल',
    navAiSolutions: 'AI उपाय आणि प्रतिबंध',
    navEmergency: 'आणीबाणी',
    authGuest: 'पाहुणे म्हणून पुढे जा',
  },
  or: {
    navReports: 'ରିପୋର୍ଟ',
    navAiSolutions: 'AI ସମାଧାନ ଏବଂ ପ୍ରତିରୋଧ',
    navEmergency: 'ଜରୁରୀକାଳୀନ',
    authGuest: 'ଅତିଥି ଭାବେ ଜାରି ରଖନ୍ତୁ',
  },
  bn: {
    navReports: 'প্রতিবেদন',
    navAiSolutions: 'AI সমাধান ও প্রতিরোধ',
    navEmergency: 'জরুরি অবস্থা',
    authGuest: 'অতিথি হিসেবে চালিয়ে যান',
  },
  pa: {
    navReports: 'ਰਿਪੋਰਟਾਂ',
    navAiSolutions: 'AI ਹੱਲ ਅਤੇ ਰੋਕਥਾਮ',
    navEmergency: 'ਐਮਰਜੈਂਸੀ',
    authGuest: 'ਮਹਿਮਾਨ ਵਜੋਂ ਜਾਰੀ ਰੱਖੋ',
  },
  gu: {
    navReports: 'અહેવાલો',
    navAiSolutions: 'AI ઉકેલો અને નિવારણ',
    navEmergency: 'કટોકટી',
    authGuest: 'મહેમાન તરીકે ચાલુ રાખો',
  },
}
Object.entries(newNavTranslations).forEach(([code, labels]) =>
  Object.assign(translations[code], labels),
)
const adminNavigationTranslations = {
  hi: 'देखभाल प्रशासक',
  kn: 'ಆರೈಕೆ ನಿರ್ವಾಹಕ',
  te: 'సంరక్షణ నిర్వాహకుడు',
  ta: 'பராமரிப்பு நிர்வாகி',
  ml: 'പരിചരണ അഡ്മിൻ',
  mr: 'काळजी प्रशासक',
  or: 'ଯତ୍ନ ପ୍ରଶାସକ',
  bn: 'পরিচর্যা প্রশাসক',
  pa: 'ਦੇਖਭਾਲ ਪ੍ਰਬੰਧਕ',
  gu: 'સંભાળ સંચાલક',
}
Object.entries(adminNavigationTranslations).forEach(
  ([code, label]) => (translations[code].navAdmin = label),
)
Object.assign(english, {
  adminMenu: 'ADMIN MENU',
  assistantEmergency:
    'This could be an emergency. Call for help now—do not wait for this chat. In India, call 112 for emergency services or 108 for an ambulance. Tell the dispatcher your location and symptoms, then follow their instructions.',
  assistantCall112: 'Emergency services',
  assistantCall108: 'Ambulance',
  assistantOpenEmergency: 'Open emergency options',
  assistantHospitalGuidance:
    'Open Emergency options and choose Use my location to look for nearby hospitals. Your location is requested only after you tap.',
  assistantRequestGuidance:
    'Open Care circle to review requests you sent and any administrator updates.',
  assistantAdminSummary:
    'There are {open} open requests, {medications} medication entries, and {reviewed} reviewed medication entries.',
  assistantMedicineInfo:
    'I can show the medicines in this demo schedule, but I cannot safely explain a medicine or recommend how to take it. Check its label and ask your pharmacist or clinician.',
  assistantGeneralFallback:
    'I can help with medicines, appointments, care requests, routines, safety, and using Everwell. This demo has no live AI or web access, so I may not know unrelated or current answers. Tell me the topic and what help you need.',
})
const assistantTranslations = {
  hi: {
    adminMenu: 'प्रशासक मेनू',
    assistantEmergency:
      'यह आपात स्थिति हो सकती है। अभी मदद के लिए कॉल करें—इस चैट का इंतज़ार न करें। भारत में आपात सेवा के लिए 112 या एम्बुलेंस के लिए 108 पर कॉल करें। डिस्पैचर को अपना स्थान और लक्षण बताएं और उनके निर्देश मानें।',
    assistantCall112: 'आपातकालीन सेवा',
    assistantCall108: 'एम्बुलेंस',
    assistantOpenEmergency: 'आपातकालीन विकल्प खोलें',
    assistantHospitalGuidance:
      'नज़दीकी अस्पताल देखने के लिए आपातकालीन विकल्प खोलें और “मेरे स्थान का उपयोग करें” चुनें। आपकी अनुमति के बिना स्थान नहीं लिया जाएगा।',
    assistantRequestGuidance: 'अपने भेजे अनुरोध और प्रशासक के अपडेट देखने के लिए देखभाल समूह खोलें।',
  },
  kn: {
    adminMenu: 'ನಿರ್ವಾಹಕ ಮೆನು',
    assistantEmergency:
      'ಇದು ತುರ್ತು ಪರಿಸ್ಥಿತಿಯಾಗಿರಬಹುದು. ಈಗಲೇ ಸಹಾಯಕ್ಕೆ ಕರೆ ಮಾಡಿ—ಈ ಚಾಟ್‌ಗಾಗಿ ಕಾಯಬೇಡಿ. ಭಾರತದಲ್ಲಿ ತುರ್ತು ಸೇವೆಗೆ 112 ಅಥವಾ ಆಂಬುಲೆನ್ಸ್‌ಗೆ 108 ಕರೆಮಾಡಿ. ನಿಮ್ಮ ಸ್ಥಳ ಮತ್ತು ಲಕ್ಷಣಗಳನ್ನು ತಿಳಿಸಿ, ಕರೆ ಸ್ವೀಕರಿಸುವವರ ಸೂಚನೆಗಳನ್ನು ಅನುಸರಿಸಿ.',
    assistantCall112: 'ತುರ್ತು ಸೇವೆ',
    assistantCall108: 'ಆಂಬುಲೆನ್ಸ್',
    assistantOpenEmergency: 'ತುರ್ತು ಆಯ್ಕೆಗಳನ್ನು ತೆರೆಯಿರಿ',
    assistantHospitalGuidance:
      'ಹತ್ತಿರದ ಆಸ್ಪತ್ರೆಗಳನ್ನು ಹುಡುಕಲು ತುರ್ತು ಆಯ್ಕೆಗಳನ್ನು ತೆರೆದು “ನನ್ನ ಸ್ಥಳ ಬಳಸಿ” ಆಯ್ಕೆಮಾಡಿ. ನೀವು ಒಪ್ಪಿದಾಗ ಮಾತ್ರ ಸ್ಥಳವನ್ನು ಕೇಳಲಾಗುತ್ತದೆ.',
    assistantRequestGuidance:
      'ನೀವು ಕಳುಹಿಸಿದ ವಿನಂತಿಗಳು ಮತ್ತು ನಿರ್ವಾಹಕರ ನವೀಕರಣಗಳನ್ನು ನೋಡಲು ಆರೈಕೆ ಬಳಗವನ್ನು ತೆರೆಯಿರಿ.',
  },
  te: {
    adminMenu: 'నిర్వాహక మెను',
    assistantEmergency:
      'ఇది అత్యవసర పరిస్థితి కావచ్చు. ఇప్పుడే సహాయం కోసం కాల్ చేయండి—ఈ చాట్ కోసం వేచి ఉండకండి. భారతదేశంలో అత్యవసర సేవలకు 112 లేదా అంబులెన్స్‌కు 108కు కాల్ చేయండి. మీ స్థలం, లక్షణాలను చెప్పి డిస్పాచర్ సూచనలు పాటించండి.',
    assistantCall112: 'అత్యవసర సేవలు',
    assistantCall108: 'అంబులెన్స్',
    assistantOpenEmergency: 'అత్యవసర ఎంపికలను తెరవండి',
    assistantHospitalGuidance:
      'సమీప ఆసుపత్రుల కోసం అత్యవసర ఎంపికలను తెరిచి “నా స్థానాన్ని ఉపయోగించు” ఎంచుకోండి. మీరు నొక్కిన తర్వాతే స్థానం అడుగుతుంది.',
    assistantRequestGuidance: 'మీరు పంపిన అభ్యర్థనలు, నిర్వాహకుడి నవీకరణలు చూడడానికి సంరక్షణ వలయాన్ని తెరవండి.',
  },
  ta: {
    adminMenu: 'நிர்வாக மெனு',
    assistantEmergency:
      'இது அவசரநிலையாக இருக்கலாம். இப்போதே உதவிக்கு அழைக்கவும்—இந்த உரையாடலுக்காக காத்திருக்க வேண்டாம். இந்தியாவில் அவசர சேவைக்கு 112 அல்லது ஆம்புலன்ஸுக்கு 108 அழைக்கவும். உங்கள் இருப்பிடத்தையும் அறிகுறிகளையும் தெரிவித்து, அழைப்பை ஏற்கும் நபரின் வழிமுறைகளைப் பின்பற்றவும்.',
    assistantCall112: 'அவசர சேவைகள்',
    assistantCall108: 'ஆம்புலன்ஸ்',
    assistantOpenEmergency: 'அவசர விருப்பங்களைத் திறக்கவும்',
    assistantHospitalGuidance:
      'அருகிலுள்ள மருத்துவமனைகளைத் தேட அவசர விருப்பங்களைத் திறந்து “என் இருப்பிடத்தைப் பயன்படுத்து” என்பதைத் தேர்ந்தெடுக்கவும். நீங்கள் தேர்வு செய்த பிறகே இருப்பிடம் கேட்கப்படும்.',
    assistantRequestGuidance:
      'நீங்கள் அனுப்பிய கோரிக்கைகள் மற்றும் நிர்வாகியின் புதுப்பிப்புகளைப் பார்க்க பராமரிப்பு குழுவைத் திறக்கவும்.',
  },
  ml: {
    adminMenu: 'അഡ്മിൻ മെനു',
    assistantEmergency:
      'ഇത് അടിയന്തരാവസ്ഥയായിരിക്കാം. ഇപ്പോൾ തന്നെ സഹായത്തിന് വിളിക്കുക—ഈ ചാറ്റിനായി കാത്തിരിക്കരുത്. ഇന്ത്യയിൽ അടിയന്തര സേവനത്തിന് 112 അല്ലെങ്കിൽ ആംബുലൻസിന് 108 വിളിക്കുക. നിങ്ങളുടെ സ്ഥലം, ലക്ഷണങ്ങൾ എന്നിവ അറിയിച്ച് വിളി സ്വീകരിക്കുന്നയാളുടെ നിർദ്ദേശങ്ങൾ പാലിക്കുക.',
    assistantCall112: 'അടിയന്തര സേവനം',
    assistantCall108: 'ആംബുലൻസ്',
    assistantOpenEmergency: 'അടിയന്തര ഓപ്ഷനുകൾ തുറക്കുക',
    assistantHospitalGuidance:
      'അടുത്തുള്ള ആശുപത്രികൾക്കായി അടിയന്തര ഓപ്ഷനുകൾ തുറന്ന് “എന്റെ സ്ഥലം ഉപയോഗിക്കുക” തിരഞ്ഞെടുക്കുക. നിങ്ങൾ അമർത്തിയാൽ മാത്രമേ സ്ഥലം ചോദിക്കൂ.',
    assistantRequestGuidance: 'നിങ്ങൾ അയച്ച അഭ്യർത്ഥനകളും അഡ്മിന്റെ അപ്ഡേറ്റുകളും കാണാൻ കെയർ സർക്കിൾ തുറക്കുക.',
  },
  mr: {
    adminMenu: 'प्रशासक मेनू',
    assistantEmergency:
      'ही आपत्कालीन परिस्थिती असू शकते. आत्ताच मदतीसाठी कॉल करा—या चॅटची वाट पाहू नका. भारतात आपत्कालीन सेवेसाठी 112 किंवा रुग्णवाहिकेसाठी 108 वर कॉल करा. आपले ठिकाण आणि लक्षणे सांगा व डिस्पॅचरच्या सूचनांचे पालन करा.',
    assistantCall112: 'आपत्कालीन सेवा',
    assistantCall108: 'रुग्णवाहिका',
    assistantOpenEmergency: 'आपत्कालीन पर्याय उघडा',
    assistantHospitalGuidance:
      'जवळची रुग्णालये शोधण्यासाठी आपत्कालीन पर्याय उघडा आणि “माझे स्थान वापरा” निवडा. तुम्ही निवडल्यानंतरच स्थान विचारले जाईल.',
    assistantRequestGuidance: 'तुम्ही पाठवलेल्या विनंत्या आणि प्रशासकाचे अपडेट पाहण्यासाठी काळजी समूह उघडा.',
  },
  or: {
    adminMenu: 'ପ୍ରଶାସକ ମେନୁ',
    assistantEmergency:
      'ଏହା ଜରୁରୀକାଳୀନ ପରିସ୍ଥିତି ହୋଇପାରେ। ଏବେ ସାହାଯ୍ୟ ପାଇଁ ଫୋନ୍ କରନ୍ତୁ—ଏହି ଚାଟ୍ ପାଇଁ ଅପେକ୍ଷା କରନ୍ତୁ ନାହିଁ। ଭାରତରେ ଜରୁରୀ ସେବା ପାଇଁ 112 କିମ୍ବା ଆମ୍ବୁଲାନ୍ସ ପାଇଁ 108 କୁ ଫୋନ୍ କରନ୍ତୁ। ନିଜ ସ୍ଥାନ ଓ ଲକ୍ଷଣ କହି ଡିସ୍ପାଚରଙ୍କ ନିର୍ଦ୍ଦେଶ ମାନନ୍ତୁ।',
    assistantCall112: 'ଜରୁରୀ ସେବା',
    assistantCall108: 'ଆମ୍ବୁଲାନ୍ସ',
    assistantOpenEmergency: 'ଜରୁରୀ ବିକଳ୍ପ ଖୋଲନ୍ତୁ',
    assistantHospitalGuidance:
      'ନିକଟସ୍ଥ ହସ୍ପିଟାଲ୍ ଖୋଜିବାକୁ ଜରୁରୀ ବିକଳ୍ପ ଖୋଲି “ମୋର ସ୍ଥାନ ବ୍ୟବହାର କରନ୍ତୁ” ବାଛନ୍ତୁ। ଆପଣ ଟ୍ୟାପ୍ କଲେ ମାତ୍ର ସ୍ଥାନ ପଚରାଯିବ।',
    assistantRequestGuidance: 'ଆପଣ ପଠାଇଥିବା ଅନୁରୋଧ ଓ ପ୍ରଶାସକଙ୍କ ଅଦ୍ୟତନ ଦେଖିବାକୁ କେୟାର ସର୍କଲ୍ ଖୋଲନ୍ତୁ।',
  },
  bn: {
    adminMenu: 'প্রশাসক মেনু',
    assistantEmergency:
      'এটি জরুরি অবস্থা হতে পারে। এখনই সাহায্যের জন্য ফোন করুন—এই চ্যাটের জন্য অপেক্ষা করবেন না। ভারতে জরুরি পরিষেবার জন্য 112 বা অ্যাম্বুলেন্সের জন্য 108 নম্বরে কল করুন। আপনার অবস্থান ও লক্ষণ জানান এবং ডিসপ্যাচারের নির্দেশ অনুসরণ করুন।',
    assistantCall112: 'জরুরি পরিষেবা',
    assistantCall108: 'অ্যাম্বুলেন্স',
    assistantOpenEmergency: 'জরুরি বিকল্প খুলুন',
    assistantHospitalGuidance:
      'কাছের হাসপাতাল খুঁজতে জরুরি বিকল্প খুলে “আমার অবস্থান ব্যবহার করুন” বেছে নিন। আপনি চাপলেই কেবল অবস্থান চাওয়া হবে।',
    assistantRequestGuidance: 'আপনার পাঠানো অনুরোধ ও প্রশাসকের আপডেট দেখতে কেয়ার সার্কেল খুলুন।',
  },
  pa: {
    adminMenu: 'ਪ੍ਰਬੰਧਕ ਮੀਨੂ',
    assistantEmergency:
      'ਇਹ ਐਮਰਜੈਂਸੀ ਹੋ ਸਕਦੀ ਹੈ। ਹੁਣੇ ਮਦਦ ਲਈ ਕਾਲ ਕਰੋ—ਇਸ ਚੈਟ ਦੀ ਉਡੀਕ ਨਾ ਕਰੋ। ਭਾਰਤ ਵਿੱਚ ਐਮਰਜੈਂਸੀ ਸੇਵਾਵਾਂ ਲਈ 112 ਜਾਂ ਐਂਬੂਲੈਂਸ ਲਈ 108 ਤੇ ਕਾਲ ਕਰੋ। ਆਪਣਾ ਟਿਕਾਣਾ ਅਤੇ ਲੱਛਣ ਦੱਸੋ ਅਤੇ ਡਿਸਪੈਚਰ ਦੀਆਂ ਹਦਾਇਤਾਂ ਮੰਨੋ।',
    assistantCall112: 'ਐਮਰਜੈਂਸੀ ਸੇਵਾਵਾਂ',
    assistantCall108: 'ਐਂਬੂਲੈਂਸ',
    assistantOpenEmergency: 'ਐਮਰਜੈਂਸੀ ਵਿਕਲਪ ਖੋਲ੍ਹੋ',
    assistantHospitalGuidance:
      'ਨੇੜਲੇ ਹਸਪਤਾਲ ਲੱਭਣ ਲਈ ਐਮਰਜੈਂਸੀ ਵਿਕਲਪ ਖੋਲ੍ਹੋ ਅਤੇ “ਮੇਰਾ ਟਿਕਾਣਾ ਵਰਤੋ” ਚੁਣੋ। ਤੁਸੀਂ ਚੁਣੋਗੇ ਤਾਂ ਹੀ ਟਿਕਾਣਾ ਪੁੱਛਿਆ ਜਾਵੇਗਾ।',
    assistantRequestGuidance: 'ਤੁਹਾਡੀਆਂ ਭੇਜੀਆਂ ਬੇਨਤੀਆਂ ਅਤੇ ਪ੍ਰਬੰਧਕ ਦੇ ਅੱਪਡੇਟ ਵੇਖਣ ਲਈ ਕੇਅਰ ਸਰਕਲ ਖੋਲ੍ਹੋ।',
  },
  gu: {
    adminMenu: 'વ્યવસ્થાપક મેનૂ',
    assistantEmergency:
      'આ કટોકટી હોઈ શકે છે. હમણાં જ મદદ માટે કૉલ કરો—આ ચેટની રાહ ન જુઓ. ભારતમાં કટોકટી સેવા માટે 112 અથવા એમ્બ્યુલન્સ માટે 108 પર કૉલ કરો. તમારું સ્થાન અને લક્ષણો જણાવો અને ડિસ્પેચરની સૂચનાઓનું પાલન કરો.',
    assistantCall112: 'કટોકટી સેવા',
    assistantCall108: 'એમ્બ્યુલન્સ',
    assistantOpenEmergency: 'કટોકટી વિકલ્પો ખોલો',
    assistantHospitalGuidance:
      'નજીકની હોસ્પિટલ શોધવા કટોકટી વિકલ્પો ખોલો અને “મારું સ્થાન વાપરો” પસંદ કરો. તમે પસંદ કરો ત્યારે જ સ્થાન પૂછવામાં આવશે.',
    assistantRequestGuidance: 'તમે મોકલેલી વિનંતીઓ અને વ્યવસ્થાપકના અપડેટ જોવા કેર સર્કલ ખોલો.',
  },
}
Object.entries(assistantTranslations).forEach(([code, labels]) =>
  Object.assign(translations[code], labels),
)
const assistantFallbackTranslations = {
  hi: {
    assistantGeneralFallback:
      'मैं दवाइयों, मुलाकातों, अनुरोधों, दिनचर्या, सुरक्षा और Everwell के उपयोग में मदद कर सकती हूँ। इस डेमो में लाइव AI या वेब जानकारी नहीं है, इसलिए अन्य या वर्तमान प्रश्नों का उत्तर शायद न दे सकूँ।',
    assistantMedicineInfo:
      'मैं इस डेमो की दवा-सूची दिखा सकती हूँ, पर दवा के उपयोग या खुराक की सलाह नहीं दे सकती। दवा का लेबल देखें और डॉक्टर या फ़ार्मासिस्ट से पूछें।',
    assistantAdminSummary:
      '{open} अनुरोध खुले हैं, {medications} दवा प्रविष्टियाँ हैं और {reviewed} की समीक्षा हुई है।',
    assistantEmergencyActions: 'आपातकालीन कॉल विकल्प',
  },
  kn: {
    assistantGeneralFallback:
      'ಔಷಧಿ, ಭೇಟಿಗಳು, ವಿನಂತಿಗಳು, ದಿನಚರಿ, ಸುರಕ್ಷತೆ ಮತ್ತು Everwell ಬಳಕೆಯಲ್ಲಿ ಸಹಾಯ ಮಾಡಬಲ್ಲೆ. ಈ ಡೆಮೋದಲ್ಲಿ ಲೈವ್ AI ಅಥವಾ ವೆಬ್ ಮಾಹಿತಿ ಇಲ್ಲ; ಇತರ ಅಥವಾ ಇತ್ತೀಚಿನ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರ ತಿಳಿದಿರದಿರಬಹುದು.',
    assistantMedicineInfo:
      'ಈ ಡೆಮೋದಲ್ಲಿನ ಔಷಧಿ ಪಟ್ಟಿಯನ್ನು ತೋರಿಸಬಲ್ಲೆ, ಆದರೆ ಔಷಧಿ ಹೇಗೆ ತೆಗೆದುಕೊಳ್ಳಬೇಕು ಅಥವಾ ಡೋಸ್ ಕುರಿತು ಸಲಹೆ ನೀಡಲಾರೆ. ಲೇಬಲ್ ನೋಡಿ ವೈದ್ಯರು ಅಥವಾ ಔಷಧಿಕಾರರನ್ನು ಕೇಳಿ.',
    assistantAdminSummary:
      '{open} ವಿನಂತಿಗಳು ಬಾಕಿಯಿವೆ, {medications} ಔಷಧಿ ದಾಖಲೆಗಳಿವೆ ಮತ್ತು {reviewed} ಪರಿಶೀಲಿಸಲಾಗಿದೆ.',
    assistantEmergencyActions: 'ತುರ್ತು ಕರೆ ಆಯ್ಕೆಗಳು',
  },
  te: {
    assistantGeneralFallback:
      'మందులు, అపాయింట్‌మెంట్‌లు, అభ్యర్థనలు, రోజువారీ అలవాట్లు, భద్రత, Everwell వినియోగంలో సహాయం చేస్తాను. ఈ డెమోలో ప్రత్యక్ష AI లేదా వెబ్ సమాచారం లేదు; ఇతర లేదా తాజా ప్రశ్నలకు సమాధానం తెలియకపోవచ్చు.',
    assistantMedicineInfo:
      'ఈ డెమోలోని మందుల జాబితాను చూపగలను, కానీ మందును ఎలా వాడాలి లేదా మోతాదు గురించి సలహా ఇవ్వలేను. లేబుల్ చూసి వైద్యుడు లేదా ఫార్మసిస్ట్‌ను అడగండి.',
    assistantAdminSummary:
      '{open} అభ్యర్థనలు తెరిచి ఉన్నాయి, {medications} మందుల నమోదు ఉంది, {reviewed} సమీక్షించబడ్డాయి.',
    assistantEmergencyActions: 'అత్యవసర కాల్ ఎంపికలు',
  },
  ta: {
    assistantGeneralFallback:
      'மருந்துகள், சந்திப்புகள், கோரிக்கைகள், வழக்கங்கள், பாதுகாப்பு மற்றும் Everwell பயன்பாட்டில் உதவுவேன். இந்த மாதிரியில் நேரடி AI அல்லது இணையத் தகவல் இல்லை; பிற அல்லது சமீபத்திய கேள்விகளுக்குப் பதில் தெரியாமல் இருக்கலாம்.',
    assistantMedicineInfo:
      'இந்த மாதிரி மருந்துப் பட்டியலைக் காட்ட முடியும்; மருந்தை எப்படிப் பயன்படுத்துவது அல்லது அளவு குறித்து ஆலோசனை வழங்க முடியாது. மருந்து லேபிளைப் பார்த்து மருத்துவர் அல்லது மருந்தாளரிடம் கேளுங்கள்.',
    assistantAdminSummary:
      '{open} கோரிக்கைகள் திறந்துள்ளன, {medications} மருந்துப் பதிவுகள் உள்ளன, {reviewed} மதிப்பாய்வு செய்யப்பட்டுள்ளன.',
    assistantEmergencyActions: 'அவசர அழைப்பு விருப்பங்கள்',
  },
  ml: {
    assistantGeneralFallback:
      'മരുന്നുകൾ, സന്ദർശനങ്ങൾ, അഭ്യർത്ഥനകൾ, ദിനചര്യ, സുരക്ഷ, Everwell ഉപയോഗം എന്നിവയിൽ സഹായിക്കാം. ഈ ഡെമോയിൽ തത്സമയ AI അല്ലെങ്കിൽ വെബ് വിവരമില്ല; മറ്റ് അല്ലെങ്കിൽ പുതിയ ചോദ്യങ്ങൾക്ക് ഉത്തരം അറിയണമെന്നില്ല.',
    assistantMedicineInfo:
      'ഈ ഡെമോയിലെ മരുന്നുകളുടെ പട്ടിക കാണിക്കാം; മരുന്ന് എങ്ങനെ കഴിക്കണം, ഡോസ് എത്ര എന്നൊന്നും നിർദേശിക്കാനാവില്ല. ലേബൽ പരിശോധിച്ച് ഡോക്ടറോടോ ഫാർമസിസ്റ്റിനോടോ ചോദിക്കുക.',
    assistantAdminSummary:
      '{open} അഭ്യർത്ഥനകൾ തുറന്നിരിക്കുന്നു, {medications} മരുന്ന് രേഖകളുണ്ട്, {reviewed} എണ്ണം പരിശോധിച്ചു.',
    assistantEmergencyActions: 'അടിയന്തര കോൾ ഓപ്ഷനുകൾ',
  },
  mr: {
    assistantGeneralFallback:
      'औषधे, भेटी, विनंत्या, दिनचर्या, सुरक्षितता आणि Everwell वापरण्याबाबत मदत करू शकते. या डेमोमध्ये थेट AI किंवा वेब माहिती नाही; इतर किंवा ताज्या प्रश्नांची उत्तरे कदाचित माहीत नसतील.',
    assistantMedicineInfo:
      'या डेमोमधील औषधांची यादी दाखवू शकते; औषध कसे घ्यावे किंवा किती घ्यावे याचा सल्ला देऊ शकत नाही. लेबल पाहा आणि डॉक्टर किंवा फार्मासिस्टला विचारा.',
    assistantAdminSummary:
      '{open} विनंत्या प्रलंबित आहेत, {medications} औषध नोंदी आहेत आणि {reviewed} तपासल्या आहेत.',
    assistantEmergencyActions: 'आपत्कालीन कॉल पर्याय',
  },
  or: {
    assistantGeneralFallback:
      'ଔଷଧ, ଡାକ୍ତରୀ ସାକ୍ଷାତ, ଅନୁରୋଧ, ଦୈନିକ ଅଭ୍ୟାସ, ସୁରକ୍ଷା ଏବଂ Everwell ବ୍ୟବହାରରେ ସାହାଯ୍ୟ କରିପାରିବି। ଏହି ଡେମୋରେ ଲାଇଭ୍ AI କିମ୍ବା ୱେବ୍ ସୂଚନା ନାହିଁ; ଅନ୍ୟ କିମ୍ବା ନୂଆ ପ୍ରଶ୍ନର ଉତ୍ତର ଜଣା ନଥାଇପାରେ।',
    assistantMedicineInfo:
      'ଏହି ଡେମୋର ଔଷଧ ତାଲିକା ଦେଖାଇପାରିବି, କିନ୍ତୁ କେଉଁ ଔଷଧ କିପରି ନେବେ କିମ୍ବା ମାତ୍ରା ବିଷୟରେ ପରାମର୍ଶ ଦେଇପାରିବି ନାହିଁ। ଲେବଲ୍ ପଢ଼ି ଡାକ୍ତର କିମ୍ବା ଫାର୍ମାସିଷ୍ଟଙ୍କୁ ପଚାରନ୍ତୁ।',
    assistantAdminSummary:
      '{open} ଅନୁରୋଧ ଖୋଲା ଅଛି, {medications} ଔଷଧ ରେକର୍ଡ ଅଛି, {reviewed} ଯାଞ୍ଚ ହୋଇଛି।',
    assistantEmergencyActions: 'ଜରୁରୀ କଲ୍ ବିକଳ୍ପ',
  },
  bn: {
    assistantGeneralFallback:
      'ওষুধ, সাক্ষাৎ, অনুরোধ, দৈনন্দিন অভ্যাস, নিরাপত্তা এবং Everwell ব্যবহারে সাহায্য করতে পারি। এই ডেমোতে লাইভ AI বা ওয়েব তথ্য নেই, তাই অন্য বা সাম্প্রতিক প্রশ্নের উত্তর নাও জানতে পারি।',
    assistantMedicineInfo:
      'এই ডেমোর ওষুধের তালিকা দেখাতে পারি, কিন্তু ওষুধ কীভাবে খাবেন বা কতটা খাবেন সে পরামর্শ দিতে পারি না। লেবেল দেখে চিকিৎসক বা ফার্মাসিস্টকে জিজ্ঞাসা করুন।',
    assistantAdminSummary:
      '{open}টি অনুরোধ খোলা আছে, {medications}টি ওষুধের নথি আছে এবং {reviewed}টি পর্যালোচনা করা হয়েছে।',
    assistantEmergencyActions: 'জরুরি কলের বিকল্প',
  },
  pa: {
    assistantGeneralFallback:
      'ਦਵਾਈਆਂ, ਮੁਲਾਕਾਤਾਂ, ਬੇਨਤੀਆਂ, ਰੋਜ਼ਾਨਾ ਰੁਟੀਨ, ਸੁਰੱਖਿਆ ਅਤੇ Everwell ਵਰਤਣ ਵਿੱਚ ਮਦਦ ਕਰ ਸਕਦਾ ਹਾਂ। ਇਸ ਡੈਮੋ ਵਿੱਚ ਲਾਈਵ AI ਜਾਂ ਵੈੱਬ ਜਾਣਕਾਰੀ ਨਹੀਂ ਹੈ, ਇਸ ਲਈ ਹੋਰ ਜਾਂ ਤਾਜ਼ਾ ਸਵਾਲਾਂ ਦੇ ਜਵਾਬ ਸ਼ਾਇਦ ਨਾ ਪਤਾ ਹੋਣ।',
    assistantMedicineInfo:
      'ਇਸ ਡੈਮੋ ਦੀ ਦਵਾਈ ਸੂਚੀ ਦਿਖਾ ਸਕਦਾ ਹਾਂ, ਪਰ ਦਵਾਈ ਕਿਵੇਂ ਲੈਣੀ ਜਾਂ ਖੁਰਾਕ ਬਾਰੇ ਸਲਾਹ ਨਹੀਂ ਦੇ ਸਕਦਾ। ਲੇਬਲ ਵੇਖੋ ਅਤੇ ਡਾਕਟਰ ਜਾਂ ਫਾਰਮਾਸਿਸਟ ਨੂੰ ਪੁੱਛੋ।',
    assistantAdminSummary:
      '{open} ਬੇਨਤੀਆਂ ਖੁੱਲ੍ਹੀਆਂ ਹਨ, {medications} ਦਵਾਈਆਂ ਦੇ ਰਿਕਾਰਡ ਹਨ ਅਤੇ {reviewed} ਦੀ ਸਮੀਖਿਆ ਹੋਈ ਹੈ।',
    assistantEmergencyActions: 'ਐਮਰਜੈਂਸੀ ਕਾਲ ਵਿਕਲਪ',
  },
  gu: {
    assistantGeneralFallback:
      'દવાઓ, મુલાકાતો, વિનંતીઓ, દિનચર્યા, સુરક્ષા અને Everwell વાપરવામાં મદદ કરી શકું છું. આ ડેમોમાં લાઇવ AI અથવા વેબ માહિતી નથી, તેથી અન્ય અથવા તાજા પ્રશ્નોના જવાબ કદાચ ન હોય.',
    assistantMedicineInfo:
      'આ ડેમોની દવાઓની યાદી બતાવી શકું છું, પરંતુ દવા કેવી રીતે લેવી અથવા માત્રા અંગે સલાહ આપી શકતો નથી. લેબલ વાંચો અને ડૉક્ટર અથવા ફાર્માસિસ્ટને પૂછો.',
    assistantAdminSummary:
      '{open} વિનંતીઓ ખુલ્લી છે, {medications} દવા નોંધો છે અને {reviewed}ની સમીક્ષા થઈ છે.',
    assistantEmergencyActions: 'કટોકટી કૉલ વિકલ્પો',
  },
}
Object.entries(assistantFallbackTranslations).forEach(([code, labels]) =>
  Object.assign(translations[code], labels),
)
Object.assign(english, { assistantEmergencyActions: 'Emergency call options' })
const requestTranslations = {
  hi: {
    requestHelpTitle: 'देखभाल प्रशासक को अनुरोध भेजें',
    requestHelpCopy: 'आपका अनुरोध प्रशासक के केयर डेस्क पर जाएगा। यहाँ इसकी स्थिति देखें।',
    requestTitleLabel: 'आपको किस मदद की ज़रूरत है?',
    requestCategoryLabel: 'अनुरोध का प्रकार',
    requestDetailsLabel: 'विवरण',
    requestPriorityLabel: 'प्राथमिकता',
    requestSubmit: 'प्रशासक को भेजें',
    requestSafetyNote:
      'तत्काल आपात स्थिति में स्थानीय आपात सेवाओं को कॉल करें। इस अनुरोध पर आपातकालीन अलर्ट की तरह निगरानी नहीं होती।',
    requestCare: 'देखभाल सहायता',
    requestMedication: 'दवा की जाँच',
    requestAppointment: 'अपॉइंटमेंट',
    requestContact: 'डॉक्टर या अस्पताल से संपर्क',
    requestOther: 'अन्य',
    requestNormal: 'सामान्य',
    requestUrgent: 'शीघ्र कार्रवाई',
    requestNoTasks: 'आपने अभी तक कोई अनुरोध नहीं भेजा है।',
    taskStatusOpen: 'मिला',
    taskStatusProgress: 'प्रगति में',
    taskStatusCompleted: 'पूरा हुआ',
    taskAssigned: 'प्रशासक को भेजा गया',
    taskAdminReply: 'प्रशासक का अपडेट',
    taskRequester: 'अनुरोधकर्ता',
    taskUrgent: 'शीघ्र कार्रवाई',
  },
  kn: {
    requestHelpTitle: 'ಆರೈಕೆ ನಿರ್ವಾಹಕರಿಗೆ ವಿನಂತಿ ಕಳುಹಿಸಿ',
    requestHelpCopy: 'ನಿಮ್ಮ ವಿನಂತಿ ನಿರ್ವಾಹಕರ ಆರೈಕೆ ಡೆಸ್ಕ್‌ಗೆ ಹೋಗುತ್ತದೆ. ಅದರ ಸ್ಥಿತಿಯನ್ನು ಇಲ್ಲಿ ಪರಿಶೀಲಿಸಿ.',
    requestTitleLabel: 'ನಿಮಗೆ ಯಾವ ಸಹಾಯ ಬೇಕು?',
    requestCategoryLabel: 'ವಿನಂತಿಯ ವಿಧ',
    requestDetailsLabel: 'ವಿವರಗಳು',
    requestPriorityLabel: 'ಆದ್ಯತೆ',
    requestSubmit: 'ನಿರ್ವಾಹಕರಿಗೆ ಕಳುಹಿಸಿ',
    requestSafetyNote:
      'ತಕ್ಷಣದ ತುರ್ತು ಪರಿಸ್ಥಿತಿಯಲ್ಲಿ ಸ್ಥಳೀಯ ತುರ್ತು ಸೇವೆಗಳಿಗೆ ಕರೆ ಮಾಡಿ. ಈ ವಿನಂತಿಯನ್ನು ತುರ್ತು ಎಚ್ಚರಿಕೆಯಾಗಿ ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡುವುದಿಲ್ಲ.',
    requestCare: 'ಆರೈಕೆ ಸಹಾಯ',
    requestMedication: 'ಔಷಧಿ ಪರಿಶೀಲನೆ',
    requestAppointment: 'ಭೇಟಿ',
    requestContact: 'ವೈದ್ಯರು ಅಥವಾ ಆಸ್ಪತ್ರೆಗೆ ಸಂಪರ್ಕಿಸಿ',
    requestOther: 'ಇತರೆ',
    requestNormal: 'ಸಾಮಾನ್ಯ',
    requestUrgent: 'ತ್ವರಿತ ಅನುಸರಣೆ',
    requestNoTasks: 'ನೀವು ಇನ್ನೂ ಯಾವುದೇ ವಿನಂತಿಯನ್ನು ಕಳುಹಿಸಿಲ್ಲ.',
    taskStatusOpen: 'ಸ್ವೀಕರಿಸಲಾಗಿದೆ',
    taskStatusProgress: 'ಪ್ರಗತಿಯಲ್ಲಿದೆ',
    taskStatusCompleted: 'ಪೂರ್ಣಗೊಂಡಿದೆ',
    taskAssigned: 'ನಿರ್ವಾಹಕರಿಗೆ ಕಳುಹಿಸಲಾಗಿದೆ',
    taskAdminReply: 'ನಿರ್ವಾಹಕರ ನವೀಕರಣ',
    taskRequester: 'ವಿನಂತಿಸಿದವರು',
    taskUrgent: 'ತ್ವರಿತ ಅನುಸರಣೆ',
  },
  te: {
    requestHelpTitle: 'సంరక్షణ నిర్వాహకుడికి అభ్యర్థన పంపండి',
    requestHelpCopy: 'మీ అభ్యర్థన నిర్వాహకుడి సంరక్షణ డెస్క్‌కు వెళుతుంది. దాని స్థితిని ఇక్కడ చూడండి.',
    requestTitleLabel: 'మీకు ఏ సహాయం కావాలి?',
    requestCategoryLabel: 'అభ్యర్థన రకం',
    requestDetailsLabel: 'వివరాలు',
    requestPriorityLabel: 'ప్రాధాన్యత',
    requestSubmit: 'నిర్వాహకుడికి పంపండి',
    requestSafetyNote:
      'తక్షణ అత్యవసర పరిస్థితిలో స్థానిక అత్యవసర సేవలకు కాల్ చేయండి. ఈ అభ్యర్థనను అత్యవసర హెచ్చరికగా పర్యవేక్షించరు.',
    requestCare: 'సంరక్షణ సహాయం',
    requestMedication: 'మందుల తనిఖీ',
    requestAppointment: 'అపాయింట్‌మెంట్',
    requestContact: 'వైద్యుడు లేదా ఆసుపత్రిని సంప్రదించండి',
    requestOther: 'ఇతర',
    requestNormal: 'సాధారణం',
    requestUrgent: 'త్వరిత అనుసరణ',
    requestNoTasks: 'మీరు ఇంకా అభ్యర్థనలు పంపలేదు.',
    taskStatusOpen: 'అందింది',
    taskStatusProgress: 'పనిలో ఉంది',
    taskStatusCompleted: 'పూర్తయింది',
    taskAssigned: 'నిర్వాహకుడికి పంపబడింది',
    taskAdminReply: 'నిర్వాహకుడి నవీకరణ',
    taskRequester: 'అభ్యర్థించినవారు',
    taskUrgent: 'త్వరిత అనుసరణ',
  },
  ta: {
    requestHelpTitle: 'பராமரிப்பு நிர்வாகியிடம் கோரிக்கை அனுப்புங்கள்',
    requestHelpCopy:
      'உங்கள் கோரிக்கை நிர்வாகியின் பராமரிப்பு மையத்திற்குச் செல்லும். அதன் நிலையை இங்கே பார்க்கலாம்.',
    requestTitleLabel: 'உங்களுக்கு என்ன உதவி தேவை?',
    requestCategoryLabel: 'கோரிக்கை வகை',
    requestDetailsLabel: 'விவரங்கள்',
    requestPriorityLabel: 'முன்னுரிமை',
    requestSubmit: 'நிர்வாகிக்கு அனுப்புங்கள்',
    requestSafetyNote:
      'உடனடி அவசரநிலையில் உள்ளூர் அவசர சேவைகளை அழைக்கவும். இந்தக் கோரிக்கை அவசர எச்சரிக்கையாகக் கண்காணிக்கப்படாது.',
    requestCare: 'பராமரிப்பு உதவி',
    requestMedication: 'மருந்து சரிபார்ப்பு',
    requestAppointment: 'மருத்துவச் சந்திப்பு',
    requestContact: 'மருத்துவர் அல்லது மருத்துவமனையைத் தொடர்புகொள்ளுங்கள்',
    requestOther: 'மற்றவை',
    requestNormal: 'வழக்கமானது',
    requestUrgent: 'விரைவான தொடர்நடவடிக்கை',
    requestNoTasks: 'நீங்கள் இன்னும் கோரிக்கைகள் எதையும் அனுப்பவில்லை.',
    taskStatusOpen: 'பெறப்பட்டது',
    taskStatusProgress: 'செயலில் உள்ளது',
    taskStatusCompleted: 'முடிந்தது',
    taskAssigned: 'நிர்வாகிக்கு அனுப்பப்பட்டது',
    taskAdminReply: 'நிர்வாகியின் புதுப்பிப்பு',
    taskRequester: 'கோரியவர்',
    taskUrgent: 'விரைவான தொடர்நடவடிக்கை',
  },
  ml: {
    requestHelpTitle: 'പരിചരണ അഡ്മിന് അഭ്യർത്ഥന അയക്കുക',
    requestHelpCopy: 'നിങ്ങളുടെ അഭ്യർത്ഥന അഡ്മിന്റെ കെയർ ഡെസ്കിലെത്തും. അതിന്റെ നില ഇവിടെ കാണാം.',
    requestTitleLabel: 'നിങ്ങൾക്ക് എന്ത് സഹായമാണ് വേണ്ടത്?',
    requestCategoryLabel: 'അഭ്യർത്ഥനയുടെ തരം',
    requestDetailsLabel: 'വിശദാംശങ്ങൾ',
    requestPriorityLabel: 'മുൻഗണന',
    requestSubmit: 'അഡ്മിന് അയക്കുക',
    requestSafetyNote:
      'അടിയന്തരാവസ്ഥയിൽ പ്രാദേശിക അടിയന്തര സേവനങ്ങളെ വിളിക്കുക. ഈ അഭ്യർത്ഥന അടിയന്തര അലർട്ടായി നിരീക്ഷിക്കുന്നില്ല.',
    requestCare: 'പരിചരണ സഹായം',
    requestMedication: 'മരുന്ന് പരിശോധിക്കൽ',
    requestAppointment: 'അപ്പോയിന്റ്മെന്റ്',
    requestContact: 'ഡോക്ടറെയോ ആശുപത്രിയെയോ ബന്ധപ്പെടുക',
    requestOther: 'മറ്റുള്ളവ',
    requestNormal: 'സാധാരണ',
    requestUrgent: 'വേഗത്തിലുള്ള തുടർനടപടി',
    requestNoTasks: 'നിങ്ങൾ ഇതുവരെ അഭ്യർത്ഥനകളൊന്നും അയച്ചിട്ടില്ല.',
    taskStatusOpen: 'ലഭിച്ചു',
    taskStatusProgress: 'പുരോഗതിയിൽ',
    taskStatusCompleted: 'പൂർത്തിയായി',
    taskAssigned: 'അഡ്മിന് അയച്ചു',
    taskAdminReply: 'അഡ്മിന്റെ അപ്ഡേറ്റ്',
    taskRequester: 'അഭ്യർത്ഥിച്ചത്',
    taskUrgent: 'വേഗത്തിലുള്ള തുടർനടപടി',
  },
  mr: {
    requestHelpTitle: 'काळजी प्रशासकाला विनंती पाठवा',
    requestHelpCopy: 'तुमची विनंती प्रशासकाच्या केअर डेस्कवर जाईल. तिची स्थिती येथे पाहा.',
    requestTitleLabel: 'तुम्हाला कशासाठी मदत हवी आहे?',
    requestCategoryLabel: 'विनंतीचा प्रकार',
    requestDetailsLabel: 'तपशील',
    requestPriorityLabel: 'प्राधान्य',
    requestSubmit: 'प्रशासकाला पाठवा',
    requestSafetyNote:
      'तातडीच्या आपत्कालीन परिस्थितीत स्थानिक आपत्कालीन सेवांना कॉल करा. या विनंतीवर आपत्कालीन सूचनेप्रमाणे लक्ष ठेवले जात नाही.',
    requestCare: 'काळजीसाठी मदत',
    requestMedication: 'औषध तपासणी',
    requestAppointment: 'भेट',
    requestContact: 'डॉक्टर किंवा रुग्णालयाशी संपर्क',
    requestOther: 'इतर',
    requestNormal: 'नियमित',
    requestUrgent: 'तातडीचा पाठपुरावा',
    requestNoTasks: 'तुम्ही अद्याप कोणतीही विनंती पाठवलेली नाही.',
    taskStatusOpen: 'मिळाली',
    taskStatusProgress: 'सुरू आहे',
    taskStatusCompleted: 'पूर्ण',
    taskAssigned: 'प्रशासकाला पाठवली',
    taskAdminReply: 'प्रशासकाची माहिती',
    taskRequester: 'विनंतीकर्ता',
    taskUrgent: 'तातडीचा पाठपुरावा',
  },
  or: {
    requestHelpTitle: 'ଯତ୍ନ ପ୍ରଶାସକଙ୍କୁ ଅନୁରୋଧ ପଠାନ୍ତୁ',
    requestHelpCopy: 'ଆପଣଙ୍କ ଅନୁରୋଧ ପ୍ରଶାସକଙ୍କ କେୟାର ଡେସ୍କକୁ ଯିବ। ଏହାର ସ୍ଥିତି ଏଠାରେ ଦେଖନ୍ତୁ।',
    requestTitleLabel: 'ଆପଣଙ୍କୁ କେଉଁ ସାହାଯ୍ୟ ଦରକାର?',
    requestCategoryLabel: 'ଅନୁରୋଧର ପ୍ରକାର',
    requestDetailsLabel: 'ବିବରଣୀ',
    requestPriorityLabel: 'ପ୍ରାଥମିକତା',
    requestSubmit: 'ପ୍ରଶାସକଙ୍କୁ ପଠାନ୍ତୁ',
    requestSafetyNote:
      'ତୁରନ୍ତ ଜରୁରୀ ପରିସ୍ଥିତିରେ ସ୍ଥାନୀୟ ଜରୁରୀ ସେବାକୁ କଲ୍ କରନ୍ତୁ। ଏହି ଅନୁରୋଧକୁ ଜରୁରୀ ସତର୍କତା ଭାବେ ନଜର ରଖାଯାଏ ନାହିଁ।',
    requestCare: 'ଯତ୍ନ ସହାୟତା',
    requestMedication: 'ଔଷଧ ଯାଞ୍ଚ',
    requestAppointment: 'ସାକ୍ଷାତ',
    requestContact: 'ଡାକ୍ତର କିମ୍ବା ଡାକ୍ତରଖାନା ସହ ଯୋଗାଯୋଗ',
    requestOther: 'ଅନ୍ୟାନ୍ୟ',
    requestNormal: 'ସାଧାରଣ',
    requestUrgent: 'ତୁରନ୍ତ ଅନୁସରଣ',
    requestNoTasks: 'ଆପଣ ଏପର୍ଯ୍ୟନ୍ତ କୌଣସି ଅନୁରୋଧ ପଠାଇନାହାନ୍ତି।',
    taskStatusOpen: 'ଗ୍ରହଣ କରାଗଲା',
    taskStatusProgress: 'ଚାଲିଛି',
    taskStatusCompleted: 'ସମାପ୍ତ',
    taskAssigned: 'ପ୍ରଶାସକଙ୍କୁ ପଠାଗଲା',
    taskAdminReply: 'ପ୍ରଶାସକଙ୍କ ଅପଡେଟ୍',
    taskRequester: 'ଅନୁରୋଧକାରୀ',
    taskUrgent: 'ତୁରନ୍ତ ଅନୁସରଣ',
  },
  bn: {
    requestHelpTitle: 'পরিচর্যা প্রশাসকের কাছে অনুরোধ পাঠান',
    requestHelpCopy: 'আপনার অনুরোধ প্রশাসকের কেয়ার ডেস্কে যাবে। এর অবস্থা এখানে দেখুন।',
    requestTitleLabel: 'আপনার কী সাহায্য দরকার?',
    requestCategoryLabel: 'অনুরোধের ধরন',
    requestDetailsLabel: 'বিস্তারিত',
    requestPriorityLabel: 'অগ্রাধিকার',
    requestSubmit: 'প্রশাসকের কাছে পাঠান',
    requestSafetyNote:
      'তাৎক্ষণিক জরুরি অবস্থায় স্থানীয় জরুরি পরিষেবায় ফোন করুন। এই অনুরোধকে জরুরি সতর্কতা হিসেবে নজরদারি করা হয় না।',
    requestCare: 'পরিচর্যার সহায়তা',
    requestMedication: 'ওষুধ যাচাই',
    requestAppointment: 'অ্যাপয়েন্টমেন্ট',
    requestContact: 'চিকিৎসক বা হাসপাতালের সঙ্গে যোগাযোগ',
    requestOther: 'অন্যান্য',
    requestNormal: 'সাধারণ',
    requestUrgent: 'দ্রুত অনুসরণ',
    requestNoTasks: 'আপনি এখনও কোনো অনুরোধ পাঠাননি।',
    taskStatusOpen: 'পেয়েছে',
    taskStatusProgress: 'চলছে',
    taskStatusCompleted: 'সম্পন্ন',
    taskAssigned: 'প্রশাসকের কাছে পাঠানো হয়েছে',
    taskAdminReply: 'প্রশাসকের আপডেট',
    taskRequester: 'অনুরোধকারী',
    taskUrgent: 'দ্রুত অনুসরণ',
  },
  pa: {
    requestHelpTitle: 'ਦੇਖਭਾਲ ਪ੍ਰਬੰਧਕ ਨੂੰ ਬੇਨਤੀ ਭੇਜੋ',
    requestHelpCopy: 'ਤੁਹਾਡੀ ਬੇਨਤੀ ਪ੍ਰਬੰਧਕ ਦੇ ਕੇਅਰ ਡੈਸਕ ਤੱਕ ਜਾਵੇਗੀ। ਇਸਦੀ ਸਥਿਤੀ ਇੱਥੇ ਵੇਖੋ।',
    requestTitleLabel: 'ਤੁਹਾਨੂੰ ਕਿਸ ਮਦਦ ਦੀ ਲੋੜ ਹੈ?',
    requestCategoryLabel: 'ਬੇਨਤੀ ਦੀ ਕਿਸਮ',
    requestDetailsLabel: 'ਵੇਰਵਾ',
    requestPriorityLabel: 'ਤਰਜੀਹ',
    requestSubmit: 'ਪ੍ਰਬੰਧਕ ਨੂੰ ਭੇਜੋ',
    requestSafetyNote:
      'ਤੁਰੰਤ ਐਮਰਜੈਂਸੀ ਵਿੱਚ ਸਥਾਨਕ ਐਮਰਜੈਂਸੀ ਸੇਵਾਵਾਂ ਨੂੰ ਕਾਲ ਕਰੋ। ਇਸ ਬੇਨਤੀ ਦੀ ਐਮਰਜੈਂਸੀ ਚੇਤਾਵਨੀ ਵਾਂਗ ਨਿਗਰਾਨੀ ਨਹੀਂ ਹੁੰਦੀ।',
    requestCare: 'ਦੇਖਭਾਲ ਸਹਾਇਤਾ',
    requestMedication: 'ਦਵਾਈ ਦੀ ਜਾਂਚ',
    requestAppointment: 'ਮੁਲਾਕਾਤ',
    requestContact: 'ਡਾਕਟਰ ਜਾਂ ਹਸਪਤਾਲ ਨਾਲ ਸੰਪਰਕ',
    requestOther: 'ਹੋਰ',
    requestNormal: 'ਰੁਟੀਨ',
    requestUrgent: 'ਜਲਦੀ ਫਾਲੋ-ਅੱਪ',
    requestNoTasks: 'ਤੁਸੀਂ ਹਾਲੇ ਕੋਈ ਬੇਨਤੀ ਨਹੀਂ ਭੇਜੀ।',
    taskStatusOpen: 'ਮਿਲੀ',
    taskStatusProgress: 'ਜਾਰੀ ਹੈ',
    taskStatusCompleted: 'ਪੂਰੀ ਹੋਈ',
    taskAssigned: 'ਪ੍ਰਬੰਧਕ ਨੂੰ ਭੇਜੀ',
    taskAdminReply: 'ਪ੍ਰਬੰਧਕ ਵੱਲੋਂ ਅਪਡੇਟ',
    taskRequester: 'ਬੇਨਤੀਕਰਤਾ',
    taskUrgent: 'ਜਲਦੀ ਫਾਲੋ-ਅੱਪ',
  },
  gu: {
    requestHelpTitle: 'સંભાળ સંચાલકને વિનંતી મોકલો',
    requestHelpCopy: 'તમારી વિનંતી સંચાલકના કેર ડેસ્ક પર જશે. તેની સ્થિતિ અહીં જુઓ.',
    requestTitleLabel: 'તમને કઈ મદદની જરૂર છે?',
    requestCategoryLabel: 'વિનંતીનો પ્રકાર',
    requestDetailsLabel: 'વિગતો',
    requestPriorityLabel: 'પ્રાથમિકતા',
    requestSubmit: 'સંચાલકને મોકલો',
    requestSafetyNote:
      'તાત્કાલિક કટોકટીમાં સ્થાનિક કટોકટી સેવાઓને કૉલ કરો. આ વિનંતી પર કટોકટી ચેતવણીની જેમ નજર રાખવામાં આવતી નથી.',
    requestCare: 'સંભાળ સહાય',
    requestMedication: 'દવાની તપાસ',
    requestAppointment: 'મુલાકાત',
    requestContact: 'ડૉક્ટર અથવા હૉસ્પિટલનો સંપર્ક',
    requestOther: 'અન્ય',
    requestNormal: 'સામાન્ય',
    requestUrgent: 'ઝડપી અનુસરણ',
    requestNoTasks: 'તમે હજી કોઈ વિનંતી મોકલી નથી.',
    taskStatusOpen: 'મળી',
    taskStatusProgress: 'ચાલુ',
    taskStatusCompleted: 'પૂર્ણ',
    taskAssigned: 'સંચાલકને મોકલી',
    taskAdminReply: 'સંચાલકનો અપડેટ',
    taskRequester: 'વિનંતી કરનાર',
    taskUrgent: 'ઝડપી અનુસરણ',
  },
}
Object.entries(requestTranslations).forEach(([code, values]) =>
  Object.assign(translations[code], values),
)
Object.assign(english, {
  adminEyebrow: 'HOUSEHOLD CARE COORDINATION',
  adminRefresh: 'Refresh',
  adminMedicationLoadError: 'Could not load the medication verification list.',
  requestNoTasks: 'You have not sent any requests yet.',
  adminNotReviewed: 'Not reviewed yet',
  adminReviewAgain: 'Review again',
  adminTaskSaved: 'The care request was updated.',
  adminReviewSaved: 'Medication review saved.',
  taskStatusLabel: 'Request status',
  taskReplyLabel: 'Update for the user or guest',
  taskReplyPlaceholder: 'Add a helpful update or follow-up note…',
})
const reportTranslations = {
  hi: {
    reportEyebrow: 'साझा देखभाल की स्पष्ट जानकारी',
    reportLead: 'परिवार और देखभालकर्ताओं के लिए दवाओं का आसान सारांश।',
    reportMedicationTitle: 'दवा रिपोर्ट',
    reportScope: 'वर्तमान दैनिक योजना · केवल आज की स्थिति',
    reportGenerated: 'तैयार किया गया',
    reportTotal: 'निर्धारित',
    reportTaken: 'ली गई चिह्नित',
    reportPending: 'पुष्टि आवश्यक',
    reportTableCaption: 'दवा योजना और आज की जाँच',
    reportMedicine: 'दवा',
    reportInstructions: 'खुराक / निर्देश',
    reportTime: 'निर्धारित समय',
    reportStatus: 'आज की स्थिति',
    reportTakenStatus: 'ली गई चिह्नित',
    reportPendingStatus: 'पुष्टि आवश्यक',
    reportEmpty: 'इस योजना में कोई दवा सूचीबद्ध नहीं है।',
    reportDisclaimer:
      'यह डेमो समय-सारणी का सुविधाजनक सारांश है, चिकित्सा रिकॉर्ड नहीं। “पुष्टि आवश्यक” का अर्थ है कि यहाँ किसी ने खुराक ली हुई चिह्नित नहीं की; इससे यह पुष्टि नहीं होती कि खुराक छूटी। संबंधित व्यक्ति से पूछें और चिकित्सक के निर्देशों का पालन करें।',
    reportDownload: 'CSV डाउनलोड करें',
    reportPrint: 'प्रिंट / PDF के रूप में सहेजें',
    textSize: 'अक्षर आकार',
    decreaseText: 'अक्षर छोटा करें',
    increaseText: 'अक्षर बड़ा करें',
  },
  kn: {
    reportEyebrow: 'ಹಂಚಿದ ಆರೈಕೆಯ ಸ್ಪಷ್ಟ ಮಾಹಿತಿ',
    reportLead: 'ಕುಟುಂಬದವರು ಮತ್ತು ಆರೈಕೆದಾರರಿಗಾಗಿ ಔಷಧಿಗಳ ಸರಳ ಸಾರಾಂಶ.',
    reportMedicationTitle: 'ಔಷಧಿ ವರದಿ',
    reportScope: 'ಪ್ರಸ್ತುತ ದೈನಂದಿನ ಯೋಜನೆ · ಇಂದಿನ ಸ್ಥಿತಿ ಮಾತ್ರ',
    reportGenerated: 'ಸಿದ್ಧಪಡಿಸಿದ್ದು',
    reportTotal: 'ನಿಗದಿತ',
    reportTaken: 'ತೆಗೆದುಕೊಂಡಿದೆ ಎಂದು ಗುರುತು',
    reportPending: 'ದೃಢೀಕರಣ ಅಗತ್ಯ',
    reportTableCaption: 'ಔಷಧಿ ಯೋಜನೆ ಮತ್ತು ಇಂದಿನ ಪರಿಶೀಲನೆ',
    reportMedicine: 'ಔಷಧಿ',
    reportInstructions: 'ಡೋಸ್ / ಸೂಚನೆಗಳು',
    reportTime: 'ನಿಗದಿತ ಸಮಯ',
    reportStatus: 'ಇಂದಿನ ಸ್ಥಿತಿ',
    reportTakenStatus: 'ತೆಗೆದುಕೊಂಡಿದೆ ಎಂದು ಗುರುತು',
    reportPendingStatus: 'ದೃಢೀಕರಣ ಅಗತ್ಯ',
    reportEmpty: 'ಈ ಯೋಜನೆಯಲ್ಲಿ ಯಾವುದೇ ಔಷಧಿ ಇಲ್ಲ.',
    reportDisclaimer:
      'ಇದು ಡೆಮೋ ವೇಳಾಪಟ್ಟಿಯ ಅನುಕೂಲ ಸಾರಾಂಶ ಮಾತ್ರ; ವೈದ್ಯಕೀಯ ದಾಖಲೆ ಅಲ್ಲ. “ದೃಢೀಕರಣ ಅಗತ್ಯ” ಎಂದರೆ ಇಲ್ಲಿ ಯಾರೂ ಆ ಡೋಸ್ ತೆಗೆದುಕೊಂಡಿದೆ ಎಂದು ಗುರುತಿಸಿಲ್ಲ; ಅದು ತಪ್ಪಿದೆ ಎಂದು ಖಚಿತಪಡಿಸುವುದಿಲ್ಲ. ವ್ಯಕ್ತಿಯೊಂದಿಗೆ ಪರಿಶೀಲಿಸಿ ಮತ್ತು ವೈದ್ಯರ ಸೂಚನೆಗಳನ್ನು ಪಾಲಿಸಿ.',
    reportDownload: 'CSV ಡೌನ್‌ಲೋಡ್',
    reportPrint: 'ಮುದ್ರಿಸಿ / PDF ಉಳಿಸಿ',
    textSize: 'ಅಕ್ಷರ ಗಾತ್ರ',
    decreaseText: 'ಅಕ್ಷರ ಗಾತ್ರ ಕಡಿಮೆ',
    increaseText: 'ಅಕ್ಷರ ಗಾತ್ರ ಹೆಚ್ಚಿಸಿ',
  },
  te: {
    reportEyebrow: 'పంచుకున్న సంరక్షణ సమాచారం',
    reportLead: 'కుటుంబ సభ్యులు, సంరక్షకుల కోసం మందుల సులభమైన సారాంశం.',
    reportMedicationTitle: 'మందుల నివేదిక',
    reportScope: 'ప్రస్తుత రోజువారీ ప్రణాళిక · నేటి స్థితి మాత్రమే',
    reportGenerated: 'తయారుచేసిన తేదీ',
    reportTotal: 'షెడ్యూల్ చేసినవి',
    reportTaken: 'తీసుకున్నట్లు గుర్తించినవి',
    reportPending: 'నిర్ధారణ అవసరం',
    reportTableCaption: 'మందుల ప్రణాళిక, నేటి నమోదు',
    reportMedicine: 'మందు',
    reportInstructions: 'మోతాదు / సూచనలు',
    reportTime: 'షెడ్యూల్ సమయం',
    reportStatus: 'నేటి స్థితి',
    reportTakenStatus: 'తీసుకున్నట్లు గుర్తించారు',
    reportPendingStatus: 'నిర్ధారణ అవసరం',
    reportEmpty: 'ఈ ప్రణాళికలో మందులు లేవు.',
    reportDisclaimer:
      'ఇది డెమో షెడ్యూల్ యొక్క సౌకర్యార్థమైన సారాంశం మాత్రమే; వైద్య రికార్డు కాదు. “నిర్ధారణ అవసరం” అంటే ఇక్కడ ఎవరూ ఆ మోతాదును తీసుకున్నట్లు గుర్తించలేదు; అది మిస్ అయిందని నిర్ధారించదు. వ్యక్తిని అడిగి, వైద్యుని సూచనలు పాటించండి.',
    reportDownload: 'CSV డౌన్‌లోడ్',
    reportPrint: 'ప్రింట్ / PDFగా సేవ్',
    textSize: 'అక్షర పరిమాణం',
    decreaseText: 'అక్షర పరిమాణం తగ్గించు',
    increaseText: 'అక్షర పరిమాణం పెంచు',
  },
  ta: {
    reportEyebrow: 'பகிரப்பட்ட பராமரிப்புத் தகவல்',
    reportLead: 'குடும்பத்தினர் மற்றும் பராமரிப்பாளர்களுக்கான எளிய மருந்துச் சுருக்கம்.',
    reportMedicationTitle: 'மருந்து அறிக்கை',
    reportScope: 'தற்போதைய தினசரி திட்டம் · இன்றைய நிலை மட்டும்',
    reportGenerated: 'தயாரித்தது',
    reportTotal: 'திட்டமிடப்பட்டது',
    reportTaken: 'எடுத்ததாகக் குறிக்கப்பட்டது',
    reportPending: 'உறுதிப்படுத்த வேண்டும்',
    reportTableCaption: 'மருந்துத் திட்டமும் இன்றைய பதிவும்',
    reportMedicine: 'மருந்து',
    reportInstructions: 'அளவு / வழிமுறைகள்',
    reportTime: 'திட்டமிட்ட நேரம்',
    reportStatus: 'இன்றைய நிலை',
    reportTakenStatus: 'எடுத்ததாகக் குறிக்கப்பட்டது',
    reportPendingStatus: 'உறுதிப்படுத்த வேண்டும்',
    reportEmpty: 'இந்தத் திட்டத்தில் மருந்துகள் இல்லை.',
    reportDisclaimer:
      'இது டெமோ அட்டவணையின் வசதிக்கான சுருக்கம் மட்டுமே; மருத்துவப் பதிவு அல்ல. “உறுதிப்படுத்த வேண்டும்” என்பது இங்கே யாரும் அந்த மருந்தை எடுத்ததாகக் குறிக்கவில்லை என்பதைக் குறிக்கும்; தவறவிட்டதாக உறுதி செய்யாது. சம்பந்தப்பட்டவரிடம் சரிபார்த்து, மருத்துவரின் வழிமுறைகளைப் பின்பற்றவும்.',
    reportDownload: 'CSV பதிவிறக்கு',
    reportPrint: 'அச்சிடு / PDF ஆகச் சேமி',
    textSize: 'எழுத்து அளவு',
    decreaseText: 'எழுத்தைச் சிறிதாக்கு',
    increaseText: 'எழுத்தைப் பெரிதாக்கு',
  },
  ml: {
    reportEyebrow: 'പങ്കിട്ട പരിചരണ വിവരം',
    reportLead: 'കുടുംബാംഗങ്ങൾക്കും പരിചാരകർക്കുമായി മരുന്നുകളുടെ ലളിതമായ സംഗ്രഹം.',
    reportMedicationTitle: 'മരുന്ന് റിപ്പോർട്ട്',
    reportScope: 'നിലവിലെ ദൈനംദിന പദ്ധതി · ഇന്നത്തെ നില മാത്രം',
    reportGenerated: 'തയ്യാറാക്കിയത്',
    reportTotal: 'ക്രമീകരിച്ചത്',
    reportTaken: 'കഴിച്ചതായി അടയാളപ്പെടുത്തി',
    reportPending: 'സ്ഥിരീകരണം ആവശ്യമാണ്',
    reportTableCaption: 'മരുന്ന് പദ്ധതിയും ഇന്നത്തെ രേഖയും',
    reportMedicine: 'മരുന്ന്',
    reportInstructions: 'ഡോസ് / നിർദ്ദേശങ്ങൾ',
    reportTime: 'നിശ്ചയിച്ച സമയം',
    reportStatus: 'ഇന്നത്തെ നില',
    reportTakenStatus: 'കഴിച്ചതായി അടയാളപ്പെടുത്തി',
    reportPendingStatus: 'സ്ഥിരീകരണം ആവശ്യമാണ്',
    reportEmpty: 'ഈ പദ്ധതിയിൽ മരുന്നുകളൊന്നും പട്ടികപ്പെടുത്തിയിട്ടില്ല.',
    reportDisclaimer:
      'ഇത് ഡെമോ സമയക്രമത്തിന്റെ സൗകര്യത്തിനുള്ള സംഗ്രഹം മാത്രമാണ്; മെഡിക്കൽ രേഖയല്ല. “സ്ഥിരീകരണം ആവശ്യമാണ്” എന്നത് ഇവിടെ ആരും ആ ഡോസ് കഴിച്ചതായി അടയാളപ്പെടുത്തിയിട്ടില്ല എന്നാണ്; ഡോസ് വിട്ടുപോയി എന്ന് ഇത് സ്ഥിരീകരിക്കുന്നില്ല. വ്യക്തിയോട് പരിശോധിച്ച് ഡോക്ടറുടെ നിർദ്ദേശങ്ങൾ പാലിക്കുക.',
    reportDownload: 'CSV ഡൗൺലോഡ് ചെയ്യുക',
    reportPrint: 'പ്രിന്റ് / PDF ആയി സേവ് ചെയ്യുക',
    textSize: 'അക്ഷര വലുപ്പം',
    decreaseText: 'അക്ഷരം ചെറുതാക്കുക',
    increaseText: 'അക്ഷരം വലുതാക്കുക',
  },
  mr: {
    reportEyebrow: 'सामायिक काळजीची स्पष्ट माहिती',
    reportLead: 'कुटुंबीय आणि काळजीवाहकांसाठी औषधांचा सोपा सारांश.',
    reportMedicationTitle: 'औषधांचा अहवाल',
    reportScope: 'सध्याची दैनंदिन योजना · फक्त आजची स्थिती',
    reportGenerated: 'तयार केले',
    reportTotal: 'नियोजित',
    reportTaken: 'घेतल्याची नोंद',
    reportPending: 'पुष्टी आवश्यक',
    reportTableCaption: 'औषध योजना आणि आजची नोंद',
    reportMedicine: 'औषध',
    reportInstructions: 'मात्रा / सूचना',
    reportTime: 'नियोजित वेळ',
    reportStatus: 'आजची स्थिती',
    reportTakenStatus: 'घेतल्याची नोंद',
    reportPendingStatus: 'पुष्टी आवश्यक',
    reportEmpty: 'या योजनेत औषधे नोंदलेली नाहीत.',
    reportDisclaimer:
      'हा डेमो वेळापत्रकाचा सोयीसाठी तयार केलेला सारांश आहे; वैद्यकीय नोंद नाही. “पुष्टी आवश्यक” म्हणजे येथे कोणीही ती मात्रा घेतल्याची नोंद केलेली नाही; मात्रा चुकली याची ही पुष्टी नाही. संबंधित व्यक्तीकडे तपासा आणि डॉक्टरांच्या सूचनांचे पालन करा.',
    reportDownload: 'CSV डाउनलोड करा',
    reportPrint: 'प्रिंट / PDF म्हणून जतन करा',
    textSize: 'मजकुराचा आकार',
    decreaseText: 'मजकूर लहान करा',
    increaseText: 'मजकूर मोठा करा',
  },
  or: {
    reportEyebrow: 'ସାମୂହିକ ଯତ୍ନର ସ୍ପଷ୍ଟ ସୂଚନା',
    reportLead: 'ପରିବାର ଓ ଯତ୍ନକାରୀଙ୍କ ପାଇଁ ଔଷଧର ସରଳ ସାରାଂଶ।',
    reportMedicationTitle: 'ଔଷଧ ରିପୋର୍ଟ',
    reportScope: 'ବର୍ତ୍ତମାନର ଦୈନିକ ଯୋଜନା · କେବଳ ଆଜିର ସ୍ଥିତି',
    reportGenerated: 'ପ୍ରସ୍ତୁତ',
    reportTotal: 'ନିର୍ଦ୍ଧାରିତ',
    reportTaken: 'ନିଆଯାଇଥିବା ଚିହ୍ନିତ',
    reportPending: 'ନିଶ୍ଚିତକରଣ ଆବଶ୍ୟକ',
    reportTableCaption: 'ଔଷଧ ଯୋଜନା ଓ ଆଜିର ଯାଞ୍ଚ',
    reportMedicine: 'ଔଷଧ',
    reportInstructions: 'ମାତ୍ରା / ନିର୍ଦ୍ଦେଶ',
    reportTime: 'ନିର୍ଦ୍ଧାରିତ ସମୟ',
    reportStatus: 'ଆଜିର ସ୍ଥିତି',
    reportTakenStatus: 'ନିଆଯାଇଥିବା ଚିହ୍ନିତ',
    reportPendingStatus: 'ନିଶ୍ଚିତକରଣ ଆବଶ୍ୟକ',
    reportEmpty: 'ଏହି ଯୋଜନାରେ କୌଣସି ଔଷଧ ନାହିଁ।',
    reportDisclaimer:
      'ଏହା ଡେମୋ ସମୟସୂଚୀର ସୁବିଧାଜନକ ସାରାଂଶ ମାତ୍ର; ଚିକିତ୍ସା ରେକର୍ଡ ନୁହେଁ। “ନିଶ୍ଚିତକରଣ ଆବଶ୍ୟକ” ଅର୍ଥ ଏଠାରେ କେହି ଏହି ଡୋଜ୍ ନିଆଯାଇଛି ବୋଲି ଚିହ୍ନିତ କରିନାହାନ୍ତି; ଏହା ଛୁଟିଗଲା ବୋଲି ନିଶ୍ଚିତ କରେନାହିଁ। ବ୍ୟକ୍ତିଙ୍କୁ ପଚାରନ୍ତୁ ଏବଂ ଡାକ୍ତରଙ୍କ ନିର୍ଦ୍ଦେଶ ମାନନ୍ତୁ।',
    reportDownload: 'CSV ଡାଉନଲୋଡ୍ କରନ୍ତୁ',
    reportPrint: 'ପ୍ରିଣ୍ଟ / PDF ଭାବେ ସଞ୍ଚୟ',
    textSize: 'ଲେଖାର ଆକାର',
    decreaseText: 'ଲେଖା ଛୋଟ କରନ୍ତୁ',
    increaseText: 'ଲେଖା ବଡ଼ କରନ୍ତୁ',
  },
  bn: {
    reportEyebrow: 'পরিবারের সঙ্গে ভাগ করা পরিচর্যার তথ্য',
    reportLead: 'পরিবার ও পরিচর্যাকারীদের জন্য ওষুধের সহজ সারাংশ।',
    reportMedicationTitle: 'ওষুধের প্রতিবেদন',
    reportScope: 'বর্তমান দৈনিক পরিকল্পনা · শুধু আজকের অবস্থা',
    reportGenerated: 'তৈরি করা হয়েছে',
    reportTotal: 'নির্ধারিত',
    reportTaken: 'খাওয়া হয়েছে হিসেবে চিহ্নিত',
    reportPending: 'নিশ্চিত করা প্রয়োজন',
    reportTableCaption: 'ওষুধের পরিকল্পনা ও আজকের নথি',
    reportMedicine: 'ওষুধ',
    reportInstructions: 'মাত্রা / নির্দেশনা',
    reportTime: 'নির্ধারিত সময়',
    reportStatus: 'আজকের অবস্থা',
    reportTakenStatus: 'খাওয়া হয়েছে হিসেবে চিহ্নিত',
    reportPendingStatus: 'নিশ্চিত করা প্রয়োজন',
    reportEmpty: 'এই পরিকল্পনায় কোনো ওষুধ তালিকাভুক্ত নেই।',
    reportDisclaimer:
      'এটি ডেমো সময়সূচির সুবিধার জন্য তৈরি সারাংশ, চিকিৎসা-নথি নয়। “নিশ্চিত করা প্রয়োজন” মানে এখানে কেউ ওই মাত্রাটি নেওয়া হয়েছে বলে চিহ্নিত করেনি; এটি বাদ পড়েছে বলে নিশ্চিত করে না। সংশ্লিষ্ট ব্যক্তির সঙ্গে যাচাই করুন এবং চিকিৎসকের নির্দেশ মেনে চলুন।',
    reportDownload: 'CSV ডাউনলোড করুন',
    reportPrint: 'প্রিন্ট / PDF হিসেবে সংরক্ষণ',
    textSize: 'লেখার আকার',
    decreaseText: 'লেখা ছোট করুন',
    increaseText: 'লেখা বড় করুন',
  },
  pa: {
    reportEyebrow: 'ਸਾਂਝੀ ਦੇਖਭਾਲ ਦੀ ਸਪਸ਼ਟ ਜਾਣਕਾਰੀ',
    reportLead: 'ਪਰਿਵਾਰ ਅਤੇ ਦੇਖਭਾਲ ਕਰਨ ਵਾਲਿਆਂ ਲਈ ਦਵਾਈਆਂ ਦਾ ਸੌਖਾ ਸਾਰ।',
    reportMedicationTitle: 'ਦਵਾਈ ਰਿਪੋਰਟ',
    reportScope: 'ਮੌਜੂਦਾ ਰੋਜ਼ਾਨਾ ਯੋਜਨਾ · ਸਿਰਫ਼ ਅੱਜ ਦੀ ਸਥਿਤੀ',
    reportGenerated: 'ਤਿਆਰ ਕੀਤਾ',
    reportTotal: 'ਤੈਅ ਕੀਤੀਆਂ',
    reportTaken: 'ਲੈਣ ਦੀ ਨਿਸ਼ਾਨਦੇਹੀ',
    reportPending: 'ਪੁਸ਼ਟੀ ਲੋੜੀਂਦੀ',
    reportTableCaption: 'ਦਵਾਈ ਯੋਜਨਾ ਅਤੇ ਅੱਜ ਦੀ ਜਾਂਚ',
    reportMedicine: 'ਦਵਾਈ',
    reportInstructions: 'ਖੁਰਾਕ / ਹਦਾਇਤਾਂ',
    reportTime: 'ਤੈਅ ਸਮਾਂ',
    reportStatus: 'ਅੱਜ ਦੀ ਸਥਿਤੀ',
    reportTakenStatus: 'ਲੈਣ ਦੀ ਨਿਸ਼ਾਨਦੇਹੀ',
    reportPendingStatus: 'ਪੁਸ਼ਟੀ ਲੋੜੀਂਦੀ',
    reportEmpty: 'ਇਸ ਯੋਜਨਾ ਵਿੱਚ ਕੋਈ ਦਵਾਈ ਦਰਜ ਨਹੀਂ ਹੈ।',
    reportDisclaimer:
      'ਇਹ ਡੈਮੋ ਸਮਾਂ-ਸਾਰਣੀ ਦਾ ਸਹੂਲਤ ਲਈ ਬਣਾਇਆ ਸਾਰ ਹੈ, ਮੈਡੀਕਲ ਰਿਕਾਰਡ ਨਹੀਂ। “ਪੁਸ਼ਟੀ ਲੋੜੀਂਦੀ” ਦਾ ਮਤਲਬ ਹੈ ਕਿ ਇੱਥੇ ਕਿਸੇ ਨੇ ਖੁਰਾਕ ਲੈਣ ਦੀ ਨਿਸ਼ਾਨਦੇਹੀ ਨਹੀਂ ਕੀਤੀ; ਇਹ ਨਹੀਂ ਦੱਸਦਾ ਕਿ ਖੁਰਾਕ ਰਹਿ ਗਈ। ਸੰਬੰਧਿਤ ਵਿਅਕਤੀ ਨਾਲ ਜਾਂਚ ਕਰੋ ਅਤੇ ਡਾਕਟਰ ਦੀਆਂ ਹਦਾਇਤਾਂ ਮੰਨੋ।',
    reportDownload: 'CSV ਡਾਊਨਲੋਡ ਕਰੋ',
    reportPrint: 'ਪ੍ਰਿੰਟ / PDF ਵਜੋਂ ਸੰਭਾਲੋ',
    textSize: 'ਲਿਖਤ ਦਾ ਆਕਾਰ',
    decreaseText: 'ਲਿਖਤ ਛੋਟੀ ਕਰੋ',
    increaseText: 'ਲਿਖਤ ਵੱਡੀ ਕਰੋ',
  },
  gu: {
    reportEyebrow: 'સાંઝી સંભાળની સ્પષ્ટ માહિતી',
    reportLead: 'પરિવાર અને સંભાળ રાખનારાઓ માટે દવાઓનો સરળ સારાંશ.',
    reportMedicationTitle: 'દવાનો અહેવાલ',
    reportScope: 'હાલની દૈનિક યોજના · માત્ર આજની સ્થિતિ',
    reportGenerated: 'તૈયાર કર્યું',
    reportTotal: 'નિયત',
    reportTaken: 'લીધી હોવાનું નોંધ્યું',
    reportPending: 'પુષ્ટિ જરૂરી',
    reportTableCaption: 'દવાની યોજના અને આજની નોંધ',
    reportMedicine: 'દવા',
    reportInstructions: 'માત્રા / સૂચનાઓ',
    reportTime: 'નિયત સમય',
    reportStatus: 'આજની સ્થિતિ',
    reportTakenStatus: 'લીધી હોવાનું નોંધ્યું',
    reportPendingStatus: 'પુષ્ટિ જરૂરી',
    reportEmpty: 'આ યોજનામાં કોઈ દવા સૂચિબદ્ધ નથી.',
    reportDisclaimer:
      'આ ડેમો સમયપત્રકનો સુવિધા માટેનો સારાંશ છે, તબીબી રેકોર્ડ નથી. “પુષ્ટિ જરૂરી” એટલે અહીં કોઈએ તે માત્રા લીધી હોવાનું નોંધ્યું નથી; તે ચૂકી ગઈ હોવાનું આથી સાબિત થતું નથી. સંબંધિત વ્યક્તિ સાથે તપાસો અને ડૉક્ટરની સૂચનાઓનું પાલન કરો.',
    reportDownload: 'CSV ડાઉનલોડ કરો',
    reportPrint: 'પ્રિન્ટ / PDF તરીકે સાચવો',
    textSize: 'લખાણનું કદ',
    decreaseText: 'લખાણ નાનું કરો',
    increaseText: 'લખાણ મોટું કરો',
  },
}
Object.entries(reportTranslations).forEach(([code, values]) =>
  Object.assign(translations[code], values),
)
const tutorialTranslations = {
  hi: {
    tourSlideOneTitle: 'दवाओं की स्पष्ट सूची',
    tourSlideOneCopy: 'आज की दवाएँ, खुराक के नोट और ली गई चिह्नित दवाएँ एक जगह देखें।',
    tourSlideTwoTitle: 'मुलाकातों के लिए तैयार रहें',
    tourSlideTwoCopy: 'डॉक्टर की तारीखें, क्लिनिक की जानकारी और कैलेंडर लिंक साथ रखें।',
    tourSlideThreeTitle: 'सहज दिनचर्या बनाएँ',
    tourSlideThreeCopy: 'रोज़मर्रा की सेहत गतिविधियों को सरल तरीके से दर्ज करें।',
    tourSlideFourTitle: 'मदद जल्दी पाएँ',
    tourSlideFourCopy: 'ज़रूरत पड़ने पर आपातकालीन कॉल विकल्प खोलें या नज़दीकी अस्पताल खोजें।',
  },
  kn: {
    tourSlideOneTitle: 'ಔಷಧಿಗಳನ್ನು ಸುಲಭವಾಗಿ ನೋಡಿ',
    tourSlideOneCopy: 'ಇಂದಿನ ಔಷಧಿಗಳು, ಡೋಸ್ ವಿವರಗಳು ಮತ್ತು ತೆಗೆದುಕೊಂಡ ಗುರುತುಗಳನ್ನು ಒಂದೇ ಸ್ಥಳದಲ್ಲಿ ನೋಡಿ.',
    tourSlideTwoTitle: 'ಭೇಟಿಗಳಿಗೆ ಸಿದ್ಧರಿರಿ',
    tourSlideTwoCopy: 'ಭೇಟಿ ದಿನಾಂಕ, ಕ್ಲಿನಿಕ್ ಮಾಹಿತಿ ಮತ್ತು ಕ್ಯಾಲೆಂಡರ್ ಲಿಂಕ್‌ಗಳನ್ನು ಒಟ್ಟಿಗೆ ಇಡಿ.',
    tourSlideThreeTitle: 'ಸೌಮ್ಯ ದಿನಚರಿಯನ್ನು ರೂಪಿಸಿ',
    tourSlideThreeCopy: 'ದಿನನಿತ್ಯದ ಆರೋಗ್ಯ ಚಟುವಟಿಕೆಗಳನ್ನು ಸರಳವಾಗಿ ದಾಖಲಿಸಿ.',
    tourSlideFourTitle: 'ಸಹಾಯವನ್ನು ಬೇಗ ಹುಡುಕಿ',
    tourSlideFourCopy: 'ಅಗತ್ಯವಿದ್ದಾಗ ತುರ್ತು ಕರೆ ಆಯ್ಕೆಗಳನ್ನು ತೆರೆಯಿರಿ ಅಥವಾ ಹತ್ತಿರದ ಆಸ್ಪತ್ರೆಗಳನ್ನು ಹುಡುಕಿ.',
  },
  te: {
    tourSlideOneTitle: 'మందులను స్పష్టంగా చూడండి',
    tourSlideOneCopy: 'నేటి మందులు, మోతాదు వివరాలు, తీసుకున్నట్లు గుర్తించినవి ఒకేచోట చూడండి.',
    tourSlideTwoTitle: 'వైద్య సందర్శనలకు సిద్ధంగా ఉండండి',
    tourSlideTwoCopy: 'వైద్యుని తేదీలు, క్లినిక్ వివరాలు, క్యాలెండర్ లింక్‌లను కలిసి ఉంచండి.',
    tourSlideThreeTitle: 'సులభమైన దినచర్యను ఏర్పరచుకోండి',
    tourSlideThreeCopy: 'రోజువారీ ఆరోగ్య కార్యకలాపాలను సులభంగా నమోదు చేయండి.',
    tourSlideFourTitle: 'సహాయాన్ని త్వరగా కనుగొనండి',
    tourSlideFourCopy: 'అవసరమైనప్పుడు అత్యవసర కాల్ ఎంపికలు తెరవండి లేదా సమీప ఆసుపత్రులను వెతకండి.',
  },
  ta: {
    tourSlideOneTitle: 'மருந்துகளைத் தெளிவாகப் பாருங்கள்',
    tourSlideOneCopy:
      'இன்றைய மருந்துகள், அளவு குறிப்புகள், எடுத்ததாகக் குறிக்கப்பட்டவை அனைத்தையும் ஒரே இடத்தில் பாருங்கள்.',
    tourSlideTwoTitle: 'மருத்துவச் சந்திப்புக்குத் தயாராகுங்கள்',
    tourSlideTwoCopy: 'சந்திப்பு தேதிகள், மருத்துவமனை விவரங்கள், நாட்காட்டி இணைப்புகளை ஒன்றாக வைத்திருங்கள்.',
    tourSlideThreeTitle: 'எளிய தினசரி பழக்கங்களை உருவாக்குங்கள்',
    tourSlideThreeCopy: 'அன்றாட நலச் செயல்பாடுகளை எளிதாகப் பதிவு செய்யுங்கள்.',
    tourSlideFourTitle: 'உதவியை விரைவாகக் கண்டறியுங்கள்',
    tourSlideFourCopy:
      'தேவைப்பட்டால் அவசர அழைப்பு விருப்பங்களைத் திறக்கவும் அல்லது அருகிலுள்ள மருத்துவமனைகளைத் தேடவும்.',
  },
  ml: {
    tourSlideOneTitle: 'മരുന്നുകൾ വ്യക്തമായി കാണുക',
    tourSlideOneCopy: 'ഇന്നത്തെ മരുന്നുകളും ഡോസ് കുറിപ്പുകളും കഴിച്ചതായി അടയാളപ്പെടുത്തിയവയും ഒരിടത്ത് കാണുക.',
    tourSlideTwoTitle: 'സന്ദർശനങ്ങൾക്ക് തയ്യാറാകുക',
    tourSlideTwoCopy: 'ഡോക്ടറുടെ തീയതികളും ക്ലിനിക് വിവരങ്ങളും കലണ്ടർ ലിങ്കുകളും ഒരുമിച്ച് സൂക്ഷിക്കുക.',
    tourSlideThreeTitle: 'ലളിതമായ ദിനചര്യകൾ പിന്തുടരുക',
    tourSlideThreeCopy: 'ദൈനംദിന ആരോഗ്യ പ്രവർത്തനങ്ങൾ എളുപ്പത്തിൽ രേഖപ്പെടുത്തുക.',
    tourSlideFourTitle: 'സഹായം വേഗത്തിൽ കണ്ടെത്തുക',
    tourSlideFourCopy: 'ആവശ്യമെങ്കിൽ അടിയന്തര കോൾ ഓപ്ഷനുകൾ തുറക്കുക അല്ലെങ്കിൽ അടുത്തുള്ള ആശുപത്രികൾ തിരയുക.',
  },
  mr: {
    tourSlideOneTitle: 'औषधे स्पष्टपणे पाहा',
    tourSlideOneCopy: 'आजची औषधे, मात्रेच्या सूचना आणि घेतल्याची नोंद एकाच ठिकाणी पाहा.',
    tourSlideTwoTitle: 'भेटींसाठी तयार राहा',
    tourSlideTwoCopy: 'डॉक्टरांच्या तारखा, क्लिनिकची माहिती आणि कॅलेंडर दुवे एकत्र ठेवा.',
    tourSlideThreeTitle: 'सोप्या दिनचर्या तयार करा',
    tourSlideThreeCopy: 'दैनंदिन आरोग्याच्या कृतींची सोपी नोंद ठेवा.',
    tourSlideFourTitle: 'मदत लवकर मिळवा',
    tourSlideFourCopy: 'गरज पडल्यास आपत्कालीन कॉलचे पर्याय उघडा किंवा जवळची रुग्णालये शोधा.',
  },
  or: {
    tourSlideOneTitle: 'ଔଷଧକୁ ସହଜରେ ଦେଖନ୍ତୁ',
    tourSlideOneCopy: 'ଆଜିର ଔଷଧ, ମାତ୍ରା ଟିପ୍ପଣୀ ଓ ନିଆଯାଇଥିବା ଚିହ୍ନକୁ ଗୋଟିଏ ସ୍ଥାନରେ ଦେଖନ୍ତୁ।',
    tourSlideTwoTitle: 'ସାକ୍ଷାତ ପାଇଁ ପ୍ରସ୍ତୁତ ରୁହନ୍ତୁ',
    tourSlideTwoCopy: 'ଡାକ୍ତରଙ୍କ ତାରିଖ, କ୍ଲିନିକ୍ ସୂଚନା ଓ କ୍ୟାଲେଣ୍ଡର ଲିଙ୍କ୍ ଏକାଠି ରଖନ୍ତୁ।',
    tourSlideThreeTitle: 'ସରଳ ଦୈନିକ ଅଭ୍ୟାସ ଗଢ଼ନ୍ତୁ',
    tourSlideThreeCopy: 'ଦୈନିକ ସ୍ୱାସ୍ଥ୍ୟ କାର୍ଯ୍ୟକୁ ସହଜରେ ଲେଖି ରଖନ୍ତୁ।',
    tourSlideFourTitle: 'ଶୀଘ୍ର ସାହାଯ୍ୟ ଖୋଜନ୍ତୁ',
    tourSlideFourCopy: 'ଆବଶ୍ୟକ ହେଲେ ଜରୁରୀକାଳୀନ କଲ୍ ବିକଳ୍ପ ଖୋଲନ୍ତୁ କିମ୍ବା ନିକଟସ୍ଥ ଡାକ୍ତରଖାନା ଖୋଜନ୍ତୁ।',
  },
  bn: {
    tourSlideOneTitle: 'ওষুধের তালিকা স্পষ্ট রাখুন',
    tourSlideOneCopy: 'আজকের ওষুধ, মাত্রার নোট এবং নেওয়া হয়েছে বলে চিহ্নিত ওষুধ এক জায়গায় দেখুন।',
    tourSlideTwoTitle: 'চিকিৎসকের সাক্ষাতের জন্য প্রস্তুত থাকুন',
    tourSlideTwoCopy: 'সাক্ষাতের তারিখ, ক্লিনিকের তথ্য ও ক্যালেন্ডার লিঙ্ক একসঙ্গে রাখুন।',
    tourSlideThreeTitle: 'সহজ দৈনন্দিন অভ্যাস গড়ুন',
    tourSlideThreeCopy: 'প্রতিদিনের সুস্থতার কাজ সহজে নথিভুক্ত করুন।',
    tourSlideFourTitle: 'দ্রুত সাহায্য খুঁজুন',
    tourSlideFourCopy: 'প্রয়োজনে জরুরি কলের বিকল্প খুলুন বা কাছের হাসপাতাল খুঁজুন।',
  },
  pa: {
    tourSlideOneTitle: 'ਦਵਾਈਆਂ ਦੀ ਸੂਚੀ ਸਾਫ਼ ਰੱਖੋ',
    tourSlideOneCopy: 'ਅੱਜ ਦੀਆਂ ਦਵਾਈਆਂ, ਖੁਰਾਕ ਦੇ ਨੋਟ ਅਤੇ ਲਈਆਂ ਵਜੋਂ ਦਰਜ ਦਵਾਈਆਂ ਇੱਕ ਥਾਂ ਵੇਖੋ।',
    tourSlideTwoTitle: 'ਮੁਲਾਕਾਤਾਂ ਲਈ ਤਿਆਰ ਰਹੋ',
    tourSlideTwoCopy: 'ਡਾਕਟਰ ਦੀਆਂ ਤਾਰੀਖਾਂ, ਕਲੀਨਿਕ ਦੀ ਜਾਣਕਾਰੀ ਅਤੇ ਕੈਲੰਡਰ ਲਿੰਕ ਇਕੱਠੇ ਰੱਖੋ।',
    tourSlideThreeTitle: 'ਸੌਖੀਆਂ ਰੋਜ਼ਾਨਾ ਆਦਤਾਂ ਬਣਾਓ',
    tourSlideThreeCopy: 'ਰੋਜ਼ਾਨਾ ਸਿਹਤ ਗਤੀਵਿਧੀਆਂ ਦੀ ਸੌਖੀ ਨੋਟਿੰਗ ਕਰੋ।',
    tourSlideFourTitle: 'ਮਦਦ ਜਲਦੀ ਲੱਭੋ',
    tourSlideFourCopy: 'ਲੋੜ ਪੈਣ ਉੱਤੇ ਐਮਰਜੈਂਸੀ ਕਾਲ ਦੇ ਵਿਕਲਪ ਖੋਲ੍ਹੋ ਜਾਂ ਨੇੜਲੇ ਹਸਪਤਾਲ ਲੱਭੋ।',
  },
  gu: {
    tourSlideOneTitle: 'દવાઓની યાદી સ્પષ્ટ રાખો',
    tourSlideOneCopy: 'આજની દવાઓ, માત્રાની નોંધ અને લીધેલી તરીકે ચિહ્નિત દવાઓ એક જગ્યાએ જુઓ.',
    tourSlideTwoTitle: 'મુલાકાત માટે તૈયાર રહો',
    tourSlideTwoCopy: 'ડૉક્ટરની તારીખો, ક્લિનિકની માહિતી અને કૅલેન્ડર લિંક્સ સાથે રાખો.',
    tourSlideThreeTitle: 'સરળ દૈનિક આદતો બનાવો',
    tourSlideThreeCopy: 'દૈનિક સ્વાસ્થ્ય પ્રવૃત્તિઓની સરળ નોંધ રાખો.',
    tourSlideFourTitle: 'ઝડપથી મદદ શોધો',
    tourSlideFourCopy: 'જરૂર પડે ત્યારે કટોકટી કૉલના વિકલ્પો ખોલો અથવા નજીકની હૉસ્પિટલો શોધો.',
  },
}
Object.entries(tutorialTranslations).forEach(([code, values]) =>
  Object.assign(translations[code], values),
)
const uiLabels = {
  en: {
    addToGoogleCalendar: '＋ Add to Google Calendar',
    noAppointments: 'No appointments yet.',
    noneScheduled: 'None scheduled',
  },
  hi: {
    addToGoogleCalendar: '＋ Google Calendar में जोड़ें',
    noAppointments: 'अभी कोई अपॉइंटमेंट नहीं।',
    noneScheduled: 'कोई अपॉइंटमेंट नहीं',
  },
  kn: {
    addToGoogleCalendar: '＋ Google ಕ್ಯಾಲೆಂಡರ್‌ಗೆ ಸೇರಿಸಿ',
    noAppointments: 'ಇನ್ನೂ ಯಾವುದೇ ಭೇಟಿಗಳಿಲ್ಲ.',
    noneScheduled: 'ಯಾವುದೇ ಭೇಟಿ ನಿಗದಿಯಾಗಿಲ್ಲ',
  },
  te: {
    addToGoogleCalendar: '＋ Google క్యాలెండర్‌లో చేర్చండి',
    noAppointments: 'ఇంకా అపాయింట్‌మెంట్‌లు లేవు.',
    noneScheduled: 'ఏదీ షెడ్యూల్ కాలేదు',
  },
  ta: {
    addToGoogleCalendar: '＋ Google Calendar-ல் சேர்க்கவும்',
    noAppointments: 'சந்திப்புகள் எதுவும் இல்லை.',
    noneScheduled: 'எதுவும் திட்டமிடப்படவில்லை',
  },
  ml: {
    addToGoogleCalendar: '＋ Google കലണ്ടറിൽ ചേർക്കുക',
    noAppointments: 'അപ്പോയിന്റ്മെന്റുകളില്ല.',
    noneScheduled: 'ഒന്നും നിശ്ചയിച്ചിട്ടില്ല',
  },
  mr: {
    addToGoogleCalendar: '＋ Google Calendar मध्ये जोडा',
    noAppointments: 'अद्याप भेटी नाहीत.',
    noneScheduled: 'काहीही नियोजित नाही',
  },
  or: {
    addToGoogleCalendar: '＋ Google Calendarରେ ଯୋଡ଼ନ୍ତୁ',
    noAppointments: 'ଏପର୍ଯ୍ୟନ୍ତ କୌଣସି ସାକ୍ଷାତ ନାହିଁ।',
    noneScheduled: 'କିଛି ନିର୍ଦ୍ଧାରିତ ନାହିଁ',
  },
  bn: {
    addToGoogleCalendar: '＋ Google Calendar-এ যোগ করুন',
    noAppointments: 'এখনও কোনো অ্যাপয়েন্টমেন্ট নেই।',
    noneScheduled: 'কিছু নির্ধারিত নেই',
  },
  pa: {
    addToGoogleCalendar: '＋ Google Calendar ਵਿੱਚ ਸ਼ਾਮਲ ਕਰੋ',
    noAppointments: 'ਹਾਲੇ ਕੋਈ ਮੁਲਾਕਾਤ ਨਹੀਂ।',
    noneScheduled: 'ਕੋਈ ਤੈਅ ਨਹੀਂ',
  },
  gu: {
    addToGoogleCalendar: '＋ Google Calendar માં ઉમેરો',
    noAppointments: 'હજુ કોઈ મુલાકાત નથી.',
    noneScheduled: 'કંઈ નક્કી નથી',
  },
}
const logoutTranslations = {
  en: 'Log out',
  hi: 'लॉग आउट',
  kn: 'ಲಾಗ್ ಔಟ್',
  te: 'లాగ్ అవుట్',
  ta: 'வெளியேறு',
  ml: 'ലോഗ് ഔട്ട്',
  mr: 'लॉग आउट',
  or: 'ଲଗ୍ ଆଉଟ୍',
  bn: 'লগ আউট',
  pa: 'ਲੌਗ ਆਉਟ',
  gu: 'લૉગ આઉટ',
}
const t = k =>
  (translations[currentLang] && translations[currentLang][k]) ||
  (uiLabels[currentLang] && uiLabels[currentLang][k]) ||
  (k === 'authLogout' && logoutTranslations[currentLang]) ||
  english[k] ||
  k
let currentLang = 'en',
  doses = [],
  appointments = [],
  routines = [],
  careTasks = [],
  adminMedications = [],
  currentRole = 'guest',
  doseFilter = 'all',
  appointmentFilter = 'upcoming',
  currentPage = 'dashboard',
  authMode = 'account'
const seedDoses = [
  {
    name: 'Vitamin D3',
    details: '1 softgel · with breakfast',
    time: '8:00 AM',
    icon: '☀️',
    taken: true,
  },
  {
    name: 'Amlodipine',
    details: '5 mg · after breakfast',
    time: '8:30 AM',
    icon: '🌿',
    taken: true,
  },
  {
    name: 'Calcium + D',
    details: '1 tablet · with water',
    time: '1:00 PM',
    icon: '💧',
    taken: false,
  },
  {
    name: 'Evening medicine',
    details: 'As prescribed · after dinner',
    time: '8:00 PM',
    icon: '🌙',
    taken: false,
  },
]
function dateOffset(days) {
  const d = new Date()
  d.setHours(12, 0, 0, 0)
  d.setDate(d.getDate() + days)
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}
function appointmentDate(date) {
  return new Date(date + 'T12:00:00')
}
const seedAppointments = [
  {
    name: 'Dr. Meera Shah',
    kind: 'Cardiology · City Care Clinic',
    time: '10:30 AM',
    place: 'City Care Clinic',
    date: dateOffset(1),
  },
  {
    name: 'Annual wellness check',
    kind: 'Dr. Arjun Rao · Family medicine',
    time: '11:00 AM',
    place: 'Sunrise Medical Centre',
    date: dateOffset(5),
  },
]
const seedRoutines = [
  { icon: '💧', name: 'drinking', note: '8:30 AM · morning', done: true },
  { icon: '🧘', name: 'gentleMovement', note: '10:00 AM · 10 min', done: false },
  { icon: '🌱', name: 'walkOutside', note: '5:30 PM · if you feel up to it', done: false },
]
function load(key, fallback) {
  try {
    const value = JSON.parse(localStorage.getItem('everwell-' + key))
    if (value === null) return JSON.parse(JSON.stringify(fallback))
    const valid = {
      doses: item =>
        item &&
        typeof item.name === 'string' &&
        item.name.length <= 100 &&
        typeof item.taken === 'boolean' &&
        (item.details === undefined || typeof item.details === 'string') &&
        (item.time === undefined || typeof item.time === 'string'),
      appointments: item =>
        item &&
        typeof item.name === 'string' &&
        typeof item.date === 'string' &&
        /^\d{4}-\d{2}-\d{2}$/.test(item.date) &&
        !Number.isNaN(Date.parse(item.date + 'T12:00:00')) &&
        (item.time === undefined || typeof item.time === 'string'),
      routines: item => item && typeof item.name === 'string' && typeof item.done === 'boolean',
    }[key]
    if (
      !Array.isArray(value) ||
      value.length > (key === 'routines' ? 30 : 100) ||
      !valid ||
      !value.every(valid)
    )
      throw new Error('Saved demo data has an invalid shape.')
    return value
  } catch (e) {
    showToast('Saved demo ' + key + ' data could not be read; sample data was restored.')
    return JSON.parse(JSON.stringify(fallback))
  }
}
let stateWriteRunning = false
let stateWritePending = false
function persist(key, value) {
  try {
    localStorage.setItem('everwell-' + key, JSON.stringify(value))
  } catch (e) {
    showToast('This browser could not save the demo update.')
  }
  if (!apiMode || !Array.isArray(doses) || !Array.isArray(appointments) || !Array.isArray(routines))
    return
  stateWritePending = true
  if (!stateWriteRunning) void flushStateWrites()
}
async function flushStateWrites() {
  stateWriteRunning = true
  try {
    while (stateWritePending) {
      stateWritePending = false
      const response = await fetch('/api/state', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ doses, appointments, routines }),
      })
      if (!response.ok) {
        const result = await response.json().catch(() => ({}))
        throw new Error(result.error || 'The care update could not be saved to the server.')
      }
    }
  } catch (error) {
    stateWritePending = false
    showToast(error.message || 'The care update could not be saved to the server.')
  } finally {
    stateWriteRunning = false
  }
}
function safe(s) {
  return String(s).replace(
    /[&<>"']/g,
    c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c],
  )
}
let tourSlide = 0,
  tourImageIndex = 0,
  tourModalSlideTimer = null,
  tourProgressTimer = null
function setLanguage(code) {
  currentLang = translations[code] ? code : 'en'
  try {
    localStorage.setItem('everwell-language', currentLang)
  } catch (e) {
    showToast('Language preference could not be saved in this browser.')
  }
  document.documentElement.lang = currentLang
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.innerHTML = t(el.dataset.i18n)
  })
  document
    .querySelectorAll('[data-i18n-placeholder]')
    .forEach(el => (el.placeholder = t(el.dataset.i18nPlaceholder)))
  document.querySelector('.nav').setAttribute('aria-label', t('menu'))
  document
    .querySelectorAll('.nav button')
    .forEach((el, i) =>
      el.setAttribute(
        'aria-label',
        t(['navOverview', 'navMedicines', 'navAppointments', 'navRoutines', 'navCircle'][i]),
      ),
    )
  document.querySelector('.login-form').setAttribute('aria-label', t('pinLabel'))
  render()
  updateGreeting()
  updateTourScene(document.querySelector('.tour-screen'))
  updateTourScene(document.querySelector('.tour-modal-screen'))
  document.querySelectorAll('.suggestions button').forEach(b => {
    b.textContent = ({
      en: ['Today’s medicines', 'Next appointment', 'Invite family'],
      hi: ['आज की दवाइयाँ', 'अगली अपॉइंटमेंट', 'परिवार को आमंत्रित करें'],
      kn: ['ಇಂದಿನ ಔಷಧಿಗಳು', 'ಮುಂದಿನ ಭೇಟಿ', 'ಕುಟುಂಬವನ್ನು ಆಹ್ವಾನಿಸಿ'],
      te: ['ఈరోజు మందులు', 'తదుపరి అపాయింట్‌మెంట్', 'కుటుంబాన్ని ఆహ్వానించండి'],
      ta: ['இன்றைய மருந்துகள்', 'அடுத்த சந்திப்பு', 'குடும்பத்தை அழைக்கவும்'],
      ml: ['ഇന്നത്തെ മരുന്നുകൾ', 'അടുത്ത അപ്പോയിന്റ്മെന്റ്', 'കുടുംബത്തെ ക്ഷണിക്കുക'],
      mr: ['आजची औषधे', 'पुढची भेट', 'कुटुंबाला बोलवा'],
      or: ['ଆଜିର ଔଷଧ', 'ପରବର୍ତ୍ତୀ ସାକ୍ଷାତ', 'ପରିବାରକୁ ନିମନ୍ତ୍ରଣ'],
      bn: ['আজকের ওষুধ', 'পরবর্তী অ্যাপয়েন্টমেন্ট', 'পরিবারকে আমন্ত্রণ'],
      pa: ['ਅੱਜ ਦੀਆਂ ਦਵਾਈਆਂ', 'ਅਗਲੀ ਮੁਲਾਕਾਤ', 'ਪਰਿਵਾਰ ਨੂੰ ਸੱਦੋ'],
      gu: ['આજની દવાઓ', 'આગામી મુલાકાત', 'પરિવારને આમંત્રણ'],
    }[currentLang] || ['Today’s medicines', 'Next appointment', 'Invite family'])[
      Array.from(b.parentElement.children).indexOf(b)
    ]
  })
}
function updateGreeting() {
  const h = new Date().getHours(),
    key = h < 12 ? 'goodMorning' : h < 17 ? 'goodAfternoon' : 'goodEvening'
  const el = document.querySelector('[data-i18n="greeting"]')
  if (el) el.textContent = t(key)
}
function render() {
  renderDoses()
  renderAppointments()
  renderRoutines()
  renderFamily()
  updatePageHeading()
}
function doseMarkup(d, i) {
  return `<div class="dose"><div class="dose-icon">${safe(d.icon || '💊')}</div><div class="dose-info"><div class="dose-name">${safe(d.name)}</div><div class="dose-desc">${safe(d.details || d.dosage || '')}</div></div><div class="dose-time">${safe(d.time || '')}</div><button class="dose-action ${d.taken ? 'done' : ''}" data-dose="${i}" ${d.taken ? 'disabled' : ''}>${d.taken ? '✓ ' + safe(t('doseTaken')) : safe(t('markTaken'))}</button></div>`
}
function renderDoses() {
  const overview = document.getElementById('doseList'),
    page = document.getElementById('medicationPageList'),
    taken = doses.filter(d => d.taken).length,
    remaining = doses.length - taken,
    filtered = doses
      .map((dose, index) => ({ dose, index }))
      .filter(
        ({ dose }) => doseFilter === 'all' || (doseFilter === 'taken' ? dose.taken : !dose.taken),
      )
  overview.innerHTML = doses.map(doseMarkup).join('')
  page.innerHTML = filtered.length
    ? filtered.map(({ dose, index }) => doseMarkup(dose, index)).join('')
    : `<p class="muted">${safe(t('noMedicinesRemaining'))}</p>`
  document.getElementById('doseStat').innerHTML =
    `${taken} <span style="font-size:13px;color:#89958c;font-weight:500">${safe(t('of'))}</span> ${doses.length}`
  document.getElementById('medPageTotal').textContent = doses.length
  document.getElementById('medPageTaken').textContent = taken
  document.getElementById('medPageRemaining').textContent = remaining
  document.getElementById('medPageProgress').textContent =
    `${doses.length ? Math.round((taken / doses.length) * 100) : 0}%`
  document.querySelectorAll('[data-dose-filter]').forEach(button => {
    const active = button.dataset.doseFilter === doseFilter
    button.classList.toggle('active', active)
    button.setAttribute('aria-pressed', String(active))
  })
  document.querySelectorAll('[data-dose]').forEach(button =>
    button.addEventListener('click', () => {
      const dose = doses[Number(button.dataset.dose)]
      if (!dose) return
      dose.taken = true
      persist('doses', doses)
      render()
      showToast(t('takenToast'))
    }),
  )
  renderMedicationReport()
}
function renderMedicationReport() {
  const now = new Date(),
    dateText = new Intl.DateTimeFormat(currentLang, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(now),
    taken = doses.filter(dose => dose.taken).length
  document.getElementById('reportDate').textContent = dateText
  document.getElementById('reportTotal').textContent = doses.length
  document.getElementById('reportTaken').textContent = taken
  document.getElementById('reportPending').textContent = doses.length - taken
  document.getElementById('reportRows').innerHTML = doses.length
    ? doses
        .map(
          dose =>
            `<tr><th scope="row">${safe(dose.name)}</th><td>${safe(dose.details || dose.dosage || '—')}</td><td>${safe(dose.time || '—')}</td><td><span class="report-status ${dose.taken ? 'taken' : 'pending'}">${safe(t(dose.taken ? 'reportTakenStatus' : 'reportPendingStatus'))}</span></td></tr>`,
        )
        .join('')
    : `<tr><td class="report-empty" colspan="4">${safe(t('reportEmpty'))}</td></tr>`
}
function reportCsvCell(value) {
  const text = String(value ?? ''),
    safeText = /^[\s\u0000-\u001f]*[=+\-@]/.test(text) ? `'${text}` : text
  return `"${safeText.replace(/"/g, '""')}"`
}
function downloadMedicationReport() {
  const taken = doses.filter(dose => dose.taken).length,
    rows = [
      [t('reportMedicationTitle'), 'Ananya Rao', document.getElementById('reportDate').textContent],
      [t('reportTotal'), doses.length],
      [t('reportTaken'), taken],
      [t('reportPending'), doses.length - taken],
      [],
      [t('reportMedicine'), t('reportInstructions'), t('reportTime'), t('reportStatus')],
      ...doses.map(dose => [
        dose.name,
        dose.details || dose.dosage || '',
        dose.time || '',
        t(dose.taken ? 'reportTakenStatus' : 'reportPendingStatus'),
      ]),
      [],
      [t('reportDisclaimer')],
    ],
    csv = rows.map(row => row.map(reportCsvCell).join(',')).join('\r\n'),
    blob = new Blob(['\uFEFF', csv], { type: 'text/csv;charset=utf-8' }),
    url = URL.createObjectURL(blob),
    link = document.createElement('a')
  link.href = url
  link.download = `everwell-medication-report-${dateOffset(0)}.csv`
  document.body.appendChild(link)
  link.click()
  link.remove()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}
function calendarUrl(a) {
  const match = String(a.time || '').match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i)
  const hour = match ? (Number(match[1]) % 12) + (match[3].toUpperCase() === 'PM' ? 12 : 0) : 9
  const minute = match ? Number(match[2]) : 0
  const start = appointmentDate(a.date)
  start.setHours(hour, minute, 0, 0)
  const end = new Date(start.getTime() + 60 * 60 * 1000)
  const dates =
    start
      .toISOString()
      .replace(/[-:]/g, '')
      .replace(/\.\d{3}/, '') +
    '/' +
    end
      .toISOString()
      .replace(/[-:]/g, '')
      .replace(/\.\d{3}/, '')
  const query = new URLSearchParams({
    action: 'TEMPLATE',
    text: a.name,
    dates,
    details: a.kind || '',
    location: a.place || a.location || '',
  })
  return 'https://calendar.google.com/calendar/render?' + query.toString()
}
function appointmentMarkup(a) {
  const date = a.date ? appointmentDate(a.date) : null,
    day = date ? new Intl.DateTimeFormat(currentLang, { day: '2-digit' }).format(date) : '',
    month = date ? new Intl.DateTimeFormat(currentLang, { month: 'short' }).format(date) : '',
    calendar = a.date
      ? `<a class="calendar-link" href="${safe(calendarUrl(a))}" target="_blank" rel="noopener noreferrer" aria-label="${safe(t('addToGoogleCalendar'))}: ${safe(a.name)}">＋ ${safe(t('addToGoogleCalendar').replace(/^＋\s*/, ''))}</a>`
      : ''
  return `<div class="appointment"><div class="date-box"><b>${safe(day)}</b><span>${safe(month)}</span></div><div class="appt-info"><b>${safe(a.name)}</b><div>${safe(a.kind || a.location || '')}</div>${calendar}</div><div class="appt-time">${safe(a.time || '')}</div></div>`
}
function renderAppointments() {
  const sorted = appointments.slice().sort((a, b) => (a.date || '').localeCompare(b.date || '')),
    upcoming = sorted.filter(a => a.date && a.date >= dateOffset(0)),
    filtered = sorted.filter(
      a =>
        appointmentFilter === 'all' ||
        (appointmentFilter === 'upcoming' ? a.date >= dateOffset(0) : a.date < dateOffset(0)),
    )
  document.getElementById('appointmentList').innerHTML = sorted.length
    ? sorted.map(appointmentMarkup).join('')
    : `<p class="muted">${safe(t('noAppointments'))}</p>`
  document.getElementById('appointmentPageList').innerHTML = filtered.length
    ? filtered.map(appointmentMarkup).join('')
    : `<p class="muted">${safe(t('noAppointments'))}</p>`
  document.getElementById('apptPageTotal').textContent = appointments.length
  document.getElementById('apptPageUpcoming').textContent = upcoming.length
  document.querySelectorAll('[data-appointment-filter]').forEach(button => {
    const active = button.dataset.appointmentFilter === appointmentFilter
    button.classList.toggle('active', active)
    button.setAttribute('aria-pressed', String(active))
  })
  updateAppointmentStat()
}
function updateAppointmentStat() {
  const next = appointments
      .filter(a => a.date && a.date >= dateOffset(0))
      .sort((a, b) => a.date.localeCompare(b.date))[0],
    nextDate = next
      ? new Intl.DateTimeFormat(currentLang, {
          weekday: 'short',
          month: 'short',
          day: 'numeric',
        }).format(appointmentDate(next.date))
      : t('noneScheduled')
  document.getElementById('nextVisitDate').textContent = nextDate
  document.getElementById('nextVisitDetails').textContent = next
    ? `${next.name} · ${next.time}`
    : t('noneScheduled')
  document.getElementById('apptPageNext').textContent = next
    ? new Intl.DateTimeFormat(currentLang, { month: 'short', day: 'numeric' }).format(
        appointmentDate(next.date),
      )
    : '—'
  document.getElementById('apptPageNextName').textContent = next
    ? `${next.name} · ${next.time}`
    : t('noneScheduled')
}
function renderRoutines() {
  const noteKeys = {
      drinking: 'waterRoutineNote',
      gentleMovement: 'movementRoutineNote',
      walkOutside: 'walkRoutineNote',
    },
    markup = routines
      .map(
        (r, i) =>
          `<div class="routine"><div class="routine-icon">${safe(r.icon)}</div><div class="routine-copy"><b>${safe(t(r.name))}</b><div>${safe(t(noteKeys[r.name] || r.note))}</div></div><button class="toggle ${r.done ? 'on' : ''}" data-routine="${i}" aria-label="${safe(t(r.name))}" aria-pressed="${r.done}"></button></div>`,
      )
      .join(''),
    done = routines.filter(r => r.done).length,
    percent = routines.length ? Math.round((done / routines.length) * 100) : 0
  document.getElementById('routineList').innerHTML = markup
  document.getElementById('routinePageList').innerHTML = markup
  document.getElementById('routinePageDone').textContent = done
  document.getElementById('routinePageTotal').textContent = routines.length
  document.getElementById('routineProgressFill').style.width = `${percent}%`
  document.getElementById('routineProgressText').textContent = `${percent}% complete`
  document.querySelectorAll('[data-routine]').forEach(button =>
    button.addEventListener('click', () => {
      const routine = routines[Number(button.dataset.routine)]
      if (!routine) return
      routine.done = !routine.done
      persist('routines', routines)
      renderRoutines()
      showToast(t('routineToast'))
    }),
  )
}
function renderFamily() {
  const markup = [
    ['A', 'Aditi Rao', 'familyDaughter', 'online'],
    ['R', 'Rahul Rao', 'familySon', 'online'],
    ['S', 'Sonal Iyer', 'familyCoordinator', 'pending'],
  ]
    .map(
      x =>
        `<div class="circle-row"><div class="avatar">${x[0]}</div><div class="circle-copy">${x[1]}<span>${safe(t(x[2]))}</span></div><span class="status ${x[3] === 'pending' ? 'pending' : ''}">${safe(t(x[3] === 'online' ? 'statusOnline' : 'statusInvited'))}</span></div>`,
    )
    .join('')
  document.getElementById('familyList').innerHTML = markup
  document.getElementById('familyPageList').innerHTML = markup
}
function taskStatusKey(status) {
  return status === 'completed'
    ? 'taskStatusCompleted'
    : status === 'in_progress'
      ? 'taskStatusProgress'
      : 'taskStatusOpen'
}
function taskCategoryKey(category) {
  return (
    {
      care: 'requestCare',
      medication: 'requestMedication',
      appointment: 'requestAppointment',
      contact: 'requestContact',
      other: 'requestOther',
    }[category] || 'requestOther'
  )
}
function taskDate(value) {
  const date = new Date(value)
  return Number.isNaN(date.getTime())
    ? value
    : new Intl.DateTimeFormat(currentLang, { dateStyle: 'medium', timeStyle: 'short' }).format(date)
}
function renderUserTasks() {
  const container = document.getElementById('myCareRequests')
  container.innerHTML = careTasks.length
    ? careTasks
        .map(
          task =>
            `<article class="task-card ${task.priority === 'urgent' ? 'urgent' : ''}"><div class="task-card-top"><span class="task-category">${safe(t(taskCategoryKey(task.category)))}</span><span class="task-status ${safe(task.status)}">${safe(t(taskStatusKey(task.status)))}</span></div><h4>${safe(task.title)}</h4><p>${safe(task.details || '')}</p><div class="task-meta">${safe(t('taskAssigned'))} · ${safe(taskDate(task.createdAt))}</div>${task.adminNote ? `<div class="task-reply"><b>${safe(t('taskAdminReply'))}:</b> ${safe(task.adminNote)}</div>` : ''}</article>`,
        )
        .join('')
    : `<p class="muted task-empty">${safe(t('requestNoTasks'))}</p>`
}
function renderAdminTasks() {
  const container = document.getElementById('adminCareRequests')
  container.innerHTML = careTasks.length
    ? careTasks
        .map(
          task =>
            `<article class="task-card admin-task-card ${task.priority === 'urgent' ? 'urgent' : ''}"><div class="task-card-top"><span class="task-category">${safe(t(taskCategoryKey(task.category)))}</span><span class="task-status ${safe(task.status)}">${safe(t(taskStatusKey(task.status)))}</span></div><h3>${safe(task.title)}</h3><p>${safe(task.details || '')}</p><div class="task-meta">${safe(t('taskRequester'))}: ${safe(task.requesterName)} · ${safe(task.requesterRole === 'guest' ? t('authRoleGuest') : t('authRoleMember'))} · ${safe(taskDate(task.createdAt))}</div>${task.priority === 'urgent' ? `<div class="task-priority">${safe(t('taskUrgent'))}</div>` : ''}<label>${safe(t('taskStatusLabel'))}<select data-task-status="${safe(task.id)}"><option value="open" ${task.status === 'open' ? 'selected' : ''}>${safe(t('taskStatusOpen'))}</option><option value="in_progress" ${task.status === 'in_progress' ? 'selected' : ''}>${safe(t('taskStatusProgress'))}</option><option value="completed" ${task.status === 'completed' ? 'selected' : ''}>${safe(t('taskStatusCompleted'))}</option></select></label><label>${safe(t('taskReplyLabel'))}<textarea data-task-note="${safe(task.id)}" maxlength="500" rows="2" placeholder="${safe(t('taskReplyPlaceholder'))}">${safe(task.adminNote || '')}</textarea></label><button type="button" class="secondary" data-save-task="${safe(task.id)}">${safe(t('adminTaskSave'))}</button></article>`,
        )
        .join('')
    : `<p class="muted task-empty">${safe(t('adminNoRequests'))}</p>`
  document.getElementById('adminOpenRequestCount').textContent = careTasks.filter(
    task => task.status !== 'completed',
  ).length
}
function renderAdminMedications() {
  const list = document.getElementById('adminMedicationList')
  list.innerHTML = adminMedications.length
    ? adminMedications
        .map(
          medication =>
            `<article class="admin-medication-row"><div class="admin-medication-info"><b>${safe(medication.name)}</b><span>${safe(medication.details || '')}</span><span>${safe(medication.time || '')}</span><span class="task-status ${medication.taken ? 'completed' : 'open'}">${safe(t(medication.taken ? 'reportTakenStatus' : 'reportPendingStatus'))}</span></div><div class="admin-medication-review">${medication.review ? `<span>${safe(t('adminReviewed'))} · ${safe(medication.review.reviewedBy)} · ${safe(taskDate(medication.review.reviewedAt))}</span>` : `<span>${safe(t('adminNotReviewed'))}</span>`}<button type="button" class="secondary" data-verify-medication="${safe(medication.id)}">${safe(t(medication.review ? 'adminReviewAgain' : 'adminMarkReviewed'))}</button></div></article>`,
        )
        .join('')
    : `<p class="muted task-empty">${safe(t('adminMedicationEmpty'))}</p>`
  document.getElementById('adminMedicationCountValue').textContent = adminMedications.length
  document.getElementById('adminVerifiedCountValue').textContent = adminMedications.filter(
    item => item.review,
  ).length
}
async function loadUserTasks() {
  if (!apiMode) {
    careTasks = []
    renderUserTasks()
    return false
  }
  try {
    const response = await fetch('/api/tasks', { cache: 'no-store' }),
      result = await response.json()
    if (!response.ok) throw new Error(result.error || t('requestLoadError'))
    careTasks = result.tasks
    renderUserTasks()
    return true
  } catch (error) {
    showToast(error.message)
    return false
  }
}
async function loadAdminDashboard() {
  if (!apiMode) {
    showToast(t('authServerRequired'))
    return false
  }
  try {
    const response = await fetch('/api/admin/overview', { cache: 'no-store' })
    const result = await response.json()
    if (!response.ok) throw new Error(result.error || t('requestLoadError'))
    careTasks = result.tasks
    adminMedications = result.medications
    renderAdminTasks()
    renderAdminMedications()
    window.dispatchEvent(new CustomEvent('everwell:admin-overview', { detail: result }))
    return true
  } catch (error) {
    showToast(error.message)
    return false
  }
}
async function submitCareRequest(event) {
  event.preventDefault()
  if (!apiMode) {
    showToast(t('authServerRequired'))
    return
  }
  const form = event.currentTarget,
    payload = Object.fromEntries(new FormData(form).entries())
  try {
    const response = await fetch('/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }),
      result = await response.json()
    if (!response.ok) throw new Error(result.error || t('requestSubmitError'))
    form.reset()
    if (await loadUserTasks()) showToast(t('requestSubmitted'))
    else showToast(t('requestSubmittedRefreshError'))
  } catch (error) {
    showToast(error.message)
  }
}
async function saveCareTask(taskId) {
  const status = Array.from(document.querySelectorAll('[data-task-status]')).find(
      element => element.dataset.taskStatus === taskId,
    ),
    note = Array.from(document.querySelectorAll('[data-task-note]')).find(
      element => element.dataset.taskNote === taskId,
    )
  if (!status || !note) return
  try {
    const response = await fetch(`/api/tasks/${encodeURIComponent(taskId)}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: status.value, adminNote: note.value }),
      }),
      result = await response.json()
    if (!response.ok) throw new Error(result.error || t('adminTaskSaveError'))
    if (await loadAdminDashboard()) showToast(t('adminTaskSaved'))
  } catch (error) {
    showToast(error.message)
  }
}
async function verifyAdminMedication(medicationId) {
  try {
    const response = await fetch(
        `/api/admin/medications/${encodeURIComponent(medicationId)}/verify`,
        { method: 'POST' },
      ),
      result = await response.json()
    if (!response.ok) throw new Error(result.error || t('adminReviewError'))
    if (await loadAdminDashboard()) showToast(t('adminReviewSaved'))
  } catch (error) {
    showToast(error.message)
  }
}
function updatePageHeading() {
  const labels = {
      dashboard: 'navOverview',
      medications: 'navMedicines',
      appointments: 'navAppointments',
      reports: 'navReports',
      admin: 'navAdmin',
      routines: 'navRoutines',
      family: 'navCircle',
      'ai-solutions': 'navAiSolutions',
      emergency: 'navEmergency',
    },
    current = document.getElementById('crumbCurrentPage'),
    admin = currentRole === 'admin'
  if (current) current.textContent = t(labels[currentPage] || 'navOverview')
  document
    .querySelectorAll('[data-role-nav="member"]')
    .forEach(element => element.classList.toggle('hidden', admin))
  document
    .querySelectorAll('[data-role-nav="admin"]')
    .forEach(element => element.classList.toggle('hidden', !admin))
  const menuLabel = t(admin ? 'adminMenu' : 'menu')
  document.querySelector('.nav-label').textContent = menuLabel
  document.querySelector('.nav').setAttribute('aria-label', menuLabel)
  document
    .querySelectorAll('.nav button')
    .forEach(button => button.setAttribute('aria-label', t(labels[button.dataset.page] || 'menu')))
  document
    .querySelectorAll('[data-i18n-aria-label]')
    .forEach(element => element.setAttribute('aria-label', t(element.dataset.i18nAriaLabel)))
}
function showPage(page, updateHistory) {
  const valid = [
      'dashboard',
      'medications',
      'appointments',
      'reports',
      'admin',
      'routines',
      'family',
      'ai-solutions',
      'emergency',
    ],
    allowed = currentRole === 'admin' ? ['admin', 'reports', 'emergency'] : valid
  currentPage = allowed.includes(page) ? page : currentRole === 'admin' ? 'admin' : 'dashboard'
  document
    .querySelectorAll('[data-page-view]')
    .forEach(view => view.classList.toggle('hidden', view.dataset.pageView !== currentPage))
  document.querySelectorAll('.nav button').forEach(button => {
    const active = button.dataset.page === currentPage
    button.classList.toggle('active', active)
    if (active) button.setAttribute('aria-current', 'page')
    else button.removeAttribute('aria-current')
  })
  document.getElementById('careRequestPanel').classList.toggle('hidden', currentRole === 'admin')
  updatePageHeading()
  if (updateHistory !== false && location.hash !== `#${currentPage}`)
    history.pushState({ page: currentPage }, '', `#${currentPage}`)
  if (currentPage === 'admin') loadAdminDashboard()
  else if (currentPage === 'family' && currentRole !== 'admin') loadUserTasks()
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
function setAuthMode(mode) {
  const supported = ['account', 'register', 'admin', 'pin']
  authMode = supported.includes(mode) ? mode : 'account'
  const fields = {
    account: 'accountFields',
    register: 'registerFields',
    admin: 'adminFields',
    pin: 'pinFields',
  }
  Object.entries(fields).forEach(([key, id]) => {
    const section = document.getElementById(id),
      active = key === authMode
    section.classList.toggle('hidden', !active)
    section.querySelectorAll('input').forEach(input => {
      input.disabled = !active
    })
  })
  document.querySelectorAll('[data-auth-mode]').forEach(button => {
    const active = button.dataset.authMode === authMode
    button.classList.toggle('active', active)
    button.setAttribute('aria-pressed', String(active))
  })
  const submitKeys = {
      account: 'authSignIn',
      register: 'authRegisterSubmit',
      admin: 'authAdminSubmit',
      pin: 'authPinSubmit',
    },
    noteKeys = {
      account: 'authAccountNote',
      register: 'authRegisterNote',
      admin: 'authAdminNote',
      pin: 'authPinNote',
    }
  document.getElementById('authSubmit').textContent = t(submitKeys[authMode])
  document.getElementById('authNote').textContent = t(noteKeys[authMode])
  document.getElementById('loginForm').setAttribute('aria-label', t(submitKeys[authMode]))
  document.getElementById('useDemoPin').classList.toggle('hidden', authMode === 'pin')
}
async function authenticate(mode) {
  let state,
    identity = { role: 'guest', name: 'Guest' },
    payload = { mode }
  if (mode === 'account')
    payload = {
      mode,
      email: document.getElementById('authEmail').value.trim(),
      password: document.getElementById('authPassword').value,
    }
  else if (mode === 'register')
    payload = {
      name: document.getElementById('registerName').value.trim(),
      email: document.getElementById('registerEmail').value.trim(),
      password: document.getElementById('registerPassword').value,
    }
  else if (mode === 'admin') payload = { mode, pin: document.getElementById('adminPin').value }
  else if (mode === 'pin') payload = { mode, pin: document.getElementById('pin').value }
  if (apiMode) {
    try {
      const response = await fetch(mode === 'register' ? '/api/register' : '/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }),
        result = await readAuthJson(
          response,
          'The sign-in service returned an invalid response. Check that the hosted API is configured.',
        )
      if (!response.ok) {
        if (mode === 'guest' && response.status === 404) {
          throw new InvalidApiResponseError(t('authServerRequired'))
        }
        throw new Error(result.error || 'Sign-in failed.')
      }
      identity = result
      const stateResponse = await fetch('/api/state', { cache: 'no-store' }),
        saved = await readAuthJson(
          stateResponse,
          'The sign-in succeeded, but the care service returned an invalid response.',
        )
      if (!stateResponse.ok) {
        if (mode === 'guest' && stateResponse.status === 404) {
          throw new InvalidApiResponseError(t('authServerRequired'))
        }
        throw new Error(saved.error || 'Could not load care data.')
      }
      state = saved
    } catch (error) {
      if (
        mode === 'guest' &&
        (error instanceof TypeError || error instanceof InvalidApiResponseError)
      ) {
        apiMode = false
        showToast(t('authServerRequired'))
        state = loadLocalCareState()
      } else {
        showToast(error.message)
        return
      }
    }
  } else {
    if (!['guest', 'pin'].includes(mode)) {
      showToast(t('authServerRequired'))
      return
    }
    if (mode === 'pin' && document.getElementById('pin').value.trim().length < 4) {
      showToast(t('enterPin'))
      return
    }
    state = loadLocalCareState()
  }
  doses = state.doses
  appointments = state.appointments
  routines = state.routines
  currentRole = identity.role || 'guest'
  document.getElementById('adminNavButton').classList.toggle('hidden', currentRole !== 'admin')
  document.getElementById('careRequestPanel').classList.toggle('hidden', currentRole === 'admin')
  document.querySelector('.user-name').textContent = identity.name || 'Guest'
  document.querySelector('.user-role').textContent = t(
    identity.role === 'admin'
      ? 'authRoleAdmin'
      : identity.role === 'guest'
        ? 'authRoleGuest'
        : 'authRoleMember',
  )
  document.getElementById('loginScreen').classList.add('hidden')
  document.getElementById('app').classList.remove('hidden')
  document.getElementById('assistantFab').classList.remove('hidden')
  updateDateLabel()
  render()
  updateGreeting()
  showPage(currentRole === 'admin' ? 'admin' : location.hash.slice(1) || 'dashboard', false)
}
function loadLocalCareState() {
  return {
    doses: load('doses', seedDoses),
    appointments: load('appointments', seedAppointments),
    routines: load('routines', seedRoutines),
  }
}
class InvalidApiResponseError extends Error {}
async function readAuthJson(response, fallbackMessage) {
  try {
    return await response.json()
  } catch {
    throw new InvalidApiResponseError(fallbackMessage)
  }
}
function showToast(message) {
  const old = document.querySelector('.toast')
  if (old) old.remove()
  const el = document.createElement('div')
  el.className = 'toast'
  el.setAttribute('role', 'status')
  el.setAttribute('aria-live', 'polite')
  el.textContent = message
  document.body.appendChild(el)
  setTimeout(() => el.remove(), 3000)
}
function openModal(html) {
  document.getElementById('modalContent').innerHTML = html
  document.getElementById('modalBackdrop').classList.remove('hidden')
  const first = document.querySelector('#modalContent input')
  if (first) setTimeout(() => first.focus(), 30)
}
function closeModal() {
  if (tourProgressTimer) {
    clearInterval(tourProgressTimer)
    tourProgressTimer = null
  }
  if (tourModalSlideTimer) {
    clearInterval(tourModalSlideTimer)
    tourModalSlideTimer = null
  }
  document.getElementById('modalBackdrop').classList.add('hidden')
}
function openForm(kind) {
  const med = kind === 'medicine',
    title = med ? t('addMedicineTitle') : t('addAppointmentTitle')
  openModal(
    `<div class="modal-head"><div><h2>${safe(title)}</h2><p>${med ? 'Add a reminder to Ananya’s local demo schedule.' : 'Add a visit to Ananya’s local demo calendar.'}</p></div><button class="modal-close" type="button" data-close>×</button></div><form id="itemForm"><div class="form-grid">${med ? `<label class="full">${safe(t('medicineName'))}<input name="name" required maxlength="60" placeholder="e.g. Vitamin B12"></label><label>${safe(t('dosage'))}<input name="dosage" required maxlength="40" placeholder="e.g. 1 tablet"></label><label>${safe(t('time'))}<input name="time" type="time" required value="09:00"></label><label class="full">${safe(t('frequency'))}<select name="frequency"><option>Once daily</option><option>Twice daily</option><option>As prescribed</option></select></label>` : `<label class="full">${safe(t('doctorName'))}<input name="name" required maxlength="60" placeholder="e.g. Dr. Meera Shah"></label><label>${safe(t('visitDate'))}<input name="date" type="date" required min="${dateOffset(0)}"></label><label>${safe(t('visitTime'))}<input name="time" type="time" required value="10:00"></label><label class="full">${safe(t('location'))}<input name="location" maxlength="80" placeholder="Clinic or location"></label>`}</div><div class="modal-actions"><button type="button" class="secondary" data-close>${safe(t('cancel'))}</button><button class="primary">${safe(t('save'))}</button></div></form>`,
  )
  const description = document.querySelector('#modalContent .modal-head p')
  if (description) description.textContent = t(med ? 'formMedicineHelp' : 'formAppointmentHelp')
  document.querySelectorAll('#itemForm select option').forEach((option, index) => {
    option.textContent = [t('onceDaily'), t('twiceDaily'), t('asPrescribed')][index]
  })
  document.querySelectorAll('[data-close]').forEach(b => (b.onclick = closeModal))
  document.getElementById('itemForm').addEventListener('submit', e => {
    e.preventDefault()
    const f = new FormData(e.target),
      v = Object.fromEntries(f.entries())
    if (med) {
      doses.push({
        name: v.name,
        details: v.dosage + ' · ' + v.frequency,
        time: new Date('2000-01-01T' + v.time).toLocaleTimeString([], {
          hour: 'numeric',
          minute: '2-digit',
        }),
        icon: '💊',
        taken: false,
      })
      persist('doses', doses)
      renderDoses()
      showToast(t('medicineAdded'))
    } else {
      appointments.push({
        name: v.name,
        kind: v.location || '',
        place: v.location || '',
        time: new Date('2000-01-01T' + v.time).toLocaleTimeString([], {
          hour: 'numeric',
          minute: '2-digit',
        }),
        date: v.date,
      })
      appointments.sort((a, b) => a.date.localeCompare(b.date))
      persist('appointments', appointments)
      renderAppointments()
      showToast(t('appointmentAdded'))
    }
    closeModal()
  })
}
function openTour() {
  openModal(
    `<div class="modal-head"><div><h2>${safe(t('tourModalTitle'))}</h2><p>${safe(t('tourModalText'))}</p></div><button class="modal-close" type="button" data-close aria-label="${safe(t('cancel'))}">×</button></div><div class="tour-modal-screen"><div class="tour-orb"></div><div class="tour-note"><span class="tour-pill">${safe(t('dailyCare'))}</span><h3>${safe(t('tourTitle'))}</h3><p>${safe(t('tourCopy'))}</p><div class="tour-check">${safe(t('tourButton'))}</div></div></div><div class="tour-progress"><i id="tourProgress"></i></div><section class="tour-carousel" aria-label="Everwell tutorial slides"><article class="tour-image-slide active" data-tour-slide="0" aria-hidden="false"><svg viewBox="0 0 220 130" role="img" aria-label="Medicine checklist illustration"><rect x="38" y="12" width="145" height="106" rx="14" fill="#fff"/><path d="M56 41h14m-14 28h14m-14 28h14" stroke="#52a684" stroke-width="6" stroke-linecap="round"/><path d="m58 40 4 4 8-9m-12 33 4 4 8-9m-12 33 4 4 8-9" fill="none" stroke="#52a684" stroke-width="3"/><rect x="83" y="34" width="78" height="12" rx="6" fill="#dce8ff"/><rect x="83" y="62" width="66" height="12" rx="6" fill="#e7e1ff"/><rect x="83" y="90" width="72" height="12" rx="6" fill="#dcefe5"/><circle cx="171" cy="24" r="13" fill="#dcefe5"/><path d="m165 24 4 4 8-9" fill="none" stroke="#438d6f" stroke-width="3" stroke-linecap="round"/></svg><div><span class="tour-slide-count">01 / 04</span><h3>${safe(t('tourSlideOneTitle'))}</h3><p>${safe(t('tourSlideOneCopy'))}</p></div></article><article class="tour-image-slide" data-tour-slide="1" aria-hidden="true"><svg viewBox="0 0 220 130" role="img" aria-label="Appointment calendar illustration"><rect x="43" y="18" width="134" height="98" rx="13" fill="#fff"/><path d="M43 44h134" stroke="#dfe6f2" stroke-width="3"/><path d="M72 12v18m76-18v18" stroke="#596ad1" stroke-width="6" stroke-linecap="round"/><rect x="62" y="58" width="25" height="20" rx="5" fill="#e8edff"/><rect x="98" y="58" width="25" height="20" rx="5" fill="#e8edff"/><rect x="134" y="58" width="25" height="20" rx="5" fill="#dff1e8"/><rect x="62" y="87" width="25" height="16" rx="5" fill="#e8edff"/><rect x="98" y="87" width="25" height="16" rx="5" fill="#f3e8ff"/><circle cx="147" cy="96" r="12" fill="#596ad1"/><path d="M147 90v7l5 3" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/></svg><div><span class="tour-slide-count">02 / 04</span><h3>${safe(t('tourSlideTwoTitle'))}</h3><p>${safe(t('tourSlideTwoCopy'))}</p></div></article><article class="tour-image-slide" data-tour-slide="2" aria-hidden="true"><svg viewBox="0 0 220 130" role="img" aria-label="Daily routine progress illustration"><rect x="38" y="19" width="145" height="96" rx="15" fill="#fff"/><circle cx="71" cy="51" r="12" fill="#e0f1e8"/><path d="m65 51 5 5 8-10" fill="none" stroke="#438d6f" stroke-width="3"/><circle cx="71" cy="82" r="12" fill="#ece8ff"/><path d="M99 48h63m-63 7h43m-43 24h63m-63 7h36" stroke="#dce4f2" stroke-width="5" stroke-linecap="round"/><rect x="148" y="89" width="24" height="12" rx="6" fill="#dfe9ff"/><path d="M52 110c9-12 18-14 28-4 8 8 16 6 22-4" fill="none" stroke="#596ad1" stroke-width="3" stroke-linecap="round"/></svg><div><span class="tour-slide-count">03 / 04</span><h3>${safe(t('tourSlideThreeTitle'))}</h3><p>${safe(t('tourSlideThreeCopy'))}</p></div></article><article class="tour-image-slide" data-tour-slide="3" aria-hidden="true"><svg viewBox="0 0 220 130" role="img" aria-label="Emergency and hospital support illustration"><path d="M45 100h130" stroke="#dfe6f2" stroke-width="6" stroke-linecap="round"/><path d="M75 100V53h69v47" fill="#fff" stroke="#596ad1" stroke-width="4" stroke-linejoin="round"/><path d="M97 100V77h25v23" fill="#e8edff"/><path d="M104 63h12m-6-6v12" stroke="#d24c55" stroke-width="4" stroke-linecap="round"/><circle cx="160" cy="42" r="18" fill="#fff0f0"/><path d="M160 33v18m-9-9h18" stroke="#d24c55" stroke-width="4" stroke-linecap="round"/><path d="m48 48 9-15 9 15h-6v20H54V48z" fill="#596ad1"/></svg><div><span class="tour-slide-count">04 / 04</span><h3>${safe(t('tourSlideFourTitle'))}</h3><p>${safe(t('tourSlideFourCopy'))}</p></div></article></section><div class="tour-carousel-controls"><button class="secondary" type="button" id="tourPrevious" aria-label="Previous tutorial slide">‹</button><div class="tour-dots" role="group" aria-label="Choose tutorial slide"><button type="button" data-tour-dot="0" aria-label="Slide 1" aria-current="true"></button><button type="button" data-tour-dot="1" aria-label="Slide 2"></button><button type="button" data-tour-dot="2" aria-label="Slide 3"></button><button type="button" data-tour-dot="3" aria-label="Slide 4"></button></div><button class="secondary" type="button" id="tourNext" aria-label="Next tutorial slide">›</button></div><div class="modal-actions"><button class="secondary" data-close>${safe(t('cancel'))}</button><button class="primary" id="tourToggle">${safe(t('tourPlay'))}</button></div>`,
  )
  document.querySelectorAll('[data-close]').forEach(b => (b.onclick = closeModal))
  let progress = 0,
    playing = false
  const bar = document.getElementById('tourProgress'),
    toggle = document.getElementById('tourToggle')
  toggle.onclick = () => {
    playing = !playing
    toggle.textContent = playing ? t('tourPause') : t('tourPlay')
    if (playing) {
      tourProgressTimer = setInterval(() => {
        progress = Math.min(100, progress + 0.24)
        bar.style.width = progress + '%'
        if (progress >= 100) {
          clearInterval(tourProgressTimer)
          tourProgressTimer = null
          playing = false
          toggle.textContent = t('tourPlay')
        }
      }, 100)
    } else if (tourProgressTimer) {
      clearInterval(tourProgressTimer)
      tourProgressTimer = null
    }
  }
  connectTourModal()
}
const emergencyPatterns = [
  /(?:\bemergency\b|\burgent help\b|\bcall (?:an? )?ambulance\b|\b(?:call|dial) (?:112|108)\b|\b(?:can'?t|cannot) breathe\b|\btrouble breathing\b|\bshortness of breath\b|\bchest pain\b|\bunconscious\b|\bunresponsive\b|\bnot responding\b|\bstroke\b|\bface droop(?:ing)?\b|\barm weakness\b|\bslurred speech\b|\bseizure\b|\b(?:heavy|severe) bleeding\b|\bpoison(?:ing)?\b|\boverdose\b|\blife[- ]threatening\b|\bsevere fall\b|\bhit (?:their|his|her) head\b|आपात|सांस नहीं|सीने में दर्द|बेहोश|दौरा|तेज खून|ತುರ್ತು|ಉಸಿರಾಟ|ಎದೆನೋವು|ಅಚೇತನ|ಅಪಸ್ಮಾರ|అత్యవసర|ఊపిరి|ఛాతి నొప్పి|స్పృహ|అపస్మారం|அவசர|மூச்சு|நெஞ்சு வலி|மயக்கம்|வலிப்பு|അടിയന്തര|ശ്വാസം|നെഞ്ചുവേദന|ബോധം|അപസ്മാരം|आपत्काल|श्वास घेता येत नाही|छातीत दुखणे|बेशुद्ध|ଜରୁରୀ|ଶ୍ୱାସ|ଛାତିରେ ଯନ୍ତ୍ରଣା|ଅଚେତ|জরুরি|শ্বাস নিতে|বুকে ব্যথা|অজ্ঞান|ਐਮਰਜੈਂਸੀ|ਸਾਹ ਨਹੀਂ|ਛਾਤੀ ਵਿੱਚ ਦਰਦ|ਬੇਹੋਸ਼|કટોકટી|શ્વાસ લેવામાં|છાતીમાં દુખાવો|બેભાન)/i,
  /(?:\bheart attack\b|\bchoking\b|\bfainted\b|\bfainting\b|\bloss of consciousness\b|\bnot waking\b|\b(?:can'?t|cannot) wake\b|\bone side.{0,24}\bweak(?:ness)?\b|\bsudden weakness\b|\bface.{0,18}droop\b|\bsevere allergic reaction\b|\banaphylaxis\b|\bmajor head injury\b|दिल का दौरा|दम घुटना|ಹೃದಯಾಘಾತ|ಉಸಿರುಗಟ್ಟುವಿಕೆ|గుండెపోటు|ఉక్కిరిబిక్కిరి|மாரடைப்பு|மூச்சுத்திணறல்|ഹൃദയാഘാതം|ശ്വാസംമുട്ടൽ|हृदयविकाराचा झटका|श्वास कोंडणे|ହୃଦଘାତ|ଶ୍ୱାସରୁଦ୍ଧ|হার্ট অ্যাটাক|শ্বাসরোধ|ਦਿਲ ਦਾ ਦੌਰਾ|ਸਾਹ ਘੁੱਟਣਾ|હૃદયરોગનો હુમલો|ગૂંગળામણ)/i,
  /(?:\bnot breathing\b|\bbreathing has stopped\b|\bno pulse\b|\bsevere pain\b|\bsevere injury\b|सांस नहीं ले|सांस बंद|ಉಸಿರಾಡುತ್ತಿಲ್ಲ|శ్వాస తీసుకోవడం లేదు|மூச்சு விடவில்லை|ശ്വസിക്കുന്നില്ല|श्वास घेत नाही|ଶ୍ୱାସ ନେଉନାହାନ୍ତି|শ্বাস নিচ্ছে না|ਸਾਹ ਨਹੀਂ ਲੈ ਰਿਹਾ|શ્વાસ લેતા નથી)/i,
]
function assistantIsEmergency(text) {
  return emergencyPatterns.some(pattern => pattern.test(text))
}
function answerFor(text) {
  const q = text.toLowerCase()
  if (assistantIsEmergency(text)) return t('assistantEmergency')
  if (
    /(?:can i|should i|what if|missed dose|miss a dose|double dose|extra dose|side effect|drug interaction|change.*medicine|stop.*medicine|increase.*dose|reduce.*dose|take.*with food|medicine advice|दवा बदल|खुराक.*बदल|ಔಷಧ.*ಬದಲ|మందు.*మార్చ|மருந்தை.*மாற்ற|മരുന്ന്.*മാറ്റ|औषध.*बदल|ଔଷધ.*ବଦଳ|ওষুধ.*পরিবর্তন|ਦਵਾਈ.*ਬਦਲ|દવા.*બદલ)/i.test(
      q,
    )
  )
    return t('assistantSafety')
  const asksHow = /\b(?:how|help|what can|app|start|demo|tour)\b/.test(q)
  const careContext =
    /(?:everwell|app|medicine|medication|dose|pill|doctor|clinic|appointment|routine|report|language|text size|request|care|family|symptom|health|prescription|दवा|औषध|ಮದ್ದು|మందು|மருந்து|മരുന്ന്|औषध|ଔষଧ|ওষুধ|ਦਵਾਈ|દવા|परिवार|ಕುಟುಂಬ|కుటుంబ|குடும்ப|കുടുംബ|कुटुंब|ପରିବାର|পরিবার|ਪਰਿਵਾਰ|પરિવાર)/i.test(
      q,
    )
  if (
    asksHow &&
    !careContext &&
    !/^(?:help|how can you help|what can you do)[?!.\s]*$/i.test(q.trim())
  )
    return t('assistantGeneralFallback')
  if (
    /(?:hospital|ambulance|doctor phone|doctor contact|nearby clinic|nearest clinic|nearest doctor|nearby doctor|nearby hospital|nearest hospital|where.*hospital|find.*hospital|હોસ્પિટલ|ਹਸਪਤਾਲ|হাসপাতাল|ହସ୍ପିଟାଲ|ആശുപത്രി|மருத்துவமனை|ఆసుపత్రి|ಆಸ್ಪತ್ರೆ|अस्पताल|रुग्णालय)/i.test(
      q,
    )
  )
    return t('assistantHospitalGuidance')
  if (
    currentRole === 'admin' &&
    /(?:admin|administrator|dashboard|requests|inbox|medication review|verified|overview)/i.test(q)
  )
    return t('assistantAdminSummary')
      .replace('{open}', careTasks.filter(task => task.status !== 'completed').length)
      .replace('{medications}', adminMedications.length)
      .replace('{reviewed}', adminMedications.filter(item => item.review).length)
  if (
    /(?:request|task|inbox|administrator update|care request|अनुरोध|विनंती|ವಿನಂತಿ|అభ్యర్థన|கோரிக்கை|അഭ്യർത്ഥന|ବିନତି|অনুরোধ|ਬੇਨਤੀ|વિનંતી)/i.test(
      q,
    )
  )
    return t('assistantRequestGuidance')
  if (
    /(?:medicine|medication|dose|pill|meds|दवा|ಔಷಧ|మందు|மருந்து|മരുന്ന|औषध|ଔଷધ|ওষুধ|ਦਵਾਈ|દવા)/i.test(q)
  ) {
    if (/what is|what does|explain|side effect|interaction/i.test(q))
      return t('assistantMedicineInfo')
    const left = doses.filter(dose => !dose.taken)
    return left.length
      ? t('assistantMedicinePrefix')
          .replace('{count}', left.length)
          .replace('{items}', left.map(dose => `${dose.name} (${dose.time})`).join(', ')) +
          ' ' +
          t('assistantMedicineSuffix')
      : t('assistantAllTaken')
  }
  if (
    /(?:appointment|visit|clinic|अपॉइंटमेंट|भेट|సందర్శన|சந்திப்பு|അപ്പോയിന്റ്|मुलाकात|ସାକ୍ଷାତ|সাক্ষাৎ|ਮੁਲਾਕਾਤ|મુલાકાત)/i.test(
      q,
    )
  ) {
    const appointment = appointments
      .filter(item => item.date >= dateOffset(0))
      .sort((a, b) => a.date.localeCompare(b.date))[0]
    if (!appointment) return t('assistantNoAppointments')
    const date = new Intl.DateTimeFormat(currentLang, { dateStyle: 'long' }).format(
      appointmentDate(appointment.date),
    )
    return (
      t('assistantAppointmentPrefix')
        .replace('{name}', appointment.name)
        .replace('{date}', date)
        .replace('{time}', appointment.time)
        .replace('{place}', appointment.place ? ', ' + appointment.place : '') +
      ' ' +
      t('assistantAppointmentSuffix')
    )
  }
  if (
    /(?:family|invite|care circle|परिवार|ಕುಟುಂಬ|కుటుంబ|குடும்ப|കുടുംബ|कुटुंब|ପରିବାର|পরিবার|ਪਰਿਵਾਰ|પરિવાર)/i.test(
      q,
    )
  )
    return t('inviteDemo') + t('assistantFamilySuffix')
  if (
    /(?:water|routine|exercise|walk|habit|पानी|व्यायाम|ನೀರು|నీరు|தண்ணீர்|വെള്ളം|पाणी|ପାଣି|জল|ਪਾਣੀ|પાણી)/i.test(
      q,
    )
  )
    return (
      t('assistantRoutinePrefix').replace(
        '{items}',
        routines.map(routine => t(routine.name)).join(', '),
      ) +
      ' ' +
      t('assistantRoutineSuffix')
    )
  if (
    /(?:report|csv|print|export|रिपोर्ट|அறிக்கை|ವರದಿ|నివేదిక|അവലോകനം|अहवाल|ପ୍ରତିବେଦନ|প্রতিবেদন|ਰਿਪੋਰਟ|અહેવાલ)/i.test(
      q,
    )
  )
    return t('reportLead') + ' ' + t('reportDisclaimer')
  if (
    /(?:language|translate|font|text size|accessibility|भाषा|ಭಾಷೆ|భాష|மொழி|ഭാഷ|भाषा|ଭାଷା|ভাষা|ਭਾਸ਼ਾ|ભાષા)/i.test(
      q,
    )
  )
    return t('assistantHelp')
  if (
    /^(?:hi|hello|hey|namaste|ನಮಸ್ಕಾರ|నమస్కారం|வணக்கம்|നമസ്കാരം|नमस्कार|ନମସ୍କାର|নমস্কার|ਸਤ ਸ੍ਰੀ ਅਕਾਲ|નમસ્તે)[!. ]*$/i.test(
      q,
    )
  )
    return t('assistantGreeting')
  if (
    /(?:symptom|pain|fever|dizzy|nausea|blood pressure|sugar level|medical|health advice|लक्षण|दर्द|बुखार|चक्कर|ನೋವು|ಜ್ವರ|తలనొప్పి|జ్వరం|வலி|காய்ச்சல்|വേദന|പനി|दुखणे|ताप|ଯନ୍ତ୍ରଣା|ଜ୍ୱର|ব্যথা|জ্বর|ਦਰਦ|ਬੁਖਾਰ|દુખાવો|તાવ)/i.test(
      q,
    )
  )
    return t('assistantSafety')
  if (
    /(?:how|help|what can|app|start|demo|tour|कैसे|ಸಹಾಯ|సహాయం|உதவி|സഹായം|मदत|ସହାୟତା|সাহায্য|ਮਦਦ|મદદ)/i.test(
      q,
    )
  )
    return t('assistantHelp')
  return t('assistantGeneralFallback')
}
function addMessage(text, who) {
  const b = document.createElement('div')
  b.className = 'bubble' + (who === 'user' ? ' user' : '')
  if (who === 'assistant' && text === t('assistantEmergency')) {
    b.classList.add('assistant-emergency')
    b.setAttribute('role', 'alert')
  }
  b.textContent = text
  document.getElementById('messages').appendChild(b)
  document.getElementById('messages').scrollTop = 99999
}
document.getElementById('language').innerHTML = languages
  .map(([code, label]) => `<option value="${code}">${label}</option>`)
  .join('')
document.getElementById('loginLanguage').innerHTML = document.getElementById('language').innerHTML
try {
  const savedLanguage = localStorage.getItem('everwell-language')
  if (savedLanguage && translations[savedLanguage]) currentLang = savedLanguage
} catch (e) {
  showToast('Saved language preference could not be read.')
}
document.getElementById('language').value = currentLang
document.getElementById('loginLanguage').value = currentLang
setLanguage(currentLang)
document.getElementById('language').addEventListener('change', e => setLanguage(e.target.value))
document
  .getElementById('loginLanguage')
  .addEventListener('change', e => setLanguage(e.target.value))
document
  .querySelectorAll('.nav button')
  .forEach(button => button.addEventListener('click', () => showPage(button.dataset.page)))
window.addEventListener('popstate', () => showPage(location.hash.slice(1), false))
document
  .querySelector('[data-page-link="family"]')
  .addEventListener('click', () => showPage('family'))
document.querySelectorAll('[data-dose-filter]').forEach(button =>
  button.addEventListener('click', () => {
    doseFilter = button.dataset.doseFilter
    renderDoses()
  }),
)
document.querySelectorAll('[data-appointment-filter]').forEach(button =>
  button.addEventListener('click', () => {
    appointmentFilter = button.dataset.appointmentFilter
    renderAppointments()
  }),
)
document.getElementById('addMed').addEventListener('click', () => openForm('medicine'))
document.getElementById('addMedPage').addEventListener('click', () => openForm('medicine'))
document.getElementById('addAppointment').addEventListener('click', () => openForm('appointment'))
document
  .getElementById('addAppointmentPage')
  .addEventListener('click', () => openForm('appointment'))
document.getElementById('inviteFamily').addEventListener('click', () => showToast(t('inviteDemo')))
document.getElementById('language').addEventListener('change', updatePageHeading)
document.getElementById('loginLanguage').addEventListener('change', updatePageHeading)
document.getElementById('demoButton').addEventListener('click', openTour)
document.querySelector('.round-play').addEventListener('click', e => {
  const button = e.currentTarget,
    playing = button.textContent.trim() === '▶'
  button.closest('.tour-screen').classList.toggle('paused', !playing)
  button.textContent = playing ? 'Ⅱ' : '▶'
  button.setAttribute('aria-label', playing ? 'Pause product tour' : 'Play product tour')
})
document
  .getElementById('assistantFab')
  .addEventListener('click', () =>
    document.getElementById('assistantPanel').classList.toggle('hidden'),
  )
document
  .getElementById('closeChat')
  .addEventListener('click', () =>
    document.getElementById('assistantPanel').classList.add('hidden'),
  )
document.getElementById('chatForm').addEventListener('submit', e => {
  e.preventDefault()
  const input = document.getElementById('chatInput'),
    text = input.value.trim()
  if (!text) return
  addMessage(text, 'user')
  input.value = ''
  setTimeout(() => addMessage(answerFor(text), 'assistant'), 350)
})
document.querySelectorAll('.suggestions button').forEach(b =>
  b.addEventListener('click', () => {
    document.getElementById('chatInput').value = b.dataset.question
    document.getElementById('chatForm').requestSubmit()
  }),
)
document.getElementById('modalBackdrop').addEventListener('click', e => {
  if (e.target.id === 'modalBackdrop') closeModal()
})
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal()
    document.getElementById('assistantPanel').classList.add('hidden')
  }
})
document
  .getElementById('assistantOpenEmergency')
  .addEventListener('click', () =>
    document.getElementById('assistantPanel').classList.add('hidden'),
  )
let apiMode = document.documentElement.dataset.apiMode === 'server'
async function logout() {
  if (apiMode) {
    try {
      const response = await fetch('/api/logout', { method: 'POST' }),
        result = await response.json()
      if (!response.ok) throw new Error(result.error || 'Logout failed.')
    } catch (error) {
      showToast(error.message || 'Logout failed.')
      return
    }
  }
  currentRole = 'guest'
  currentPage = 'dashboard'
  doses = []
  appointments = []
  routines = []
  careTasks = []
  adminMedications = []
  document.getElementById('loginForm').reset()
  setAuthMode('account')
  document.getElementById('careRequestForm').reset()
  document.getElementById('adminCareRequests').replaceChildren()
  document.getElementById('adminMedicationList').replaceChildren()
  document.getElementById('messages').innerHTML =
    `<div class="bubble">${safe(t('assistantGreeting'))}</div>`
  document.getElementById('chatInput').value = ''
  document.getElementById('assistantPanel').classList.add('hidden')
  document.getElementById('assistantFab').classList.add('hidden')
  document.getElementById('app').classList.add('hidden')
  document.getElementById('loginScreen').classList.remove('hidden')
  closeModal()
  render()
  history.replaceState(null, '', location.pathname + location.search)
  document.getElementById('authEmail').focus()
}
document.getElementById('logoutButton').addEventListener('click', logout)
function updateDateLabel() {
  document.getElementById('todayDate').textContent = new Intl.DateTimeFormat(
    currentLang === 'en' ? 'en-IN' : currentLang,
    { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' },
  ).format(new Date())
}
document.getElementById('language').addEventListener('change', () => {
  document.getElementById('loginLanguage').value = currentLang
  updateDateLabel()
})
document.getElementById('loginLanguage').addEventListener('change', () => {
  document.getElementById('language').value = currentLang
  updateDateLabel()
})
document
  .querySelectorAll('[data-auth-mode]')
  .forEach(button => button.addEventListener('click', () => setAuthMode(button.dataset.authMode)))
document
  .getElementById('useDemoPin')
  .addEventListener('click', () => setAuthMode(authMode === 'pin' ? 'account' : 'pin'))
document.getElementById('guestLogin').addEventListener('click', () => authenticate('guest'))
setAuthMode('account')
document
  .querySelectorAll('[data-page-link]:not([data-page-link="family"])')
  .forEach(button => button.addEventListener('click', () => showPage(button.dataset.pageLink)))
document.getElementById('language').addEventListener('change', () => setAuthMode(authMode))
document.getElementById('loginLanguage').addEventListener('change', () => setAuthMode(authMode))
document.getElementById('checkInButton').addEventListener('click', () => {
  const value = document.getElementById('symptomCheckIn').value,
    key =
      value === 'urgent'
        ? 'pageUrgentGuidance'
        : value === 'change'
          ? 'pageChangeGuidance'
          : 'pageRoutineGuidance'
  document.getElementById('checkInResult').textContent = t(key)
})
document.getElementById('findHospitals').addEventListener('click', () => {
  const status = document.getElementById('locationStatus'),
    link = document.getElementById('hospitalMapLink')
  if (!navigator.geolocation) {
    status.textContent = t('pageLocationDenied')
    return
  }
  status.textContent = t('pageLocationRequest')
  navigator.geolocation.getCurrentPosition(
    position => {
      const query = `hospitals near ${position.coords.latitude},${position.coords.longitude}`
      link.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
      link.classList.remove('hidden')
      status.textContent = t('pageLocationReady')
    },
    () => {
      status.textContent = t('pageLocationDenied')
    },
    { enableHighAccuracy: false, timeout: 10000, maximumAge: 60000 },
  )
})
document.getElementById('doctorPhone').addEventListener('input', event => {
  const input = event.currentTarget.value.trim(),
    number = input.replace(/[^\d+]/g, ''),
    digits = number.replace(/\D/g, ''),
    link = document.getElementById('doctorCallLink'),
    status = document.getElementById('doctorPhoneStatus')
  if (!input) {
    link.classList.add('hidden')
    status.textContent = t('pageDoctorPhoneHelp')
    return
  }
  if (!/^[+\d().\s-]+$/.test(input) || digits.length < 7 || digits.length > 15) {
    link.classList.add('hidden')
    status.textContent = t('pageDoctorPhoneInvalid')
    return
  }
  link.href = `tel:${number.startsWith('+') ? '+' : ''}${digits}`
  link.classList.remove('hidden')
  link.setAttribute('aria-disabled', 'false')
  status.textContent = t('pageDoctorPhoneReady')
})
document.getElementById('loginForm').addEventListener(
  'submit',
  e => {
    e.preventDefault()
    e.stopImmediatePropagation()
    authenticate(authMode)
  },
  true,
)
function updateTourScene(scene) {
  if (!scene) return
  const slides = [
    {
      pill: t('dailyCare'),
      title: t('medicineSchedule'),
      copy: t('stayOnTrack'),
      check: '✓ ' + t('markTaken'),
    },
    {
      pill: t('careCircle'),
      title: t('circleTitle'),
      copy: t('familyUpdates'),
      check: '✓ 4 ' + t('members'),
    },
    {
      pill: t('nextVisit'),
      title: t('appointmentsTitle'),
      copy: t('planTogether'),
      check: '✓ ' + t('tomorrow'),
    },
  ]
  const slide = slides[tourSlide % slides.length]
  scene.querySelector('.tour-pill').textContent = slide.pill
  scene.querySelector('.tour-note h3').textContent = slide.title
  scene.querySelector('.tour-note p').textContent = slide.copy
  scene.querySelector('.tour-check').textContent = slide.check
}
function showTourImage(index) {
  const slides = Array.from(document.querySelectorAll('[data-tour-slide]'))
  if (!slides.length) return
  tourImageIndex = (index + slides.length) % slides.length
  slides.forEach((slide, i) => {
    const active = i === tourImageIndex
    slide.classList.toggle('active', active)
    slide.setAttribute('aria-hidden', String(!active))
  })
  document.querySelectorAll('[data-tour-dot]').forEach((dot, i) => {
    if (i === tourImageIndex) dot.setAttribute('aria-current', 'true')
    else dot.removeAttribute('aria-current')
  })
}
function connectTourModal() {
  const scene = document.querySelector('.tour-modal-screen')
  if (!scene) return
  scene.id = 'tourModalScene'
  updateTourScene(scene)
  tourImageIndex = 0
  showTourImage(tourImageIndex)
  document
    .getElementById('tourPrevious')
    .addEventListener('click', () => showTourImage(tourImageIndex - 1))
  document
    .getElementById('tourNext')
    .addEventListener('click', () => showTourImage(tourImageIndex + 1))
  document
    .querySelectorAll('[data-tour-dot]')
    .forEach(dot => dot.addEventListener('click', () => showTourImage(Number(dot.dataset.tourDot))))
  const control = document.getElementById('tourToggle')
  control.addEventListener('click', () => {
    if (control.textContent.trim() === t('tourPause')) {
      if (!tourModalSlideTimer)
        tourModalSlideTimer = setInterval(() => {
          tourSlide = (tourSlide + 1) % 3
          updateTourScene(scene)
          updateTourScene(document.querySelector('.tour-screen'))
          showTourImage(tourImageIndex + 1)
        }, 14000)
    } else if (tourModalSlideTimer) {
      clearInterval(tourModalSlideTimer)
      tourModalSlideTimer = null
    }
  })
}
setInterval(() => {
  const screen = document.querySelector('.tour-screen')
  if (
    !document.getElementById('loginScreen').classList.contains('hidden') &&
    !screen.classList.contains('paused')
  ) {
    tourSlide = (tourSlide + 1) % 3
    updateTourScene(screen)
  }
}, 14000)
let textSize = 0
try {
  const savedTextSize = localStorage.getItem('everwell-text-size')
  if (
    savedTextSize !== null &&
    Number.isInteger(Number(savedTextSize)) &&
    Number(savedTextSize) >= -1 &&
    Number(savedTextSize) <= 2
  )
    textSize = Number(savedTextSize)
  else if (localStorage.getItem('everwell-large-text') === 'true') textSize = 1
} catch (e) {
  showToast('Text size preference could not be read.')
}
function applyTextSize() {
  document.body.classList.toggle('small-text', textSize < 0)
  document.body.classList.toggle('large-text', textSize >= 1)
  document.body.classList.toggle('extra-large-text', textSize >= 2)
  document.querySelectorAll('[data-font-step]').forEach(button => {
    const step = Number(button.dataset.fontStep)
    button.disabled = step < 0 ? textSize <= -1 : textSize >= 2
  })
}
function setTextSize(next) {
  textSize = Math.max(-1, Math.min(2, next))
  try {
    localStorage.setItem('everwell-text-size', String(textSize))
  } catch (e) {
    showToast('Text size preference could not be saved.')
  }
  applyTextSize()
}
document
  .querySelectorAll('[data-font-step]')
  .forEach(button =>
    button.addEventListener('click', () => setTextSize(textSize + Number(button.dataset.fontStep))),
  )
applyTextSize()
document.getElementById('downloadReport').addEventListener('click', downloadMedicationReport)
document.getElementById('printReport').addEventListener('click', () => window.print())
document.getElementById('careRequestForm').addEventListener('submit', submitCareRequest)
document.getElementById('refreshAdminDashboard').addEventListener('click', loadAdminDashboard)
window.addEventListener('everwell:refresh-admin-overview', loadAdminDashboard)
document.getElementById('adminCareRequests').addEventListener('click', event => {
  const button = event.target.closest('[data-save-task]')
  if (button) saveCareTask(button.dataset.saveTask)
})
document.getElementById('adminMedicationList').addEventListener('click', event => {
  const button = event.target.closest('[data-verify-medication]')
  if (button) verifyAdminMedication(button.dataset.verifyMedication)
})
document.getElementById('adminFindHospitals').addEventListener('click', () => {
  const status = document.getElementById('adminLocationStatus'),
    link = document.getElementById('adminHospitalMapLink')
  if (!navigator.geolocation) {
    status.textContent = t('adminLocationDenied')
    return
  }
  status.textContent = t('adminLocationRequest')
  navigator.geolocation.getCurrentPosition(
    position => {
      const query = `hospitals near ${position.coords.latitude},${position.coords.longitude}`
      link.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
      link.classList.remove('hidden')
      status.textContent = t('adminLocationReady')
    },
    () => {
      status.textContent = t('adminLocationDenied')
    },
    { enableHighAccuracy: false, timeout: 10000, maximumAge: 60000 },
  )
})
document.getElementById('adminDoctorPhone').addEventListener('input', event => {
  const input = event.currentTarget.value.trim(),
    number = input.replace(/[^\d+]/g, ''),
    digits = number.replace(/\D/g, ''),
    link = document.getElementById('adminDoctorCallLink'),
    status = document.getElementById('adminDoctorPhoneStatus')
  if (!input) {
    link.classList.add('hidden')
    link.setAttribute('aria-disabled', 'true')
    status.textContent = t('adminDoctorHelp')
    return
  }
  if (!/^[+\d().\s-]+$/.test(input) || digits.length < 7 || digits.length > 15) {
    link.classList.add('hidden')
    link.setAttribute('aria-disabled', 'true')
    status.textContent = t('adminDoctorInvalid')
    return
  }
  link.href = `tel:${number.startsWith('+') ? '+' : ''}${digits}`
  link.classList.remove('hidden')
  link.setAttribute('aria-disabled', 'false')
  status.textContent = t('adminDoctorReady')
})
