export const metadata = {
  title: "ShopLite",
  description: "Mini Next.js store demo",
};

import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <CartProvider>
          <Header />
          <main className="mx-auto max-w-6xl p-4">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
