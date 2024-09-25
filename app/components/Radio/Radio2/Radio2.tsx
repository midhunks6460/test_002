"use client";
import React, { useState } from "react";
import {
  radioStyles,
  containerStyles,
  logoBoxStyles,
  textStyles,
} from "./Radio2Config";
import { FaCube } from "react-icons/fa"; // Using the cube icon

interface Radio2Props {
  value: boolean; // Prop to control the checked state
}

const Radio2: React.FC<Radio2Props> = ({ value }) => {
  const [checked, setChecked] = useState(value); // Manage checked state

  const handleToggle = () => {
    setChecked(!checked); // Toggle the radio state
  };

  return (
    <div className={containerStyles}>
      <div className={logoBoxStyles}>
        <FaCube className="text-gray-500 w-8 h-8" /> {/* Cube icon */}
      </div>

      <div className="ml-0">
        {/* Removed margin for full left alignment */}
        <h2 className={textStyles.heading}>Radio Option</h2>
        <p className={textStyles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div
        onClick={handleToggle}
        className={`${radioStyles.base} ${
          checked ? radioStyles.checked : radioStyles.unchecked
        } ml-auto`}
      >
        {checked && <span className="text-white font-bold">✓</span>}{" "}
        {/* White tick for checked state */}
      </div>
    </div>
  );
};

export default Radio2;
