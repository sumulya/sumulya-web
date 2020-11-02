import React, { FC } from 'react';
import Foot from '../../Partials/Foot';
import Head from '../../Partials/Head';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import './../../../App.css';


const Cart: FC = () => (
    <div className="cartPage">
        <Head />
        <div className="cart">
            <div className="cartProduct">
                <div className="checkoutItem">
                    <div className="checkoutItemImg">
                        <img src="https://upload.wikimedia.org/wikipedia/en/f/f9/Twix-Wrapper-Small.jpg" alt="" />
                    </div>
                    <div className="checkoutItemName">
                        Product Name<br />
                        <b>रु xxxx</b>
                    </div>
                    <div className="checkoutItemCounter">
                        <div className="cartControl" style={{ marginTop: '0px' }}>
                            <MinusOutlined style={{ marginRight: '15px' }} />1<PlusOutlined style={{ marginLeft: '15px' }} />
                        </div>
                    </div>
                </div>
                <div className="checkoutItem">
                    checkout item 2
                </div>
            </div>
            <div className="cartPrice">
                Price
            </div>
        </div>
        <div className="footer" style={{ position: "fixed", bottom: '0' }}>
            <Foot />
        </div>
    </div>
);


export default Cart;