"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { useNotification } from "./NotificationContext";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addNotification } = useNotification();

  // Run only on client side
  useEffect(() => {
    if (typeof window !== "undefined") {
      const activeUser = JSON.parse(localStorage.getItem("activeUser"));
      if (activeUser) {
        setUser(activeUser);
      }
      setLoading(false);
    }
  }, []);

  const login = useCallback((userData) => {
    setUser(userData);
    if (typeof window !== "undefined") {
      localStorage.setItem("activeUser", JSON.stringify(userData));
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    if (typeof window !== "undefined") {
      localStorage.removeItem("activeUser");
    }
    addNotification("You have been logged out successfully", "info");
  }, [addNotification]);

  const value = {
    user,
    login,
    logout,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
