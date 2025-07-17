// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.AUTH_FIREBASE_API_KEY,
  authDomain: "kookbook-507c8.firebaseapp.com",
  projectId: "kookbook-507c8",
  storageBucket: "kookbook-507c8.firebasestorage.app",
  messagingSenderId: "1058645997402",
  appId: "1:1058645997402:web:0c6706297f6ac8113e2563"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db}