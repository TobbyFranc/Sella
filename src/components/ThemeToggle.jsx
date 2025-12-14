// src/components/ThemeToggle.jsx
import React from "react";
import { useTheme } from "../App";

const ThemeToggle = ({ className = "" }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`p-2  cursor-pointer hover:bg-[var(--accent)]/20 transition ${className}`}
    >
      {theme === "light" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-[var(--accent)]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m8.66-10.66l-.707.707M4.05 19.95l-.707.707M21 12h-1M4 12H3m16.66 4.66l-.707-.707M4.05 4.05l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-[var(--accent)]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 118.646 3.646 7 7 0 0020.354 15.354z"
          />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;
