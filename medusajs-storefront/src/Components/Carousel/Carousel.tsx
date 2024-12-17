'use client'; // Client-side component

import React, { useState, useEffect } from 'react';
import styles from './Carousel.module.css';
import { Button } from 'Components/Reusable-Modules/buttons';
import Link from 'next/link';

interface CarouselProps {
  auto?: boolean;
  interval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ auto = true, interval = 3000 }) => {
  const [widthIs, setWidthIs] = useState<number>(665);

  const images: string[] = widthIs < 650
    ? ["https://seasky2004.s3.ap-south-1.amazonaws.com/seasky_image/v2/banner/For+mobile.JPG"]
    : ["https://seasky2004.s3.ap-south-1.amazonaws.com/seasky_image/v2/banner/For+pc.JPG"];

  useEffect(() => {
    const getWidth = () => {
      if (typeof window !== 'undefined') {
        setWidthIs(window.innerWidth); // Use innerWidth for better accuracy
      }
    };

    getWidth();
    window.addEventListener('resize', getWidth);
    return () => {
      window.removeEventListener('resize', getWidth);
    };
  }, []);

  return (
    <div className={styles.carousel}>
      {/* Image */}
      <div className={styles.carouselSlide}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={styles.carouselImage}
          />
        ))}
      </div>

      {/* Typography */}
      <div className={styles.typography}>
        <h1 className={styles.subtitle}>Ready-Made Suit</h1>
        <p className={styles.title}>Sea Sky</p>
      </div>

      {/* Button */}
      <div className={styles.buttonContainer}>
        <Link href="/collections/premium_suit" passHref>
          <Button
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)', // Initial transparent white background
              borderColor: 'rgba(255, 255, 255, 0.3)', // Initial light gray border
              color: '#ffffff', // White text
              borderRadius: '5px',
              fontWeight: 500,
              fontSize: '16px',
              transition: 'all 0.3s ease', // Smooth transition for all properties
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Shadow effect
              backdropFilter: 'blur(10px)', // Glass-like effect
            }}
            className="border-2 hover:bg-[rgba(255, 255, 255, 0.3)] hover:border-[rgba(255, 255, 255, 0.5)] hover:scale-105 hover:shadow-lg"
          >
            Shop Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Carousel;