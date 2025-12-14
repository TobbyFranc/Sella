import React from "react";

const AdvertBanner = () => {
  return (
    <section className="relative h-[300px] md:h-[400px] w-full my-12 bg-gradient-to-r from-purple-600 to-[var(--accent)] flex items-center justify-center text-center animate-fadeIn">
      <div className="p-6">
        <h2 className="text-white text-4xl md:text-6xl font-bold mb-4">
          Black Friday Mega Sale!
        </h2>
        <p className="text-white text-lg md:text-xl mb-6 open-sans-200">
          Up to 80% discount on selected items. Limited time only!
        </p>
        <a
          href="/products"
          className="px-8 py-3 bg-[var(--main-bg-color)] text-[var(--accent)] rounded-md font-semibold hover:bg-gray-200 transition shadow"
        >
          Shop Deals
        </a>
      </div>
    </section>
  );
};

export default AdvertBanner;  
