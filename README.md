File Structure

cipher-html/
├── index.html          # Login page
├── register.html       # Invite-based registration
├── dashboard.html      # Main hub — skill tree, XP, NFTs
├── lesson.html         # Lesson player (editor + tests + NFT unlock)
├── admin.html          # Admin panel (your private tool)
├── profile.html        # User profile + full NFT gallery
├── css/
│   └── cipher.css      # Full design system
├── js/
│   ├── firebase-config.js  # ← EDIT THIS with your credentials
│   ├── curriculum.js       # All 20 lessons, XP, tests
│   └── nft-art.js          # Procedural SVG NFT generator
└── firestore.rules     # Paste this into Firebase console

Lesson System Overview
Tier	Lessons	XP	Color
GHOST	L01–L05	500	Purple
RUNNER	L06–L10	600	Cyan
HACKER	L11–L15	700	Violet
NETRUNNER	L16–L20	800	Magenta
Each lesson unlocks an NFT on completion. Timer mode adds a bonus XP challenge.

Level System: GHOST INIT → RUNNER → HACKER → NETRUNNER → ARCHITECT → LEGEND

Updating Lessons
All lesson content lives in js/curriculum.js. Each lesson has:

theory — HTML string displayed in the lesson brief panel
startCode — starter code pre-loaded in the editor
tests — array of test objects that auto-check student code
hints — optional guidance revealed on demand
Troubleshooting
Problem	Fix
Blank white screen	Check browser console; usually a missing Firebase config value
Login fails silently	Verify Email/Password auth is enabled in Firebase console
Users can't register	Check Firestore rules are published; check invite document exists
Admin panel says Access Denied	Make sure isAdmin: true is set on your Firestore user document
NFT art doesn't appear	Check browser console for JS module import errors
Cost
Everything runs on Firebase free tier (Spark plan):

50,000 reads/day · 20,000 writes/day · 1 GB storage
Plenty for a friend group. No credit card required.
License
Personal/educational use. Built with ◈ by CIPHER://HTML.
