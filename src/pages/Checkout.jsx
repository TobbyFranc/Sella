import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
  });

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate payment success
    alert("Payment successful! 🎉 Order confirmed.");
    clearCart();
    navigate("/");
  };

  return (
    <div className="min-h-screen mt-12 bg-[var(--main-bg-color)] text-[var(--secondary-text-color)] px-6 py-12">
      <h2 className="text-2xl font-bold mb-6 text-[var(--accent)]">Checkout</h2>

      {cart.length === 0 ? (
        <p className="text-center text-lg">Your cart is empty.</p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto p-6 rounded-lg bg-[var(--card-bg-color)] shadow space-y-6"
        >
          {/* Shipping Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Shipping Information</h3>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mb-3 px-4 py-2 rounded border border-gray-300"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full mb-3 px-4 py-2 rounded border border-gray-300"
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Shipping Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full mb-3 px-4 py-2 rounded border border-gray-300"
              required
            />
          </div>

          {/* Payment Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Payment Information</h3>
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number (Stripe test: 4242 4242 4242 4242)"
              value={formData.cardNumber}
              onChange={handleChange}
              className="w-full mb-3 px-4 py-2 rounded border border-gray-300"
              required
            />
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="expiry"
                placeholder="MM/YY"
                value={formData.expiry}
                onChange={handleChange}
                className="flex-1 px-4 py-2 rounded border border-gray-300"
                required
              />
              <input
                type="text"
                name="cvc"
                placeholder="CVC"
                value={formData.cvc}
                onChange={handleChange}
                className="flex-1 px-4 py-2 rounded border border-gray-300"
                required
              />
            </div>
          </div>

          {/* Order Summary */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
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
                type="button"
                onClick={applyCoupon}
                className="px-6 py-2 bg-[var(--accent)] text-white rounded-md hover:bg-[var(--accent)]/80 transition"
              >
                Apply
              </button>
              {discountRate > 0 && (
                <button
                  type="button"
                  onClick={removeCoupon}
                  className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                >
                  Remove
                </button>
              )}
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full px-6 py-3 bg-[var(--accent)] text-[var(--main-bg-color)] rounded-md font-semibold hover:bg-[var(--accent)]/80 transition shadow"
          >
            Pay Now
          </button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
