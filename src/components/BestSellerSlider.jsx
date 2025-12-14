import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useCart } from "../context/CartContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const BestSellerSlider = () => {
  const [bestSellers, setBestSellers] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchBestSellers = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products?limit=10&skip=20");
        const data = await res.json();
        setBestSellers(data.products);
      } catch (err) {
        console.error("Error fetching best sellers:", err);
      }
    };
    fetchBestSellers();
  }, []);

  return (
    <section className="px-6 py-12">
      <h2 className="text-2xl font-bold mb-6 text-[var(--accent)]">Best Sellers</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 4 } }}
        autoplay={{ delay: 3000 }}
        navigation
        modules={[Autoplay, Navigation]}
      >
        {bestSellers.map((product) => (
          <SwiperSlide key={product.id}>
            {/* ProductCard already links to /productinfo/:id */}
            <ProductCard product={product} onAddToCart={() => addToCart(product)} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BestSellerSlider;
