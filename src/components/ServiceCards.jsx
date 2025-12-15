import React, { useEffect, useRef } from "react";
import {
  FaTruck,
  FaMoneyBillWave,
  FaHeadset,
  FaSmile,
  FaShieldAlt,
} from "react-icons/fa";

const services = [
  { icon: <FaTruck />, title: "Free Shipping", desc: "On orders above $50" },
  { icon: <FaMoneyBillWave />, title: "Cash on Delivery", desc: "Pay at your doorstep" },
  { icon: <FaHeadset />, title: "24/7 Service", desc: "Always here for you" },
  { icon: <FaSmile />, title: "Customer Satisfaction", desc: "We value your trust" },
  { icon: <FaShieldAlt />, title: "Warranty", desc: "1-year warranty on products" },
];

const ServiceCards = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll(".service-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp");
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-center"
      aria-label="Our services"
    >
      {services.map((s, idx) => (
        <div
          key={idx}
          className="service-card opacity-0 bg-[var(--card-bg-color)] rounded-lg shadow p-6 flex flex-col items-center hover:shadow-lg transition transform hover:-translate-y-1"
          style={{ animationDelay: `${idx * 0.2}s`, animationDuration: "0.8s" }}
        >
          <div className="text-[var(--accent)] text-4xl mb-3 animate-bounce">
            {s.icon}
          </div>
          <h3 className="font-semibold text-lg">{s.title}</h3>
          <p className="text-sm mt-2 text-gray-600">{s.desc}</p>
        </div>
      ))}
    </section>
  );
};

export default ServiceCards;
