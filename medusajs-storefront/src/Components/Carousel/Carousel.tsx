"use client"
import React, { useState, useEffect } from 'react';
import styles from './Carousel.module.css';
import { Button } from 'Components/Reusable-Modules/buttons';
import Link from 'next/link';


interface CarouselProps {
  images?: string[];
  auto?: boolean; // Optional prop for automatic slide change
  interval?: number; // Optional prop for interval between slides
}



const Button_custom = ({
  text,
  onClick,
}: {
  text: string;
  onClick?: () => void;
}) => {
  return (
    <Link href="/collections/premium_suit" passHref>
      <Button
        bgColor="gray"
        color="#fff"  // Set text color to white
        borderRadius="5px"
        className="font-[500] text-[16px] bg-gray-500 border-2 border-gray-500 hover:bg-black hover:border-black hover:text-white transition-colors duration-300"
        onClick={onClick}
      >
        {text}
      </Button>
    </Link>
  );
};


const Button_custom2 = ({
  text,
  onClick,
}: {
  text: string;
  onClick?: () => void;
}) => {
  return (
    <Link href="/collections/premium_suit" passHref>
      <Button
        bgColor="gray"
        color="#fff"  // Set text color to white
        borderRadius="5px"
        className="font-[500] text-[16px] bg-gray-500 border-2 border-gray-500 hover:bg-black hover:border-black hover:text-white transition-colors duration-300"
        onClick={onClick}
      >
        {text}
      </Button>
    </Link>
  );
};





const Carousel: React.FC<CarouselProps> = ({ auto = true, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [widthIs, setWidthIs] = useState<any>(665)

  const images: string[] = widthIs < 650 ?
    [
      "https://res.cloudinary.com/dqgrlf8uf/image/upload/v1723759877/3.3_bfptbt.webp",
      "https://res.cloudinary.com/dqgrlf8uf/image/upload/v1723759877/2.2_c4cttl.webp",
      "https://res.cloudinary.com/dqgrlf8uf/image/upload/v1723759877/1.1_gaytzo.webp"
    ] :
    [
      'https://res.cloudinary.com/dqgrlf8uf/image/upload/v1723759878/3_uqfulu.webp',
      'https://res.cloudinary.com/dqgrlf8uf/image/upload/v1723759877/1_mbtjqq.webp',
      'https://res.cloudinary.com/dqgrlf8uf/image/upload/v1723759878/2_tzhqd0.webp',
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
            <div className='flex justify-center gap-[20px] absolute bottom-[50px] left-[50px] poppins' style={{
              bottom:"30px",
              left:"30px"
            }} >

              <Button_custom text='Shop Men' onClick={() => { }} />
              <Button_custom2 text='Shop Women' onClick={() => { }} />

            </div>
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
