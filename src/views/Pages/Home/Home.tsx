import React, { FC } from 'react';
import { Button, Layout } from 'antd';
import Side from '../../Partials/Side';
import Banner from '../Components/Banner';
import Cards from '../Components/Cards';
import Head from '../../Partials/Head';
import Foot from '../../Partials/Foot';
import { DownCircleOutlined } from '@ant-design/icons';

const { Content } = Layout;

const Home: FC = () => (
    <div className="home">
        <Layout>
            <Head />

            <Content style={{ padding: '0 50px' }}>
                <Layout style={{ padding: '24px 0' }}>

                    {/* Sider Component */}
                    <Side />

                    <Content style={{ marginLeft: 250, marginTop: 64 }}>

                        {/* Carousel*/}
                        <Banner />

                        <Content style={{ margin: "10px 0", backgroundColor: "white", padding: '20px 20px', minHeight: 280 }}>

                            {/* All Cards */}
                            <h3>All Products</h3>
                            <Cards />
                            <div style={{ textAlign: 'center', marginTop: '15px' }}>
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


export default Home;