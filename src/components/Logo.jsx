import React from "react";

const Logo = ({
  animated = false,
  showText = true,
  textPosition = "row", // "row" = beside bars, "column" = under bars
  textSize = "md", // "sm" | "md" | "lg"
}) => {
  const textSizes = {
    sm: "text-sm",
    md: "text-xl",
    lg: "text-4xl",
  };

  return (
    <div
      className={`flex items-center gap-2 text-[var(--accent)] font-bold ${
        textPosition === "column" ? "flex-col" : "flex-row"
      }`}
    >
      {/* Bars */}
      <div className="flex flex-col items-center justify-center">
        <div className="w-6 h-1 rounded-full bg-purple-400 -rotate-12"></div>
        <div
          className={`w-12 h-1 rounded-full bg-[#6366f1] -rotate-12 my-2 ${
            animated ? "animate-pulse" : ""
          }`}
        ></div>
        <div className="w-6 h-1 rounded-full bg-purple-400 -rotate-12"></div>
      </div>

      {/* Text */}
      {showText && (
        <span className={`tracking-wide ${textSizes[textSize]}`}>Sella</span>
      )}
    </div>
  );
};

export default Logo;
