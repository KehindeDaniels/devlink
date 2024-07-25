import { getAuth, Auth } from "firebase/auth";
import { app } from "./firebaseConfig";

const auth: Auth = getAuth(app);

export default auth;
