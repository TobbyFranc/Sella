// src/components/ProductCard.jsx
import { Link } from "react-router-dom";

const ProductCard = ({ product, onAddToCart }) => {
  // Handle both Fakestore and DummyJSON image formats
  const productImage =
    product.image || product.thumbnail || (product.images && product.images[0]);

  return (
    <div className="bg-[var(--card-bg-color)] open-sans-200 rounded-lg shadow p-4 flex flex-col justify-between h-[350px]">
      {/* Link to ProductInfo detail page */}
      <Link to={`/productinfo/${product.id}`}>
        <img
          src={productImage}
          alt={product.title}
          className="h-40 w-full object-contain mb-4"
        />
        <h3 className="text-sm font-semibold mb-2 truncate">{product.title}</h3>
      </Link>
      {/* <p className="mb-4">{product.description}</p> */}

      <p className="text-[var(--accent)] font-bold mb-2">${product.price}</p>

      <button
        onClick={onAddToCart}
        className="px-4 py-2 bg-[var(--accent)] text-white rounded-md hover:bg-[var(--accent)]/80 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
