import React from "react";
import LinkCard from "./LinkCard";
import EmptyStatePanel from "./EmptyStatePanel";

interface Link {
  id: string;
  platform: string;
  url: string;
}

const PanelLinkList: React.FC<{ links: Link[] }> = ({ links }) => {
  return (
    <div className="panel-link-list flex flex-col space-y-4">
      {links.length === 0 ? (
        <EmptyStatePanel />
      ) : (
        links.map((link) => <LinkCard key={link.id} {...link} />)
      )}
    </div>
  );
};

export default PanelLinkList;
