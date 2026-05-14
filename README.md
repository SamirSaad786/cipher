# CIPHER://HTML — Setup & Deployment Guide

> Full cyberpunk HTML learning platform · 20 lessons · Firebase + GitHub Pages · Free tier

---

## Prerequisites

- GitHub account (free)
- Google/Firebase account (free)
- A text editor

---

## Step 1 — Create a Firebase Project

1. Go to [console.firebase.google.com](https://console.firebase.google.com)
2. Click **Add project** → name it `cipher-html` (or anything you want)
3. Disable Google Analytics (not needed) → click **Create project**

### 1a — Enable Email/Password Authentication

1. In your Firebase console, go to **Authentication → Get started**
2. Click **Email/Password** under Sign-in providers
3. Toggle **Enable** → Save

### 1b — Create Firestore Database

1. Go to **Firestore Database → Create database**
2. Choose **Start in production mode**
3. Pick your nearest region → Enable

### 1c — Get Your Firebase Config

1. Go to **Project Settings** (gear icon) → **Your apps** tab
2. Click the **Web** icon (`</>`)
3. Register the app (name it anything, don't enable Hosting)
4. Copy the `firebaseConfig` object — you'll need it in the next step

---

## Step 2 — Fill In Your Config

Open `js/firebase-config.js` and replace the placeholder values:

```js
export const FIREBASE_CONFIG = {
  apiKey:            "AIzaSy...",         // from Firebase console
  authDomain:        "cipher-html.firebaseapp.com",
  projectId:         "cipher-html",
  storageBucket:     "cipher-html.appspot.com",
  messagingSenderId: "123456789",
  appId:             "1:123456:web:abc123"
};

export const ADMIN_USERNAME = "your_admin_handle";  // YOUR username (no spaces/caps)
```

**Important:** `ADMIN_USERNAME` must be lowercase, no spaces. This is the account that gets admin panel access.

---

## Step 3 — Deploy Firestore Security Rules

1. In Firebase console, go to **Firestore → Rules**
2. Replace ALL existing rules with the contents of `firestore.rules` in this repo
3. Click **Publish**

---

## Step 4 — Create Your Admin Account

Before anyone else, you create your own account:

1. Open your GitHub Pages URL (see Step 6) or run the project locally
2. Go to `register.html` — but you need an invite first
3. Go directly to **Firebase Console → Firestore → invites collection**
4. Manually add a document with these fields:
   ```
   code:     "ADMIN-INIT"
   username: "your_admin_handle"    ← must match ADMIN_USERNAME in config
   used:     false
   ```
5. Visit `register.html?invite=ADMIN-INIT`
6. Set your password and register
7. Back in Firestore → **users collection** → find your new user document
8. Manually set the `isAdmin` field to `true`
9. Log in at `index.html` — you will be redirected to `admin.html`

---

## Step 5 — Invite Friends

Once logged in as admin:

1. Go to `admin.html`
2. Type your friend's desired username → click **GENERATE**
3. Copy the invite code or the full registration link
4. Send it to them — they visit the link, set their password, and they're in

---

## Step 6 — Deploy to GitHub Pages

### Option A: GitHub.com (easiest)

1. Create a new **public** repository on GitHub
2. Drag and drop the entire `cipher-html/` folder contents into the repo
3. Go to **Settings → Pages**
4. Under **Source**, select `main` branch, `/root` folder → Save
5. Your site will be live at `https://yourusername.github.io/your-repo-name/`

### Option B: Git CLI

```bash
cd cipher-html
git init
git add .
git commit -m "CIPHER://HTML v1.0"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

Then enable Pages in repo Settings as above.

---

## File Structure

```
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
```

---

## Lesson System Overview

| Tier | Lessons | XP | Color |
|------|---------|-----|-------|
| GHOST | L01–L05 | 500 | Purple |
| RUNNER | L06–L10 | 600 | Cyan |
| HACKER | L11–L15 | 700 | Violet |
| NETRUNNER | L16–L20 | 800 | Magenta |

Each lesson unlocks an NFT on completion. Timer mode adds a bonus XP challenge.

**Level System:** GHOST INIT → RUNNER → HACKER → NETRUNNER → ARCHITECT → LEGEND

---

## Updating Lessons

All lesson content lives in `js/curriculum.js`. Each lesson has:
- `theory` — HTML string displayed in the lesson brief panel
- `startCode` — starter code pre-loaded in the editor
- `tests` — array of test objects that auto-check student code
- `hints` — optional guidance revealed on demand

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Blank white screen | Check browser console; usually a missing Firebase config value |
| Login fails silently | Verify Email/Password auth is enabled in Firebase console |
| Users can't register | Check Firestore rules are published; check invite document exists |
| Admin panel says Access Denied | Make sure `isAdmin: true` is set on your Firestore user document |
| NFT art doesn't appear | Check browser console for JS module import errors |

---

## Cost

Everything runs on **Firebase free tier (Spark plan)**:
- 50,000 reads/day · 20,000 writes/day · 1 GB storage
- Plenty for a friend group. No credit card required.

---

## License

Personal/educational use. Built with ◈ by CIPHER://HTML.
