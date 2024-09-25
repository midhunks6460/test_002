"use client";
import React, { useState } from "react";
import { toggleStyles } from "./Toggle1Config";

interface Toggle1Props {
  value: boolean;
}

const Toggle1: React.FC<Toggle1Props> = ({ value }) => {
  const [isOn, setIsOn] = useState(value);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="flex items-center space-x-4">
      <div
        onClick={handleToggle}
        className={`${toggleStyles.base} ${isOn ? toggleStyles.on : toggleStyles.off}`}
      >
        <div
          className={`${toggleStyles.knob} ${isOn ? "translate-x-full bg-white" : "translate-x-0 bg-gray-500"}`}
        ></div>
      </div>
      <span>Option One</span>
    </div>
  );
};

export default Toggle1;
