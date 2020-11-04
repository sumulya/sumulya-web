import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import ProductList from '../ProductList';
import { IProductGroup } from '../../../../Interfaces';

interface StateProps {
    productGroup: IProductGroup;
}

type HomeProps = StateProps;

const ProductGroupList: FC<HomeProps> = (props: HomeProps) => {
    const { productGroup } = props;

    const [products, setProducts] = useState([
        {
            id: 1,
            images: [],
            name: "First product",
            count: 10,
            is_verified: 'true',
            sale_price: 1000,
            quantity: 10,
            unit: 'kg'
        },
        {
            id: 2,
            images: ["http:null"],
            name: "Second product",
            count: 10,
            is_verified: 'true',
            sale_price: 2000,
            quantity: 20,
            unit: 'liter'
        },
        {
            id: 3,
            images: ["http:null", "http:null"],
            name: "Third product",
            count: 10,
            is_verified: 'true',
            sale_price: 3000,
            quantity: 30,
            unit: 'kg'
        },
    ]);

    const styles = {
        title: {
            fontSize: 16,
            fontWeight: 600
        }
    };

    return (
        <div className="productGroupWrapper">
            <div
                className="productGroupInfo"
                style={{ height: 30, padding: "0 3px" }}
            >
                <div style={{ float: "left" }}>
                    <span style={styles.title}>{productGroup.name}</span>
                </div>
                <div className="productGroupSeeAll">
                    <Link to={`/group-product/${productGroup.id}`}>See All</Link>
                </div>
            </div>
            {/* {
                loading && (
                    <div style={{ height: "100%", minHeight: 665, width: "80%" }}>
                        <Loader />
                    </div>
            )} */}
            {products && <ProductList products={products} slider={true} />}
        </div>
    )
}

export default ProductGroupList;