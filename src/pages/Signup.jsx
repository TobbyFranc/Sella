import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import BackButton from "../components/BackButton";

const Signup = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    login({
      name: formData.username || "New User",
      email: formData.email,
      image: "/assets/placeholder-avatar.png",
    });

    navigate("/home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--main-bg-color)] text-[var(--secondary-text-color)] px-6">
        {/* Back Button */}
      <BackButton to="/" />
      <div className="max-w-md w-full bg-[var(--card-bg-color)] rounded-lg shadow p-8">
        <h2 className="text-2xl font-bold text-[var(--accent)] mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 font-medium">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 bg-[var(--card-bg-color)] focus:ring-2 focus:ring-[var(--accent)]"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 bg-[var(--card-bg-color)] focus:ring-2 focus:ring-[var(--accent)]"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 bg-[var(--card-bg-color)] focus:ring-2 focus:ring-[var(--accent)]"
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-[var(--accent)] text-[var(--main-bg-color)] rounded-md font-semibold hover:bg-[var(--accent)]/80 transition shadow"
          >
            Sign Up
          </button>
        </form>

        {/* Social Login */}
        <div className="mt-6 space-y-3 ">
          <button className="w-full cursor-pointer flex open-sans-200  items-center justify-center gap-2 px-6 py-3 shadow-md text-[var(--secondary-text-color)] rounded-md font-semibold hover:bg-red-600/20 transition shadow">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/google.svg" alt="Google" className="w-5 h-5" />
            Login with Google
          </button>
          <button className="w-full cursor-pointer flex open-sans-200  items-center justify-center gap-2 px-6 py-3 shadow-md text-[var(--secondary-text-color)] rounded-md font-semibold hover:bg-blue-700/20 transition shadow">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg" alt="Facebook" className="w-5 h-5" />
            Login with Facebook
          </button>
          <button className="w-full cursor-pointer flex open-sans-200  items-center justify-center gap-2 px-6 py-3 shadow-md text-[var(--secondary-text-color)] rounded-md font-semibold hover:bg-gray-800/20 transition shadow">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/x.svg" alt="X" className="w-5 h-5" />
            Login with X
          </button>
        </div>

        <p className="mt-4 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-[var(--accent)] hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
