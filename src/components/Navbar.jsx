// src/components/Navbar.jsx
import React, { useState } from "react";
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../App";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const { cart } = useCart();
  const { user, logout } = useAuth();
  const { theme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleCartClick = () => {
    if (location.pathname === "/cart") {
      navigate("/home");
    } else {
      navigate("/cart");
    }
  };

  const handleProfileClick = () => {
    if (location.pathname === "/userProfile") {
      navigate("/home");
    } else {
      navigate("/userProfile");
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-[var(--card-bg-color)] shadow-md px-6 py-4 flex items-center justify-between z-50">
      {/* Logo */}
      <Link
        to="/home"
        className="text-xl font-bold text-[var(--accent)] flex items-center gap-2 z-50"
      >
        <div className="flex flex-col items-center justify-center">
          <div className="w-6 h-1 rounded-full bg-purple-400 -rotate-12"></div>
          <div className="w-12 h-1 rounded-full bg-[var(--accent)] -rotate-12 my-2"></div>
          <div className="w-6 h-1 rounded-full bg-purple-400 -rotate-12"></div>
        </div>
        <span className="tracking-wide">Sella</span>
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-8 items-center font-medium">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive
              ? "text-[var(--accent)] font-semibold"
              : "hover:text-[var(--accent)] transition"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive
              ? "text-[var(--accent)] font-semibold"
              : "hover:text-[var(--accent)] transition"
          }
        >
          Products
        </NavLink>
        <NavLink
          to="/about"
          state={{ from: "home" }}
          className={({ isActive }) =>
            isActive
              ? "text-[var(--accent)] font-semibold"
              : "hover:text-[var(--accent)] transition"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-[var(--accent)] font-semibold"
              : "hover:text-[var(--accent)] transition"
          }
        >
          Contact
        </NavLink>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3 z-50">
        {/* Profile */}
        <button
          onClick={handleProfileClick}
          className="w-8 h-8 md:w-10 md:h-10 cursor-pointer border-2 border-[var(--accent)] rounded-full overflow-hidden focus:outline-none"
        >
          <img
            src={
              user?.profileImage
                ? user.profileImage
                : "https://cdn-icons-png.flaticon.com/512/847/847969.png"
            }
            alt="User"
            className="w-full h-full object-cover"
          />
        </button>

        {/* Logout/Login */}
        {user ? (
          <button
            onClick={handleLogout}
            className="px-2 py-1 md:px-4 md:py-2 bg-red-500 text-white rounded-md hover:bg-[var(--errorColor)] transition"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="px-2 py-1 md:px-4 md:py-2 bg-[var(--accent)] text-white rounded-md hover:bg-[var(--accent)]/80 transition"
          >
            Login
          </Link>
        )}

        {/* Cart */}
        <button
          onClick={handleCartClick}
          className="relative cursor-pointer hover:text-[var(--accent)]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-[var(--accent)] text-[var(--main-bg-color)] text-xs font-bold px-2 py-0.5 rounded-full">
              {cartCount}
            </span>
          )}
        </button>

        {/* Theme Toggle visible everywhere */}
        <ThemeToggle className="absolute top-18 right-2 rounded-full md:relative" />

        {/* Hamburger (mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-md focus:outline-none cursor-pointer"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[var(--secondary-text-color)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[var(--secondary-text-color)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[var(--card-bg-color)] shadow-md md:hidden z-20">
          <div className="flex flex-col items-center gap-4 py-6 font-medium">
            <Link
              to="/home"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[var(--accent)] transition"
            >
              Home
            </Link>
            <Link
              to="/products"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[var(--accent)] transition"
            >
              Products
            </Link>
            <Link
              to="/about"
              state={{ from: "home" }}
              onClick={() => setMenuOpen(false)}
              className="hover:text-[var(--accent)] transition"
            >
              About
            </Link>
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[var(--accent)] transition"
            >
              Contact
            </Link>
            <Link
              to="/userProfile"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[var(--accent)] transition"
            >
              Profile
            </Link>
            {user ? (
              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="px-2 py-1 flex justify-center items-center md:px-6 md:py-3 open-sans-200 bg-[var(--errorColor)] text-[var(--card-bg-color)] rounded-md font-semibold hover:bg-[var(--accent)]/80 transition"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="px-2 py-1 flex justify-center items-center md:px-6 md:py-3 open-sans-200 bg-[var(--accent)] text-[var(--card-bg-color)] rounded-md font-semibold hover:bg-[var(--accent)]/80 transition"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
