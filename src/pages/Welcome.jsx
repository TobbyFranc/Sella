import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaInfoCircle } from "react-icons/fa";
import WelcomeNav from "../components/WelcomeNav";
import WelcomeFooter from "../components/WelcomeFooter";


const Welcome = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      {/* Background Video with External Image Fallback */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        poster="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
      >
        <source
          src="https://cdn.coverr.co/videos/coverr-business-handshake-people-1234/1080p.mp4"
          type="video/mp4"
        />
        {/* Fallback image if video not supported */}
        <img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
          alt="Business handshake background"
          className="w-full h-full object-cover"
        />
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[var(--main-bg-color)]/90"></div>

      {/* Nav */}
      <WelcomeNav />

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to <span className="text-[var(--accent)]">Sella</span>
        </h1>
        <p className="text-lg mb-8 max-w-xl mx-auto">
          Your one‑stop shop for amazing products. Shop with ease or learn more about our vision.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            to="/home"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-[var(--accent)] text-[var(--card-bg-color)] rounded-md font-semibold hover:bg-[var(--accent)]/80 transition"
          >
            <FaShoppingCart className="text-lg" />
            Start Shopping
          </Link>
          <Link
  to="/about"
  state={{ from: "welcome" }}
  className="flex items-center justify-center gap-2 px-6 py-3 bg-[var(--secondary-text-color)] text-[var(--card-bg-color)] rounded-md font-semibold hover:bg-[var(--secondary-text-color)]/80 transition"
>
    <FaInfoCircle className="text-lg" />
  Learn About Us
</Link>
        </div>
      </div>

      {/* Footer */}
      <WelcomeFooter />
    </div>
  );
};

export default Welcome;
