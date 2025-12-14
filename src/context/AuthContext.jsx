// src/context/AuthContext.jsx
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  // 🔥 New: update profile image
  const updateProfileImage = (image) => {
    setUser((prev) => ({ ...prev, profileImage: image }));
    localStorage.setItem("profileImage", image);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateProfileImage }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
