import React from "react";
import { FiLink } from "react-icons/fi";

interface LinkCardProps {
  id: string;
  platform: string;
  url: string;
}

const LinkCard: React.FC<LinkCardProps> = ({ platform, url }) => {
  return (
    <div className="link-card flex items-center justify-between p-2 border rounded-md">
      <div className="flex items-center">
        <FiLink className="text-gray-500 mr-2" />
        <span>{platform}</span>
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500"
      >
        {url}
      </a>
    </div>
  );
};

export default LinkCard;
