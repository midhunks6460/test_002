export const tooltipStyles = {
  box: "absolute bg-black text-white p-2 rounded w-[240px] h-[58px] flex items-center justify-center z-10", // Tooltip box styles
  text: "text-sm", // Tooltip text styles

  // Triangle pointer styles
  pointer:
    "absolute w-0 h-0 border-l-[6px] border-l-transparent rotate-180 border-r-[6px] border-r-transparent",

  // Pointer position and rotation
  pointerPosition: {
    top: "border-b-[6px] border-b-black bottom-[-6px] left-1/2 transform -translate-x-1/2", // Triangle pointing up
    bottom:
      "border-t-[6px] border-t-black top-[-6px] left-1/2 transform -translate-x-1/2", // Triangle pointing down
    left: "border-r-[6px] border-r-black right-[-6px] top-1/2 transform -translate-y-1/2", // Triangle pointing left
    right:
      "border-l-[6px] border-l-black left-[-6px] top-1/2 transform -translate-y-1/2", // Triangle pointing right
  },

  // Tooltip position
  top: "bottom-full mb-2 left-1/2 transform -translate-x-1/2",
  bottom: "top-full mt-2 left-1/2 transform -translate-x-1/2",
  left: "right-full mr-2 top-1/2 transform -translate-y-1/2",
  right: "left-full ml-2 top-1/2 transform -translate-y-1/2",
};
