import React from 'react';
import styles from './ProductSection.module.css';

const ProductSection = ({ title, products = [] }) => {
  return (
    <div className={styles['product-section']}>
      <div className={styles['product-header']}>
        <h3>{title}</h3>
        <i className="fa-solid fa-angle-right"></i>
      </div>
      <div className={styles['product-group']}>
        {products.map((product, index) => (
          <div key={index} className={styles.product}>
            <div className={styles['product-img']}>
              <img src={product.image} alt={product.name} />
            </div>
            <div className={styles['product-info']}>
              <p>{product.name}</p>
              <h5>{product.subtitle}</h5>
            </div>
          </div>
        ))}
        <div className={styles['product-right']}>
          <i className="fa-solid fa-angle-right"></i>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
