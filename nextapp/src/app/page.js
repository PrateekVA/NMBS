"use client";

import Image from "next/image";
import CategorySection from "@/components/CategorySection/CategorySection";
import Slider from "@/components/Slider/Slider";
import ProductSection from "@/components/ProductSection/ProductSection";
import styles from "./Home.module.css"; // ✅ CSS module

const Home = () => {
  const electronicsProducts = [
    { name: "Top Mirrorless Cameras", image: "/images/product2.webp", subtitle: "Shop Now!" },
    { name: "Top Watches", image: "/images/product3.webp", subtitle: "Shop Now!" },
    { name: "Printers", image: "/images/product4.webp", subtitle: "Shop Now!" },
    { name: "Monitors", image: "/images/product5.webp", subtitle: "Shop Now!" },
    { name: "Projectors", image: "/images/product6.webp", subtitle: "Shop Now!" },
    { name: "Top Mirrorless Cameras", image: "/images/product7.webp", subtitle: "Shop Now!" },
  ];

  const beautyFoodProducts = [
    { name: "Bat man", image: "/images/product10.webp", subtitle: "Shop Now!" },
    { name: "Pens", image: "/images/product11.webp", subtitle: "Shop Now!" },
    { name: "Cycles", image: "/images/product12.webp", subtitle: "Shop Now!" },
    { name: "Toys", image: "/images/product13.webp", subtitle: "Shop Now!" },
    { name: "Beauty Products", image: "/images/product14.webp", subtitle: "Shop Now!" },
    { name: "Top Mirrorless Cameras", image: "/images/product7.webp", subtitle: "Shop Now!" },
  ];

  return (
    <div className={styles.home}>
      <CategorySection />
      <Slider />

      <div className="container">
        <div className={styles.productSectionWrapper}>
          <div className={styles.productSectionLeft}>
            <ProductSection title="Best of electronics" products={electronicsProducts} />
          </div>
          <div className={styles.productSectionRight}>
            <Image src="/images/productright.webp" alt="Advertisement" width={400} height={400} />
          </div>
        </div>
      </div>

      <div className="container">
        <ProductSection title="Beauty, Food, Toys and more" products={beautyFoodProducts} />
      </div>

      <div className="container">
        <div className={styles.brandDirectory}>
          <div className={styles.linkHeader}>
            <h4>Top Stories : Brand Directory</h4>
          </div>
          <div className={styles.directoryLinks}>
            <div className={styles.directoryLink}>
              <span>MOST SEARCHED FOR ON FLIPKART:</span>
              {Array(30).fill().map((_, i) => (
                <a key={i} href="#"> 5g Mobile Phone |</a>
              ))}
            </div>
            <div className={styles.directoryLink}>
              <span>MOBILES:</span>
              {Array(25).fill().map((_, i) => (
                <a key={i} href="#"> iPhone 13 |</a>
              ))}
            </div>
            <div className={styles.directoryLink}>
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
