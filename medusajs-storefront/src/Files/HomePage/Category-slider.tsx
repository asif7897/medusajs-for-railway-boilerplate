"use client"
import React from "react"
import './styles.css'
import FashionCarousel from "Components/Carousel-2";

interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

interface CategorySlickProps {
    slides: {
        image: string;
        value: string;
        name: string;
    }[];
}


interface Slide {
    image: string;
    name: string;
    value: string;
}
const CategorySlick: React.FC<CategorySlickProps> = () => {


    const slides: Slide[] = [
        {
            image: "https://res.cloudinary.com/dvzdodv1r/image/upload/v1731795656/IMG_7013_yquojq.png",
            name: "PREMIUM SUIT",
            value: "premium_suit"
        },
        {
            image: "https://res.cloudinary.com/dvzdodv1r/image/upload/v1731795043/Blazer_mckp_bg_edit_zblkg4.jpg",
            name: "PLATINUM BLAZER",
            value: "platinum_blazer"
        },
        {
            image: "https://res.cloudinary.com/dvzdodv1r/image/upload/v1731795041/Shirt_bg_edit_dcl7ep.jpg",
            name: "FORMAL SHIRT",
            value: "formal_shirt"
        },
        {
            image: "https://res.cloudinary.com/dvzdodv1r/image/upload/v1731795048/Black_pant_dcokn8.jpg",
            name: "FORMAL PANT",
            value: "formal_pant"
        },
        {
            image: "https://res.cloudinary.com/dvzdodv1r/image/upload/v1731795029/1_ccrtcy.png",
            name: "HALF COAT",
            value: "half_coat"
        },
    ];
    
    

    return (
        <>
            <div className="w-full pt-[40px]">
            <div className="flex justify-center">
                    <h1 className="font-bold text-2xl tracking-widest mt-5">
                    MENS WEAR
                    </h1>
                </div>
                
                <div className="w-full h-[500px] slider_main_box" style={{
                    height: "80vh"
                }}>
                    <FashionCarousel slides={slides} />
                    {/* <Carousel /> */}
                </div>
            </div>
        </>
    )
}

export default CategorySlick