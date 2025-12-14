import React, { useState } from "react";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    name: "Jane Doe",
    email: "jane.doe@example.com",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate saving profile changes
    alert("Profile updated successfully 🎉");
  };

  return (
    <div className="min-h-screen bg-[var(--main-bg-color)] text-[var(--secondary-text-color)] px-6 py-12">
      <div className="max-w-2xl mx-auto bg-[var(--card-bg-color)] rounded-lg shadow p-8">
        <h2 className="text-2xl font-bold mb-6 text-[var(--accent)]">
          Edit Profile
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block mb-2 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 bg-[var(--card-bg-color)] text-[var(--secondary-text-color)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 bg-[var(--card-bg-color)] text-[var(--secondary-text-color)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 font-medium">New Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter new password"
              className="w-full px-4 py-2 rounded-md border border-gray-300 bg-[var(--card-bg-color)] text-[var(--secondary-text-color)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            />
          </div>

          {/* Save Button */}
          <button
            type="submit"
            className="w-full px-6 py-3 bg-[var(--accent)] text-[var(--main-bg-color)] rounded-md font-semibold hover:bg-[var(--accent)]/80 transition shadow"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
