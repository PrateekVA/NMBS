import React from 'react';
import { Link } from 'react-router-dom';
import './CategorySection.css';

const CategorySection = () => {
  const categories = [
    { name: 'Minutes', link: '#', icon: 'cat1.webp' },
    { name: 'Mobile & Tablets', link: '/mobilesandtablets', icon: 'cat2.webp' },
    { name: 'Fashion', link: '/fashion', icon: 'cat3.webp' },
    { name: 'Electronics', link: '/electronics', icon: 'cat4.webp' },
    { name: 'Home & Furniture', link: '/homeandfurniture', icon: 'cat5.webp' },
    { name: 'TVs & Appliances', link: '/tvsandapplicances', icon: 'cat6.webp' },
    { name: 'Flight Booking', link: '/flightbooking', icon: 'cat7.webp' },
    { name: 'Beauty and Food', link: '/beautyandfood', icon: 'cat8.webp' }
  ];

  return (
    <section className="category-section">
      <div className="container">
        <div className="category-grid">
          {categories.map((category, index) => (
            <Link key={index} to={category.link} className="category-item">
              <div className="category-image">
                <img src={category.icon} alt={category.name} />
              </div>
              <div className="category-info">
                <p>{category.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;