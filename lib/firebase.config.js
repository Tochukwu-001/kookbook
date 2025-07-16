// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.AUTH_FIREBASE_API_KEY,
  authDomain: "kookbook-9c37f.firebaseapp.com",
  projectId: "kookbook-9c37f",
  storageBucket: "kookbook-9c37f.firebasestorage.app",
  messagingSenderId: "1040449537577",
  appId: "1:1040449537577:web:322147c0dfd6a4b7c4be38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);