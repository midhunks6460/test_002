"use client";
import React, { useState } from "react";
import { checkbox3Styles } from "./Checkbox3Config"; // Importing styles from config

interface Checkbox3Props {
  value: boolean;
}

const Checkbox3: React.FC<Checkbox3Props> = ({ value }) => {
  const [checked, setChecked] = useState(value);

  const handleToggle = () => {
    setChecked(!checked);
  };

  return (
    <div
      onClick={handleToggle}
      className={`${checkbox3Styles.base} ${
        checked ? checkbox3Styles.checked : checkbox3Styles.unchecked
      }`}
    >
      Option One
    </div>
  );
};

export default Checkbox3;
