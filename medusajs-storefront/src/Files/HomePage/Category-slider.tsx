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
    return (
        <>
            <div className="w-full pt-[40px]">
            <div className="flex justify-center">
                    <h1 className="font-bold text-2xl tracking-widest mt-5">
                       OUR NEW COLLECTIONS 
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