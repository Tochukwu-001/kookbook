// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.AUTH_FIREBASE_API_KEY,
  authDomain: "kookbook-95ac4.firebaseapp.com",
  projectId: "kookbook-95ac4",
  storageBucket: "kookbook-95ac4.firebasestorage.app",
  messagingSenderId: "952657142183",
  appId: "1:952657142183:web:5c19fb28d6396da8339682"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};