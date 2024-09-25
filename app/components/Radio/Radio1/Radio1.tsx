"use client";
import React, { useState } from "react";
import { radioStyles } from "./Radio1Config"; // Import styles from configuration

interface Radio1Props {
  value: boolean; // Prop to control checked state
}

const Radio1: React.FC<Radio1Props> = ({ value }) => {
  const [checked, setChecked] = useState(value);

  const handleToggle = () => {
    setChecked(!checked); // Toggle the radio state
  };

  return (
    <label className="flex items-center space-x-2">
      <div
        onClick={handleToggle}
        className={`${radioStyles.base} ${
          checked ? radioStyles.checked : radioStyles.unchecked
        }`}
      >
        {checked && (
          <span className="text-white font-bold mb-1">●</span> // Filled circle for checked state
        )}
      </div>
      <span>Radio</span>
    </label>
  );
};

export default Radio1;
