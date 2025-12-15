import React from "react";
import {
  FaTruck,
  FaMoneyBillWave,
  FaHeadset,
  FaSmile,
  FaShieldAlt,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const services = [
  { icon: <FaTruck />, title: "Free Shipping", desc: "On orders above $50" },
  { icon: <FaMoneyBillWave />, title: "Cash on Delivery", desc: "Pay at your doorstep" },
  { icon: <FaHeadset />, title: "24/7 Service", desc: "Always here for you" },
  { icon: <FaSmile />, title: "Customer Satisfaction", desc: "We value your trust" },
  { icon: <FaShieldAlt />, title: "Warranty", desc: "1-year warranty on products" },
];

const ServiceCards = () => {
  return (
    <section className="px-6 py-12" aria-label="Our services">
      <Swiper
        spaceBetween={20}
        slidesPerView={1} // ✅ one card per time on mobile
        breakpoints={{
          640: { slidesPerView: 2 }, // tablets
          1024: { slidesPerView: 5 }, // desktops
        }}
        autoplay={{ delay: 3000 }}
        modules={[Autoplay]}
      >
        {services.map((s, idx) => (
          <SwiperSlide key={idx}>
            <div className="service-card bg-[var(--card-bg-color)] rounded-lg p-6 flex flex-col items-center text-center drop-shadow-xl  transition transform ">
              <div className="text-[var(--accent)] text-4xl mb-3">
                {s.icon}
              </div>
              <h3 className="font-semibold text-lg">{s.title}</h3>
              <p className="text-sm mt-2 text-gray-600">{s.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ServiceCards;
