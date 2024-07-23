import React from "react";
import classNames from "classnames";

interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary";
  state?: "default" | "active" | "disabled";
}

const Button: React.FC<ButtonProps> = ({
  label,
  variant = "primary",
  state = "default",
}) => {
  const baseClasses =
    "rounded-md font-semibold px-6 py-3 transition-all duration-200";

  const primaryClasses = classNames({
    "bg-purple text-white cursor-pointer":
      state === "default" && variant === "primary",
    "bg-purple-hover text-white": state === "active" && variant === "primary",
    "bg-purple-light text-white cursor-not-allowed":
      state === "disabled" && variant === "primary",
    "hover:bg-purple-hover": state === "default" && variant === "primary",
  });

  const secondaryClasses = classNames({
    "border-2 border-purple text-purple cursor-pointer":
      state === "default" && variant === "secondary",
    "bg-purple-light border-2 border-purple text-purple":
      state === "active" && variant === "secondary",
    "border-2 border-gray-light text-gray-light cursor-not-allowed":
      state === "disabled" && variant === "secondary",
    "hover:bg-purple-light hover:border-purple":
      state === "default" && variant === "secondary",
  });

  const classes = classNames(baseClasses, {
    [primaryClasses]: variant === "primary",
    [secondaryClasses]: variant === "secondary",
  });

  return (
    <button className={classes} disabled={state === "disabled"}>
      {label}
    </button>
  );
};

export default Button;
