import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import ProfileImageUploader from "./ProfileImageUploader";
import EditButtons from "./EditButtons";
import PersonalInfo from "./PersonalInfo";
import AccountActions from "./AccountActions";
import InfoCards from "./InfoCards";
import Toast from "./Toast";

const UserProfile = () => {
  const { user, logout, updateProfileImage } = useAuth(); // 🔥 use updateProfileImage from context

  const [isEditing, setIsEditing] = useState(false);
  const [toast, setToast] = useState("");
  const [formData, setFormData] = useState({
    name: user?.name || "Guest User",
    email: user?.email || "guest@example.com",
    birthday: user?.birthday || "",
    address: user?.address || "",
  });

  // Save edits
  const handleSave = () => {
    setIsEditing(false);
    setToast("Profile updated successfully!");
    setTimeout(() => setToast(""), 3000);
  };

  return (
    <div className="min-h-screen bg-[var(--main-bg-color)] text-[var(--secondary-text-color)] px-6 py-12">
      <div className="max-w-3xl mx-auto bg-[var(--card-bg-color)] rounded-lg shadow-lg p-8 text-center mt-24">
        <h2 className="text-2xl font-bold mb-6">User Profile</h2>

        {toast && <Toast message={toast} />}

        {user ? (
          <>
            {/* Profile Image Uploader now updates context directly */}
            <ProfileImageUploader
              profileImage={user.profileImage || "https://cdn-icons-png.flaticon.com/512/847/847969.png"}
              setProfileImage={updateProfileImage}
            />

            <EditButtons
              isEditing={isEditing}
              setIsEditing={setIsEditing}
              handleSave={handleSave}
            />

            <PersonalInfo
              isEditing={isEditing}
              formData={formData}
              setFormData={setFormData}
            />

            <AccountActions logout={logout} />

            <InfoCards />
          </>
        ) : (
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
              alt="Placeholder"
              className="w-24 h-24 rounded-full border-2 border-gray-400 object-cover mx-auto mb-4"
            />
            <p className=" text-[var(--errorColor)] font-semibold my-6">
              You are not logged in!
            </p>
            <a
              href="/login"
              className="px-4 py-2 open-sans-200 bg-[var(--accent)] text-white rounded-md font-semibold hover:bg-[var(--accent)]/80 transition"
            >
              Login
            </a>
            <p className="my-6 text-sm">
              Don’t have an account?{" "}
              <a
                href="/signup"
                className="text-[var(--accent)] hover:underline"
              >
                Sign Up
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
