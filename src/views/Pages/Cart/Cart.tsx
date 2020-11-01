import React, { FC } from 'react';
import Foot from '../../Partials/Foot';
import Head from '../../Partials/Head';
import './../../../App.css';


const Cart: FC = () => (
    <div className="cartPage">
        <Head />
        <div className="cart">
            CartPage
        </div>
        <div className="footer" style={{ position: "fixed", bottom: '0' }}>
            <Foot />
        </div>
    </div>
);


export default Cart;