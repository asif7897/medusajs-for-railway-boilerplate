"use client"
import React from "react"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles.css'
import Link from "next/link";
import { Arrow, ArrowLeft, ArrowRight } from "Components/Icons";
import LocalizedClientLink from "@modules/common/components/localized-client-link";


function SampleNextArrow(props: any) {
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

function SamplePrevArrow(props: any) {
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




const CategorySlick = ({ slides }: any) => {

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
            <div className="w-full">
                <Slider {...settings} className={'main_slick'}>
                    {slides.map((i: any, id: number) => {
                        return (
                            <>

                                <div className='image_box' style={{
                                    background: `url(${i.image})`
                                }}
                                    onClick={() => {
                                        // navigate(`/collections/${i.value}`)
                                    }}
                                >
                                    <LocalizedClientLink href={`/collections/${i.value}`} className="w-full h-full flex justify-center items-end pb-10 text-[#fff] text-[20px] font-[500] poppins link_box">

                                        {i.name}
                                    </LocalizedClientLink>

                                </div>
                            </>
                        )
                    })}
                </Slider>
            </div>
        </>
    )
}

export default CategorySlick