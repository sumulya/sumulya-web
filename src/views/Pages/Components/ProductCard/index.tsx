import React, { FC, useState } from 'react';
import { IProduct } from '../../../../Interfaces';
import Slider from '../Slider';
import { Typography, Button } from "antd";
import { PlusOutlined, MinusOutlined, StarOutlined } from "@ant-design/icons";

const { Text } = Typography;

interface StateProps {
    product: IProduct;
}

type HomeProps = StateProps;

const Verified = () => {
    const [hover, setHover] = useState(false);
    return (
        <span
            className="verified"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <StarOutlined />
        </span>
    );
};

const handleProductClick = () => {

}

const findQuantityInCart = (product: IProduct) => {
    // if (cartState.items && cartState.items.length > 0) {
    //     let q = cartState.items.find(function(element) {
    //         if (element.productId == product.id) {
    //             return element.quantity;
    //         }
    //     });
    //     if (q) return q.quantity;
    // }
    return 0;
}

const subtractFromCart = (product: IProduct) => {

}

const addToCart = (product: IProduct) => {

}

const ProductCard: FC<HomeProps> = (props: HomeProps) => {
    const { product } = props;
    const [loading, setLoading] = useState(false);


    return (
        // <div className="productListWrapper">
        //     {product.name}
        // </div>
        <div className="productWrapper">
            <div className="productInfoWrapper">
                <div onClick={() => handleProductClick()} className="productTop test">
                    <Slider styles={{ width: 110 }}>
                        {product.images.length &&
                            product.images.map((img: any, key: any) => (
                                <div key={key}>
                                    <img
                                        src={`/products/${img.thumbnail ? img.thumbnail : "noimg.jpg"}`}
                                    />
                                </div>
                            ))}
                    </Slider>
                </div>
                <div className="productDetail">
                    <div>
                        <Text strong>रु {product.sale_price}</Text>{" "}
                        {/* {product.sale_price < product.mrp ? (
                    <Text type="secondary" delete style={{ fontSize: 12 }}>
                        रु {product.mrp}
                    </Text>
                    ) : (
                    ""
                    )} */}
                        {product.is_verified ? <Verified /> : ""}
                    </div>
                    <Text className="productName">{product.name}</Text>
                    <Text className="productName">
                        ({product.quantity} {product.unit}){" "}
                    </Text>
                    {/* {product.club_price && product.sale_price > product.club_price && (
                    <ClubPrice key={product.id} product={product} />
                )} */}
                </div>
            </div>
            <div className="productButtonWrapper">
                {findQuantityInCart(product) ? (
                    <div className="productButtonGroup">
                        <Button
                            className="decrease"
                            onClick={() => subtractFromCart(product)}
                        >
                            <MinusOutlined />
                        </Button>
                        <div
                            className="addToCartQuantity"
                            onClick={() => addToCart(product)}
                        >
                            {findQuantityInCart(product)}
                        </div>
                        <Button className="increase" onClick={() => addToCart(product)}>
                            <PlusOutlined />
                        </Button>
                    </div>
                ) : (
                        <div className="productButtonGroup">
                            <Button
                                loading={loading}
                                className="addToCart"
                                onClick={() => addToCart(product)}
                            >
                                ADD
                        </Button>
                            <Button
                                loading={loading}
                                className="increase"
                                onClick={() => addToCart(product)}
                            >
                                <PlusOutlined />
                            </Button>
                        </div>
                    )}
            </div>
        </div>
    );
}


export default ProductCard;