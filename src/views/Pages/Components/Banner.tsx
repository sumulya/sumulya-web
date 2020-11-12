import React, { FC } from 'react';
import './../../../App.css';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Carousel, Row, Col, Card, Tag, Button, Typography } from 'antd';

const { Text } = Typography;

const Banner: FC = () => (
    <div>

        <Carousel dotPosition="top" autoplay>
            <div className="carousel">
                <h3><img alt="banner" src="/images/banner1.png" /></h3>
            </div>
            <div className="carousel">
                <h3><img alt="banner" src="/images/banner2.jpg" /></h3>
            </div>
        </Carousel>
    </div >
);


export default Banner;
