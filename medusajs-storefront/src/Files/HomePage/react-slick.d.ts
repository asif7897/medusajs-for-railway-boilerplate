declare module 'react-slick' {
    import * as React from 'react';

    export interface Settings {
        dots?: boolean;
        infinite?: boolean;
        speed?: number;
        slidesToShow?: number;
        slidesToScroll?: number;
        autoplay?: boolean;
        autoplaySpeed?: number;
        cssEase?: string;
        arrows?: boolean;
        nextArrow?: React.ReactNode;
        prevArrow?: React.ReactNode;
        responsive?: Array<{
            breakpoint: number;
            settings: Partial<Settings>;
        }>;
        children: any;
        className: string | any
    }

    export default class Slider extends React.Component<Settings> { }
}
