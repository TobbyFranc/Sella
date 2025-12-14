// src/components/WelcomeNav.jsx
import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import ThemeToggle from "../components/ThemeToggle";


const WelcomeNav = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 z-20 text-[var(--secondary-text-color)]">
      <Link to="/" className="flex items-center">
        <Logo  showText textPosition="row" textSize="md" />

      </Link>

        {/* <div className="mt-6 flex justify-center"> */}
    <ThemeToggle />
  {/* </div> */}
      <div className="flex gap-1">
        <Link
          to="/login"
          state={{ from: "welcome" }}
          className="px-2 py-1 flex justify-center items-center md:px-6 md:py-3 open-sans-200 bg-[var(--accent)] text-[var(--card-bg-color)] rounded-md font-semibold hover:bg-[var(--accent)]/80 transition"
        >
          Login
        </Link>
        <Link
          to="/signup"
          state={{ from: "welcome" }}
          className="px-2 py-1 flex justify-center items-center open-sans-200 text-[var(--secondary-text-color)] rounded-md font-semibold hover:text-[var(--accent)]/80 transition"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default WelcomeNav;
