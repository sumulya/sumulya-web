import React, { FC } from 'react';
import Foot from '../../Partials/Foot';
import Head from '../../Partials/Head';
import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import './../../../App.css';


const Login: FC = () => (
    <div className="login">
        <Head />

        <div className="emailForm">
            <Form name="basic" style={{ width: '300px' }} initialValues={{ remember: true }}>
                <Form.Item
                    name="email"
                    style={{ marginBottom: '8px' }}
                    rules={[
                        {
                            type: 'email', message: 'The input is not valid E-mail!',
                        },
                        { required: true, message: "Please input your email!" }
                    ]}
                >
                    <Input
                        name="email"
                        placeholder="Email"
                    // onChange={handleChange}
                    />
                    {/* {errors.email && (
                        <div className="validation">{errors.email}</div>
                    )} */}
                </Form.Item>

                <Form.Item
                    name="password"
                    style={{ marginBottom: '8px' }}
                    rules={[
                        { required: true, message: "Please input your password!" }
                    ]}
                    hasFeedback
                >
                    <Input.Password
                        style={{ borderRadius: '10px' }}
                        name="password"
                        placeholder="Password"
                    // onChange={handleChange}
                    />
                    {/* {errors.password && (
                        <div className="validation">{errors.password}</div>
                    )} */}
                </Form.Item>

                <Form.Item
                    style={{ marginBottom: '8px' }}>
                    <div>
                        <Button
                            type="primary"
                            className="loginBtn"
                            // onClick={handleSubmit}
                            style={{ width: "49%" }}
                        >
                            Login
                  </Button>
                        <Button className="loginBtn" type="ghost" style={{ width: "49%" }}>
                            <Link to="/register">Register</Link>
                        </Button>
                    </div>
                </Form.Item>
            </Form>
            <div className="facebookLogin">
                <Button className="facebook socialButton ">FACEBOOK</Button>
            </div>
            <div className="googleLogin">
                <Button className="google socialButton ">GOOGLE+</Button>
            </div>
            <div className="authBrandingWrapper">
                <div className="logoWeapper">
                    <Link to="/">
                        <img alt="logo" src="/images/sum-logo.png" className="logo" />
                    </Link>
                </div>
            </div>
        </div>



        <div className="footer" style={{ position: "fixed", bottom: '0' }}>
            <Foot />
        </div>

    </div>

);


export default Login;