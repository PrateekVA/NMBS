import React from 'react';
import Link from 'next/link';
import styles from './CategorySection.module.css';

const CategorySection = () => {
  const categories = [
    { name: 'Minutes', link: '#', icon: 'cat1.webp' },
    { name: 'Mobile & Tablets', link: '/ProductListing', icon: 'cat2.webp' },
    { name: 'Fashion', link: '/ProductListing', icon: 'cat3.webp' },
    { name: 'Electronics', link: '/ProductListing', icon: 'cat4.webp' },
    { name: 'Home & Furniture', link: '/ProductListing', icon: 'cat5.webp' },
    { name: 'TVs & Appliances', link: '/ProductListing', icon: 'cat6.webp' },
    { name: 'Flight Booking', link: '/ProductListing', icon: 'cat7.webp' },
    { name: 'Beauty and Food', link: '/ProductListing', icon: 'cat8.webp' }
  ];

  return (
    <section className={styles['category-section']}>
      <div className={styles.container}>
        <div className={styles['category-grid']}>
          {categories.map((category, index) => (
            <Link href={category.link} key={index} passHref>
              <div className={styles['category-item']}>
                <div className={styles['category-image']}>
                  <img src={category.icon} alt={category.name} />
                </div>
                <div className={styles['category-info']}>
                  <p>{category.name}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
