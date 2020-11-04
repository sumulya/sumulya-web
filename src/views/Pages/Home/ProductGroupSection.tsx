import React, { FC, useState } from "react";
import { Col, Row } from "antd";
import ProductGroupList from '../Components/ProductGroupList';
import { IProductGroup } from '../../../Interfaces';


interface StateProps {
    productGroups?: IProductGroup[];
}

type HomeProps = StateProps;

const ProductGroupSection: FC<HomeProps> = (props: HomeProps) => {

    const [productGroups, setProductGroups] = useState([
        {
            id: 1,
            name: "Daily Essentials",
            description: "Description",
            order: "one",
            status: 1,
            // products: [{}],
        },
        {
            id: 2,
            name: "Featured",
            description: "Description",
            order: "two",
            status: 1,
            // products: [{}],
        },
    ])

    return (
        <div>
            <Row>
                {productGroups.map((productGroup: IProductGroup, key: any) =>
                    productGroup.status ? (
                        <Col span={24} key={key}>
                            <ProductGroupList productGroup={productGroup} />
                        </Col>
                    ) : (
                            ""
                    )
                )}
            </Row>
        </div>
    )
}

export default ProductGroupSection;