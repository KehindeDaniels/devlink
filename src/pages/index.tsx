// src/pages/index.tsx
import React from "react";
import AddLinkButton from "@/components/AddLinkButton";
import PhoneFrame from "@/components/PhoneFrame";
import PanelLinkList from "@/components/PanelLinkList";
import PhoneLinkList from "@/components/PhoneLinkList";
import EmptyStatePanel from "@/components/EmptyStatePanel";
import ProfileSkeleton from "@/components/ProfileSkeleton";
import ProfileInfo from "@/components/ProfileInfo";
import LinkSkeleton from "@/components/LinkSkeleton";
import { useProfile } from "@/context/ProfileContext";

const HomePage = () => {
  const { profile, links, addLink, updateLink, removeLink } = useProfile();

  const isProfileEmpty =
    !profile.firstName &&
    !profile.lastName &&
    !profile.email &&
    !profile.profilePicture;

  const handleAddLink = () => {
    const newLink = {
      id: (links.length + 1).toString(),
      platform: "github",
      url: "",
    };
    addLink(newLink);
  };

  return (
    <div className="container mx-auto p-4 flex gap-8 h-screen">
      <div className="hidden md:block flex-1 bg-white rounded-2xl p-8">
        <PhoneFrame>
          {isProfileEmpty ? (
            <ProfileSkeleton />
          ) : (
            <ProfileInfo profile={profile} />
          )}
          {links.length === 0 ? (
            <LinkSkeleton />
          ) : (
            <PhoneLinkList links={links} />
          )}
        </PhoneFrame>
      </div>
      <div className="flex-1 flex flex-col bg-white rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-4">Customize your links</h1>
        <AddLinkButton onClick={handleAddLink} />
        <div
          className={`mt-4 ${
            links.length > 0 ? "h-[532px] overflow-auto" : ""
          }`}
        >
          {links.length === 0 ? (
            <EmptyStatePanel />
          ) : (
            <PanelLinkList
              links={links}
              onPlatformChange={updateLink}
              onUrlChange={updateLink}
              onRemove={removeLink}
            />
          )}
        </div>
        <div className="flex justify-end mt-4">
          <button
            type="button"
            className="py-2 px-8 bg-purple text-white rounded-md"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
