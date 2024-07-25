// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcT51FvZ3YLge0I15d-4HZml_apprZ1cI",
  authDomain: "devlink-c5f8f.firebaseapp.com",
  projectId: "devlink-c5f8f",
  storageBucket: "devlink-c5f8f.appspot.com",
  messagingSenderId: "398153829061",
  appId: "1:398153829061:web:3974ec3bcae24bbbc8beac",
  measurementId: "G-VNQSC2NWEN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { app, analytics, auth, firestore };
