"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Slider.module.css";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // make sure your images are inside /public folder
  const images = ["/images/slider1.jpg",
  "/images/slider2.jpg",
  "/images/slider3.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className={styles.sliderContainer}>
      <div
        className={styles.slider}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            width={1200}
            height={400}
            priority={index === 0}
          />
        ))}
      </div>
      <button className={styles.prev} onClick={prevSlide}>
        &#10094;
      </button>
      <button className={styles.next} onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Slider;
