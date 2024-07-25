import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

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
const auth = getAuth(app);
const firestore = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

// Conditionally import and initialize analytics
if (typeof window !== "undefined") {
  import("firebase/analytics")
    .then(({ getAnalytics }) => {
      getAnalytics(app);
    })
    .catch((err) => {
      console.error("Firebase analytics initialization failed", err);
    });
}

export { app, auth, firestore, googleProvider };
