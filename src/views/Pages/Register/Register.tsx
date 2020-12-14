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
                    style={{ marginBottom: "5px" }}
                    rules={[
                        { required: true, message: "Please input your first name!" }
                    ]}
                >
                    <Input
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
                        style={{ borderRadius: '10px' }}
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
                        style={{ borderRadius: '10px' }}
                        placeholder="Confirm Password"
                        name="confirmPassword"
                    //   onChange={handleChange}
                    />
                    {/* {errors.confirmPassword && (
                  <div className="validation">{errors.confirmPassword}</div>
                )} */}
                </Form.Item>
                <Form.Item
                    style={{ marginBottom: "5px" }}>
                    <div >
                        <Button
                            className="loginBtn"
                            type="primary"
                            // onClick={handleSubmit}
                            style={{ width: "49%" }}
                        // loading={loading}
                        >
                            Register
                  </Button>
                        <Button className="loginBtn" type="ghost" style={{ width: "49%" }}>
                            <Link to="/login">Login</Link>
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