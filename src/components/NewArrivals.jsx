// src/components/NewArrivals.jsx
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useCart } from "../context/CartContext";

const NewArrivals = () => {
  const [newArrivals, setNewArrivals] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchNewArrivals = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products?limit=8&skip=60");
        const data = await res.json();
        setNewArrivals(data.products);
      } catch (err) {
        console.error("Error fetching new arrivals:", err);
      }
    };
    fetchNewArrivals();
  }, []);

  return (
    <section className="px-6 py-12">
      <h2 className="text-2xl font-bold mb-6 text-[var(--accent)]">New Arrivals</h2>
      <div className="grid gap-6 grid-cols-2 md:grid-cols-4">
        {newArrivals.map((product) => (
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

export default NewArrivals;
