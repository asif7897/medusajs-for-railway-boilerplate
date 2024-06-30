'use client';


import UnderlineLink from "@modules/common/components/underline-link"
 
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

 
const Hero = () => {
  return (
    <div className="h-[5vh] w-full relative">
       
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
  )
}

export default Hero ;
