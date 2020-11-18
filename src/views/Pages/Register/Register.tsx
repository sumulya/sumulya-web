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
                            style={{ marginBottom: "5px" }}
                            rules={[
                                { required: true, message: "Please input your first name!" }
                            ]}
                        >
                            <Input
                                style={{ borderRadius: '8px' }}
                                placeholder="Full Name"
                                name="firstName"
                            //   onChange={handleChange}
                            />
                        </Form.Item>

                        <Form.Item
                            style={{ marginBottom: "5px" }}
                            rules={[
                                {
                                    type: 'number', message: 'The input is not valid number',
                                },
                                { required: true, message: "Please input your phone!" }
                            ]}
                        >
                            <Input
                                style={{ borderRadius: '8px' }}
                                placeholder="Phone"
                                name="phone"
                            //   onChange={handleChange}
                            />

                        </Form.Item>
                        <Form.Item
                            name="email"
                            style={{ marginBottom: "5px" }}
                            rules={[
                                {
                                    type: 'email', message: 'The input is not valid E-mail!',
                                },
                                { required: true, message: "Please input your email!" }
                            ]}
                        >
                            <Input
                                style={{ borderRadius: '8px' }}
                                placeholder="Email"
                                name="email"
                            //   onChange={handleChange}
                            />
                            {/* {errors.email && (
                        <div className="validation">{errors.email}</div>
                        )} */}
                        </Form.Item>

                        <Form.Item
                            name="password"
                            style={{ marginBottom: "5px" }}
                            rules={[
                                { required: true, message: "Please input your password!" }
                            ]}
                            hasFeedback
                        >
                            <Input.Password
                                style={{ borderRadius: '8px' }}
                                placeholder="Password"
                                name="password"
                            //   onChange={handleChange}
                            />
                            {/* {errors.password && (
                        <div className="validation">{errors.password}</div>
                        )} */}
                        </Form.Item>

                        <Form.Item
                            name="confirm"
                            hasFeedback
                            style={{ marginBottom: "5px" }}
                            rules={[
                                { required: true, message: "Please confirm your password!" },
                                ({ getFieldValue }) => ({
                                    validator(rule, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject('The two passwords that you entered do not match!');
                                    },
                                }),
                            ]}
                        >
                            <Input.Password
                                style={{ borderRadius: '8px' }}
                                placeholder="Confirm Password"
                                name="confirmPassword"
                            //   onChange={handleChange}
                            />
                            {/* {errors.confirmPassword && (
                        <div className="validation">{errors.confirmPassword}</div>
                        )} */}
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
                                    Register
                                </Button>
                                <div style={{ display: "flex", justifyContent: 'center' }}>
                                    <Link to="/login">
                                        <strong>Back To Login</strong>
                                    </Link>
                                </div>
                            </div>
                            <div style={{ display: "flex", justifyContent: "center" }}><b>OR</b></div>
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