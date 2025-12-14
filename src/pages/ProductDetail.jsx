import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import FilterBar from "../components/FilterBar";
import SortDropdown from "../components/SortDropdown";
import SearchBar from "../components/SearchBar";
import { useCart } from "../context/CartContext";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]); // store available categories
  const [category, setCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");
  const [searchTerm, setSearchTerm] = useState("");
  const { addToCart } = useCart();

  // Fetch products + categories from DummyJSON
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products?limit=100");
        const data = await res.json();
        setProducts(data.products);
        setFilteredProducts(data.products);

        // Extract unique categories
        const uniqueCategories = [...new Set(data.products.map((p) => p.category))];
        setCategories(uniqueCategories);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };
    fetchProducts();
  }, []);

  // Apply filters + sorting + search
  useEffect(() => {
    let updated = [...products];

    // Filter by category
    if (category !== "all") {
      updated = updated.filter((p) => p.category === category);
    }

    // Search by title
    if (searchTerm.trim() !== "") {
      updated = updated.filter((p) =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort
    if (sortOption === "price-low") {
      updated.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-high") {
      updated.sort((a, b) => b.price - a.price);
    } else if (sortOption === "newest") {
      updated.sort((a, b) => b.id - a.id); // assuming higher id = newer
    }

    setFilteredProducts(updated);
  }, [category, sortOption, searchTerm, products]);

  return (
    <div className="min-h-screen mt-24 bg-[var(--main-bg-color)] text-[var(--secondary-text-color)] px-6 py-12">
      <h2 className="text-2xl font-bold mb-6 text-[var(--accent)]">Products</h2>

      {/* Search + Filters + Sorting */}
      <div className="flex flex-wrap gap-6 mb-8">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <FilterBar category={category} setCategory={setCategory} categories={categories} />
        <SortDropdown sortOption={sortOption} setSortOption={setSortOption} />
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <p className="text-center text-lg">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
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

export default ProductList;
