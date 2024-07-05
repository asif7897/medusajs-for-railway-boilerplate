"use client"
import React, { useState, useEffect } from 'react';
import styles from './Carousel.module.css';

interface CarouselProps {
  images: string[];
  auto?: boolean; // Optional prop for automatic slide change
  interval?: number; // Optional prop for interval between slides
}

const Carousel: React.FC<CarouselProps> = ({ images, auto = true, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    if (auto) {
      const intervalId = setInterval(goToNext, interval);
      return () => clearInterval(intervalId);
    }
  }, [currentIndex, auto, interval]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className={styles.carousel}>
      {/* <button onClick={goToPrevious} className={`${styles.carouselButton} ${styles.carouselButtonLeft}`}>❮</button> */}
      <div className={styles.carouselSlide}>
        {images.map((image, index) => (
          <div key={index} className={`${styles.slide} ${index === currentIndex ? styles.activeSlide : styles.hiddenSlide}`}>
            <img src={image} alt={`Slide ${index}`} className={styles.carouselImage} />
          </div>
        ))}
      </div>
      {/* <button onClick={goToNext} className={`${styles.carouselButton} ${styles.carouselButtonRight}`}>❯</button> */}
      <div className={styles.navigationDots}>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
