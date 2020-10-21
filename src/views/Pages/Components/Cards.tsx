import React, { FC, useState } from 'react';
import './../../../App.css';
import { Card } from 'antd';
import { ShoppingOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { products } from './../../../Data/products'
const { Meta } = Card;


const Cards: FC = () => {

    const [cartCount, setCartCount] = useState(0);

    // const handleAdd = (product: any) => {
    //     const index = products.indexOf(product);
    //     products[index] = { ...product };
    //     products[index].value++;
    //     setCartCount({ products });

    // }

    return (
        <div className="allcards">
            <h3>All Products </h3>

            {products.map((product, key) => {
                return (
                    <div className="card" key={product.id}>
                        <Card
                            title={
                                (cartCount > 0) ? (
                                    <div className="cardFunc"
                                        style={{ textAlign: 'center', backgroundColor: '#303030', color: 'white', borderRadius: '10px', height: '30px', marginTop: '-15px' }}
                                    ><MinusOutlined
                                            onClick={() => setCartCount(cartCount - 1)}
                                            style={{ marginRight: '20px' }}
                                        />
                                        {cartCount}
                                        <PlusOutlined
                                            onClick={() => setCartCount(cartCount + 1)}
                                            style={{ marginLeft: '20px' }}
                                        /></div>
                                ) : (<div></div>)
                            }

                            extra={
                                (cartCount === 0) ? (
                                    <ShoppingOutlined style={{ fontSize: "15px" }} onClick={() => setCartCount(cartCount + 1)} />
                                ) : (<div></div>)
                            }
                            hoverable
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
