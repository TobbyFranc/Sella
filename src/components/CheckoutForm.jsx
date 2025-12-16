import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);

    // Simulate payment success (no backend)
    setTimeout(() => {
      alert("Payment successful! 🎉 Order confirmed.");
      clearCart();
      navigate("/");
      setLoading(false);
    }, 1500);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-6 rounded-lg bg-[var(--card-bg-color)] shadow space-y-6"
    >
      <h3 className="text-xl font-semibold mb-4">Payment Information</h3>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#32325d",
              "::placeholder": { color: "#a0aec0" },
            },
            invalid: { color: "#fa755a" },
          },
        }}
        className="p-3 border rounded bg-white"
      />

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
        <p className="flex justify-between ">
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
      </div>

      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full cursor-pointer px-6 py-3 bg-[var(--accent)] text-[var(--main-bg-color)] rounded-md font-semibold hover:bg-[var(--accent)]/80 transition shadow"
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );
};

export default CheckoutForm;
