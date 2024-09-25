"use client";
import React, { useState } from "react";
import { checkboxStyles } from "./Checkbox1Config";

interface Checkbox1Props {
  value: boolean;
}

const Checkbox1: React.FC<Checkbox1Props> = ({ value }) => {
  const [checked, setChecked] = useState(value);

  const handleToggle = () => {
    setChecked(!checked); // Toggle the checkbox state
  };

  return (
    <label className="flex items-center space-x-2">
      <div
        onClick={handleToggle}
        className={`${checkboxStyles.base} ${
          checked ? checkboxStyles.checked : checkboxStyles.unchecked
        }`}
      >
        {checked && (
          <span className="text-white font-bold">✓</span> // White tick
        )}
      </div>
      <span>Checkbox</span>
    </label>
  );
};

export default Checkbox1;
