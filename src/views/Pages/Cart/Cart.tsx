import React, { FC, useState } from 'react';
import Foot from '../../Partials/Foot';
import Head from '../../Partials/Head';
import { Typography, Form, Input, Button, Tag } from 'antd';
// import CheckableTag from "antd/lib/tag/CheckableTag";
import { cartProducts } from './../../../Data/products';
import { Product } from './../../../Interfaces/index';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import './../../../App.css';
import MainLayout from '../../Layouts/MainLayout';

const { Text, Title } = Typography;


const Cart: FC = () => {

    const [cartCount, setCartCount] = useState({});
    console.log(cartCount);

    const handleAdd = (product: Product) => {
        const index = cartProducts.indexOf(product);
        cartProducts[index] = { ...product };
        cartProducts[index].count++;
        setCartCount({ cartProducts });
    }

    const handleSubtract = (product: Product) => {
        const index = cartProducts.indexOf(product);
        cartProducts[index] = { ...product };
        cartProducts[index].count--;
        setCartCount({ cartProducts });
    }

    return (
        <MainLayout>
            <div className="cartPage" style={{ padding: '24px 0', marginTop: '50px' }}>
                <div className="cart" style={{ height: "400px" }}>
                    {cartProducts.map((cartproduct, key) => {
                        return (
                            <div className="cartProduct">
                                <div className="checkoutItem">
                                    <div className="checkoutItemImg">
                                        <img src={cartproduct.imgsrc} alt="" />
                                    </div>
                                    <div className="checkoutItemName">
                                        {cartproduct.name}<br />
                                        <b>रु xxxx</b>
                                    </div>
                                    <div className="checkoutItemCounter">
                                        <div className="cartControl" style={{ marginTop: '0px' }}>
                                            <MinusOutlined onClick={() => handleSubtract(cartproduct)} style={{ marginRight: '20px' }} />
                                            {cartproduct.count}
                                            <PlusOutlined onClick={() => handleAdd(cartproduct)} style={{ marginLeft: '20px' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                    <div className="cartPrice">
                        <div className="cartHeaderItem">
                            <Text style={{ fontSize: '15px' }}>{`Sub Total`}</Text>
                            <Text
                                strong
                                className="totalAmount"
                                style={{ float: "right" }}
                            >
                                रु. xxx
                        </Text>
                        </div>
                        <div className="cartHeaderItem">
                            <Text type="danger" style={{ fontSize: '15px' }}>{`Sumulya Club Member Discount`}</Text>
                            <Text
                                strong
                                className="totalAmount"
                                style={{ float: "right" }}
                            >
                                - रु. xx
                        </Text>
                            <br />
                        </div>
                        <div className="cartHeaderItem">
                            <Text style={{ fontSize: '15px' }}>{`Delivery Charge`}</Text>
                            <Text
                                strong
                                className="totalAmount"
                                style={{ float: "right" }}
                            >
                                रु. xxx
                        </Text>
                            <br />
                        </div>
                        <hr />
                        <div style={{ padding: '10px 0px' }} className="cartHeaderItem">
                            <Text style={{ fontSize: '15px' }}>Total (Everything Included)</Text>
                            <Text
                                strong
                                className="totalAmount"
                                style={{ float: "right" }}
                            >
                                रु. xxxx
                        </Text>
                            <br />
                        </div>
                        <hr />
                        <Title level={4}>Payment for amount रु. xxxx</Title>

                        <Text type="secondary">Payment on delivery with </Text>
                        <br />
                        <Tag color="#108ee9" className="Tag">Cash</Tag>
                        <Tag color="#87d068" className="Tag">E-Sewa</Tag>
                        <br /><br />
                        <Text type="secondary">Please fill up the following information so that we can call you for your delivery information.</Text>
                        <br />
                        <Form name="basic" style={{ width: '300px' }} initialValues={{ remember: true }}>
                            <Form.Item
                                style={{ marginBottom: "5px" }}
                                rules={[
                                    { required: true, message: "Please input your first name!" }
                                ]}
                            >
                                <Input
                                    className="paymentInput"
                                    placeholder="Full Name"
                                    name="firstName"
                                //   onChange={handleChange}
                                />
                            </Form.Item>

                            <Form.Item
                                style={{ marginBottom: "5px" }}
                                rules={[
                                    {
                                        type: 'number', message: 'The input is not valid number',
                                    },
                                    { required: true, message: "Please input your phone!" }
                                ]}
                            >
                                <Input
                                    className="paymentInput"
                                    placeholder="Mobile Number"
                                    name="phone"
                                //   onChange={handleChange}
                                />

                            </Form.Item>
                            <Form.Item
                                name="email"
                                style={{ marginBottom: "5px" }}
                                rules={[
                                    {
                                        type: 'email', message: 'The input is not valid E-mail!',
                                    },
                                    { required: true, message: "Please input your email!" }
                                ]}
                            >
                                <Input
                                    className="paymentInput"
                                    placeholder="Email Address"
                                    name="email"
                                //   onChange={handleChange}
                                />
                                {/* {errors.email && (
                    <div className="validation">{errors.email}</div>
                    )} */}
                            </Form.Item>
                        </Form>

                        <Button className="sumbitButton"
                            style={{ width: '100%', backgroundColor: '#e85733', color: 'white' }}
                        >
                            <PlusOutlined />PLACE ORDER
                        </Button>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}


export default Cart;