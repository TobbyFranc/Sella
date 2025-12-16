import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const navigate = useNavigate();

  const [coupon, setCoupon] = useState("");
  const [discountRate, setDiscountRate] = useState(0);

  // Calculate totals
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const taxRate = 0.05; // 5% tax
  const tax = subtotal * taxRate;
  const discount = subtotal * discountRate;
  const total = subtotal + tax - discount;

  // Handle coupon application
  const applyCoupon = () => {
    if (coupon.trim().toLowerCase() === "sella10") {
      setDiscountRate(0.1); // 10% discount
    } else if (coupon.trim().toLowerCase() === "sella20") {
      setDiscountRate(0.2); // 20% discount
    } else {
      setDiscountRate(0);
      alert("Invalid coupon code");
    }
  };

  const removeCoupon = () => {
    setDiscountRate(0);
    setCoupon("");
  };

  return (
    <div className="min-h-screen mt-12 bg-[var(--main-bg-color)] text-[var(--secondary-text-color)] px-6 py-12">
      <h2 className="text-2xl font-bold mb-6 text-[var(--accent)]">Your Cart</h2>

      {/* Breadcrumb */}
      <Breadcrumb
  items={[
    { to: "/home", label: "Home" },
    { label: "Cart" }
  ]}
/>


      {cart.length === 0 ? (
        <div className="text-center">
          <p className="text-lg mb-4">Your cart is empty.</p>
          <button
            onClick={() => navigate("/products")}
            className="px-6 py-3 bg-[var(--accent)] cursor-pointer text-white rounded-md hover:bg-[var(--accent)]/80 transition"
          >
            Shop Now
          </button>
        </div>
      ) : (
        <>
          {/* Cart Items */}
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

            {/* Line item breakdown */}
            <div className="mb-4 space-y-2">
              {cart.map((item) => (
                <p key={item.id} className="flex justify-between text-sm">
                  <span>
                    {item.title} × {item.quantity}
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </p>
              ))}
            </div>

            <p className="flex justify-between">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </p>
            <p className="flex justify-between">
              <span>Tax (5%):</span>
              <span>${tax.toFixed(2)}</span>
            </p>
            {discountRate > 0 && (
              <p className="flex justify-between">
                <span>Discount ({discountRate * 100}%):</span>
                <span>-${discount.toFixed(2)}</span>
              </p>
            )}
            <p className="flex justify-between">
              <span>Shipping:</span>
              <span>Free</span>
            </p>
            <p className="flex justify-between font-bold text-lg mt-2">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </p>

            {/* Coupon Input */}
            <div className="mt-6 flex flex-col md:flex-row gap-2">
              <input
                type="text"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                placeholder="Enter coupon code"
                className="flex-1 px-4 py-2 border rounded-md"
              />
              <button
                onClick={applyCoupon}
                className="px-6 py-2 bg-[var(--accent)] text-white rounded-md hover:bg-[var(--accent)]/80 transition"
              >
                Apply
              </button>
              {discountRate > 0 && (
                <button
                  onClick={removeCoupon}
                  className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                >
                  Remove
                </button>
              )}
            </div>

            {/* Actions */}
            <div className="mt-12 flex flex-col md:flex-row gap-4">
              <button
                onClick={() => navigate("/checkout")}
                className="flex-1 px-6 py-3 bg-[var(--accent)] text-[var(--main-bg-color)] rounded-md font-semibold open-sans-200 hover:bg-[var(--accent)]/80 transition shadow"
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
