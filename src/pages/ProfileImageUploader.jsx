import React from "react";
import { FaEdit } from "react-icons/fa";

const ProfileImageUploader = ({ profileImage, setProfileImage }) => {
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileImage(reader.result);
      localStorage.setItem("profileImage", reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="relative w-24 h-24 mx-auto mb-6">
      <img
        src={profileImage}
        alt="Profile"
        className="w-24 h-24 rounded-full border-2 border-[var(--accent)] object-cover"
      />
      <label
        htmlFor="imageUpload"
        className="absolute bottom-0 right-0 bg-[var(--accent)] p-2 rounded-full cursor-pointer hover:bg-[var(--accent)]/80 transition"
      >
        <FaEdit className="text-white text-sm" />
      </label>
      <input
        id="imageUpload"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImageChange}
      />
    </div>
  );
};

export default ProfileImageUploader;
