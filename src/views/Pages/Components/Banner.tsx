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
        <div className="site-card-wrapper">
            <div className="site-card-wrapper">
                <Row gutter={16}>
                    <Col span={12}>
                        <Card
                            cover={
                                <div>
                                    <img alt="cover1" src="/images/cover1.jpg" />
                                    <div className="center">
                                        <Tag className="badgetag" color="#87d068">SAVE UPTO 20%</Tag>
                                        <h2>Organic Foods</h2>
                                        <h5>Start sopping with some organic foods</h5>
                                        <Button className="btnCover"><b>Order Now&nbsp;<ArrowRightOutlined /></b></Button>
                                    </div>
                                </div>
                            }
                            className="bannerCard"
                        >
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card
                            cover={
                                <div>
                                    <img alt="cover2" src="/images/cover2.jpg" />
                                    <div className="center">
                                        <Tag className="badgetag" color="#bf0455">SAVE UPTO 20%</Tag>
                                        <h2>35% Cashback !!</h2>
                                        <h5>Start sopping with some organic foods</h5>
                                        <Button className="btnCover"><b>Order Now&nbsp; <ArrowRightOutlined /></b></Button>
                                    </div>
                                </div>
                            }
                            className="bannerCard"
                        >
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    </div >
);


export default Banner;
