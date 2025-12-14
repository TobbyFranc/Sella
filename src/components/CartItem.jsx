import React from "react";

const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
  return (
    <div className="flex items-center justify-between p-4 rounded-lg bg-[var(--card-bg-color)] shadow">
      <div className="flex items-center gap-4">
        <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded" />
        <div>
          <h4 className="font-semibold">{item.title}</h4>
          <p className="text-sm text-gray-400">${item.price.toFixed(2)}</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Quantity controls */}
        <input
          type="number"
          min="1"
          value={item.quantity}
          onChange={(e) => onUpdateQuantity(Number(e.target.value))}
          className="w-16 px-2 py-1 rounded border border-gray-300 text-center"
        />
        <button
          onClick={onRemove}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
