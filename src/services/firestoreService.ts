import { firestore } from "../config/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

interface UserProfile {
  uid: string;
  email: string;
  firstName: string;
  lastName: string;
  profilePicture: string;
}

export const createUserProfile = async (userProfile: UserProfile) => {
  try {
    await setDoc(doc(firestore, "users", userProfile.uid), userProfile);
  } catch (error) {
    console.error("Error creating user profile: ", error);
    throw error;
  }
};
