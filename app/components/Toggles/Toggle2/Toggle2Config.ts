export const toggleStyles = {
  base: "relative w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300", // Base style for toggle
  on: "bg-black", // Background when toggle is ON
  off: "bg-gray-300", // Background when toggle is OFF
  knob: "w-4 h-4 rounded-full shadow-md transform transition-transform duration-300", // Style for the knob
};

export const containerStyles = {
  wrapper: "flex justify-between items-start p-4 w-full rounded-md",
  textContainer: "flex flex-col space-y-2 text-left", // Added text-left to align the content
};

export const textStyles = {
  heading: "text-lg font-semibold text-left", // Ensures the heading is left-aligned
  description: "text-sm text-black text-left", // Ensures the description is left-aligned
};
