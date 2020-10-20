import React, { FC } from 'react';
import './../../../App.css';
import { Carousel } from 'antd';

const Banner: FC = () => (
    <Carousel dotPosition="top" autoplay>
        <div className="carousel">
            <h3><img src="/images/banner1.png" /></h3>
        </div>
        <div className="carousel">
            <h3><img src="/images/banner2.jpg" /></h3>
        </div>
    </Carousel>
);


export default Banner;
