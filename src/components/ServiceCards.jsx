import React from "react";
import { FaTruck, FaMoneyBillWave, FaHeadset, FaSmile, FaShieldAlt } from "react-icons/fa";

const services = [
  { icon: <FaTruck />, title: "Free Shipping", desc: "On orders above $50" },
  { icon: <FaMoneyBillWave />, title: "Cash on Delivery", desc: "Pay at your doorstep" },
  { icon: <FaHeadset />, title: "24/7 Service", desc: "Always here for you" },
  { icon: <FaSmile />, title: "Customer Satisfaction", desc: "We value your trust" },
  { icon: <FaShieldAlt />, title: "Warranty", desc: "1-year warranty on products" },
];

const ServiceCards = () => (
  <section className="px-6 py-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-4 text-center">
    {services.map((s, idx) => (
      <div key={idx} className="bg-[var(--card-bg-color)] rounded-lg shadow p-4 flex flex-col items-center">
        <div className="text-[var(--accent)] text-3xl mb-2">{s.icon}</div>
        <h3 className="font-semibold text-md">{s.title}</h3>
        <p className="text-xs mt-1">{s.desc}</p>
      </div>
    ))}
  </section>
);

export default ServiceCards;
