"use client";
import React from "react";
import Image from "next/image";
import { tooltipStyles } from "./Tooltip2Config"; // Make sure this path is correct
import { FaInfoCircle } from "react-icons/fa"; // Importing the info icon

interface Tooltip2Props {
  position: "top" | "bottom" | "left" | "right";
}

const Tooltip2: React.FC<Tooltip2Props> = ({ position }) => {
  return (
    <div className="relative inline-block">
      {/* Icon */}
      <FaInfoCircle className="text-2xl cursor-pointer" />

      {/* Tooltip Box */}
      <div className={`${tooltipStyles.box} ${tooltipStyles[position]}`}>
        <Image
          src="/path-to-your-image.jpg" // Replace with your image path
          alt="Tooltip Image"
          width={240}
          height={160}
        />
        <h3 className="text-white font-bold mt-2">Tooltip Title</h3>
        <p className={tooltipStyles.text}>Lorem ipsum dolor sit amet...</p>

        {/* Pointer Triangle */}
        <div
          className={`${tooltipStyles.pointer} ${tooltipStyles.pointerPosition[position]}`}
        />
      </div>
    </div>
  );
};

export default Tooltip2;
