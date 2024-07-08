"use client"
import React from "react"
import Slider, { Settings } from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles.css'
import Link from "next/link";
import { Arrow, ArrowLeft, ArrowRight } from "Components/Icons";
import LocalizedClientLink from "@modules/common/components/localized-client-link";
import Carousel from "Components/Carousel-multi/Carousel";
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

    const settings = {
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
        prevArrow: <SamplePrevArrow />
    };
    return (
        <>
            <div className="w-full h-[500px]" style={{
                height:"500px"
            }}>
                {/* <Slider {...settings} className={'main_slick'}>
                    {slides.map((i: any, id: number) => {
                        return (
                            <>

                                <div className='image_box' style={{
                                    background: `url(${i.image})`
                                }}
                                >
                                    <LocalizedClientLink href={`/collections/${i.value}`} className="w-full h-full flex justify-center items-end pb-10 text-[#fff] text-[20px] font-[500] poppins link_box">

                                        {i.name}
                                    </LocalizedClientLink>

                                </div>
                            </>
                        )
                    })}
                </Slider> */}
                <Carousel />
            </div>
        </>
    )
}

export default CategorySlick