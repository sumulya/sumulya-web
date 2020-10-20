import React, { FC, useState } from 'react';
import './../../../App.css';
import { Card, Button } from 'antd';
import { ShoppingOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';
const { Meta } = Card;

const Cards: FC = () => {

    const [cartCount, setCartCount] = useState(0);

    return (
        <div className="allcards">
            <h3>All Products </h3>
            <div className="card" >
                <Card
                    // title={<div className="cardFunc"
                    //     style={{ textAlign: 'center', backgroundColor: '#303030', color: 'white', borderRadius: '10px', height: '30px', marginTop: '-15px' }}
                    // ><MinusOutlined style={{ marginRight: '20px' }} />  {cartCount}  <PlusOutlined style={{ marginLeft: '20px' }} /></div>}
                    hoverable
                    extra={
                        <ShoppingOutlined style={{ fontSize: "15px" }} onClick={() => alert('Hello')} />
                    }
                    style={{ width: 200 }}
                    cover={<img alt="example" src="https://upload.wikimedia.org/wikipedia/en/f/f9/Twix-Wrapper-Small.jpg" />}
                >
                    <Meta className="metacard" title="रु 60" description="TWIX BAR" />
                </Card>
            </div>
            <div className="card">
                <Card
                    hoverable
                    extra={<ShoppingOutlined style={{ fontSize: "15px" }} />}
                    style={{ width: 200 }}
                    cover={<img alt="example" src="https://sumulya.s3.ap-south-1.amazonaws.com/media/products/202007-1112-0406-untitled-design-3.png" />}
                >
                    <Meta className="metacard" title="रु 240" description="DABUR REAL MIXED FRUIT" />
                </Card>
            </div>
            <div className="card">
                <Card
                    hoverable
                    extra={<ShoppingOutlined style={{ fontSize: "15px" }} />}
                    style={{ width: 200 }}
                    cover={<img alt="example" src="https://www.okdam.com/public/images/upload/product/97.gif" />}
                >
                    <Meta className="metacard" title="रु 755" description="HORLICKS JAR" />
                </Card>
            </div>
            <div className="card">
                <Card
                    hoverable
                    extra={<ShoppingOutlined style={{ fontSize: "15px" }} />}
                    style={{ width: 200 }}
                    cover={<img alt="example" src="https://sumulya.s3.ap-south-1.amazonaws.com/media/products/202007-1416-4548-hulas-20kg.png" />}
                >
                    <Meta className="metacard" title="रु 3100" description="HULAS BASMATI PREMIUM ( 20 kg)" />
                </Card>
            </div>
            <div className="card">

                <Card
                    hoverable
                    extra={<ShoppingOutlined style={{ fontSize: "15px" }} />}
                    style={{ width: 200 }}
                    cover={<img alt="example" src="https://sumulya.s3.ap-south-1.amazonaws.com/media/products/202007-0911-0519-organic-cashew-500x500.png" />}
                >
                    <Meta className="metacard" title="रु 1600" description=" HAND PICKED CASHEW" />
                </Card>
            </div>
            <div className="card">
                <Card
                    hoverable
                    extra={<ShoppingOutlined style={{ fontSize: "15px" }} />}
                    style={{ width: 200 }}
                    cover={<img alt="example" src="https://sumulya.s3.ap-south-1.amazonaws.com/media/products/202007-2107-2832-druk-sauce.png" />}
                >
                    <Meta className="metacard" title="रु 170" description="DRUK TOMATO KETCHUP (500 GM)" />
                </Card>
            </div>
            <div className="card">
                <Card
                    hoverable
                    extra={<ShoppingOutlined style={{ fontSize: "15px" }} />}
                    style={{ width: 200 }}
                    cover={<img alt="example" src="https://sumulya.s3.ap-south-1.amazonaws.com/media/products/202007-2206-1048-untitled-design-30.png" />}
                >
                    <Meta className="metacard" title="रु 300" description="DOVE HAIR THERAPY (360 ML)" />
                </Card>
            </div>
            <div className="card">
                <Card
                    hoverable
                    extra={<ShoppingOutlined style={{ fontSize: "15px" }} />}
                    style={{ width: 200 }}
                    cover={<img alt="example" src="https://sumulya.s3.ap-south-1.amazonaws.com/media/products/202007-2909-2500-untitled-design-99.png" />}
                >
                    <Meta className="metacard" title="रु 135" description="HULAS ATTA - 2KG" />
                </Card>
            </div>
            <div className="card">

                <Card
                    hoverable
                    extra={<ShoppingOutlined style={{ fontSize: "15px" }} />}
                    style={{ width: 200 }}
                    cover={<img alt="example" src="https://sumulya.s3.ap-south-1.amazonaws.com/media/products/202007-1411-0100-amrit-oil.png" />}
                >
                    <Meta className="metacard" title="रु 170" description="AMRIT OIL ( 1L )" />
                </Card>
            </div>
            <div className="card">
                <Card
                    hoverable
                    extra={<ShoppingOutlined style={{ fontSize: "15px" }} />}
                    style={{ width: 200 }}
                    cover={<img alt="example" src="https://sumulya.s3.ap-south-1.amazonaws.com/media/products/202007-0510-3953-hypercity-every-day-sugar-loose-v-1-kg.png" />}
                >
                    <Meta className="metacard" title="रु 90" description="SUGAR 'A' GRADE (1 KG)" />
                </Card>
            </div>
            <div className="card">
                <Card
                    hoverable
                    extra={<ShoppingOutlined style={{ fontSize: "15px" }} />}
                    style={{ width: 200 }}
                    cover={<img alt="example" src="https://sumulya.s3.ap-south-1.amazonaws.com/media/products/202006-1207-2950-l30290.png" />}
                >
                    <Meta className="metacard" title="रु 210" description="Tokla Tea Pouch 500GM" />
                </Card>
            </div>
            <div className="card">
                <Card
                    hoverable
                    extra={<ShoppingOutlined style={{ fontSize: "15px" }} />}
                    style={{ width: 200 }}
                    cover={<img alt="example " src="https://sumulya.s3.ap-south-1.amazonaws.com/media/products/202007-1408-4808-rahar-dal.png" />}
                >
                    <Meta className="metacard" title="रु 170" description="RAHAR DAAL 'A' GRADE (1 KG)" />
                </Card>
            </div>

        </div>
    );
}


export default Cards;
