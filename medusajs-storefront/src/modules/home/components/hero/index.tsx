// components/Hero.tsx
'use client';

import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const Hero: React.FC = () => {
  const onChange = (index: number) => {
    console.log(`Slide changed to: ${index}`);
  };

  const onClickItem = (index: number) => {
    console.log(`Item clicked: ${index}`);
  };

  const onClickThumb = (index: number) => {
    console.log(`Thumbnail clicked: ${index}`);
  };

  return (
    <Carousel 
      showArrows={true} 
      onChange={onChange} 
      onClickItem={onClickItem} 
      onClickThumb={onClickThumb}
    >
      <div>
        <img src="https://via.placeholder.com/800x400.png?text=Slide+1" alt="Slide 1" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="https://via.placeholder.com/800x400.png?text=Slide+2" alt="Slide 2" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="https://via.placeholder.com/800x400.png?text=Slide+3" alt="Slide 3" />
        <p className="legend">Legend 3</p>
      </div>
      <div>
        <img src="https://via.placeholder.com/800x400.png?text=Slide+4" alt="Slide 4" />
        <p className="legend">Legend 4</p>
      </div>
      <div>
        <img src="https://via.placeholder.com/800x400.png?text=Slide+5" alt="Slide 5" />
        <p className="legend">Legend 5</p>
      </div>
      <div>
        <img src="https://via.placeholder.com/800x400.png?text=Slide+6" alt="Slide 6" />
        <p className="legend">Legend 6</p>
      </div>
    </Carousel>
  );
};

export default Hero;
