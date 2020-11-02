import React, { FC, useState, useEffect, ReactPropTypes } from 'react';
import './../../../App.css';
import { Card } from 'antd';
import { ShoppingOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { products } from './../../../Data/products'
import { Product } from './../../../Interfaces/index';
const { Meta } = Card;



const Counter: FC<Product> = (props: Product) => {

    const [cartCount, setCartCount] = useState({});
    const [cartItem, setCartItem] = useState({});


    useEffect(() => { }, []);

    const handleAdd = (product: Product) => {
        const index = products.indexOf(product);
        products[index] = { ...product };
        products[index].count++;
        setCartCount({ products });

        let newItem = products[index];
        setCartItem(newItem);

    }
    const handleSubtract = (product: Product) => {
        const index = products.indexOf(product);
        products[index] = { ...product };
        products[index].count--;
        setCartCount({ products });

    }


    return (
        <div className="cardFunc">
            <MinusOutlined
                onClick={() => handleSubtract(props)}
                style={{ marginRight: '20px' }}
            />
            {props.count}
            <PlusOutlined
                onClick={() => handleAdd(props)}
                style={{ marginLeft: '20px' }}
            />
        </div>
    );
}


export default Counter;
