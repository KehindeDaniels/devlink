import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useProfile } from "@/context/ProfileContext";
import { useAuth } from "@/hooks/useAuth";

import MainLayout from "@/layouts/MainLayout";
import AddLinkButton from "@/components/AddLinkButton";
import PhoneFrame from "@/components/phoneFrame";
import PanelLinkList from "@/components/PanelLinkList";
import PhoneLinkList from "@/components/PhoneLinkList";
import EmptyStatePanel from "@/components/EmptyStatePanel";
import ProfileSkeleton from "@/components/ProfileSkeleton";
import ProfileInfo from "@/components/ProfileInfo";
import LinkSkeleton from "@/components/LinkSkeleton";

const HomePage = () => {
  const {
    profile,
    links,
    addLink,
    updateLinkPlatform,
    updateLinkUrl,
    removeLink,
  } = useProfile();
  const { user, loading } = useAuth();
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return null;
  }

  const isProfileEmpty =
    !profile.firstName &&
    !profile.lastName &&
    !profile.email &&
    !profile.profilePicture;

  const handleAddLink = async () => {
    const newLink = {
      id: (links.length + 1).toString(),
      platform: "github",
      url: "",
    };
    try {
      await addLink(newLink);
    } catch (error) {
      console.error("Error adding link: ", error);
    }
  };

  const handleUpdateLinkPlatform = (id: string, platform: string) => {
    updateLinkPlatform(id, platform);
  };

  const handleUpdateLinkUrl = (id: string, url: string) => {
    updateLinkUrl(id, url);
  };

  const handleRemoveLink = (id: string) => {
    removeLink(id);
    const newErrors = { ...errors };
    delete newErrors[id];
    setErrors(newErrors);
  };

  const isDuplicate = (url: string) => {
    return links.some((link) => link.url === url);
  };

  const showError = (id: string, error: string) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: error,
    }));
  };

  const hasError = () => {
    return Object.values(errors).some((error) => error);
  };

  return (
    <MainLayout>
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
                onPlatformChange={handleUpdateLinkPlatform}
                onUrlChange={handleUpdateLinkUrl}
                onRemove={handleRemoveLink}
                isDuplicate={isDuplicate}
                showError={showError}
                errors={errors}
              />
            )}
          </div>
          <div className="flex justify-end mt-4">
            <button
              type="button"
              className={`py-2 px-8 rounded-md ${
                hasError()
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-purple text-white"
              }`}
              disabled={hasError()}
              onClick={() => console.log("Saving...")}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default HomePage;
