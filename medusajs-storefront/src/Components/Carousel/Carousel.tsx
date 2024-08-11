"use client"
import React, { useState, useEffect } from 'react';
import styles from './Carousel.module.css';
import { Button } from 'Components/Reusable-Modules/buttons';

interface CarouselProps {
  images?: string[];
  auto?: boolean; // Optional prop for automatic slide change
  interval?: number; // Optional prop for interval between slides
}

const Button_custom = ({
  text,
  onClick,
}: {
  text: string,
  onClick: () => void
}) => {
  return (
    <Button bgColor='#fff !important' color='#000' borderRadius='5px' className="font-[500] text-[16px]" onClick={() => {
      if (typeof onClick == 'function') {
        onClick()
      }
    }}>
      {text}
    </Button>
  )
}

const Carousel: React.FC<CarouselProps> = ({ auto = true, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [widthIs, setWidthIs] = useState<any>(665)

  const images: string[] = widthIs < 650 ?
    [
      "https://res.cloudinary.com/dqgrlf8uf/image/upload/v1722538623/fdsf_nchivm.webp",
      "https://res.cloudinary.com/dqgrlf8uf/image/upload/v1722538407/womens_were.png_mobile_mnqekk.webp",
      "https://res.cloudinary.com/dqgrlf8uf/image/upload/v1722541646/picture_a7eq0n.webp"
    ] :
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
            <div className='flex justify-center gap-[20px] absolute bottom-[50px] left-[50px] poppins' >

              <Button_custom text='Shop Men' onClick={() => { }} />
              <Button_custom text='Shop Women' onClick={() => { }} />

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
