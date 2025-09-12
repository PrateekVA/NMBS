"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext"; // ✅ absolute path alias
import { useNotification } from "@/context/NotificationContext";
import styles from "./Cart.module.css"; // ✅ CSS Module

const Cart = () => {
  const { cart, removeFromCart, getCartTotal } = useCart();
  const { addNotification } = useNotification();

  const handleCheckout = () => {
    const total = getCartTotal();
    addNotification(`Total amount to be paid: ₹${total.toFixed(2)}`, "info");
  };

  if (cart.length === 0) {
    return (
      <div className={styles.cartContainer}>
        <div className="container">
          <div className={styles.emptyCart}>
            <h2>Your Cart</h2>
            <p>Your cart is empty.</p>
            <div className={styles.emptyCartIcon}>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.cartContainer}>
      <div className="container">
        <h2>Your Cart ({cart.length} items)</h2>
        <div className={styles.cartContent}>
          {/* Left side: Items */}
          <div className={styles.cartItems}>
            {cart.map((item, index) => (
              <div key={index} className={styles.cartItem}>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  className={styles.itemImage}
                />
                <div className={styles.itemDetails}>
                  <h3>{item.name}</h3>
                  <p className={styles.itemPrice}>
                    ₹{Number(item.price).toLocaleString()}
                  </p>
                </div>
                <button
                  className={styles.removeBtn}
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Right side: Summary */}
          <div className={styles.cartSummary}>
            <h3>Price Details</h3>
            <div className={styles.summaryRow}>
              <span>Price ({cart.length} items)</span>
              <span>₹{getCartTotal().toLocaleString()}</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Delivery Charges</span>
              <span className={styles.free}>FREE</span>
            </div>
            <div className={`${styles.summaryRow} ${styles.total}`}>
              <span>Total Amount</span>
              <span>₹{getCartTotal().toLocaleString()}</span>
            </div>
            <button className={styles.checkoutBtn} onClick={handleCheckout}>
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
