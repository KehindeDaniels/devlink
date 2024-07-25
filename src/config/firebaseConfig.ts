// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
