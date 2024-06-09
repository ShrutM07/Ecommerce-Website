import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const CartContext = createContext();

const BASE_API_URL = 'https://crudcrud.com/api/05ba560b7aa048ecb7ea1a5abfd3810b';

export const CartProvider = ({ children, userEmail }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Load cart items from the server for the logged-in user on component mount
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(`${BASE_API_URL}/cart${userEmail}`);
        setCartItems(response.data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
        // Handle error
      }
    };

    fetchCartItems();
  }, [userEmail]);

  const addItemToCart = async (product) => {
    const existingProductIndex = cartItems.findIndex(item => item.title === product.title);

    let newCartItems;

    if (existingProductIndex !== -1) {
      newCartItems = [...cartItems];
      newCartItems[existingProductIndex].quantity += 1;
    } else {
      newCartItems = [...cartItems, { ...product, quantity: 1 }];
    }

    setCartItems(newCartItems);

    try {
      await axios.post(`${BASE_API_URL}/cart${userEmail}`, { cartItems: newCartItems });
    } catch (error) {
      console.error('Error adding item to cart:', error);
      // Handle error
    }
  };

  const removeItemFromCart = async (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);

    try {
      await axios.post(`${BASE_API_URL}/cart${userEmail}`, { cartItems: newCartItems });
    } catch (error) {
      console.error('Error removing item from cart:', error);
      // Handle error
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
