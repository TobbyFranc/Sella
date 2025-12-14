import React from "react";

const SortDropdown = ({ sortOption, setSortOption }) => {
  return (
    <select
      value={sortOption}
      onChange={(e) => setSortOption(e.target.value)}
      className="px-4 py-2 rounded-md bg-[var(--card-bg-color)] text-[var(--secondary-text-color)] shadow"
    >
      <option value="default">Default</option>
      <option value="price-low">Price: Low to High</option>
      <option value="price-high">Price: High to Low</option>
      <option value="newest">Newest</option>
    </select>
  );
};

export default SortDropdown;
