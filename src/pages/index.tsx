import React, { useState } from "react";
import MainLayout from "@/layouts/MainLayout";
import PanelLinkList from "@/components/PanelLinkList";
import PhoneLinkList from "@/components/PhoneLinkList";
import AddLinkButton from "@/components/AddLinkButton";
import PhoneFrame from "@/components/phoneFrame";
import EmptyStatePhone from "@/components/EmptyStatePhone";

const HomePage = () => {
  const [links, setLinks] = useState<
    Array<{ id: string; platform: string; url: string }>
  >([]);

  const addLink = () => {
    const newLink = {
      id: Math.random().toString(),
      platform: "GitHub",
      url: "https://github.com",
    };
    setLinks([...links, newLink]);
  };

  return (
    <div className="flex  gap-8 px-8 w-full">
      <div className="hidden md:block sm:flex-1 bg-white rounded-xl">
        <PhoneFrame>
          {links.length === 0 ? (
            <EmptyStatePhone />
          ) : (
            <PhoneLinkList links={links} />
          )}
        </PhoneFrame>
      </div>
      <div className="flex-1 bg-white p-8 rounded-xl">
        <h1 className="text-3xl font-bold mb-4">Customize your links</h1>
        <p className=" mb-4 text-gray-dark">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
        <AddLinkButton onClick={addLink} />
        <PanelLinkList links={links} />
        {links.length > 0 && (
          <button
            type="button"
            className="p-2 bg-purple text-white rounded-md mt-4"
          >
            Save
          </button>
        )}
      </div>
    </div>
  );
};

export default HomePage;
