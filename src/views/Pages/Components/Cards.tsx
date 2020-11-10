import React, { FC, useState } from 'react';
import './../../../App.css';
import { Card } from 'antd';
import { ShoppingOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { products } from './../../../Data/products'
import { Product } from './../../../Interfaces/index';
const { Meta } = Card;



const Cards: FC = () => {

    const [cartCount, setCartCount] = useState({});
    const [cartItem, setCartItem] = useState({});

    console.log(cartCount);
    console.log(cartItem);


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
        <div className="allcards">
            {products.map((product, key) => {
                return (
                    <div className="card" key={product.id}>
                        <Card
                            title={
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
                                ) : (<div></div>)
                            }

                            extra={
                                (product.count === 0) ? (
                                    <ShoppingOutlined style={{ fontSize: "15px" }}
                                        onClick={() => handleAdd(product)}
                                    />
                                ) : (<div></div>)
                            }
                            hoverable
                            bordered={false}
                            style={{ width: 200 }}
                            cover={<img alt="example" src={product.imgsrc} />}
                        >
                            <Meta className="metacard" title={product.price} description={product.name} />
                        </Card>
                    </div>
                );
            })}

        </div>
    );
}


export default Cards;
