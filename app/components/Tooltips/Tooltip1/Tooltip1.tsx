"use client";
import React from "react";
import { FaInfoCircle } from "react-icons/fa"; // Import the icon
import { tooltipStyles } from "./Tooltip1Config";

interface Tooltip1Props {
  position: "top" | "bottom" | "left" | "right";
}

const Tooltip1: React.FC<Tooltip1Props> = ({ position }) => {
  return (
    <div className="relative inline-block">
      {/* Icon */}
      <FaInfoCircle className="text-2xl cursor-pointer" />

      {/* Tooltip Box */}
      <div className={`${tooltipStyles.box} ${tooltipStyles[position]}`}>
        <div className={tooltipStyles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        </div>

        {/* Triangle Pointer */}
        <div
          className={`${tooltipStyles.pointer} ${tooltipStyles.pointerPosition[position]}`}
        />
      </div>
    </div>
  );
};

export default Tooltip1;
