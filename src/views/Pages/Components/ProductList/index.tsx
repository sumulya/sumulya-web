import React, { FC } from "react";
import ProductCard from "../ProductCard";
import { IProduct } from '../../../../Interfaces';

interface StateProps {
    products: IProduct[];
    slider?: boolean;
}

type HomeProps = StateProps;

const ProductList: FC<HomeProps> = (props: HomeProps) => {
    const { products, slider } = props;

    console.log(products)

    return (
        <div className="productListWrapper">
            <div className={`productList ${slider ? "noWrapp" : ""}`}>
                {products.map((product: any, key: any) => (
                      <div key={key} className="product">
                        <ProductCard product={product} />
                      </div>
                    // <div key={key}>
                    //     {product.name}
                    // </div>
                ))}
            </div>
        </div>
    );
}


export default ProductList;