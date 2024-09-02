import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Slide } from './types'; // Import your Slide interface
import LocalizedClientLink from '@modules/common/components/localized-client-link';
import './styles.css';

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
            breakpoint: { max: 1024, min: 650 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 650, min: 0 },
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
                <div key={index} className='relative h-full w-full'>
                    <LocalizedClientLink href={`/collections/${slide.value}`}>
                        <div className='slide_image'>
                            <img src={slide.image} alt={slide.name} />
                            <div className='caption_'>
                                <p className='m-0'>{slide.name}</p>
                            </div>
                        </div>
                    </LocalizedClientLink>
                </div>
            ))}
        </Carousel>
    );
};

export default FashionCarousel;
