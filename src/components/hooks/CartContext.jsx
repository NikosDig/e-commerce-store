
import React, { createContext, useContext, useState } from 'react';

// Create a context
const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      // Check if the product already exists in the cart
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        // If it exists, increase the quantity
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // If it doesn't exist, add it to the cart with quantity 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex(item => item.id === productId);
      if (itemIndex !== -1) {
        const updatedCart = [...prevCart];
        // If the item has a quantity greater than 1, decrease the quantity
        if (updatedCart[itemIndex].quantity > 1) {
          updatedCart[itemIndex].quantity -= 1;
          return updatedCart;
        } else {
          // If the item quantity is 1, remove it completely
          updatedCart.splice(itemIndex, 1);
          return updatedCart;
        }
      }
      return prevCart;
    });
  };

  const clearCart = () => {
    setCart([]); // Function to clear the cart
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Create a custom hook for using the CartContext
export const useCart = () => {
  return useContext(CartContext);
};

