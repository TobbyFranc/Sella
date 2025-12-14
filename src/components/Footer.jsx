import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-[var(--card-bg-color)] text-[var(--secondary-text-color)] px-6 py-8 mt-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold text-[var(--accent)] mb-4">Sella </h3>
          <p className="text-sm">
            Your one‑stop shop for amazing products. Tobi Francis cruise control with relief. Hit me up! Let's work
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-[var(--accent)]">Home</Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-[var(--accent)]">Products</Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-[var(--accent)]">Cart</Link>
            </li>
            <li>
              <Link to="/checkout" className="hover:text-[var(--accent)]">Checkout</Link>
            </li>
          </ul>
        </div>

        {/* Contact / Social */}
        <div>
          <h4 className="font-semibold mb-4">Connect</h4>
          <ul className="space-y-2">
            <li>
              <a href="mailto:hello@shopease.com" className="hover:text-[var(--accent)]">
                hello@shopease.com
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-[var(--accent)]">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-[var(--accent)]">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom note */}
      <div className="mt-8 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Sella. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
