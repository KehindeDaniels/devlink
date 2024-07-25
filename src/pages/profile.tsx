import React, { useState } from "react";
import { useProfile } from "@/context/ProfileContext";
import Image from "next/image";
import MainLayout from "@/layouts/MainLayout";
import PhoneFrame from "@/components/PhoneFrame";
import PhoneLinkList from "@/components/PhoneLinkList";
import ProfileSkeleton from "@/components/ProfileSkeleton";
import ProfileInfo from "@/components/ProfileInfo";
import LinkSkeleton from "@/components/LinkSkeleton";

const ProfilePage = () => {
  const { profile, updateProfile, links } = useProfile();
  const [firstName, setFirstName] = useState(profile.firstName || "");
  const [lastName, setLastName] = useState(profile.lastName || "");
  const [email, setEmail] = useState(profile.email || "");
  const [profilePicture, setProfilePicture] = useState(
    profile.profilePicture || ""
  );

  const handleSave = () => {
    updateProfile({ firstName, lastName, email, profilePicture });
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
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Profile Details</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="md:w-1/2 mb-4 md:mb-0 md:mr-4">
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
        <div className="md:w-1/2 flex flex-col items-center">
          <div className="relative mb-4">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-2">
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
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First name"
            className="mb-2 p-2 border rounded w-full"
          />
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last name"
            className="mb-2 p-2 border rounded w-full"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="mb-2 p-2 border rounded w-full"
          />
          <button
            onClick={handleSave}
            className="py-2 px-4 bg-purple-600 text-white rounded-md"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
