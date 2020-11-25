import React, { FC } from 'react';
import { Button, Layout } from 'antd';
import Side from '../../Partials/Side';
import Cards from '../Components/Cards';
import { DownCircleOutlined } from '@ant-design/icons';

const { Content } = Layout;

const GroupProduct: FC = () => (
    <div className="GroupProduct">
        <Layout>

            <Content style={{ padding: '0 50px' }}>
                <Layout style={{ padding: '24px 0' }}>

                    {/* Sider Component */}
                    <Side />

                    <Content style={{ padding: '0 20px', marginLeft: '240px', marginTop: '64px' }}>

                        <Content style={{ margin: "10px 0", backgroundColor: "white", padding: '20px 20px', minHeight: 280, borderRadius: '10px' }}>

                            {/* All Cards */}
                            <h3><b>Group Product</b></h3>
                            <Cards />
                            <div style={{ textAlign: 'center', marginTop: '10px' }}>
                                <Button icon={<DownCircleOutlined />}>Show More</Button>
                            </div>
                        </Content>
                    </Content>

                </Layout>
            </Content>

        </Layout>
    </div>


);


export default GroupProduct;