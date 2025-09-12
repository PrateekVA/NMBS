import Link from "next/link";
import Image from "next/image";
import styles from "./CategorySection.module.css"; // renamed for CSS Modules

const CategorySection = () => {
  const categories = [
    { name: "Minutes", link: "#", icon: "/images/cat1.webp" },
    { name: "Mobile & Tablets", link: "/mobilesandtablets", icon: "/images/cat2.webp" },
    { name: "Fashion", link: "/fashion", icon: "/images/cat3.webp" },
    { name: "Electronics", link: "/electronics", icon: "/images/cat4.webp" },
    { name: "Home & Furniture", link: "/homeandfurniture", icon: "/images/cat5.webp" },
    { name: "TVs & Appliances", link: "/tvsandapplicances", icon: "/images/cat6.webp" },
    { name: "Flight Booking", link: "/flightbooking", icon: "/images/cat7.webp" },
    { name: "Beauty and Food", link: "/beautyandfood", icon: "/images/cat8.webp" },
  ];

  return (
    <section className={styles.categorySection}>
      <div className={styles.container}>
        <div className={styles.categoryGrid}>
          {categories.map((category, index) => (
            <Link key={index} href={category.link} className={styles.categoryItem}>
              <div className={styles.categoryImage}>
                <Image
                  src={category.icon}
                  alt={category.name}
                  width={80}
                  height={80}
                />
              </div>
              <div className={styles.categoryInfo}>
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
