import React from "react";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const navigate = useNavigate();

  // Calculate totals
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen mt-12 bg-[var(--main-bg-color)] text-[var(--secondary-text-color)] px-6 py-12">
      <h2 className="text-2xl font-bold mb-6 text-[var(--accent)]">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center text-lg">Your cart is empty.</p>
      ) : (
        <>
          <div className="grid gap-6">
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onRemove={() => removeFromCart(item.id)}
                onUpdateQuantity={(qty) => updateQuantity(item.id, qty)}
              />
            ))}
          </div>

          {/* Totals */}
          <div className="mt-8 p-6 rounded-lg bg-[var(--card-bg-color)] shadow">
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
            <p className="flex justify-between">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </p>
            <p className="flex justify-between">
              <span>Shipping:</span>
              <span>Free</span>
            </p>
            <p className="flex justify-between font-bold text-lg mt-2">
              <span>Total:</span>
              <span>${subtotal.toFixed(2)}</span>
            </p>

            {/* Actions */}
            <div className="mt-6 flex gap-4">
              <button
                onClick={() => navigate("/checkout")}
                className="flex-1 px-6 py-3 bg-[var(--accent)] text-[var(--main-bg-color)] rounded-md font-semibold hover:bg-[var(--accent)]/80 transition shadow"
              >
                Proceed to Checkout
              </button>
              <button
                onClick={clearCart}
                className="flex-1 px-6 py-3 bg-red-500 text-white rounded-md font-semibold hover:bg-red-600 transition shadow"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
