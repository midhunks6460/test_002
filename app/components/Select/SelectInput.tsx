// SelectInput.tsx
import React from "react";
import { AiOutlineClockCircle, AiOutlineDown } from "react-icons/ai"; // Importing icons

interface SelectInputProps {
  value: boolean; // true or false
}

const SelectInput: React.FC<SelectInputProps> = ({ value }) => {
  const placeholder = "Placeholder"; // Placeholder text
  const options = ["Option 1", "Option 2", "Option 3"]; // Sample options

  return (
    <div className="relative mb-4 w-[560px]">
      {value ? (
        <div className="relative h-[48px]">
          <select className="h-full w-full border rounded-md bg-white text-black appearance-none pr-8 border-gray-300">
            <option value="" disabled selected>
              {placeholder}
            </option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
            <AiOutlineDown />
          </span>
        </div>
      ) : (
        <div className="flex items-center border rounded-md h-[48px] bg-white border-gray-300">
          <span className="flex items-center pl-3">
            <AiOutlineClockCircle className="text-gray-500 w-5 h-5" />
          </span>
          <select className="flex-1 h-full bg-transparent text-black appearance-none pr-8 rounded-md pl-2">
            <option value="" disabled selected>
              {placeholder}
            </option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
            <AiOutlineDown />
          </span>
        </div>
      )}
    </div>
  );
};

export default SelectInput;
