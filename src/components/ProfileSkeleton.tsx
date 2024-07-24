// /src/components/ProfileSkeleton.tsx
import React from "react";

const ProfileSkeleton: React.FC = () => {
  return (
    <div className="animate-pulse flex flex-col items-center px-4 py-16 space-y-4">
      <div className="bg-gray-300 h-16 w-16 rounded-full mb-4"></div>
      <div className="bg-gray-300 h-4 w-24 rounded mb-2"></div>
      <div className="bg-gray-300 h-4 w-16 rounded mb-6"></div>
    </div>
  );
};

export default ProfileSkeleton;
