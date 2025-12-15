import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Homeappliances from '../assets/homeappliances.avif'
import flashsale from '../assets/flashsale.avif'
import soundBanner from '../assets/soundBanner.jpg'

const slides = [
  {
    image: flashsale,
    title: "Mega Rush Sale!",
    desc: "Up to 70% off electronics this week only.",
    cta: "Shop Electronics",
    link: "/products",
  },
  {
    image: soundBanner,
    title: "Trending Fashion",
    desc: "Discover the latest styles and trends.",
    cta: "Explore Fashion",
    link: "/products",
  },
  {
    image: Homeappliances,
    title: "Home Appliances Deals",
    desc: "Upgrade your home with amazing discounts.",
    cta: "Shop Appliances",
    link: "/products",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="banner"
      className="relative h-[75vh] flex items-center justify-center text-center text-white transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `url(${slides[current].image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="bg-black/80 p-6 rounded-lg animate-fadeIn w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{slides[current].title}</h1>
        <p className="text-base md:text-lg mb-6">{slides[current].desc}</p>
        <Link
          to={slides[current].link}
          className="inline-block px-8 py-3 bg-[var(--main-bg-color)] text-[var(--accent)] rounded-md font-semibold hover:bg-gray-200 transition shadow"
        >
          {slides[current].cta}
        </Link>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition ${
              current === idx ? "bg-[var(--accent)] scale-110" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
