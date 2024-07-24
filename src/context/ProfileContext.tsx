// src/context/ProfileContext.tsx
import React, { createContext, useContext, useState } from "react";

// Define the shape of the profile data
interface Profile {
  firstName: string;
  lastName: string;
  email: string;
  profilePicture: string; // update this line from `image` to `profilePicture`
}

interface ProfileContextType {
  profile: Profile;
  updateProfile: (profile: Partial<Profile>) => void;
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

  const updateProfile = (updatedProfile: Partial<Profile>) => {
    setProfile((prevProfile) => ({ ...prevProfile, ...updatedProfile }));
  };

  return (
    <ProfileContext.Provider value={{ profile, updateProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};
