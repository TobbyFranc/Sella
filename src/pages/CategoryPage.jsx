// src/pages/CategoryPage.jsx
import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";
import Breadcrumb from "../components/Breadcrumb";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const { addToCart } = useCart();
  const loaderRef = useRef(null);
  const navigate = useNavigate();

  const limit = 8; // products per page

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        setLoading(true);
        const skip = page * limit;
        const res = await fetch(
          `https://dummyjson.com/products/category/${categoryName}?limit=${limit}&skip=${skip}`
        );
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();

        if (!data.products || data.products.length === 0) {
          setHasMore(false);
        } else {
          setProducts((prev) => [...prev, ...data.products]);
        }
      } catch (err) {
        console.error("Error fetching category products:", err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCategoryProducts();
  }, [categoryName, page]);

  // Infinite scroll with Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [hasMore, loading]);

  return (
    <div className="px-6 py-12 mt-20">
      {/* Breadcrumb Navigation */}
<Breadcrumb
  items={[
    { to: "/", label: "Home" },
    { to: "/categories", label: "Categories" },
    { label: categoryName }
  ]}
/>

      {/* Back to Categories Button */}
      {/* <div className="mb-6">
        <button
          onClick={() => navigate("/categories")}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition"
        >
          ← Back to Categories
        </button>
      </div> */}

      <h1 className="text-3xl font-bold mb-6 text-[var(--accent)] capitalize">
        {categoryName}
      </h1>

      {products.length === 0 && !loading ? (
        <p className="text-center">No products found in this category.</p>
      ) : (
        <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product, idx) => (
            <ProductCard
              key={`${product.id}-${idx}`}
              product={product}
              onAddToCart={() => addToCart(product, 1)}
            />
          ))}
        </div>
      )}

      {/* Loader / Infinite Scroll Trigger */}
      {loading && <p className="text-center mt-6">Loading more products...</p>}
      <div ref={loaderRef} className="h-10"></div>

      {/* Manual Load More Button Fallback */}
      {!loading && hasMore && (
        <div className="text-center mt-6">
          <button
            onClick={() => setPage((prev) => prev + 1)}
            className="px-6 py-3 bg-[var(--accent)] text-white rounded-md hover:bg-[var(--accent)]/80 transition"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
