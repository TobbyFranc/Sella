import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="w-full max-w-md">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-4 py-2 rounded-md border border-gray-300 bg-[var(--card-bg-color)] text-[var(--secondary-text-color)] shadow focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
      />
    </div>
  );
};

export default SearchBar;
