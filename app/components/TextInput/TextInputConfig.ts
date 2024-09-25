export type TextInputConfig = {
  variation:
    | "default"
    | "rightIcon"
    | "twoIcons"
    | "leftIcon"
    | "inputWithDropdown"
    | "websiteInput";
};

export const getTextInputClasses = ({ variation }: { variation: string }) => {
  let baseClasses = "border rounded-md px-3 py-2 w-[560px] h-[48px]";

  if (variation === "rightIcon" || variation === "twoIcons") {
    baseClasses += " pr-10";
  }

  if (variation === "leftIcon") {
    baseClasses += "pl-10"; // Add padding for left icon
  }

  return baseClasses;
};
