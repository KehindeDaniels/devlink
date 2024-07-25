import React from "react";
import LinkForm from "./LinkForm";

const PanelLinkList: React.FC<{
  links: { id: string; platform: string; url: string }[];
  onPlatformChange: (id: string, platform: string) => void;
  onUrlChange: (id: string, url: string) => void;
  onRemove: (id: string) => void;
  isDuplicate: (url: string) => boolean; // Add this line
  showError: (id: string, error: string) => void;
  errors: { [key: string]: string };
}> = ({
  links,
  onPlatformChange,
  onUrlChange,
  onRemove,
  isDuplicate, // Add this line
  showError,
  errors,
}) => {
  return (
    <div className="space-y-4">
      {links.map((link) => (
        <LinkForm
          key={link.id}
          link={link}
          onPlatformChange={onPlatformChange}
          onUrlChange={onUrlChange}
          onRemove={onRemove}
          isDuplicate={isDuplicate} // Add this line
          showError={showError}
          errors={errors}
        />
      ))}
    </div>
  );
};

export default PanelLinkList;
