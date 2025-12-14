// src/components/FeaturedProducts.jsx
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useCart } from "../context/CartContext";

const FeaturedProducts = () => {
  const [featured, setFeatured] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products?limit=8&skip=40");
        const data = await res.json();
        setFeatured(data.products);
      } catch (err) {
        console.error("Error fetching featured products:", err);
      }
    };
    fetchFeatured();
  }, []);

  return (
    <section className="px-6 py-12">
      <h2 className="text-2xl font-bold mb-6 text-[var(--accent)]">Featured Products</h2>
      <div className="grid gap-6 grid-cols-2 md:grid-cols-4">
        {featured.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={() => addToCart(product)}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
