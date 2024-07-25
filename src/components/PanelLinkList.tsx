import React from "react";
import LinkForm from "./LinkForm";

interface PanelLinkListProps {
  links: { id: string; platform: string; url: string }[];
  onPlatformChange: (id: string, platform: string) => void;
  onUrlChange: (id: string, url: string) => void;
  onRemove: (id: string) => void;
  showError: (id: string, error: string) => void;
  errors: { [key: string]: string };
}

const PanelLinkList: React.FC<PanelLinkListProps> = ({
  links,
  onPlatformChange,
  onUrlChange,
  onRemove,
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
          showError={showError}
          errors={errors}
        />
      ))}
    </div>
  );
};

export default PanelLinkList;
