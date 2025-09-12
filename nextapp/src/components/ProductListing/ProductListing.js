"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { products } from "@/lib/products";
import styles from "./ProductListing.module.css";

const ProductListing = ({ category }) => {
  const { addToCart } = useCart();
  const [searchQuery, setSearchQuery] = useState("");

  // Filter products by category
  const categoryProducts = products.filter(product => 
    product.category.toLowerCase() === category.toLowerCase()
  );

  // Then filter by search query if provided
  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) {
      return categoryProducts;
    }
    
    const query = searchQuery.toLowerCase().trim();
    return categoryProducts.filter(product =>
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query)
    );
  }, [categoryProducts, searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className={styles.productListing}>
      <div className="container">
        <div className={styles.headerSection}>
          <h2 className={styles.heading}>{category}</h2>
          <div className={styles.searchContainer}>
            <div className={styles.searchBox}>
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                type="text"
                placeholder={`Search in ${category}...`}
                value={searchQuery}
                onChange={handleSearchChange}
                className={styles.searchInput}
              />
              {searchQuery && (
                <button
                  className={styles.clearSearch}
                  onClick={() => setSearchQuery("")}
                >
                  <i className="fa-solid fa-times"></i>
                </button>
              )}
            </div>
            {searchQuery && (
              <p className={styles.searchResults}>
                {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
              </p>
            )}
          </div>
        </div>
        {filteredProducts.length > 0 ? (
          <div className={styles.productGrid}>
            {filteredProducts.map((product, index) => (
              <div key={index} className={styles.productCard}>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={250}
                  height={200}
                  className={styles.productImage}
                />
                <h3 className={styles.productName}>{product.name}</h3>
                <div className={styles.priceInfo}>
                  <span className={styles.currentPrice}>₹{product.price.toLocaleString()}</span>
                  <span className={styles.originalPrice}>₹{product.originalPrice.toLocaleString()}</span>
                  <span className={styles.discount}>{product.discount}</span>
                </div>
                <button
                  className={styles.addToCartBtn}
                  onClick={() => addToCart(product.name, product.price, product.image)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        ) : searchQuery ? (
          <div className={styles.noResults}>
            <div className={styles.noResultsIcon}>
              <i className="fa-solid fa-search"></i>
            </div>
            <h3>No products found</h3>
            <p>Try searching with different keywords</p>
            <button
              className={styles.clearSearchBtn}
              onClick={() => setSearchQuery("")}
            >
              Clear Search
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ProductListing;
