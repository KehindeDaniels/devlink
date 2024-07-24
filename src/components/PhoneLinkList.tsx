import React from "react";
import { FiLink } from "react-icons/fi";

interface Link {
  id: string;
  platform: string;
  url: string;
}

const PhoneLinkList: React.FC<{ links: Link[] }> = ({ links }) => {
  return (
    <div className="phone-link-list flex flex-col space-y-4">
      {links.map((link) => (
        <div
          key={link.id}
          className="link-card flex items-center justify-between p-2 border rounded-md"
        >
          <div className="flex items-center">
            <FiLink className="text-gray-500 mr-2" />
            <span>{link.platform}</span>
          </div>
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
