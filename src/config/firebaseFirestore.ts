import { getFirestore, Firestore } from "firebase/firestore";
import { app } from "./firebaseConfig";

const db: Firestore = getFirestore(app);

export default db;
