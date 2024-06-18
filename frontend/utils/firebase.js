import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "roadside-rescue-b24bb.firebaseapp.com",
  projectId: "roadside-rescue-b24bb",
  storageBucket: "roadside-rescue-b24bb.appspot.com",
  messagingSenderId: "251137534991",
  appId: "1:251137534991:web:5b88d151b07d395cc9477a",
  measurementId: "G-FKPDS5JTBC"
};

const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);