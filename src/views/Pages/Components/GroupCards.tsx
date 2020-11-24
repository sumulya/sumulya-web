import React, { FC, useState } from 'react';
import './../../../App.css';
import { Card } from 'antd';
import { ShoppingOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { products } from './../../../Data/products'
import { Product } from './../../../Interfaces/index';
const { Meta } = Card;


const GroupCards: FC = () => {

    const [cartCount, setCartCount] = useState({});
    const [cartItem, setCartItem] = useState({});

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

    console.log(cartCount);
    console.log(cartItem)



    return (
        <div className="group-cards">
            {products.map((product, key) => {
                return (
                    <div className="card" key={product.id}>
                        <Card
                            hoverable
                            bordered={false}
                            style={{ width: 200 }}
                        >
                            <div className="cardTop">
                                {
                                    (product.count > 0) ? (
                                        <div className="cardFunc">
                                            <MinusOutlined
                                                onClick={() => handleSubtract(product)}
                                                style={{ marginRight: '20px' }}
                                            />
                                            {product.count}
                                            <PlusOutlined
                                                onClick={() => handleAdd(product)}
                                                style={{ marginLeft: '20px' }}
                                            />
                                        </div>
                                    ) : (<div className="addtocart"><ShoppingOutlined style={{ fontSize: "15px" }}
                                        onClick={() => handleAdd(product)}
                                    /></div>)
                                }
                            </div>
                            <div className="cardImg">
                                <img alt="example" src={product.imgsrc} />
                            </div>
                            <Meta className="metacard" title={product.price} description={product.name} />
                        </Card>
                    </div>
                );
            })}

        </div>
    );
}


export default GroupCards;