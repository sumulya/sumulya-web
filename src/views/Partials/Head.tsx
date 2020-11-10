import React, { FC, useState } from 'react';
import './../../App.css';
import { Link } from 'react-router-dom';
import { Badge, Input, Layout, Drawer } from 'antd';
import { UserOutlined, ShoppingCartOutlined, PlusOutlined, MinusOutlined, ArrowRightOutlined, CloseCircleFilled } from '@ant-design/icons';
import { cartProducts } from './../../Data/products';
import { Product } from './../../Interfaces/index';
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
        <Header className="header">
            <div className="heaad">
                <div className="logo">
                    <Link to="/">
                        <img src="/images/sum-logo.png" alt="Logo" />
                    </Link>
                </div>
                <div className="searchbox">
                    <Search className="search" placeholder="Search Products In Sumulya" onSearch={value => console.log(value)} enterButton />
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
                            closeIcon={<CloseCircleFilled />}
                            onClose={onClose}
                            visible={visible}
                            width={400}
                            maskStyle={{ opacity: 0, transition: "opacity 1s" }}
                            style={{ marginTop: "65px" }}
                        >
                            <div className="totalCartPrice">
                                &nbsp; Total Amount : <b style={{ float: 'right', marginRight: '20px' }}>रु xxxx</b>
                            </div>
                            {cartProducts.map((cartproduct, key) => {
                                return (
                                    <div key={key}>
                                        <div className="cartItems">
                                            <div className="leftCart">
                                                <img alt="cart-img" src={cartproduct.imgsrc} />
                                            </div>
                                            <div className="middleCart">
                                                {cartproduct.name}<br />
                                                {cartproduct.price}
                                            </div>
                                            <div className="rightCart">
                                                <div className="totalPrice" style={{ float: 'right' }}>
                                                    <b>रु xxxx</b>
                                                </div>
                                                <div className="cartControl">
                                                    <MinusOutlined
                                                        onClick={() => handleSubtract(cartproduct)}
                                                        style={{ marginRight: '15px' }}
                                                    />
                                                    {cartproduct.count}
                                                    <PlusOutlined
                                                        onClick={() => handleAdd(cartproduct)}
                                                        style={{ marginLeft: '15px' }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <hr />

                                    </div>
                                );
                            })}
                            <Link to="/cart">
                                <div className="checkout">
                                    Proceed To Checkout <ArrowRightOutlined style={{ margin: '5px 10px' }} />
                                </div></Link>
                        </Drawer>
                    </Badge>
                </div>
            </div>
        </Header>
    );
};


export default Head;
