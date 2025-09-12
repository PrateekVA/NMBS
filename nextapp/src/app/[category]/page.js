// src/app/[category]/page.js
"use client"; // <- This makes it a client component

import ProductListing from "@/components/ProductListing/ProductListing";
import { useParams } from "next/navigation";

export default function CategoryPage() {
  const params = useParams();
  const { category } = params; // e.g., 'fashion', 'mobilesandtablets'

  // Optional: map URL slug to readable name
  const categoryMap = {
    fashion: "Fashion",
    electronics: "Electronics",
    mobilesandtablets: "Mobiles and Tablets",
    homeandfurniture: "Home and Furnitures",
    tvsandapplicances: "TVs and Applicances",
    flightbooking: "Flight Booking",
    beautyandfood: "Beauty and Food",
    grocery: "Groceries",
  };

  const displayName = categoryMap[category] || category;

  return <ProductListing category={displayName} />;
}
