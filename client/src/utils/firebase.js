// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "voicr-3607c.firebaseapp.com",
  projectId: "voicr-3607c",
  storageBucket: "voicr-3607c.firebasestorage.app",
  messagingSenderId: "1089529452942",
  appId: "1:1089529452942:web:db66bddf83d48e09c5acdf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);
const provider = new GoogleAuthProvider();

export {auth,provider}
