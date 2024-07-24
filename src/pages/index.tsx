import React, { useState } from "react";
import AddLinkButton from "@/components/AddLinkButton";
import PhoneFrame from "@/components/phoneFrame";
import EmptyStatePhone from "@/components/EmptyStatePhone";
import PanelLinkList from "@/components/PanelLinkList";
import PhoneLinkList from "@/components/PhoneLinkList";

const HomePage = () => {
  const [links, setLinks] = useState<
    Array<{ id: string; platform: string; url: string }>
  >([]);

  const addLink = () => {
    const newLink = {
      id: (links.length + 1).toString(),
      platform: "github",
      url: "",
    };
    setLinks([...links, newLink]);
  };

  const updateLinkPlatform = (id: string, platform: string) => {
    setLinks(
      links.map((link) => (link.id === id ? { ...link, platform } : link))
    );
  };

  const updateLinkUrl = (id: string, url: string) => {
    setLinks(links.map((link) => (link.id === id ? { ...link, url } : link)));
  };

  const removeLink = (id: string) => {
    setLinks(links.filter((link) => link.id !== id));
  };

  return (
    <div className="mx-auto p-4 flex gap-8 h-screen">
      <div className="hidden lg:block flex-1 bg-white rounded-2xl p-8">
        <PhoneFrame>
          {links.length === 0 ? (
            <EmptyStatePhone />
          ) : (
            <PhoneLinkList links={links} />
          )}
        </PhoneFrame>
      </div>
      <div className="flex-1 flex flex-col bg-white rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-4">Customize your links</h1>
        <AddLinkButton onClick={addLink} />
        <div className="h-[532px] overflow-auto mt-4">
          <PanelLinkList
            links={links}
            onPlatformChange={updateLinkPlatform}
            onUrlChange={updateLinkUrl}
            onRemove={removeLink}
          />
        </div>
        <div className="flex justify-end mt-4">
          <button
            type="button"
            className="py-2 px-8 bg-purple text-white rounded-md"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
