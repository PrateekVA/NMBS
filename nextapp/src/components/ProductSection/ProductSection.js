import React from 'react';
import styles from './ProductSection.module.css';

const ProductSection = ({ title, products }) => {
  return (
    <div className={styles.productSection}>
      <div className={styles.productHeader}>
        <h3>{title}</h3>
        <i className="fa-solid fa-angle-right"></i>
      </div>
      <div className={styles.productGroup}>
        {products.map((product, index) => (
          <div key={index} className={styles.product}>
            <div className={styles.productImg}>
              <img src={product.image} alt={product.name} />
            </div>
            <div className={styles.productInfo}>
              <p>{product.name}</p>
              <h5>{product.subtitle}</h5>
            </div>
          </div>
        ))}
        <div className={styles.productRight}>
          <i className="fa-solid fa-angle-right"></i>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
