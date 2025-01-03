// firebase.js (with Compat SDK)
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB7H1r4B-DZJuVIMsCJZ9V5gHc8xEuoh38",
  authDomain: "file-management-system-3e572.firebaseapp.com",
  projectId: "file-management-system-3e572",
  storageBucket: "file-management-system-3e572.firebasestorage.app",
  messagingSenderId: "206082207155",
  appId: "1:206082207155:web:b216377adbf204895c2fc6",
  measurementId: "G-C0NS79K17C"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

// Export the initialized Firebase instance
export default fire;
