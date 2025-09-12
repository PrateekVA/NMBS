"use client"; // since it uses hooks

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useSearch } from "@/context/SearchContext";
import styles from "./Header.module.css";

const Header = () => {
  const { user, logout } = useAuth();
  const { performSearch } = useSearch();
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const dropdownRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    logout();
    setShowDropdown(false);
    router.push("/");
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchInput.trim())}`);
    }
  };

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link href="/">
            <img src="/images/fkheaderlogo_exploreplus-44005d.svg" alt="Flipkart" />
          </Link>
        </div>

        {/* Searchbar */}
        <form className={styles.searchbar} onSubmit={handleSearch}>
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="search"
            placeholder="Search for Products, Brands and More"
            value={searchInput}
            onChange={handleSearchInputChange}
            onKeyPress={handleKeyPress}
          />
        </form>

        {/* Header Actions */}
        <div className={styles.headerActions}>
          {/* Login / User */}
          <div className={`${styles.login} ${styles.hiconcss}`} ref={dropdownRef}>
            <i className="fa-regular fa-circle-user"></i>
            {user ? (
              <>
                <span onClick={toggleDropdown} className={styles.usernameDisplay}>
                  {user.username.split(" ")[0]}
                </span>
                <i
                  className={`fa-solid fa-angle-down ${styles.ldicon}`}
                  onClick={toggleDropdown}
                ></i>
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
                    <div
                      className={`${styles.dropdownItem} ${styles.logoutBtn}`}
                      onClick={handleLogout}
                    >
                      <i className="fa-solid fa-sign-out-alt"></i>
                      <span>Logout</span>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <>
                <Link href="/signin">Login</Link>
                <i className={`fa-solid fa-angle-down ${styles.ldicon}`}></i>
              </>
            )}
          </div>

          {/* Cart */}
          <div className={`${styles.cart} ${styles.hiconcss}`}>
            <i className="fa-solid fa-cart-plus"></i>
            <Link href="/cart">Cart</Link>
          </div>

          {/* Seller */}
          <div className={`${styles.seller} ${styles.hiconcss}`}>
            <i className="fa-solid fa-store"></i>
            <span>Become a Seller</span>
          </div>

          {/* Menu */}
          <div className={styles.menudot}>
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
