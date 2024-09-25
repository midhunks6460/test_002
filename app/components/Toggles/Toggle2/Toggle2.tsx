"use client";
import React, { useState } from "react";
import { toggleStyles, containerStyles, textStyles } from "./Toggle2Config";

interface Toggle2Props {
  value: boolean;
}

const Toggle2: React.FC<Toggle2Props> = ({ value }) => {
  const [isOn, setIsOn] = useState(value);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div className={containerStyles.wrapper}>
      <div className={containerStyles.textContainer}>
        <h2 className={textStyles.heading}>Toggle checkbox</h2>
        <p className={textStyles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim.
        </p>
      </div>

      <div className="flex items-center justify-center">
        <div
          onClick={handleToggle}
          className={`${toggleStyles.base} ${isOn ? toggleStyles.on : toggleStyles.off}`}
        >
          <div
            className={`${toggleStyles.knob} ${isOn ? "translate-x-full bg-white" : "translate-x-0 bg-gray-500"}`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Toggle2;
