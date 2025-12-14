import React, { useState } from "react";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending reset email
    alert(`Password reset link sent to ${email}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--main-bg-color)] text-[var(--secondary-text-color)] px-6">
      <BackButton to="/login" />
      <div className="max-w-md w-full bg-[var(--card-bg-color)] rounded-lg shadow p-8">
        <h2 className="text-2xl font-bold text-[var(--accent)] mb-6">Forgot Password</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 bg-[var(--card-bg-color)] focus:ring-2 focus:ring-[var(--accent)]"
            />
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-[var(--accent)] text-[var(--main-bg-color)] rounded-md font-semibold hover:bg-[var(--accent)]/80 transition shadow"
          >
            Send Reset Link
          </button>
        </form>
        <p className="mt-4 text-sm">
          Remember your password?{" "}
          <Link to="/login" className="text-[var(--accent)] hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;