import React, { FC } from 'react';
import { Button, Layout } from 'antd';
import Side from '../../Partials/Side';
import Cards from '../Components/Cards';
import Head from '../../Partials/Head';
import Foot from '../../Partials/Foot';
import { DownCircleOutlined } from '@ant-design/icons';

const { Content } = Layout;

const CategoryProduct: FC = () => (
    <div className="home">
        <Layout>
            <Head />

            <Content style={{ padding: '0 50px' }}>
                <Layout style={{ padding: '24px 0' }}>

                    {/* Sider Component */}
                    <Side />

                    <Content style={{ padding: '0 20px' }}>

                        <Content style={{ margin: "10px 0", backgroundColor: "white", padding: '20px 20px', minHeight: 280 }}>

                            {/* All Cards */}
                            <h3>Category Product</h3>
                            <Cards />
                            <div style={{ textAlign: 'center', marginTop: '10px' }}>
                                <Button icon={<DownCircleOutlined />}>Show More</Button>
                            </div>
                        </Content>
                    </Content>

                </Layout>
            </Content>

            <Foot />
        </Layout>
    </div>


);


export default CategoryProduct;