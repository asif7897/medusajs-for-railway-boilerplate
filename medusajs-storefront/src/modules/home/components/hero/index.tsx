// Ensure client-side rendering directive (if needed)
'use client';  // This directive ensures the component is rendered on the client side

// Import CSS files
import 'react-alice-carousel/lib/alice-carousel.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Import components from Medusa UI
import { Carousel } from 'react-responsive-carousel';
import { Button } from "@medusajs/ui";

// Your Hero component
const Hero = () => {
  return (
    <div className="relative top-0 h-[90dvh] w-full border-b border-ui-border-base bg-ui-bg-subtle main-hero-section">
      
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
