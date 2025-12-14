import React from "react";
import HeroSlider from "../components/HeroSlider";
import ServiceCards from "../components/ServiceCards";
import CategoryGrid from "../components/CategoryGrid";
import BestSellerSlider from "../components/BestSellerSlider";
import FeaturedProducts from "../components/FeaturedProducts";
import NewArrivals from "../components/NewArrivals";
import AdvertBanner from "../components/AdvertBanner";

const Home = () => {
  return (
    <div className="min-h-screen mt-16 bg-[var(--main-bg-color)] text-[var(--secondary-text-color)]">
      {/* Hero Banner Slider */}
      <HeroSlider />

      {/* Service Cards */}
      <ServiceCards />

      {/* Category Grid */}
      <CategoryGrid />

      {/* Best Sellers Slider */}
      <BestSellerSlider />

      {/* Featured Products */}
      <FeaturedProducts />

      {/* New Arrivals */}
      <NewArrivals />

      {/* Advert Banner */}
      <AdvertBanner />
    </div>
  );
};

export default Home;
