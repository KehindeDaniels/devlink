import React from "react";

const platformColors: { [key: string]: string } = {
  github: "bg-black text-white",
  youtube: "bg-red-600 text-white",
  linkedin: "bg-blue-700 text-white",
  facebook: "bg-blue-600 text-white",
  twitter: "bg-blue-400 text-white",
  instagram:
    "bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-white",
  custom: "bg-gray-300 text-black",
};

const PhoneLinkList: React.FC<{
  links: { id: string; platform: string; url: string }[];
}> = ({ links }) => {
  return (
    <div className="flex flex-col space-y-4 w-1/2 mx-auto h-1/2 overflow-auto">
      {links.map((link) => {
        const platformKey = link.platform.startsWith("custom:")
          ? "custom"
          : link.platform;
        const platformClass =
          platformColors[platformKey] || "bg-gray-200 text-black";

        return (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-md p-2 flex items-center justify-between ${platformClass}`}
          >
            <div className="text-sm font-medium">
              {link.platform.startsWith("custom:")
                ? link.platform.replace("custom:", "")
                : link.platform}
            </div>
            <div className="text-white">→</div>
          </a>
        );
      })}
    </div>
  );
};

export default PhoneLinkList;
