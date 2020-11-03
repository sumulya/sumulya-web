import React, { FC, useState, useContext } from 'react';
import './../../App.css';
import { Link } from 'react-router-dom';
import { Badge, Input, Layout, Drawer } from 'antd';
import { UserOutlined, ShoppingCartOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';
const { Search } = Input;
const { Header } = Layout;


const Head: FC = () => {

    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };

    return (
        <Header className="header">
            <div className="heaad">
                <div className="logo">
                    <Link to="/">
                        <img src="/images/sum-logo.png" alt="Logo" />
                    </Link>
                </div>
                <div className="searchbox">
                    <Search style={{ width: "75%" }} placeholder="Search Products In Sumulya" onSearch={value => console.log(value)} enterButton />
                </div>
                <div className="rightHead">
                    <Link to="/login">
                        <UserOutlined style={{ padding: "0 20px", fontSize: "20px", color: 'black' }} />
                    </Link>
                    <Badge count={3} showZero>
                        <ShoppingCartOutlined onClick={showDrawer} style={{ fontSize: "20px", paddingRight: "7px" }} />
                        <Drawer
                            title={<b>Cart</b>}
                            placement="right"
                            onClose={onClose}
                            visible={visible}
                            width={400}
                            maskStyle={{ opacity: 0, transition: "opacity 1s" }}
                            style={{ marginTop: "65px" }}
                        >
                            <div className="cartItems">
                                <div className="leftCart">
                                    <img alt="cart- img" src="https://upload.wikimedia.org/wikipedia/en/f/f9/Twix-Wrapper-Small.jpg" />
                                </div>
                                <div className="middleCart">
                                    Product Name<br />
                                    रु xxxx
                                </div>
                                <div className="rightCart">
                                    <div className="totalPrice">
                                        <b>रु xxxx</b>
                                    </div>
                                    <div className="cartControl">
                                        <MinusOutlined style={{ marginRight: '15px' }} />1<PlusOutlined style={{ marginLeft: '15px' }} />
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="cartItems">
                                CartItem
                            </div>
                            <Link to="/cart">
                                <div className="checkout">
                                    Checkout
                            </div></Link>
                        </Drawer>
                    </Badge>
                </div>
            </div>
        </Header>
    );
};


export default Head;
