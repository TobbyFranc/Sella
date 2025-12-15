import React, { useState, useEffect, createContext, useContext, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SplashScreen from "./components/SplashScreen";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";   // detail page for ProductList
import ProductInfo from "./pages/ProductInfo";       // new extensive detail page
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import UserProfile from "./pages/UserProfile";
import EditProfile from "./pages/EditProfile";
import Welcome from "./pages/Welcome";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import CategoryPage from "./pages/CategoryPage";
import Contact from "./pages/Contact";   // 

import NotFound from "./pages/NotFound";
import CategoriesPage from "./pages/CategoriesPage";

// Context Providers
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";

// Theme Context
const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Layout wrapper for pages with Navbar + Footer
const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!hasRun.current) {
      hasRun.current = true;
      setTimeout(() => setShowSplash(false), 6000);
    }
  }, []);

  if (showSplash) {
    return (
      <ThemeProvider>
        <SplashScreen />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <Router>
            <ScrollToTop />
            <Routes>
              {/* Standalone screens */}
              <Route path="/" element={<Welcome />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />

              {/* Shopping site with layout */}
              <Route path="/home" element={<Layout><Home /></Layout>} />
              <Route path="/products" element={<Layout><ProductList /></Layout>} />
              <Route path="/products/:id" element={<Layout><ProductDetail /></Layout>} />

              {/* Unified route for card detail pages */}
              <Route path="/productinfo/:id" element={<Layout><ProductInfo /></Layout>} />

              {/* Category browsing */}
              <Route path="/category/:categoryName" element={<Layout><CategoryPage /></Layout>} />

              {/* Cart & Checkout */}
              <Route path="/cart" element={<Layout><Cart /></Layout>} />
              <Route path="/checkout" element={<Layout><Checkout /></Layout>} />

              {/* User profile */}
              <Route path="/userProfile" element={<Layout><UserProfile /></Layout>} />
              <Route path="/editProfile" element={<Layout><EditProfile /></Layout>} />

              {/* Contact page */}
              <Route path="/contact" element={<Layout><Contact /></Layout>} />

              {/* Categories list */}
        <Route path="/categories" element={<CategoriesPage />} />
              
              {/* Not Found Page. ERROR 404 you get? */}
              <Route path="*" element={<Layout><NotFound /></Layout>} />
            </Routes>
          </Router>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
