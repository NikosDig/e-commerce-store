import React, { createContext, useContext, useState } from 'react';

// Create a context
const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
        // Find the index of the first occurrence of the item
        const itemIndex = prevCart.findIndex(item => item.id === productId);
        
        // If the item is found, create a new cart array without that item
        if (itemIndex !== -1) {
            const updatedCart = [...prevCart];
            updatedCart.splice(itemIndex, 1); // Remove one instance
            return updatedCart; // Return the updated cart
        }
        
        return prevCart; // Return the original cart if item not found
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Create a custom hook for using the CartContext
export const useCart = () => {
  return useContext(CartContext);
};
