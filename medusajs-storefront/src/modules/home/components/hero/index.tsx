'use client';  // This directive ensures the component is rendered on the client side

 
import 'react-alice-carousel/lib/alice-carousel.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

 

//const items = [
 // <img src="https://user-images.githubusercontent.com/63467479/195140534-b89c7ef6-916b-4c08-aef8-3cc51ee65284.png" onDragStart={handleDragStart} role="presentation" />,
 // <img src="https://user-images.githubusercontent.com/63467479/195140534-b89c7ef6-916b-4c08-aef8-3cc51ee65284.png" onDragStart={handleDragStart} role="presentation" />,
 // <img src="https://user-images.githubusercontent.com/63467479/195140534-b89c7ef6-916b-4c08-aef8-3cc51ee65284.png" onDragStart={handleDragStart} role="presentation" />,
// ];

const Hero = () => {
  return (
    <div className="h-[4vh] w-full relative">
      
      <div>
        <Carousel autoPlay interval={2500} infiniteLoop showThumbs={false} swipeable>
          <div>
            <img src="https://user-images.githubusercontent.com/72182438/195152867-721ca98b-bc8e-474f-8085-c6593382bc30.png" />
          </div>
          <div>
            <img src="https://user-images.githubusercontent.com/72182438/195152892-33d91384-a7fb-4c8a-bf17-aafc9017a49a.png" />
          </div>
          <div>
            <img src="https://user-images.githubusercontent.com/72182438/195152903-425d6a91-e7c7-4b51-82a4-377df8edaa82.png" />
          </div>
        </Carousel>
      </div>
      
    </div>
  );
}

export default Hero;
