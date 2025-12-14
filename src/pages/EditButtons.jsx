import React from "react";
import { FaEdit, FaSave, FaTimes } from "react-icons/fa";

const EditButtons = ({ isEditing, setIsEditing, handleSave }) => {
  return !isEditing ? (
    <button
      onClick={() => setIsEditing(true)}
      className="px-4 py-2 bg-[var(--accent)] text-white rounded-md flex items-center gap-2 mx-auto hover:bg-[var(--accent)]/80 transition"
    >
      <FaEdit /> Edit Profile
    </button>
  ) : (
    <div className="flex justify-center gap-4 mb-6">
      <button
        onClick={handleSave}
        className="px-4 py-2 bg-green-600 text-white rounded-md flex items-center gap-2 hover:bg-green-700 transition"
      >
        <FaSave /> Save
      </button>
      <button
        onClick={() => setIsEditing(false)}
        className="px-4 py-2 bg-gray-500 text-white rounded-md flex items-center gap-2 hover:bg-gray-600 transition"
      >
        <FaTimes /> Cancel
      </button>
    </div>
  );
};

export default EditButtons;
