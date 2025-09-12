"use client";

import React, { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useSearch } from "@/context/SearchContext";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import styles from "./Search.module.css";

const SearchResults = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { searchQuery, searchResults, performSearch, clearSearch } = useSearch();
  const { addToCart } = useCart();

  const query = searchParams.get('q');

  useEffect(() => {
    if (query) {
      performSearch(query);
    } else {
      clearSearch();
    }
  }, [query]); // Remove performSearch and clearSearch from dependencies

  const handleProductClick = (product) => {
    // Navigate to product detail page
    router.push(`/product/${product.id}`);
  };

  return (
    <div className={styles.searchContainer}>
      <div className="container">
        <div className={styles.searchHeader}>
          <h2>Search Results</h2>
          {query && (
            <p className={styles.searchQuery}>
              Showing results for: <strong>"{query}"</strong>
            </p>
          )}
        </div>

        {searchResults.length === 0 && query ? (
          <div className={styles.noResults}>
            <div className={styles.noResultsIcon}>
              <i className="fa-solid fa-search"></i>
            </div>
            <h3>No products found</h3>
            <p>Try searching with different keywords or check the spelling</p>
            <div className={styles.suggestions}>
              <h4>Popular searches:</h4>
              <div className={styles.suggestionTags}>
                <span onClick={() => performSearch("mobile")}>Mobile</span>
                <span onClick={() => performSearch("laptop")}>Laptop</span>
                <span onClick={() => performSearch("watch")}>Watch</span>
                <span onClick={() => performSearch("camera")}>Camera</span>
              </div>
            </div>
          </div>
        ) : searchResults.length > 0 ? (
          <>
            <div className={styles.resultsCount}>
              <p>{searchResults.length} product{searchResults.length !== 1 ? 's' : ''} found</p>
            </div>
            <div className={styles.productGrid}>
              {searchResults.map((product) => (
                <div key={product.id} className={styles.productCard}>
                  <div 
                    className={styles.productImageContainer}
                    onClick={() => handleProductClick(product)}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={250}
                      height={200}
                      className={styles.productImage}
                    />
                    <div className={styles.productOverlay}>
                      <i className="fa-solid fa-eye"></i>
                    </div>
                  </div>
                  <div className={styles.productInfo}>
                    <h3 className={styles.productName}>{product.name}</h3>
                    <p className={styles.productCategory}>{product.category}</p>
                    <p className={styles.productDescription}>{product.description}</p>
                    <div className={styles.priceInfo}>
                      <span className={styles.currentPrice}>₹{product.price.toLocaleString()}</span>
                      <span className={styles.originalPrice}>₹{product.originalPrice.toLocaleString()}</span>
                      <span className={styles.discount}>{product.discount}</span>
                    </div>
                    <button
                      className={styles.addToCartBtn}
                      onClick={() => addToCart(product.name, product.price, product.image)}
                    >
                      <i className="fa-solid fa-cart-plus"></i>
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className={styles.emptyState}>
            <div className={styles.emptyStateIcon}>
              <i className="fa-solid fa-search"></i>
            </div>
            <h3>Start your search</h3>
            <p>Search for products, brands, and more</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
