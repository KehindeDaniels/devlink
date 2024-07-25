import React, { useState } from "react";
import {
  FiLink,
  FiGithub,
  FiYoutube,
  FiLinkedin,
  FiChevronDown,
} from "react-icons/fi";

const platformIcons: { [key: string]: JSX.Element } = {
  github: <FiGithub />,
  youtube: <FiYoutube />,
  linkedin: <FiLinkedin />,
};

const platforms = [
  { value: "github", label: "GitHub", icon: <FiGithub /> },
  { value: "youtube", label: "YouTube", icon: <FiYoutube /> },
  { value: "linkedin", label: "LinkedIn", icon: <FiLinkedin /> },
  { value: "custom", label: "Custom", icon: <FiLink /> },
];

interface LinkFormProps {
  link: { id: string; platform: string; url: string };
  onPlatformChange: (id: string, platform: string) => void;
  onUrlChange: (id: string, url: string) => void;
  onRemove: (id: string) => void;
}

const LinkForm: React.FC<LinkFormProps> = ({
  link,
  onPlatformChange,
  onUrlChange,
  onRemove,
}) => {
  const [customPlatform, setCustomPlatform] = useState(
    link.platform === "custom" ? link.platform : ""
  );

  const handlePlatformChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    if (value === "custom") {
      setCustomPlatform("");
      onPlatformChange(link.id, "custom");
    } else {
      onPlatformChange(link.id, value);
    }
  };

  const handleCustomPlatformChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = e.target;
    setCustomPlatform(value);
  };

  const handleCustomPlatformBlur = () => {
    onPlatformChange(link.id, customPlatform);
  };

  return (
    <div className="bg-gray-border p-4 rounded-md mb-2 mt-2 flex flex-col gap-4">
      <div className="flex items-center justify-between mb-1">
        <span className="text-lg font-semibold">Link #{link.id}</span>
        <button onClick={() => onRemove(link.id)} className="text-red-500">
          Remove
        </button>
      </div>
      <div className="flex flex-col mb-2">
        <label className="mb-1 text-gray-700">Platform</label>
        <div className="relative">
          <div className="options flex items-center relative">
            <div className="absolute left-3 flex items-center">
              {platformIcons[link.platform] || <FiLink />}
            </div>
            <select
              value={link.platform}
              onChange={handlePlatformChange}
              className="appearance-none bg-white border border-gray-300 rounded-md pl-10 pr-8 py-2 w-full"
            >
              {platforms.map((platform) => (
                <option key={platform.value} value={platform.value}>
                  {platform.label}
                </option>
              ))}
            </select>
            <FiChevronDown className="absolute top-1/2 right-2 transform -translate-y-1/2 text-purple" />
          </div>
        </div>
        {link.platform === "custom" && (
          <div className="mt-2">
            <label className="mb-1 text-gray-700">Custom Platform</label>
            <input
              type="text"
              value={customPlatform}
              onChange={handleCustomPlatformChange}
              onBlur={handleCustomPlatformBlur}
              placeholder="e.g. My Blog"
              className="bg-white border border-gray-300 rounded-md px-3 py-2 w-full"
            />
          </div>
        )}
      </div>
      <div className="flex flex-col">
        <label className="mb-1 text-gray-700">Link</label>
        <input
          type="url"
          value={link.url}
          onChange={(e) => onUrlChange(link.id, e.target.value)}
          placeholder="e.g. https://www.example.com"
          className="bg-white border border-gray-300 rounded-md px-3 py-2 w-full"
        />
      </div>
    </div>
  );
};

export default LinkForm;
