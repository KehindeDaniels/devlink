import React from "react";

const EmptyStatePanel: React.FC = () => {
  return (
    <div className="text-center p-4">
      {/* <img
        src="https://example.com/empty-state-image.svg"
        alt="Empty state"
        className="mx-auto mb-4"
      /> */}
      <h2 className="text-lg font-bold mb-2">Let’s get you started</h2>
      <p className="text-gray-500">
        Use the “Add new link” button to get started. Once you have more than
        one link, you can reorder and edit them. We’re here to help you share
        your profiles with everyone!
      </p>
    </div>
  );
};

export default EmptyStatePanel;
