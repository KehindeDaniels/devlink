import React, { createContext, useContext, useState, useEffect } from "react";

// Define the shape of the profile data
interface Profile {
  firstName: string;
  lastName: string;
  email: string;
  profilePicture: string; // update this line from `image` to `profilePicture`
}

interface Link {
  id: string;
  platform: string;
  url: string;
}

interface ProfileContextType {
  profile: Profile;
  links: Link[];
  updateProfile: (profile: Partial<Profile>) => void;
  addLink: (link: Link) => void;
  updateLink: (id: string, updatedLink: Partial<Link>) => void;
  removeLink: (id: string) => void;
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

  const [links, setLinks] = useState<Link[]>([]);

  const updateProfile = (updatedProfile: Partial<Profile>) => {
    setProfile((prevProfile) => ({ ...prevProfile, ...updatedProfile }));
  };

  const addLink = (link: Link) => {
    setLinks((prevLinks) => [...prevLinks, link]);
  };

  const updateLink = (id: string, updatedLink: Partial<Link>) => {
    setLinks((prevLinks) =>
      prevLinks.map((link) =>
        link.id === id ? { ...link, ...updatedLink } : link
      )
    );
  };

  const removeLink = (id: string) => {
    setLinks((prevLinks) => prevLinks.filter((link) => link.id !== id));
  };

  return (
    <ProfileContext.Provider
      value={{ profile, links, updateProfile, addLink, updateLink, removeLink }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
