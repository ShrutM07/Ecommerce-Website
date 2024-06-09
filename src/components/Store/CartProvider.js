import React from 'react';
import { CartProvider } from './CartContext';
import App from './App';

const userEmail = 'user@example.com'; // This should be dynamically fetched based on the logged-in user

const Root = () => (
  <CartProvider userEmail={userEmail}>
    <App />
  </CartProvider>
);

export default Root;
