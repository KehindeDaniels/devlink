// src/components/PhoneLinkList.tsx
import React from "react";

const PhoneLinkList: React.FC<{
  links: { id: string; platform: string; url: string }[];
}> = ({ links }) => {
  return (
    <div className="flex flex-col space-y-4 w-1/2 mx-auto">
      {links.map((link) => (
        <div key={link.id} className="bg-gray-200 rounded-md p-2">
          <div className="text-sm font-medium">{link.platform}</div>
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            {link.url}
          </a>
        </div>
      ))}
    </div>
  );
};

export default PhoneLinkList;
