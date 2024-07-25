import React, { useState } from "react";
import { useProfile } from "@/context/ProfileContext";
import PhoneFrame from "@/components/phoneFrame";
import PhoneLinkList from "@/components/PhoneLinkList";
import ProfileInfo from "@/components/ProfileInfo";
import ProfileSkeleton from "@/components/ProfileSkeleton";
import LinkSkeleton from "@/components/LinkSkeleton";
import Toast from "@/components/Toast";
import { useRouter } from "next/router";
import PreviewLayout from "@/layouts/PreviewLayout";

const PreviewPage = () => {
  const { profile, links } = useProfile();
  const [showToast, setShowToast] = useState(false);
  const router = useRouter();

  const handleCopyLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    });
  };

  const handleBackToEditor = () => {
    router.push("/");
  };

  const isProfileEmpty =
    !profile.firstName &&
    !profile.lastName &&
    !profile.email &&
    !profile.profilePicture;

  return (
    <PreviewLayout>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center">
        <div className="w-full bg-purple-600 py-4 flex justify-between items-center px-8">
          <button
            onClick={handleBackToEditor}
            className="text-white bg-purple-700 hover:bg-purple-800 rounded px-4 py-2"
          >
            Back to Editor
          </button>
          <button
            onClick={handleCopyLink}
            className="text-white bg-purple-700 hover:bg-purple-800 rounded px-4 py-2"
          >
            Share Link
          </button>
        </div>
        <div className="mt-8 bg-white p-8 rounded-lg shadow-lg flex flex-col items-center">
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
        <Toast
          message="The link has been copied to your clipboard!"
          show={showToast}
        />
      </div>
    </PreviewLayout>
  );
};

export default PreviewPage;
