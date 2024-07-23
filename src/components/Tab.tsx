import React from "react";
import classNames from "classnames";

interface TabProps {
  label: string;
  state?: "active" | "default" | "hover";
  icon?: React.ReactNode;
}

const Tab: React.FC<TabProps> = ({ label, state = "default", icon }) => {
  const baseClasses =
    "rounded-md font-semibold px-4 py-2 flex items-center transition-all duration-200";

  const stateClasses = classNames({
    "bg-purple-light text-purple": state === "active",
    "text-gray hover:text-purple": state === "default",
    "hover:text-purple": state === "hover",
  });

  return (
    <div className={classNames(baseClasses, stateClasses, "hover:text-purple")}>
      {icon && <span className="mr-2">{icon}</span>}
      {label}
    </div>
  );
};

export default Tab;
