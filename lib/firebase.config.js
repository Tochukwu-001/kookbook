// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKwoG4iZKfD3RCgHWJvUYYb_L5QywwTiI",
  authDomain: "kookbook-9c37f.firebaseapp.com",
  projectId: "kookbook-9c37f",
  storageBucket: "kookbook-9c37f.firebasestorage.app",
  messagingSenderId: "1040449537577",
  appId: "1:1040449537577:web:2433252ba5d57751c4be38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db}
