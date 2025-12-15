// src/pages/CategoriesPage.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Breadcrumb from "../components/Breadcrumb"; // ✅ import reusable breadcrumb

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        setError("");
        const res = await fetch("https://dummyjson.com/products/categories");
        if (!res.ok) throw new Error("Failed to fetch categories");
        const data = await res.json();
        setCategories(data || []);
      } catch (err) {
        console.error("Error fetching categories:", err.message);
        setError("Unable to load categories. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div id="categories" className="px-6 py-12 mt-20">
      <Navbar />

      {/* ✅ Breadcrumb navigation */}
      <Breadcrumb
        items={[
          { to: "/", label: "Home" },
          { label: "Categories" }
        ]}
      />

      <h1 className="text-3xl font-bold mb-6 text-[var(--accent)] mt-6">
        Categories
      </h1>

      {loading ? (
        <p className="text-center">Loading categories...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : categories.length === 0 ? (
        <p className="text-center">No categories available.</p>
      ) : (
        <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {categories.map((category, idx) => {
            // Handle both string and object categories
            const categoryName =
              typeof category === "string" ? category : category.name;
            const categorySlug =
              typeof category === "string" ? category : category.slug;

            return (
              <Link
                key={`${categorySlug}-${idx}`}
                to={`/category/${categorySlug}`}
                className="block bg-[var(--card-bg-color)] rounded-lg shadow p-6 text-center hover:shadow-lg hover:-translate-y-1 transition"
              >
                <h3 className="font-semibold capitalize">{categoryName}</h3>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CategoriesPage;
