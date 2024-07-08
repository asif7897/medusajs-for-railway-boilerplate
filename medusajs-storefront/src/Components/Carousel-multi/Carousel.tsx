// src/Carousel.tsx
import React, { useState, useEffect } from 'react';
import './Carousel.css';

interface Slide {
    image: string;
    name: string;
    value: string;
}

const slides: Slide[] = [
    {
        image: "https://res.cloudinary.com/dqgrlf8uf/image/upload/v1720379189/PKC_7433copy_grcqfn.jpg",
        name: "Suit",
        value: "suit"
    },
    {
        image: "https://res.cloudinary.com/dqgrlf8uf/image/upload/v1720379758/st1366_tiwmqi.jpg",
        name: "Blazer",
        value: "blazer"
    },
    {
        image: "https://res.cloudinary.com/dqgrlf8uf/image/upload/v1720379503/PKC_6783copy_jfer1o.jpg",
        name: "Punjabi",
        value: "punjabi"
    },
    {
        image: "https://res.cloudinary.com/dqgrlf8uf/image/upload/v1720379885/09-05-2024product00376_1024x1024_2x_j7tk27.jpg",
        name: "Formal shirt",
        value: "shirt"
    },
    {
        image: "https://res.cloudinary.com/dqgrlf8uf/image/upload/v1720380349/90_1010982-1A07978_1B000_10_WoolFormalPants-Clothing-Versace-online-store_1_3_x7zrpk.png",
        name: "Pant",
        value: "pant"
    },
    {
        image: "https://res.cloudinary.com/dqgrlf8uf/image/upload/v1720380496/A23WS0152363408_BLUE_vmxomo.jpg",
        name: "Shirt",
        value: "shirt"
    },
];

const Carousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slidesToShow = 3; // Number of slides to show at once

    useEffect(() => {
        const interval = setInterval(() => {
            goToNextSlide();
        }, 30000000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, []);

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex + 1) % slides.length
        );
    };

    const goToPreviousSlide = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex - 1 + slides.length) % slides.length
        );
    };

    const getSlidesToDisplay = () => {
        const endIndex = (currentIndex + slidesToShow) % slides.length;
        if (endIndex < currentIndex) {
            return [...slides.slice(currentIndex), ...slides.slice(0, endIndex)];
        } else {
            return slides.slice(currentIndex, endIndex);
        }
    };

    return (
        <div className="carousel">
            <button onClick={goToPreviousSlide} className="carousel-button prev">❮</button>
            <div className="carousel-slide-wrapper" style={{ transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` }}>
                {getSlidesToDisplay().map((slide, index) => (
                    <div key={index} className="carousel-slide" style={{
                        position: "relative"
                    }}>
                        <img src={slide.image} alt={slide.name} />
                        <div className="carousel-caption">
                            <h3>{slide.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={goToNextSlide} className="carousel-button next">❯</button>
        </div>
    );
};

export default Carousel;
