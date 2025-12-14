import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Logo from "../components/Logo";
import WelcomeFooter from "../components/WelcomeFooter";
import Footer from "../components/Footer";   // ✅ use your existing Footer.jsx
import Navbar from "../components/Navbar";
import BackButton from "../components/BackButton";
import {
  FaBullseye,
  FaEye,
  FaChartLine,
  FaShieldAlt,
  FaShippingFast,
  FaHeadset,
} from "react-icons/fa";

const About = () => {
  const location = useLocation();
  const origin = location.state?.from; // "welcome" or "home"

  // Auto-counting stats
  const [countries, setCountries] = useState(0);
  const [coverage, setCoverage] = useState(0);
  const [users, setUsers] = useState(0);

  useEffect(() => {
    let c = 0, cov = 0, u = 0;
    const interval = setInterval(() => {
      if (c < 50) c++;
      if (cov < 120) cov++;
      if (u < 1000000) u += 20000;
      setCountries(c);
      setCoverage(cov);
      setUsers(u);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen relative bg-[var(--main-bg-color)] text-[var(--secondary-text-color)]">
      {/* Conditional Header */}
      {origin === "welcome" ? (
        <header className="bg-[var(--card-bg-color)] flex flex-col items-center justify-center shadow-lg py-8 px-6 text-center fixed top-0 left-0 w-full z-20">
          <Logo textPosition="row" textSize="md" />
          <small className="mt-4 text-sm font-bold text-[var(--secondary-text-color)]/80">
            Shopping Made Seamless, Global & Personal
          </small>
        </header>
      ) : (
        <Navbar />
      )}

            {/* Back Button — visible only on mobile */}
      <div className="cursor-pointer">
        <BackButton />
      </div>


      {/* About Us Section */}
      <section className="max-w-5xl mx-auto px-6 py-12 mt-32">
        <h2 className="text-2xl font-bold mb-4 text-center md:text-start">
          About Us
          <div className="w-12 h-1 rounded-full bg-[var(--accent)] mx-auto md:mx-0"></div>
        </h2>
        <p className="text-lg leading-relaxed">
          At <span className="font-semibold text-[var(--accent)]">Sella</span>, we believe shopping should be effortless, inspiring, and accessible to everyone. 
          We connect people with products across the globe, blending technology, trust, and convenience. 
          Our platform empowers customers with quality, affordability, and speed — while standing for sustainability, innovation, and inclusivity.
        </p>
      </section>

      {/* Mission, Vision, Objectives */}
      <section className="max-w-5xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8 text-center">
        <div className="bg-[var(--card-bg-color)] rounded-lg shadow p-6">
          <FaBullseye className="mx-auto text-[var(--accent)] text-4xl mb-4" />
          <h3 className="text-xl font-semibold text-[var(--accent)]">Mission</h3>
          <p className="mt-2">
            Empower customers worldwide with access to quality products at affordable prices. 
            We break barriers in global commerce by ensuring transparency, trust, and convenience.
          </p>
        </div>
        <div className="bg-[var(--card-bg-color)] rounded-lg shadow p-6">
          <FaEye className="mx-auto text-[var(--accent)] text-4xl mb-4" />
          <h3 className="text-xl font-semibold text-[var(--accent)]">Vision</h3>
          <p className="mt-2">
            Become the most trusted global e‑commerce platform, connecting people and products effortlessly. 
            We inspire confidence and loyalty by delivering excellence at every step.
          </p>
        </div>
        <div className="bg-[var(--card-bg-color)] rounded-lg shadow p-6">
          <FaChartLine className="mx-auto text-[var(--accent)] text-4xl mb-4" />
          <h3 className="text-xl font-semibold text-[var(--accent)]">Objectives</h3>
          <p className="mt-2">
            Expand into 50+ countries by 2030, focusing on sustainability, innovation, and customer satisfaction. 
            We continuously improve logistics, product diversity, and customer engagement.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6 text-center md:text-start">
          Why Choose Us
          <div className="mx-auto md:mx-0 w-16 h-1 rounded-full bg-[var(--accent)] mt-2"></div>
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-[var(--card-bg-color)] rounded-lg shadow p-6">
            <FaShieldAlt className="mx-auto text-[var(--accent)] text-4xl mb-4" />
            <h3 className="text-lg font-semibold">Secure Payments</h3>
            <p className="mt-2">Your transactions are protected with industry‑leading encryption and fraud prevention systems.</p>
          </div>
          <div className="bg-[var(--card-bg-color)] rounded-lg shadow p-6">
            <FaShippingFast className="mx-auto text-[var(--accent)] text-4xl mb-4" />
            <h3 className="text-lg font-semibold">Fast Delivery</h3>
            <p className="mt-2">We partner with trusted logistics providers to ensure quick and reliable delivery worldwide.</p>
          </div>
          <div className="bg-[var(--card-bg-color)] rounded-lg shadow p-6">
            <FaHeadset className="mx-auto text-[var(--accent)] text-4xl mb-4" />
            <h3 className="text-lg font-semibold">24/7 Support</h3>
            <p className="mt-2">Our dedicated support team is always available to assist you with any inquiries.</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[var(--main-bg-color)] py-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold text-[var(--accent)]">{countries}+</h3>
            <p className="mt-2">Countries Served</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-[var(--accent)]">{coverage}+</h3>
            <p className="mt-2">Global Coverage Cities</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-[var(--accent)]">{users.toLocaleString()}+</h3>
            <p className="mt-2">Happy Customers</p>
          </div>
        </div>
      </section>

      {/* Conditional Footer */}
      {origin === "welcome" ? (
        <section className="my-12 py-12">
          <WelcomeFooter />
        </section>
      ) : (
        <section className="pt-12">
          <Footer />
        </section>
      )}
    </div>
  );
};

export default About;
