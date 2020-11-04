import React, { FC } from 'react';
import Foot from '../../Partials/Foot';
import Head from '../../Partials/Head';
import { Typography, Form, Input, Button } from 'antd';
import CheckableTag from "antd/lib/tag/CheckableTag";
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import './../../../App.css';

const { Text, Title } = Typography;


const Cart: FC = () => {

    return (
        <div className="cartPage">
            <Head />
            <div className="cart">
                <div className="cartProduct">
                    <div className="checkoutItem">
                        <div className="checkoutItemImg">
                            <img src="https://upload.wikimedia.org/wikipedia/en/f/f9/Twix-Wrapper-Small.jpg" alt="" />
                        </div>
                        <div className="checkoutItemName">
                            TWIX BAR<br />
                            <b>रु xxxx</b>
                        </div>
                        <div className="checkoutItemCounter">
                            <div className="cartControl" style={{ marginTop: '0px' }}>
                                <MinusOutlined style={{ marginRight: '20px' }} />1<PlusOutlined style={{ marginLeft: '20px' }} />
                            </div>
                        </div>
                    </div>
                    <div className="checkoutItem">
                        <div className="checkoutItemImg">
                            <img src="https://sumulya.s3.ap-south-1.amazonaws.com/media/products/202007-0911-0519-organic-cashew-500x500.png" alt="" />
                        </div>
                        <div className="checkoutItemName">
                            HAND PICKED CASHEW<br />
                            <b>रु xxxx</b>
                        </div>
                        <div className="checkoutItemCounter">
                            <div className="cartControl" style={{ marginTop: '0px' }}>
                                <MinusOutlined style={{ marginRight: '20px' }} />1<PlusOutlined style={{ marginLeft: '20px' }} />
                            </div>
                        </div>
                    </div>
                    <div className="checkoutItem">
                        <div className="checkoutItemImg">
                            <img src="https://sumulya.s3.ap-south-1.amazonaws.com/media/products/202007-0510-3953-hypercity-every-day-sugar-loose-v-1-kg.png" alt="" />
                        </div>
                        <div className="checkoutItemName">
                            SUGAR A GRADE (1 KG)<br />
                            <b>रु xxxx</b>
                        </div>
                        <div className="checkoutItemCounter">
                            <div className="cartControl" style={{ marginTop: '0px' }}>
                                <MinusOutlined style={{ marginRight: '20px' }} />1<PlusOutlined style={{ marginLeft: '20px' }} />
                            </div>
                        </div>
                    </div>
                </div>
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
                    <CheckableTag className="checkableTag" checked={true}>Cash</CheckableTag>
                    <CheckableTag className="checkableTag" checked={true}>E-Sewa</CheckableTag>
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
                    <br />
                    <Button className="sumbitButton"
                        style={{ width: '100%', backgroundColor: '#e85733', color: 'white' }}
                    >
                        <PlusOutlined />PLACE ORDER
                    </Button>
                </div>
            </div>
            <div className="footer" style={{ bottom: '0' }}>
                <Foot />
            </div>
        </div>
    );
}


export default Cart;