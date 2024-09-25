import React from "react";
import { getTextInputClasses } from "./TextInputConfig";
import {
  AiOutlineQuestionCircle,
  AiOutlineSearch,
  AiOutlineCreditCard,
} from "react-icons/ai";

const TextInput: React.FC<{
  variation:
    | "default"
    | "rightIcon"
    | "twoIcons"
    | "leftIcon"
    | "inputWithDropdown"
    | "websiteInput";
}> = ({ variation }) => {
  let placeholder = "Placeholder";
  let leftIcon: JSX.Element | null = null;
  let rightIcon: JSX.Element | null = null;

  switch (variation) {
    case "default":
      placeholder = "Placeholder";
      break;
    case "rightIcon":
      rightIcon = <AiOutlineQuestionCircle className="text-gray-500 w-5 h-5" />;
      placeholder = "Placeholder";
      break;
    case "twoIcons":
      leftIcon = <AiOutlineCreditCard className="text-gray-500 w-5 h-5" />;
      rightIcon = <AiOutlineQuestionCircle className="text-gray-500 w-5 h-5" />;
      placeholder = "Placeholder";
      break;
    case "leftIcon":
      leftIcon = <AiOutlineSearch className="text-gray-500 w-5 h-5" />;
      placeholder = "Search";
      break;
    case "inputWithDropdown":
      placeholder = "Placeholder";
      return (
        <div className="relative mb-4 w-[560px]">
          <select className="absolute left-0 top-0 h-full w-[87px] rounded-l-md bg-white text-black appearance-none border border-gray-300 pr-8 pl-2">
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>

          <input
            type="text"
            className="border rounded-md px-3 py-2 w-[560px] h-[48px] pl-[130px] pr-8" // Adjust padding
            placeholder={placeholder}
          />
        </div>
      );
    case "websiteInput":
      placeholder = "www.google.com";
      return (
        <div className="relative mb-4 w-[560px]">
          <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 bg-white">
            http://
          </span>
          <input
            type="text"
            className="border rounded-md px-3 py-2 w-[560px] h-[48px] pl-24" // Adjust padding
            placeholder={placeholder}
          />
        </div>
      );
    default:
      break;
  }

  return (
    <div className="relative mb-4 w-[560px]">
      {leftIcon && (
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center">
          {leftIcon}
        </span>
      )}
      <input
        type="text"
        className={`${getTextInputClasses({ variation })} pl-10`} // Adding padding-left for spacing
        placeholder={placeholder}
      />
      {rightIcon && (
        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center">
          {rightIcon}
        </span>
      )}
    </div>
  );
};

export default TextInput;
