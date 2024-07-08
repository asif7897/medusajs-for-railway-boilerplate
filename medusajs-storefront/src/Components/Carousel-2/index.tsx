import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Slide } from './types'; // Import your Slide interface
import './styles.css'
import LocalizedClientLink from '@modules/common/components/localized-client-link';
interface Props {
    slides: Slide[];
}

const FashionCarousel: React.FC<Props> = ({ slides }) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <Carousel
            responsive={responsive}
            infinite={true}
            draggable={false}
            showDots={false}
            ssr={true}
        >
            {slides.map((slide, index) => (
                <div key={index} className='h-full w-full'>
                    <LocalizedClientLink
                        href={`/collections/${slide.value}`}>
                        <div style={{
                            background: `url(${slide.image})`
                        }} className='h-full w-full slide_image'>
                            <div className='caption_'>
                                <p className='m-0 text-[red] poppins font-[500]' style={{
                                    letterSpacing: "1px"
                                }}>{slide.name}</p>
                            </div>
                        </div>
                    </LocalizedClientLink>
                </div>
            ))}
        </Carousel>
    );
};

export default FashionCarousel;
