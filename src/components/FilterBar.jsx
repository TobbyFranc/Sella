import React from "react";

const FilterBar = ({ category, setCategory, categories = [] }) => {
  return (
    <div className="flex flex-wrap md:flex-nowrap gap-3 overflow-x-auto pb-2">
      {/* Always include "All" option */}
      <button
        onClick={() => setCategory("all")}
        className={`px-4 py-2 rounded-md font-semibold shadow whitespace-nowrap transition ${
          category === "all"
            ? "bg-[var(--accent)] text-[var(--main-bg-color)]"
            : "bg-[var(--card-bg-color)] text-[var(--secondary-text-color)] hover:bg-[var(--accent)]/20"
        }`}
      >
        All
      </button>

      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setCategory(cat)}
          className={`px-4 py-2 rounded-md font-semibold shadow whitespace-nowrap transition ${
            category === cat
              ? "bg-[var(--accent)] text-[var(--main-bg-color)]"
              : "bg-[var(--card-bg-color)] text-[var(--secondary-text-color)] hover:bg-[var(--accent)]/20"
          }`}
        >
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
