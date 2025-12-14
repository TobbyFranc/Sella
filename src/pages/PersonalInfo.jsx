import React from "react";
import { FaUser, FaEnvelope, FaBirthdayCake, FaHome } from "react-icons/fa";

const PersonalInfo = ({ isEditing, formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-[80%] mx-auto text-left space-y-4 mt-8">
      <h4 className="text-lg font-semibold text-[var(--accent)] mb-2">
        Personal Information
      </h4>

      <p className="flex items-center gap-2">
        <FaUser />
        {isEditing ? (
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border rounded px-2 py-1 w-full"
          />
        ) : (
          <span>Name: {formData.name}</span>
        )}
      </p>

      <p className="flex items-center gap-2">
        <FaEnvelope />
        {isEditing ? (
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border rounded px-2 py-1 w-full"
          />
        ) : (
          <span>Email: {formData.email}</span>
        )}
      </p>

      <p className="flex items-center gap-2">
        <FaBirthdayCake />
        {isEditing ? (
          <input
            type="date"
            name="birthday"
            value={formData.birthday}
            onChange={handleChange}
            className="border rounded px-2 py-1 w-full"
          />
        ) : (
          <span>Birthday: {formData.birthday || "Not provided"}</span>
        )}
      </p>

      <p className="flex items-center gap-2">
        <FaHome />
        {isEditing ? (
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="border rounded px-2 py-1 w-full"
          />
        ) : (
          <span>Address: {formData.address || "Not provided"}</span>
        )}
      </p>
    </div>
  );
};

export default PersonalInfo;
