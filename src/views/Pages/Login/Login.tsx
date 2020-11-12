import React, { FC } from 'react';
import { Form, Input, Button, Layout } from 'antd';
import { Link } from 'react-router-dom';
import './../../../App.css';

const { Content } = Layout;

const Login: FC = () => {

    return (
        <Content>
            <div className="login">
                <div className="authBrandingWrapper" style={{ margin: '64px 0px 0px 0px' }}>
                    <div className="logoWeapper">
                        <Link to="/">
                            <img alt="logo" src="/images/sum-logo.png" className="logo" />
                        </Link>
                    </div>
                </div>

                <div className="emailForm">
                    <Form name="basic" style={{ width: '300px' }} initialValues={{ remember: true }}>
                        <Form.Item
                            name="email"
                            style={{ marginBottom: '8px' }}
                            rules={[
                                { type: 'email', message: 'The input is not valid E-mail!' },
                                { required: true, message: "Please input your email!" }
                            ]}
                        >
                            <Input
                                name="email"
                                placeholder="Email"
                            // onChange={handleChange}
                            />
                        </Form.Item >

                        <Form.Item
                            name="password"
                            style={{ marginBottom: '8px' }}
                            rules={[
                                { required: true, message: "Please input your password!" }
                            ]}
                            hasFeedback
                        >
                            <Input.Password
                                name="password"
                                placeholder="Password"
                            // onChange={handleChange}
                            />
                        </Form.Item>

                        <Form.Item
                            style={{ marginBottom: '8px' }}>
                            <div>
                                <Button
                                    type="primary"
                                    className="loginBtn"
                                    // onClick={handleSubmit}
                                    style={{ width: "100%" }}
                                >
                                    Login
                                </Button>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <Link to="/register">
                                        <strong>Register Now!</strong>
                                    </Link>
                                    <Link to="/">
                                        <strong>Forgot Pasword?</strong>
                                    </Link>
                                </div>
                            </div>
                            <div style={{ display: "flex", justifyContent: "center" }}>OR</div>
                        </Form.Item>
                    </Form>
                    <div className="facebookLogin">
                        <Button className="facebook socialButton ">FACEBOOK</Button>
                    </div>
                    <div className="googleLogin">
                        <Button className="google socialButton ">GOOGLE</Button>
                    </div>
                </div>
            </div>
        </Content>
    )
};


export default Login;