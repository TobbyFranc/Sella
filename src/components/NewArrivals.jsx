// src/components/NewArrivals.jsx
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useCart } from "../context/CartContext";

const NewArrivals = () => {
  const [newArrivals, setNewArrivals] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchNewArrivals = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products?limit=8&skip=60");
        if (!res.ok) throw new Error("Failed to fetch new arrivals");
        const data = await res.json();
        setNewArrivals(data.products || []);
      } catch (err) {
        console.error("Error fetching new arrivals:", err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchNewArrivals();
  }, []);

  return (
    <section className="px-6 py-12">
      <h2 className="text-2xl font-bold mb-6 text-[var(--accent)]">New Arrivals</h2>

      {loading ? (
        <p className="text-center">Loading new arrivals...</p>
      ) : newArrivals.length === 0 ? (
        <p className="text-center">No new arrivals available.</p>
      ) : (
        <div className="grid gap-6 grid-cols-2 md:grid-cols-4">
          {newArrivals.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={() => addToCart(product, 1)} // ✅ pass quantity
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default NewArrivals;
