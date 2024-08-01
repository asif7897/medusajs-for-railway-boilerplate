"use client"
import React, { useState, useEffect } from 'react';
import styles from './Carousel.module.css';

interface CarouselProps {
  images?: string[];
  auto?: boolean; // Optional prop for automatic slide change
  interval?: number; // Optional prop for interval between slides
}

const Carousel: React.FC<CarouselProps> = ({ auto = true, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [widthIs, setWidthIs] = useState<any>(665)

  const images: string[] = widthIs < 650 ?
  [
    "https://res.cloudinary.com/dqgrlf8uf/image/upload/v1722538623/fdsf_nchivm.webp",
    "https://res.cloudinary.com/dqgrlf8uf/image/upload/v1722538407/womens_were.png_mobile_mnqekk.webp",
    "https://res.cloudinary.com/dqgrlf8uf/image/upload/v1722538587/womens_were.png_real_jk3osp.webp"
  ]:
  [
    'https://res.cloudinary.com/dqgrlf8uf/image/upload/v1722538412/_SDP9211-Recovered-Recovered_opdmbl.webp',
    'https://res.cloudinary.com/dqgrlf8uf/image/upload/v1722538407/_SDP9388_ulwy02.webp',
    'https://res.cloudinary.com/dqgrlf8uf/image/upload/v1722538407/first_diehe6.webp',
  ];
  useEffect(() => {
    if (auto) {
      const intervalId = setInterval(goToNext, interval);
      return () => clearInterval(intervalId);
    }
  }, [currentIndex, auto, interval]);

  const getWidth = () => {
    if (typeof window !== 'undefined' && window) {
      setWidthIs(window.screen.width)
    }
  }


  useEffect(() => {
    getWidth()
    addEventListener('resize', getWidth)
    return () => {
      removeEventListener('resize', getWidth)
    }

  }, [typeof window !== 'undefined' && window])
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

  // if (widthIs < 650) {
  //   return (
  //     <div className={styles.carousel}>
  //       <img
  //         src="https://cdn.sanity.io/images/tgi56uf8/production/472558e1489a73991716c1e3e490087790322164-1400x1600.jpg?auto=format&fit=max&q=75&w=700" />
  //     </div>
  //   )
  // } else {
  return (

    <div className={styles.carousel}>
 
      
      <div className={styles.carouselSlide}>
        {images.map((image, index) => (
          <div key={index} className={`${styles.slide} ${index === currentIndex ? styles.activeSlide : styles.hiddenSlide}`}>
            <img src={image} alt={`Slide ${index}`} className={styles.carouselImage} />
          </div>
        ))}
      </div>
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
  // }
}

export default Carousel;
