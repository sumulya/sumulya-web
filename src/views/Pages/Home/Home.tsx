import React, { FC } from 'react';
import { Button, Layout } from 'antd';
import Side from '../../Partials/Side';
import Banner from '../Components/Banner';
import Cards from '../Components/Cards';
import { DownCircleOutlined } from '@ant-design/icons';
import MainLayout from "../../Layouts/MainLayout";

const { Content } = Layout;

const Home: FC = () => (
    <MainLayout>

        <Content style={{ padding: '0 50px' }}>
            <Layout style={{ padding: '24px 0' }}>

                {/* Sider Component */}
                <Side />

                <Content style={{ marginLeft: 250, marginTop: 64 }}>

                    {/* Carousel*/}
                    <Banner />

                    <Content style={{ margin: "10px 0", backgroundColor: "white", padding: '20px 20px', minHeight: 280 }}>
                            {/* All Cards */}
                            <h3>All Products </h3>
                            <Cards />
                            <div style={{ textAlign: 'center', marginTop: '22px' }}>
                                <Button style={{ borderRadius: '10px', fontWeight: 'bold' }} icon={<DownCircleOutlined />}>Show More</Button>
                            </div>
                    </Content>
                </Content>

            </Layout>
        </Content>
    </MainLayout>

);


export default Home;