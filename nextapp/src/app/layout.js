// app/layout.js

import React from "react";
import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";
import { NotificationProvider } from "@/context/NotificationContext";
import { SearchProvider } from "@/context/SearchContext";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Notification from "@/components/Notification/Notification";
import "./globals.css";

export const metadata = {
  title: "Flipkart Clone",
  description: "E-commerce App built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NotificationProvider>
          <SearchProvider>
            <AuthProvider>
              <CartProvider>
                <Header />
                <main>{children}</main>
                <Footer />
                <Notification />
              </CartProvider>
            </AuthProvider>
          </SearchProvider>
        </NotificationProvider>
      </body>
    </html>
  );
}
