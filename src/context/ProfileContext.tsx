import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, firestore } from "../config/firebaseConfig";

interface Profile {
  firstName: string;
  lastName: string;
  email: string;
  profilePicture: string;
}

interface ProfileContextType {
  profile: Profile;
  updateProfile: (profile: Profile) => void;
  links: { id: string; platform: string; url: string }[];
  setLinks: (links: { id: string; platform: string; url: string }[]) => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useProfile must be used within a ProfileProvider");
  }
  return context;
};

export const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [profile, setProfile] = useState<Profile>({
    firstName: "",
    lastName: "",
    email: "",
    profilePicture: "",
  });
  const [links, setLinks] = useState<
    { id: string; platform: string; url: string }[]
  >([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const profileDoc = await getDoc(doc(firestore, "users", user.uid));
        if (profileDoc.exists()) {
          setProfile(profileDoc.data() as Profile);
        }
      }
    });
    return () => unsubscribe();
  }, []);

  const updateProfile = async (updatedProfile: Profile) => {
    if (auth.currentUser) {
      await setDoc(
        doc(firestore, "users", auth.currentUser.uid),
        updatedProfile
      );
      setProfile(updatedProfile);
    }
  };

  return (
    <ProfileContext.Provider
      value={{ profile, updateProfile, links, setLinks }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
