import { initializeApp, getApps } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

export const firebaseConfig = {
  apiKey: "AIzaSyDUfTS2q1pyqLef4T2RhJYSKM6jw0quDNw",
  authDomain: "f10-digital.firebaseapp.com",
  projectId: "f10-digital",
  storageBucket: "f10-digital.firebasestorage.app",
  messagingSenderId: "474675545429",
  appId: "1:474675545429:web:f4701e50bb07c098945bdc",
  measurementId: "G-251EMZF58Y",
};

// Initialize Firebase (safely across client & SSR)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const initAnalytics = async () => {
  if (typeof window !== "undefined" && (await isSupported())) {
    return getAnalytics(app);
  }
  return null;
};

export default app;

