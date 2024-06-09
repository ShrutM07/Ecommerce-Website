import React from "react";
import { useCart } from "../Store/CartContext";
import Button from 'react-bootstrap/Button';
import { FaTimes } from 'react-icons/fa';

const Cart = ({ isCartOpen, closeCart }) => {
  const { cartItems, removeItemFromCart } = useCart();

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div>
      {isCartOpen && (
        <div style={{
          position: 'fixed',
          top: 60,
          right: 20,
          width: '400px',
          border: '1px solid #ccc',
          backgroundColor: '#fff',
          padding: '20px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          zIndex: 1000 // Ensure the cart is on top
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h2>Cart Items</h2>
            <Button variant="light" onClick={closeCart} style={{ border: 'none' }}>
              <FaTimes />
            </Button>
          </div>
          {cartItems.length > 0 ? (
            <>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontWeight: 'bold' }}>
                <span>Item</span>
                <span>Price</span>
                <span>Quantity</span>
                <span>RemoveItem</span>
              </div>
              {cartItems.map((item, index) => (
                <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <div style={{ flex: 2, display: 'flex', alignItems: 'center' }}>
                    <img src={item.imageUrl} alt={item.title} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
                    <span>{item.title}</span>
                  </div>
                  <span style={{ flex: 1 }}>${item.price}</span>
                  <span style={{ flex: 1 }}>{item.quantity}</span>
                  <Button variant="outline-danger" style={{ flex: 1 }} onClick={() => removeItemFromCart(index)}>Remove</Button>
                </div>
              ))}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', fontWeight: 'bold' }}>
                <span>Total:</span>
                <span>${calculateTotal()}</span>
              </div>
            </>
          ) : (
            <p>Your cart is empty</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
