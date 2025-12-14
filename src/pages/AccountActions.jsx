import React from "react";
import { FaLock, FaTrash, FaSignOutAlt } from "react-icons/fa";

const AccountActions = ({ logout }) => {
  return (
    <div className="mt-10 space-y-4">
      <button className="w-full px-4 py-2 bg-[var(--accent)] text-white rounded-md flex items-center gap-2 justify-center hover:bg-[var(--accent)]/80 transition">
        <FaLock /> Change Password
      </button>
      <button className="w-full px-4 py-2 bg-red-500 text-white rounded-md flex items-center gap-2 justify-center hover:bg-red-600 transition">
        <FaTrash /> Delete Account
      </button>
      <button
        onClick={logout}
        className="w-full px-4 py-2 bg-gray-700 text-white rounded-md flex items-center gap-2 justify-center hover:bg-gray-800 transition"
      >
        <FaSignOutAlt /> Logout
      </button>
    </div>
  );
};

export default AccountActions;
