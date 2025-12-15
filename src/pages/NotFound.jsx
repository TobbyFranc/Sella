import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaShoppingCart } from "react-icons/fa";

const NotFound = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[var(--main-bg-color)] text-[var(--secondary-text-color)] px-6">
      {/* Logo / Brand */}
      <div className="flex items-center gap-2 mb-6">
        <FaShoppingCart className="text-[var(--accent)] text-4xl" />
        <h1 className="text-3xl font-bold text-[var(--accent)]">Sella</h1>
      </div>

      {/* Error Code */}
      <h1 className="text-8xl font-extrabold text-[var(--accent)] mb-4">404</h1>

      {/* Message */}
      <p className="text-lg md:text-xl mb-6 text-center max-w-md">
        Oops! Looks like this aisle is empty.  
        The page you’re searching for doesn’t exist in our store.
      </p>

      {/* Call to Action */}
      <Link
        to="/home"
        className="flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-[var(--main-bg-color)] rounded-md hover:bg-[var(--accent)]/80 transition"
      >
        <FaHome /> Back to Shopping
      </Link>

      {/* Decorative Illustration */}
      <div className="mt-10">
        <img
          src="https://placehold.co/400x250?text=Empty+Cart+Illustration"
          alt="Empty cart illustration"
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default NotFound;
