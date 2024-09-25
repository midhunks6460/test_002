import { ReactNode } from "react";

export type ButtonConfig = {
  mode: "dark" | "light";
  style: "primary" | "secondary" | "tertiary" | "link";
  size: "small" | "large";
  iconPosition: "noicon" | "leading" | "trailing" | "onlyicon";
  icon?: ReactNode;
};

const getBackgroundClasses = ({
  mode,
  style,
}: Pick<ButtonConfig, "mode" | "style">): string => {
  switch (style) {
    case "primary":
      return mode === "light" ? "bg-black text-white" : "bg-white text-black";
    case "secondary":
      return mode === "light"
        ? "bg-white text-black border border-black"
        : "bg-black text-white border border-white";
    case "tertiary":
      return "bg-transparent text-gray-500";
    case "link":
      return "text-blue-500 underline"; 
    default:
      return "";
  }
};

const getSizeClasses = ({ size }: Pick<ButtonConfig, "size">): string => {
  return size === "small" ? "text-sm px-3 py-1" : "text-lg px-5 py-2";
};

const getIconClasses = ({
  iconPosition,
}: Pick<ButtonConfig, "iconPosition">): string => {
  switch (iconPosition) {
    case "leading":
      return "flex-row";
    case "trailing":
      return "flex-row-reverse";
    case "onlyicon":
      return "justify-center p-2"; 
    case "noicon":
    default:
      return "";
  }
};

export const getButtonClasses = ({
  mode,
  style,
  size,
  iconPosition,
}: ButtonConfig): string => {
  const baseClasses = `inline-flex items-center justify-center font-semibold`;
  const backgroundClasses = getBackgroundClasses({ mode, style });
  const sizeClasses = getSizeClasses({ size });
  const iconClasses = getIconClasses({ iconPosition });

  return `${baseClasses} ${backgroundClasses} ${sizeClasses} ${iconClasses}`;
};
