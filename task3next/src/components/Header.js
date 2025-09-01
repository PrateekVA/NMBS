import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';               // ✅ New import
import Link from 'next/link';                          // ✅ New import
import { useAuth } from '../context/AuthContext';
import styles from './Header.module.css';              // ✅ If using CSS Modules

const Header = () => {
  const { user, logout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();                          // ✅ Use useRouter instead of useNavigate

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    logout();
    setShowDropdown(false);
    router.push('/');                                  // ✅ Redirect using router
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <img src="fkheaderlogo_exploreplus-44005d.svg" alt="Flipkart" />
          </Link>
        </div>

        <div className={styles.searchbar}>
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="search" placeholder="Search for Products, Brands and More" />
        </div>

        <div className={styles.headerActions}>
          <div className={`${styles.login} hiconcss`} ref={dropdownRef}>
            <i className="fa-regular fa-circle-user"></i>
            {user ? (
              <>
                <span onClick={toggleDropdown} className={styles.usernameDisplay}>
                  {user.username.split(" ")[0]}
                </span>
                <i className="ldicon fa-solid fa-angle-down" onClick={toggleDropdown}></i>
                {showDropdown && (
                  <div className={styles.dropdownMenu}>
                    <div className={styles.dropdownItem}>
                      <i className="fa-regular fa-user"></i>
                      <span>My Profile</span>
                    </div>
                    <div className={styles.dropdownItem}>
                      <i className="fa-solid fa-box"></i>
                      <span>Orders</span>
                    </div>
                    <div className={styles.dropdownItem}>
                      <i className="fa-regular fa-heart"></i>
                      <span>Wishlist</span>
                    </div>
                    <div className={styles.dropdownItem}>
                      <i className="fa-solid fa-gift"></i>
                      <span>Rewards</span>
                    </div>
                    <div className={styles.dropdownItem}>
                      <i className="fa-solid fa-credit-card"></i>
                      <span>Gift Cards</span>
                    </div>
                    <div className={styles.dropdownDivider}></div>
                    <div className={`${styles.dropdownItem} ${styles.logoutBtn}`} onClick={handleLogout}>
                      <i className="fa-solid fa-sign-out-alt"></i>
                      <span>Logout</span>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <>
                <Link href="/signin">Login</Link>
                <i className="ldicon fa-solid fa-angle-down"></i>
              </>
            )}
          </div>

          <div className="cart hiconcss">
            <i className="fa-solid fa-cart-plus"></i>
            <Link href="/Cart">Cart</Link>
          </div>

          <div className="seller hiconcss">
            <i className="fa-solid fa-store"></i>
            <span>Become a Seller</span>
          </div>

          <div className="menudot">
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
