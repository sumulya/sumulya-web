import React from "react";
import { Carousel } from "antd";

interface SliderProps {
    children: any;
    styles?: any;
    wrapperClass?: string;
    carouselClass?: string;
}

export default function Slider(props: SliderProps) {
    const { children, styles, carouselClass, wrapperClass } = props;

    return (
        <div style={styles} className={wrapperClass}>
            <Carousel autoplay dotPosition="bottom" className={carouselClass}>
                {children}
            </Carousel>
        </div>
    );
}
