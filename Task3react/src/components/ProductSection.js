import React from 'react';
import './ProductSection.css';

const ProductSection = ({ title, products }) => {
  return (
    <div className="product-section">
      <div className="product-header">
        <h3>{title}</h3>
        <i className="fa-solid fa-angle-right"></i>
      </div>
      <div className="product-group">
        {products.map((product, index) => (
          <div key={index} className="product">
            <div className="product-img">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <p>{product.name}</p>
              <h5>{product.subtitle}</h5>
            </div>
          </div>
        ))}
        <div className="product-right">
          <i className="fa-solid fa-angle-right"></i>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;