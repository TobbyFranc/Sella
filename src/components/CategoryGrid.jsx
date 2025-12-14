import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CategoryGrid = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        const grouped = {};
        data.products.forEach((p) => {
          if (!grouped[p.category]) grouped[p.category] = p;
        });
        setCategories(Object.values(grouped));
      });
  }, []);

  return (
    <section className="px-6 py-12">
      <h2 className="text-2xl font-bold mb-6 text-[var(--accent)]">Shop by Category</h2>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[300px]">
        {categories.map((cat, idx) => (
          <Link
            key={idx}
            to={`/category/${cat.category}`}
            className={`relative rounded-lg overflow-hidden shadow-lg group animate-fadeIn
              ${idx === 0 ? "md:col-span-4 md:row-span-2" : ""}
              ${idx === 1 ? "md:col-span-2" : ""}
              ${idx === 2 ? "md:col-span-2" : ""}
              ${idx === 3 ? "md:col-span-4 md:row-span-2" : ""}`}
            style={{
              backgroundImage: `url(${cat.thumbnail})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-black/40 flex p-2 items-start justify-start opacity-60 group-hover:opacity-100 transition">
              <h3 className="text-[var(--secondary-text-color)] group-hover:text-[var(--main-bg-color)] text-xl md:text-2xl font-semibold">
                {cat.category}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
