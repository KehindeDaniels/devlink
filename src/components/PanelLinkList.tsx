// src/components/PanelLinkList.tsx
import React from "react";
import LinkForm from "./LinkForm";

const PanelLinkList: React.FC<{
  links: { id: string; platform: string; url: string }[];
  onPlatformChange: (id: string, platform: string) => void;
  onUrlChange: (id: string, url: string) => void;
  onRemove: (id: string) => void;
}> = ({ links, onPlatformChange, onUrlChange, onRemove }) => {
  return (
    <div className="space-y-4">
      {links.map((link) => (
        <LinkForm
          key={link.id}
          link={link}
          onPlatformChange={onPlatformChange}
          onUrlChange={onUrlChange}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default PanelLinkList;
