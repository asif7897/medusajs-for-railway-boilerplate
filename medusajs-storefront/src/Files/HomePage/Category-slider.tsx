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
            image: "https://res.cloudinary.com/dqgrlf8uf/image/upload/v1725662909/20240604_121624_1724569589034_hjeafp.webp",
            name: "PREMIUM SUIT",
            value: "premium_suit"
        },
        {
            image: "https://res.cloudinary.com/dqgrlf8uf/image/upload/v1725661092/Shirt_bg_edit_ykxuim.webp",
            name: "FORMAL SHIRT",
            value: "formal_shirt"
        },
        {
            image: "https://res.cloudinary.com/dqgrlf8uf/image/upload/v1725661097/Black_pant_nmh6os.webp",
            name: "FORMAL PANT",
            value: "formal_pant"
        },
        {
            image: "https://res.cloudinary.com/dqgrlf8uf/image/upload/v1725663151/1_1_vidbgp.webp",
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