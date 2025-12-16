import React from "react";

const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
  const productImage =
    item.image || item.thumbnail || (item.images && item.images[0]);

  const lineTotal = item.price * item.quantity;

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-4 rounded-lg bg-[var(--card-bg-color)] shadow">
      {/* Product Info */}
      <div className="flex items-center gap-4">
        <img
          src={productImage}
          alt={item.title}
          className="w-16 h-16 object-contain rounded"
        />
        <div>
          <h4 className="font-semibold">{item.title}</h4>
          <p className="text-sm text-gray-400">${item.price.toFixed(2)}</p>
        </div>
      </div>

      {/* Quantity + Line Total + Remove Controls */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Quantity controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => onUpdateQuantity(Math.max(item.quantity - 1, 1))}
            className="px-2 py-1 cursor-pointer bg-gray-200 rounded hover:bg-gray-300"
          >
            -
          </button>
          <span className="px-3">{item.quantity}</span>
          <button
            onClick={() => onUpdateQuantity(item.quantity + 1)}
            className="px-2 py-1 cursor-pointer bg-gray-200 rounded hover:bg-gray-300"
          >
            +
          </button>
        </div>

        {/* Line total */}
        <p className="font-semibold text-[var(--accent)]">
          ${lineTotal.toFixed(2)}
        </p>

        {/* Remove button */}
        <button
          onClick={onRemove}
          className="px-4 py-2 cursor-pointer bg-[var(--errorColor)] text-white rounded-md hover:bg-red-600 transition"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
