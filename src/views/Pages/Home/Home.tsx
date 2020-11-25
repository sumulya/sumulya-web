import React, { FC } from 'react';
import { Button, Layout } from 'antd';
import Side from '../../Partials/Side';
import Banner from '../Components/Banner';
import { DownCircleOutlined } from '@ant-design/icons';
import GroupCards from '../Components/GroupCards';

const { Content } = Layout;

const Home: FC = () => {
    return (
        <Content style={{ padding: '0 50px' }}>
            <Layout style={{ padding: '24px 0' }}>

                {/* Sider Component */}
                <Side />

                <Content style={{ marginLeft: 250, marginTop: 64 }}>

                    {/* Carousel*/}
                    <Banner />

                    <Content style={{ margin: "10px 0", backgroundColor: "white", padding: '20px 20px', minHeight: 280, borderRadius: '10px' }}>

                        {/* All Cards */}
                        <div className="group-product">
                            <h3><b>Featured</b></h3>
                            <a href="/group/1">SEE ALL</a>
                            <GroupCards />
                        </div>
                        <div className="group-product">
                            <h3><b>Daily Essetianls</b></h3>
                            <a href="/group/2">SEE ALL</a>
                            <GroupCards />
                        </div>
                        <div className="group-product">
                            <h3><b>Organic Products</b></h3>
                            <a href="/group/3">SEE ALL</a>
                            <GroupCards />
                        </div>
                        <div className="group-product">
                            <h3><b>Top Products</b></h3>
                            <a href="/group/4">SEE ALL</a>
                            <GroupCards />
                        </div>
                        <div style={{ textAlign: 'center', marginTop: '15px' }}>
                            <Button icon={<DownCircleOutlined />}>Show More</Button>
                        </div>
                    </Content>
                </Content>

            </Layout>
        </Content>
    )

};


export default Home;