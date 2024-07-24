// src/components/ProfileInfo.tsx
import React from "react";
import { useProfile } from "@/context/ProfileContext";

// Define ProfileInfo Props
interface ProfileInfoProps {
  profile: {
    firstName: string;
    lastName: string;
    email: string;
    profilePicture: string;
  };
}

// ProfileInfo Component
const ProfileInfo: React.FC<ProfileInfoProps> = ({ profile }) => {
  return (
    <div className="flex flex-col items-center">
      {profile.profilePicture ? (
        <img
          src={profile.profilePicture}
          alt="Profile"
          className="w-16 h-16 rounded-full object-cover mb-2"
        />
      ) : (
        <div className="bg-gray-300 w-16 h-16 rounded-full mb-2"></div>
      )}
      <div className="text-lg font-bold">{`${profile.firstName} ${profile.lastName}`}</div>
      <div className="text-gray-500">{profile.email}</div>
    </div>
  );
};

export default ProfileInfo;
