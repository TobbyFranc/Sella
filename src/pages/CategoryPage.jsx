// src/pages/CategoryPage.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        // DummyJSON has category endpoints
        const res = await fetch(`https://dummyjson.com/products/category/${categoryName}`);
        const data = await res.json();
        setProducts(data.products);
      } catch (err) {
        console.error("Error fetching category products:", err);
      }
    };
    fetchCategoryProducts();
  }, [categoryName]);

  return (
    <div className="px-6 py-12 mt-20">
      <h1 className="text-3xl font-bold mb-6 text-[var(--accent)] capitalize">
        {categoryName}
      </h1>
      {products.length === 0 ? (
        <p>No products found in this category.</p>
      ) : (
        <div className="grid gap-6 grid-cols-2 md:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={() => addToCart(product)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
