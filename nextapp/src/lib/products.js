// Centralized product database - Only priced products (original ProductListing products)
export const products = [
  // Electronics
  { 
    id: 1, 
    name: "product15", 
    price: 13999, 
    originalPrice: 24999, 
    discount: "44% off",
    image: "/images/product15.webp", 
    category: "Electronics",
    description: "High-performance mobile device"
  },
  { 
    id: 2, 
    name: "product16", 
    price: 13999, 
    originalPrice: 24999, 
    discount: "44% off",
    image: "/images/product16.webp", 
    category: "Electronics",
    description: "Advanced smartphone with premium features"
  },
  // Mobiles and Tablets
  { 
    id: 3, 
    name: "product17", 
    price: 10999, 
    originalPrice: 19999, 
    discount: "45% off",
    image: "/images/product17.webp", 
    category: "Mobiles and Tablets",
    description: "Budget-friendly mobile device"
  },
  { 
    id: 4, 
    name: "product18", 
    price: 21079, 
    originalPrice: 26999, 
    discount: "21% off",
    image: "/images/product18.webp", 
    category: "Mobiles and Tablets",
    description: "Mid-range smartphone with great value"
  },
  // Fashion
  { 
    id: 5, 
    name: "product19", 
    price: 15999, 
    originalPrice: 22999, 
    discount: "30% off",
    image: "/images/product19.webp", 
    category: "Fashion",
    description: "Feature-rich mobile device"
  },
  { 
    id: 6, 
    name: "product20", 
    price: 9499, 
    originalPrice: 14999, 
    discount: "37% off",
    image: "/images/product20.webp", 
    category: "Fashion",
    description: "Affordable smartphone option"
  },
  // Home and Furnitures
  { 
    id: 7, 
    name: "product21", 
    price: 9499, 
    originalPrice: 14999, 
    discount: "37% off",
    image: "/images/product21.webp", 
    category: "Home and Furnitures",
    description: "Entry-level mobile device"
  },
  { 
    id: 8, 
    name: "product22", 
    price: 9499, 
    originalPrice: 14999, 
    discount: "37% off",
    image: "/images/product22.webp", 
    category: "Home and Furnitures",
    description: "Basic smartphone with essential features"
  }
];

// Categories for search
export const categories = [
  "Electronics",
  "Mobiles and Tablets",
  "Fashion",
  "Home and Furnitures"
];

// Search function
export const searchProducts = (query) => {
  if (!query || query.trim() === '') {
    return [];
  }
  
  const searchTerm = query.toLowerCase().trim();
  
  // Category mapping for search terms
  const categorySearchTerms = {
    'home': 'Home and Furnitures',
    'furniture': 'Home and Furnitures',
    'furnitures': 'Home and Furnitures',
    'homeandfurniture': 'Home and Furnitures',
    'homeandfurnitures': 'Home and Furnitures',
    'electronics': 'Electronics',
    'electronic': 'Electronics',
    'mobile': 'Mobiles and Tablets',
    'mobiles': 'Mobiles and Tablets',
    'tablet': 'Mobiles and Tablets',
    'tablets': 'Mobiles and Tablets',
    'mobilesandtablets': 'Mobiles and Tablets',
    'fashion': 'Fashion',
    'fashionable': 'Fashion',
    'clothing': 'Fashion',
    'clothes': 'Fashion'
  };
  
  return products.filter(product => {
    // Check if search term matches a category
    if (categorySearchTerms[searchTerm]) {
      return product.category === categorySearchTerms[searchTerm];
    }
    
    // Regular search in name, category, and description
    return product.name.toLowerCase().includes(searchTerm) ||
           product.category.toLowerCase().includes(searchTerm) ||
           product.description.toLowerCase().includes(searchTerm);
  });
};
