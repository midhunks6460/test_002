"use client";
import React, { useState } from "react";
import { radio3Styles } from "./Radio3Config"; // Importing styles from config

interface Radio3Props {
  value: boolean;
}

const Radio3: React.FC<Radio3Props> = ({ value }) => {
  const [checked, setChecked] = useState(value);

  const handleToggle = () => {
    setChecked(!checked);
  };

  return (
    <div
      onClick={handleToggle}
      className={`${radio3Styles.base} ${
        checked ? radio3Styles.checked : radio3Styles.unchecked
      }`}
    >
      <div className={radio3Styles.iconBox}>
        <span className={checked ? "text-black" : "text-white"}>A</span>
      </div>
      Website Design
    </div>
  );
};

export default Radio3;
