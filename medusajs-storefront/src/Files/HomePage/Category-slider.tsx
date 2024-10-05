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
            image: "https://res.cloudinary.com/dgzmsjcxx/image/upload/v1728121344/section%20two/ms0t0dlfjyxcz5qwz29y.webp",
            name: "PREMIUM SUIT",
            value: "premium_suit"
        },
        {
            image: "https://res.cloudinary.com/dgzmsjcxx/image/upload/v1728121347/section%20two/wcyjnwb4p2g05lltuhx6.webp",
            name: "PLATINUM BLAZER",
            value: "platinum_blazer"
        },
        {
            image: "https://res.cloudinary.com/dgzmsjcxx/image/upload/v1728121357/section%20two/hcoidrhwmyes0emwipij.webp",
            name: "FORMAL SHIRT",
            value: "formal_shirt"
        },
        {
            image: "https://res.cloudinary.com/dgzmsjcxx/image/upload/v1728121348/section%20two/y26mdpeecmvrhwvewram.webp",
            name: "FORMAL PANT",
            value: "formal_pant"
        },
        {
            image: "https://res.cloudinary.com/dgzmsjcxx/image/upload/v1728121332/section%20two/k33qom42spb7okpxkgsk.webp",
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