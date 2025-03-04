// src/components/LinkSkeleton.tsx
import React from "react";

const LinkSkeleton: React.FC = () => {
  return (
    <div className="animate-pulse flex flex-col space-y-4 w-full">
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="bg-gray-300 h-10 rounded-md mb-2 w-1/2 mx-auto"
        ></div>
      ))}
    </div>
  );
};

export default LinkSkeleton;
