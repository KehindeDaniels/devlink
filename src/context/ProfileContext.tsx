import React, { createContext, useContext, useState } from "react";

// Define the shape of the profile data
interface Profile {
  firstName: string;
  lastName: string;
  email: string;
  profilePicture: string;
}

interface Link {
  id: string;
  platform: string;
  url: string;
}

interface ProfileContextType {
  profile: Profile;
  updateProfile: (profile: Partial<Profile>) => void;
  links: Link[];
  addLink: (link: Link) => void;
  updateLinkPlatform: (id: string, platform: string) => void;
  updateLinkUrl: (id: string, url: string) => void;
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

  const updateLinkPlatform = (id: string, platform: string) => {
    setLinks((prevLinks) =>
      prevLinks.map((link) => (link.id === id ? { ...link, platform } : link))
    );
  };

  const updateLinkUrl = (id: string, url: string) => {
    setLinks((prevLinks) =>
      prevLinks.map((link) => (link.id === id ? { ...link, url } : link))
    );
  };

  const removeLink = (id: string) => {
    setLinks((prevLinks) => prevLinks.filter((link) => link.id !== id));
  };

  return (
    <ProfileContext.Provider
      value={{
        profile,
        updateProfile,
        links,
        addLink,
        updateLinkPlatform,
        updateLinkUrl,
        removeLink,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
