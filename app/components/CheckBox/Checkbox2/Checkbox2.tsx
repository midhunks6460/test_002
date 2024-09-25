"use client";
import React, { useState } from "react";
import {
  checkboxStyles,
  containerStyles,
  logoBoxStyles,
  textStyles,
} from "./Checkbox2Config";
import { FaCube } from "react-icons/fa";

interface Checkbox2Props {
  value: boolean;
}

const Checkbox2: React.FC<Checkbox2Props> = ({ value }) => {
  const [checked, setChecked] = useState(value);

  const handleToggle = () => {
    setChecked(!checked);
  };

  return (
    <div className={containerStyles}>
      <div className={logoBoxStyles}>
        <FaCube className="text-gray-500 w-8 h-8" /> {/* Cube icon */}
      </div>

      <div className="ml-0">
        {" "}
        {/* Removed margin for full left alignment */}
        <h2 className={textStyles.heading}>Checkbox</h2>
        <p className={textStyles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div
        onClick={handleToggle}
        className={`${checkboxStyles.base} ${
          checked ? checkboxStyles.checked : checkboxStyles.unchecked
        } ml-auto`}
      >
        {checked && <span className="text-white font-bold">✓</span>}
      </div>
    </div>
  );
};

export default Checkbox2;
