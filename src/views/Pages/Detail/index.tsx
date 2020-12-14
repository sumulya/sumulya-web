import React from 'react';
import Head from "../../Partials/Head";
import {Card, Col, Divider, Layout} from "antd";
import Side from "../../Partials/Side";
import Foot from "../../Partials/Foot";
import {useParams} from "react-router-dom";
import {Row, Image, Typography, Tabs} from "antd";
import Counter from "../Components/Counter";

const {TabPane} = Tabs;
const {Title, Text} = Typography;
const {Content} = Layout;

const Detail = () => {
    const {id} = useParams()
    return (
        <div className="product-detail">
            <Layout>
                <Head/>
                <Content style={{padding: '0 50px'}}>
                    <Layout style={{padding: '24px 0'}}>
                        <Side/>
                        <Content style={{marginLeft: '20px', padding: '10px 20px', backgroundColor: "white", flex: 1}}>
                            <p>this is detail of {id}</p>
                            <Row className="productDetailWrapper" style={{
                                margin: "20px 0",
                            }}>
                                <Col sm={6}>
                                    <Content
                                        style={{
                                            padding: '7px 20px',
                                            borderRadius: '10px',
                                            boxShadow: '0px 5px 5px #e9e9e9'
                                        }}>
                                        <Image
                                            width={200}
                                            src={'https://cdn.pixabay.com/photo/2016/08/11/08/04/vegetables-1584999__480.jpg'}
                                        />
                                    </Content>
                                </Col>
                                <Col  sm={20} xs={24} style={{marginLeft:"15px",flex: '1'}}>
                                    <Content
                                        style={{
                                            padding: '7px 20px',
                                            backgroundColor: "#eeeeee94",
                                            borderRadius: '10px',
                                            boxShadow: '0px 2px 2px #e9e9e9'
                                        }}>
                                        <Title> Dabur Real Mixed Fruit(1 LITTER) </Title>
                                        <Title level={3} type="secondary">रु 245</Title>
                                        <div className="club_save_options">
                                            <div className="cost_orange" style={{color: '#e96125'}}>Save<span
                                                style={{color: '#4d9a96'}}> रु 5 </span> more with<span
                                                style={{color: '#4d9a96'}}> Sumulya Bachat </span></div>
                                        </div>
                                        <Divider/>
                                        <div className="button_add_counter" style={{width:"200px"}}>
                                            <Counter
                                                price={'245'}
                                                id={id}
                                                imgsrc={'https://cdn.pixabay.com/photo/2016/08/11/08/04/vegetables-1584999__480.jpg'}
                                                name={'Dabur Real Mixed Fruit(1 LITTER)'}
                                                count={1}
                                            />
                                        </div>
                                    </Content>
                                </Col>
                            </Row>
                            {/* description */}
                            <Row>
                                <Tabs type="card">
                                    <TabPane tab="Description" key="pending">
                                        <div
                                            style={{
                                                padding: "0 10px",
                                                display: "flex",
                                                flexDirection: "column"
                                            }}
                                        >
                                            <div style={{padding: 10}}>
                                                <Text type="secondary" style={{fontSize: 18}}>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                    Dignissimos, maiores.
                                                </Text>
                                            </div>
                                            <div style={{padding: 10}}>
                                                <Text type="secondary">BRAND</Text> :{" "}
                                                <Text>Apple</Text>
                                            </div>
                                            <div style={{padding: 10}}>
                                                <Text type="secondary">Supplier</Text> :{" "}
                                                <Text>Jane Doe of exports</Text>
                                            </div>
                                            <div style={{padding: 10}}>
                                                <Text type="secondary">SKU</Text> :{" "}
                                                <Text>10</Text>
                                            </div>
                                            <div style={{padding: 10}}>
                                                <Text type="secondary">Category</Text> :{" "}
                                                <div style={{
                                                    display: "flex",
                                                    justifyContent: "start",
                                                    flexWrap: "wrap"
                                                }}>
                                                    <a style={{margin: "5px"}}>
                                                        <Text code> food </Text> <br/>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPane>
                                    <TabPane tab="Reviews" key="processing">
                                        Awesome Reviews
                                    </TabPane>
                                </Tabs>
                            </Row>
                        </Content>
                    </Layout>
                </Content>
                <Foot/>
            </Layout>
        </div>
    );
};

export default Detail;
