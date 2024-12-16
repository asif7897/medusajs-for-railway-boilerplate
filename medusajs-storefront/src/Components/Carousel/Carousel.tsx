'use client'; // This line makes the component a client component

import React, { useState, useEffect } from 'react';
import styles from './Carousel.module.css';
import { Button } from 'Components/Reusable-Modules/buttons';
import Link from 'next/link';

interface CarouselProps {
  images?: string[];
  auto?: boolean;
  interval?: number;
}

const CustomButton = ({
  text,
  href,
}: {
  text: string;
  href: string;
}) => {
  return (
    <Link href={href} passHref>
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
        {text}
      </Button>
    </Link>
  );
};

const Carousel: React.FC<CarouselProps> = ({ auto = true, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [widthIs, setWidthIs] = useState<number>(665);
  const [showButtons, setShowButtons] = useState<boolean>(false);

  const images: string[] = widthIs < 650
    ? [
        
      
     
     
      "https://seasky2004.s3.ap-south-1.amazonaws.com/seasky_image/banner_image/3/tie_mobile_zb5mva_oy66id.webp",
      "https://seasky2004.s3.ap-south-1.amazonaws.com/seasky_image/banner_image/1/for_mobile_nonk1a_kuhlnq.webp",
      "https://seasky2004.s3.ap-south-1.amazonaws.com/seasky_image/banner_image/2/IMG_1240.jpg_mobile_zzdesy_ob1aee.webp",
      
     
     
      
       

      ]
    : [

     
      "https://seasky2004.s3.ap-south-1.amazonaws.com/seasky_image/banner_image/3/tie_pc_tbfzc4_ft6ajh.webp", 
      "https://seasky2004.s3.ap-south-1.amazonaws.com/seasky_image/banner_image/1/_SDP9211-Recovered-Recovered_iti6r8_gvxk2g.webp",
      "https://seasky2004.s3.ap-south-1.amazonaws.com/seasky_image/banner_image/2/banner_panjabi_uat6u0_mtwlzc.webp"
      
     
    
    


      ];

  useEffect(() => {
    if (auto) {
      const intervalId = setInterval(goToNext, interval);
      return () => clearInterval(intervalId);
    }
  }, [currentIndex, auto, interval]);

  const getWidth = () => {
    if (typeof window !== 'undefined') {
      setWidthIs(window.innerWidth); // Use innerWidth for better accuracy
    }
  };

  useEffect(() => {
    getWidth();
    window.addEventListener('resize', getWidth);
    return () => {
      window.removeEventListener('resize', getWidth);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { // Adjust scroll position as needed
        setShowButtons(true);
      } else {
        setShowButtons(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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




  const renderButtons = () => {
    switch (currentIndex) {
      case 0:
        return (
          <>
            <CustomButton text="SHOP TIE" href="/collections/box_tie" />
            <CustomButton text="SHOP BELT" href="/collections/luxury_belt" />
          </>
        );
      case 1:
        return (
          <>
            <CustomButton text="SHOP MEN" href="/collections/premium_suit" />
            <CustomButton text="SHOP WOMEN" href="/collections/women's_suit" />
          </>
        );
      case 2:
        return (
          <>
            <CustomButton text="SHOP NOW" href="/collections/elite_panjabi" />
          </>
        );
      default:
        return null;
    }
  };
  






  return (
    <div className={styles.carousel}>
      <div className={styles.carouselSlide}>
        {images.map((image, index) => (
          <div key={index} className={`${styles.slide} ${index === currentIndex ? styles.activeSlide : styles.hiddenSlide}`}>
            <div className={`${styles.buttonContainer} ${showButtons ? styles.show : ''}`}>
              {renderButtons()}
            </div>
            <img src={image} alt={`Slide ${index}`} className={styles.carouselImage} />
          </div>
        ))}
      </div>
      <button
        className={`${styles.carouselButton} ${styles.carouselButtonLeft} ${showButtons ? styles.show : ''}`}
        onClick={goToPrevious}
      >
        &#9664;
      </button>
      <button
        className={`${styles.carouselButton} ${styles.carouselButtonRight} ${showButtons ? styles.show : ''}`}
        onClick={goToNext}
      >
        &#9654;
      </button>
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
