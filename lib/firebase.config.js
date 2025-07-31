// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.UTH_FIREBASE_API_KEY,
  authDomain: "kookbook-1ac26.firebaseapp.com",
  projectId: "kookbook-1ac26",
  storageBucket: "kookbook-1ac26.firebasestorage.app",
  messagingSenderId: "649031354120",
  appId: "1:649031354120:web:d940ebcf6718ec293fcebd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export  default db