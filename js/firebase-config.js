// ═══════════════════════════════════════════════════════════════
//  CIPHER://HTML — Firebase Configuration
//  ⚠ FILL IN YOUR FIREBASE PROJECT CREDENTIALS BELOW
//  See README.md for setup instructions
// ═══════════════════════════════════════════════════════════════

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlTWeIYXW0WyBYggdzGBUGUWySjoejRi8",
  authDomain: "cipher-html.firebaseapp.com",
  projectId: "cipher-html",
  storageBucket: "cipher-html.firebasestorage.app",
  messagingSenderId: "167687587088",
  appId: "1:167687587088:web:4c483fda5f5e5b5995d195"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ─── ADMIN CONFIG ──────────────────────────────────────────────
// Username for the admin account (you, Sam)
// This account gets access to /admin.html
export const ADMIN_USERNAME = "cipher_admin";

// Platform name displayed in UI
export const PLATFORM_NAME = "CIPHER://HTML";

// Platform version
export const PLATFORM_VERSION = "1.0.0";
