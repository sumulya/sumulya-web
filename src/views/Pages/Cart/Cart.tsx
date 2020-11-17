import React, { FC, useState } from 'react';
import Foot from '../../Partials/Foot';
import Head from '../../Partials/Head';
import { Typography, Form, Input, Button, Tag, Layout } from 'antd';
import CheckableTag from "antd/lib/tag/CheckableTag";
import { cartProducts } from './../../../Data/products';
import { Product } from './../../../Interfaces/index';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import './../../../App.css';

const { Text, Title } = Typography;
const { Content } = Layout;

const tagsFromServer = ['Cash on delivery', 'E-Sewa'];

const Cart: FC = () => {

    const [selectedtag, setselectedTag] = useState(['Cash on delivery']);

    const handleChange = (tag: string, checked: boolean) => {
        const nextSelectedTag = checked ? [tag] : selectedtag.filter(t => t !== tag);
        setselectedTag(nextSelectedTag);

    }

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
        <Content>
            <div className="cartPage" style={{ margin: '80px 0px 0px 0px' }}>
                <div className="cart">
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

                        <Text type="secondary">Payment with :</Text>
                        <br />
                        {tagsFromServer.map(tag => (
                            <CheckableTag
                                className="paymentMethod"
                                key={tag}
                                checked={selectedtag.indexOf(tag) > -1}
                                onChange={checked => handleChange(tag, checked)}
                            >
                                {tag}
                            </CheckableTag>
                        ))}
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
                            style={{ width: '100%', backgroundColor: '#e85733', color: 'white', borderRadius: '10px' }}
                        >
                            <PlusOutlined />PLACE ORDER
                        </Button>
                    </div>
                </div>
            </div>
        </Content>
    );
}


export default Cart;