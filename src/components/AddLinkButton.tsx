import React from "react";

interface AddLinkButtonProps {
  onClick: () => void;
}

const AddLinkButton: React.FC<AddLinkButtonProps> = ({ onClick }) => {
  return (
    <div className="grid">
      <button
        onClick={onClick}
        className="add-link-button  bg-purple-light text-purple font-semibold py-2 px-4 rounded-md hover:bg-purple hover:text-white transition"
      >
        + Add new link
      </button>
    </div>
  );
};

export default AddLinkButton;
