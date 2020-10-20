import React, { FC, useState } from 'react';
import './../../App.css';
import { Link } from 'react-router-dom';
import { Badge, Input, Layout, Drawer } from 'antd';
import { UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
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
                    <Search style={{ width: "75%", marginTop: "18px" }} placeholder="Search Products In Sumulya" onSearch={value => console.log(value)} enterButton />
                </div>
                <div className="rightHead" style={{ float: "right", marginTop: "-65px" }}>
                    <Link to="/login">
                        <UserOutlined style={{ padding: "0 20px", fontSize: "20px", color: 'black' }} />
                    </Link>
                    <Badge count={0} showZero>
                        <ShoppingCartOutlined onClick={showDrawer} style={{ fontSize: "20px", paddingRight: "7px" }} />
                        <Drawer
                            title={<b>Cart</b>}
                            placement="right"
                            onClose={onClose}
                            visible={visible}
                            width={350}
                            maskStyle={{ opacity: 0, transition: "opacity 1s" }}
                            style={{ marginTop: "65px" }}
                        >
                            <h3>This is a drawer content.</h3>
                            <div className="checkout">
                                Checkout
                            </div>
                        </Drawer>
                    </Badge>
                </div>
            </div>
        </Header>
    );
};


export default Head;
