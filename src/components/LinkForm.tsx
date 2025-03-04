import React, { useState, useEffect } from "react";
import {
  FiLink,
  FiGithub,
  FiYoutube,
  FiLinkedin,
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiChevronDown,
} from "react-icons/fi";

const platformIcons: { [key: string]: JSX.Element } = {
  github: <FiGithub />,
  youtube: <FiYoutube />,
  linkedin: <FiLinkedin />,
  facebook: <FiFacebook />,
  twitter: <FiTwitter />,
  instagram: <FiInstagram />,
};

const platforms = [
  { value: "github", label: "GitHub", icon: <FiGithub /> },
  { value: "youtube", label: "YouTube", icon: <FiYoutube /> },
  { value: "linkedin", label: "LinkedIn", icon: <FiLinkedin /> },
  { value: "facebook", label: "Facebook", icon: <FiFacebook /> },
  { value: "twitter", label: "Twitter", icon: <FiTwitter /> },
  { value: "instagram", label: "Instagram", icon: <FiInstagram /> },
  { value: "custom", label: "Custom", icon: <FiLink /> },
];

interface LinkFormProps {
  link: { id: string; platform: string; url: string };
  onPlatformChange: (id: string, platform: string) => void;
  onUrlChange: (id: string, url: string) => void;
  onRemove: (id: string) => void;
  showError: (id: string, error: string) => void;
  errors: { [key: string]: string };
  isDuplicate: (url: string) => boolean; // Add this line
}

const LinkForm: React.FC<LinkFormProps> = ({
  link,
  onPlatformChange,
  onUrlChange,
  onRemove,
  showError,
  errors,
  isDuplicate, // Add this line
}) => {
  const [customPlatform, setCustomPlatform] = useState(
    link.platform.startsWith("custom:")
      ? link.platform.replace("custom:", "")
      : ""
  );

  useEffect(() => {
    if (link.platform.startsWith("custom:")) {
      setCustomPlatform(link.platform.replace("custom:", ""));
    }
  }, [link.platform]);

  const handlePlatformChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    if (value === "custom") {
      setCustomPlatform("");
      onPlatformChange(link.id, "custom:");
    } else {
      onPlatformChange(link.id, value);
    }
  };

  const handleCustomPlatformChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = e.target;
    setCustomPlatform(value);
    onPlatformChange(link.id, `custom:${value}`);
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    onUrlChange(link.id, value);
    if (!value) {
      showError(link.id, "Can't be empty");
    } else if (!isValidUrl(value)) {
      showError(link.id, "Please check the URL");
    } else if (isDuplicate(value)) {
      showError(link.id, "Duplicate URL detected");
    } else {
      showError(link.id, "");
    }
  };

  const isValidUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
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
              value={
                link.platform.startsWith("custom:") ? "custom" : link.platform
              }
              onChange={handlePlatformChange}
              className="appearance-none bg-white border border-gray-300 rounded-md pl-10 pr-8 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
            >
              {platforms.map((platform) => (
                <option
                  key={platform.value}
                  value={platform.value}
                  className="flex items-center"
                >
                  {platform.label}
                </option>
              ))}
            </select>
            <FiChevronDown className="absolute top-1/2 right-2 transform -translate-y-1/2 text-purple" />
          </div>
        </div>
        {link.platform.startsWith("custom:") && (
          <div className="mt-2">
            <label className="mb-1 text-gray-700">Custom Platform</label>
            <input
              type="text"
              value={customPlatform}
              onChange={handleCustomPlatformChange}
              placeholder="e.g. My Blog"
              className="bg-white border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
              onBlur={() =>
                onPlatformChange(link.id, `custom:${customPlatform}`)
              }
            />
          </div>
        )}
      </div>
      <div className="flex flex-col">
        <label className="mb-1 text-gray-700">Link</label>
        <input
          type="url"
          value={link.url}
          onChange={handleUrlChange}
          placeholder="e.g. https://www.example.com"
          className={`bg-white border rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent ${
            errors[link.id] ? "border-red" : "border-gray-300"
          }`}
        />
        {errors[link.id] && (
          <p className="text-red-500 text-sm">{errors[link.id]}</p>
        )}
      </div>
    </div>
  );
};

export default LinkForm;
