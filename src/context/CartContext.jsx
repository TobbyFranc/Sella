import React, { createContext, useContext, useReducer, useEffect } from "react";

// Create context
const CartContext = createContext();

// Reducer function for cart actions
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];

    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.payload);

    case "UPDATE_QUANTITY":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );

    case "CLEAR_CART":
      return [];

    default:
      return state;
  }
};

// Provider component
export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, [], () => {
    const localData = localStorage.getItem("cart");
    return localData ? JSON.parse(localData) : [];
  });

  // Persist cart in localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Action functions
  const addToCart = (product) => dispatch({ type: "ADD_TO_CART", payload: product });
  const removeFromCart = (id) => dispatch({ type: "REMOVE_FROM_CART", payload: id });
  const updateQuantity = (id, quantity) =>
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook for easy access
export const useCart = () => useContext(CartContext);
