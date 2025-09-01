import React from 'react';
import { useCart } from '../context/CartContext';
import './ProductListing.module.css'; // assuming global CSS, else import styles from './ProductListing.module.css';

const ProductListing = ({ category = 'Products' }) => {
  const { addToCart } = useCart();

  const products = [
    { name: 'Product15', price: 13999, image: 'product15.webp', originalPrice: 24999, discount: '44% off' },
    { name: 'Product16', price: 13999, image: 'product16.webp', originalPrice: 24999, discount: '44% off' },
    { name: 'Product17', price: 10999, image: 'product17.webp', originalPrice: 19999, discount: '45% off' },
    { name: 'Product18', price: 21079, image: 'product18.webp', originalPrice: 26999, discount: '21% off' },
    { name: 'Product19', price: 15999, image: 'product19.webp', originalPrice: 22999, discount: '30% off' },
    { name: 'Product20', price: 9499, image: 'product20.webp', originalPrice: 14999, discount: '37% off' },
    { name: 'Product21', price: 9499, image: 'product21.webp', originalPrice: 14999, discount: '37% off' },
    { name: 'Product22', price: 9499, image: 'product22.webp', originalPrice: 14999, discount: '37% off' }
  ];

  return (
    <div className="product-listing">
      <div className="container">
        <h2>{category}</h2>
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.name} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <div className="price-info">
                <span className="current-price">₹{product.price.toLocaleString()}</span>
                <span className="original-price">₹{product.originalPrice.toLocaleString()}</span>
                <span className="discount">{product.discount}</span>
              </div>
              <button 
                className="add-to-cart-btn"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
