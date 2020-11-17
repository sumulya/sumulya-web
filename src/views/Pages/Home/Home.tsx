import React, { FC } from 'react';
import { Button, Layout } from 'antd';
import Side from '../../Partials/Side';
import Banner from '../Components/Banner';
import Cards from '../Components/Cards';
import Head from '../../Partials/Head';
import Foot from '../../Partials/Foot';
import { DownCircleOutlined } from '@ant-design/icons';
import GroupCards from '../Components/GroupCards';

const { Content } = Layout;

const Home: FC = () => (
    <div className="home">
        <Layout>
            <Head />

            <Content style={{ padding: '0 50px' }}>
                <Layout style={{ padding: '24px 0' }}>

                    {/* Sider Component */}
                    <Side />

                    <Content style={{ padding: '0 20px' }}>

                        {/* Carousel*/}
                        <Banner />

                        <Content style={{ margin: "10px 0", backgroundColor: "white", padding: '20px 20px', minHeight: 280 }}>

                            {/* All Cards */}
                            <div className="group-product">
                                <h3><b>Daily Essetianls</b></h3>
                                <a href="/group/1">See All</a>
                                <GroupCards />
                            </div>
                            <div className="group-product">
                                <h3><b>Organic Products</b></h3>
                                <a href="/group/2">See All</a>
                                <GroupCards />
                            </div>
                            <div className="group-product">
                                <h3><b>Featured</b></h3>
                                <a href="/group/3">See All</a>
                                <GroupCards />
                            </div>
                            <div className="group-product">
                                <h3><b>Top Products</b></h3>
                                <a href="/group/4">See All</a>
                                <GroupCards />
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <Button style={{ borderRadius: '10px', fontWeight: 'bold' }} icon={<DownCircleOutlined />}>Show More</Button>
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