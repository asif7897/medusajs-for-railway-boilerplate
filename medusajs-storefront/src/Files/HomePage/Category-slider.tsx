"use client"
import React from "react"
import Slider, { Settings } from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles.css'
import Link from "next/link";
import { Arrow, ArrowLeft, ArrowRight } from "Components/Icons";
import LocalizedClientLink from "@modules/common/components/localized-client-link";

interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

function SampleNextArrow(props: ArrowProps) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} slick-button`}
            style={{ ...style }}
            onClick={onClick}
        >
            <ArrowLeft size="30px" color="#fff" />
        </div>
    );
}

function SamplePrevArrow(props: ArrowProps) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} slick-button`}
            style={{ ...style }}
            onClick={onClick}
        >
            <ArrowRight size="30px" color="#fff" />
        </div>
    );
}

interface CategorySlickProps {
    slides: {
        image: string;
        value: string;
        name: string;
    }[];
}

const CategorySlick: React.FC<CategorySlickProps> = ({ slides }) => {
    const settings: Settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: 'linear',
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        className: 'main_slick'
    };

    return (
        <div className="w-full">
            <Slider {...settings}>
                {slides.map((slide, id) => (
                    <div key={id} className='image_box' style={{
                        background: "red"
                    }}>
                        <LocalizedClientLink href={`/collections/${slide.value}`} className="w-full h-full flex justify-center items-end pb-10 text-[#fff] text-[20px] font-[500] poppins link_box">
                            {slide.name}
                        </LocalizedClientLink>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default CategorySlick;
