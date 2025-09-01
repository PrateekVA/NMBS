import React, { useState, useEffect } from 'react';
import styles from './Slider.module.css';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    '/slider1.jpg',
    '/slider2.jpg',
    '/slider3.jpg'
  ];

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
    <div className={styles['slider-container']}>
      <div
        className={styles.slider}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index + 1}`} />
        ))}
      </div>
      <button
        className={styles.prev}
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        &#10094;
      </button>
      <button
        className={styles.next}
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Slider;
