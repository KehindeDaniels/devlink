// src/pages/profile.tsx
import React, { useState } from "react";
import { useProfile } from "@/context/ProfileContext";
import Image from "next/image";
import MainLayout from "@/layouts/MainLayout";
import PhoneFrame from "@/components/phoneFrame";
import PhoneLinkList from "@/components/PhoneLinkList";
import ProfileSkeleton from "@/components/ProfileSkeleton";
import ProfileInfo from "@/components/ProfileInfo";
import LinkSkeleton from "@/components/LinkSkeleton";
import Toast from "@/components/Toast";
import withAuth from "@/components/withAuth"; // Import withAuth HOC

const ProfilePage = () => {
  const { profile, updateProfile, links } = useProfile();
  const [firstName, setFirstName] = useState(profile.firstName || "");
  const [lastName, setLastName] = useState(profile.lastName || "");
  const [email, setEmail] = useState(profile.email || "");
  const [profilePicture, setProfilePicture] = useState(
    profile.profilePicture || ""
  );
  const [showToast, setShowToast] = useState(false);

  const handleSave = () => {
    updateProfile({ firstName, lastName, email, profilePicture });
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000); // Hide toast after 3 seconds
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target) {
          setProfilePicture(event.target.result as string);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const isProfileEmpty =
    !profile.firstName &&
    !profile.lastName &&
    !profile.email &&
    !profile.profilePicture;

  return (
    <MainLayout>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Profile Details</h1>
        <p className="text-gray-500 mb-4">
          Add your details to create a personal touch to your profile.
        </p>
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="hidden md:block md:w-1/2 mb-4 md:mb-0 md:mr-4">
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
          <div className="md:w-1/2 flex flex-col items-start">
            <div className="relative mb-4">
              <label className="block text-gray-700 mb-2">
                Profile picture
              </label>
              <div className="w-32 h-32 rounded-full overflow-hidden mb-2 bg-gray-200 flex items-center justify-center">
                <Image
                  src={profilePicture || "/default-profile.png"}
                  alt="Profile Picture"
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
            </div>
            <div className="w-full mb-4">
              <label className="block text-gray-700 mb-2">First name*</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="e.g. John"
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="w-full mb-4">
              <label className="block text-gray-700 mb-2">Last name*</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="e.g. Appleseed"
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="w-full mb-4">
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. email@example.com"
                className="w-full p-2 border rounded"
              />
            </div>
            <button
              onClick={handleSave}
              className="py-2 px-8 bg-purple-600 text-white rounded-md"
            >
              Save
            </button>
          </div>
        </div>
        <Toast
          message="Your changes have been successfully saved!"
          show={showToast}
        />
      </div>
    </MainLayout>
  );
};

export default withAuth(ProfilePage); // Wrap with withAuth HOC
