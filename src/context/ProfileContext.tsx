import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { auth, firestore } from "../config/firebaseConfig";

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
  updateProfile: (profile: Profile) => void;
  links: Link[];
  setLinks: (links: Link[]) => void;
  addLink: (link: Link) => Promise<void>;
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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const profileDoc = await getDoc(doc(firestore, "users", user.uid));
        if (profileDoc.exists()) {
          setProfile(profileDoc.data() as Profile);
        }

        const linksDoc = await getDoc(doc(firestore, "links", user.uid));
        if (linksDoc.exists()) {
          setLinks(linksDoc.data().links);
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

  const addLink = async (newLink: Link) => {
    if (auth.currentUser) {
      const linksRef = doc(firestore, "links", auth.currentUser.uid);
      const linksDoc = await getDoc(linksRef);

      if (linksDoc.exists()) {
        const existingLinks = linksDoc.data().links as Link[];
        const updatedLinks = [...existingLinks, newLink];
        await updateDoc(linksRef, { links: updatedLinks });
        setLinks(updatedLinks);
      } else {
        await setDoc(linksRef, { links: [newLink] });
        setLinks([newLink]);
      }
    }
  };

  const updateLinkPlatform = (id: string, platform: string) => {
    const updatedLinks = links.map((link) =>
      link.id === id ? { ...link, platform } : link
    );
    setLinks(updatedLinks);
  };

  const updateLinkUrl = (id: string, url: string) => {
    const updatedLinks = links.map((link) =>
      link.id === id ? { ...link, url } : link
    );
    setLinks(updatedLinks);
  };

  const removeLink = async (id: string) => {
    if (auth.currentUser) {
      const linksRef = doc(firestore, "links", auth.currentUser.uid);
      const linksDoc = await getDoc(linksRef);

      if (linksDoc.exists()) {
        const existingLinks = linksDoc.data().links as Link[];
        const updatedLinks = existingLinks.filter((link) => link.id !== id);
        await updateDoc(linksRef, { links: updatedLinks });
        setLinks(updatedLinks);
      }
    }
  };

  return (
    <ProfileContext.Provider
      value={{
        profile,
        updateProfile,
        links,
        setLinks,
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
