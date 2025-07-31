import React from 'react';
import CategorySection from '../components/CategorySection';
import Slider from '../components/Slider';
import ProductSection from '../components/ProductSection';
import './Home.css';

const Home = () => {
  const electronicsProducts = [
    { name: 'Top Mirrorless Cameras', image: 'product2.webp', subtitle: 'Shop Now!' },
    { name: 'Top Watches', image: 'product3.webp', subtitle: 'Shop Now!' },
    { name: 'Printers', image: 'product4.webp', subtitle: 'Shop Now!' },
    { name: 'Monitors', image: 'product5.webp', subtitle: 'Shop Now!' },
    { name: 'Projectors', image: 'product6.webp', subtitle: 'Shop Now!' },
    { name: 'Top Mirrorless Cameras', image: 'product7.webp', subtitle: 'Shop Now!' }
  ];

  const beautyFoodProducts = [
    { name: 'Bat man', image: 'product10.webp', subtitle: 'Shop Now!' },
    { name: 'Pens', image: 'product11.webp', subtitle: 'Shop Now!' },
    { name: 'Cycles', image: 'product12.webp', subtitle: 'Shop Now!' },
    { name: 'Toys', image: 'product13.webp', subtitle: 'Shop Now!' },
    { name: 'Beauty Products', image: 'product14.webp', subtitle: 'Shop Now!' },
    { name: 'Top Mirrorless Cameras', image: 'product7.webp', subtitle: 'Shop Now!' }
  ];

  return (
    <div className="home">
      <CategorySection />
      <Slider />
      
      <div className="container">
        <div className="product-section-wrapper">
          <div className="product-section-left">
            <ProductSection 
              title="Best of electronics" 
              products={electronicsProducts}
            />
          </div>
          <div className="product-section-right">
            <img src="productright.webp" alt="Advertisement" />
          </div>
        </div>
      </div>

      <div className="container">
        <ProductSection 
          title="Beauty, Food, Toys and more" 
          products={beautyFoodProducts}
        />
      </div>

      <div className="container">
        <div className="brand-directory">
          <div className="link-header">
            <h4>Top Stories : Brand Directory</h4>
          </div>
          <div className="directory-links">
            <div className="directory-link">
              <span>MOST SEARCHED FOR ON FLIPKART:</span>
              {Array(30).fill().map((_, i) => (
                <a key={i} href="#"> 5g Mobile Phone |</a>
              ))}
            </div>
            <div className="directory-link">
              <span>MOBILES:</span>
              {Array(25).fill().map((_, i) => (
                <a key={i} href="#"> iPhone 13 |</a>
              ))}
            </div>
            <div className="directory-link">
              <span>LAPTOPS:</span>
              {Array(20).fill().map((_, i) => (
                <a key={i} href="#"> Gaming Laptop |</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;