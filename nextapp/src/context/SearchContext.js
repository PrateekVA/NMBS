"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { searchProducts } from "@/lib/products";

const SearchContext = createContext();

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const performSearch = useCallback((query) => {
    if (!query || query.trim() === '') {
      setSearchResults([]);
      setSearchQuery("");
      return;
    }

    setIsSearching(true);
    const results = searchProducts(query);
    setSearchResults(results);
    setSearchQuery(query);
    setIsSearching(false);
  }, []);

  const clearSearch = useCallback(() => {
    setSearchQuery("");
    setSearchResults([]);
    setIsSearching(false);
  }, []);

  const value = {
    searchQuery,
    searchResults,
    isSearching,
    performSearch,
    clearSearch,
  };

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
};
