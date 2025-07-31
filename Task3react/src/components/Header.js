import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Header.css';

const Header = () => {
  const { user, logout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

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
    navigate('/');
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src="fkheaderlogo_exploreplus-44005d.svg" alt="Flipkart" />
          </Link>
        </div>
        
        <div className="searchbar">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="search" placeholder="Search for Products, Brands and More" />
        </div>
        
        <div className="header-actions">
          <div className="login hiconcss" ref={dropdownRef}>
            <i className="fa-regular fa-circle-user"></i>
            {user ? (
              <>
                <span onClick={toggleDropdown} className="username-display">
                  {user.username.split(" ")[0]}
                </span>
                <i className="ldicon fa-solid fa-angle-down" onClick={toggleDropdown}></i>
                {showDropdown && (
                  <div className="dropdown-menu">
                    <div className="dropdown-item">
                      <i className="fa-regular fa-user"></i>
                      <span>My Profile</span>
                    </div>
                    <div className="dropdown-item">
                      <i className="fa-solid fa-box"></i>
                      <span>Orders</span>
                    </div>
                    <div className="dropdown-item">
                      <i className="fa-regular fa-heart"></i>
                      <span>Wishlist</span>
                    </div>
                    <div className="dropdown-item">
                      <i className="fa-solid fa-gift"></i>
                      <span>Rewards</span>
                    </div>
                    <div className="dropdown-item">
                      <i className="fa-solid fa-credit-card"></i>
                      <span>Gift Cards</span>
                    </div>
                    <div className="dropdown-divider"></div>
                    <div className="dropdown-item logout-btn" onClick={handleLogout}>
                      <i className="fa-solid fa-sign-out-alt"></i>
                      <span>Logout</span>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <>
                <Link to="/signin">Login</Link>
                <i className="ldicon fa-solid fa-angle-down"></i>
              </>
            )}
          </div>
          
          <div className="cart hiconcss">
            <i className="fa-solid fa-cart-plus"></i>
            <Link to="/cart">Cart</Link>
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