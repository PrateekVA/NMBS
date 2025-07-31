import React from 'react';
import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, getCartTotal } = useCart();

  const handleCheckout = () => {
    const total = getCartTotal();
    alert(`Total amount to be paid: ₹${total.toFixed(2)}`);
  };

  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <div className="container">
          <div className="empty-cart">
            <h2>Your Cart</h2>
            <p>Your cart is empty.</p>
            <div className="empty-cart-icon">
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="container">
        <h2>Your Cart ({cart.length} items)</h2>
        <div className="cart-content">
          <div className="cart-items">
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p className="item-price">₹{item.price.toLocaleString()}</p>
                </div>
                <button 
                  className="remove-btn" 
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>Price Details</h3>
            <div className="summary-row">
              <span>Price ({cart.length} items)</span>
              <span>₹{getCartTotal().toLocaleString()}</span>
            </div>
            <div className="summary-row">
              <span>Delivery Charges</span>
              <span className="free">FREE</span>
            </div>
            <div className="summary-row total">
              <span>Total Amount</span>
              <span>₹{getCartTotal().toLocaleString()}</span>
            </div>
            <button className="checkout-btn" onClick={handleCheckout}>
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;