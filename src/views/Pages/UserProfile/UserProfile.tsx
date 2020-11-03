import React, { FC, useState, useEffect } from 'react';
import { Form, Avatar, Badge, Input, Button, Col } from 'antd';
import { UserOutlined } from "@ant-design/icons";
import './../../../App.css';
import Paragraph from "antd/lib/typography/Paragraph";
import MainLayout from "../../Layouts/MainLayout"


const UserProfile: FC = (props: any) => {
    const initialUser = {
        firstName: "Ram",
        lastName: "Hari",
        email: "ramhari@google.com",
        phone: "123456789"
    }

    const [errors, setErrors] = useState({});
    const [user, setUser] = useState({ ...initialUser });
    const [imageUrls, setImageUrl] = useState([] as any);

    const onUserChange = (name: string, value: any) => {
        setUser(user => ({
            ...user,
            [name]: value
        }));
    }

    const handleSubmit = () => {

    }

    const handleImageChange = () => {

    }

    return (
        <MainLayout>
            <div className="mainContainer" style={{ display: "flex", flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                <div className="userWrapper">
                    <div className="userInfo" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                        <div style={{ width: "500px" }}>
                            <Col span={11}>
                                <div className="avatar">
                                    <span className="avatar-item">
                                        <Badge>
                                        {imageUrls.length ? (
                                            <img
                                            src={`D:/node/react/logistic/src/uploads/1589796118823-aaaaaaaaaaaaaaaaaaaaaaaa.jfif`}
                                            />
                                        ) : (
                                            <Avatar
                                            shape="square"
                                            icon={<UserOutlined />}
                                            style={{
                                                height: "90px",
                                                width: "98px",
                                                fontSize: "72px"
                                            }}
                                            />
                                        )}
                                        </Badge>
                                    </span>
                                </div>

                                <div>
                                    <div style={{ paddingTop: "10px" }}>
                                        <Form.Item>
                                            <input
                                                type="file"
                                                name="image"
                                                className="form-control"
                                                onChange={handleImageChange}
                                            />
                                            {/* {errors.image && (
                                                <div className="validation">{errors.image}</div>
                                            )} */}
                                    </Form.Item>
                                    </div>
                                    <div className="userDetails" style={{ width: "247px" }}>
                                        <Form.Item label="First Name" style={{ margin: "0px" }}>
                                            <Paragraph
                                                editable={{
                                                    onChange: value => onUserChange("firstName", value)
                                                }}
                                                style={{ margin: "0px" }}
                                            >
                                                {user && user.firstName}
                                            </Paragraph>
                                            {/* {errors.firstName && (
                                                <div className="validation">{errors.firstName}</div>
                                            )} */}
                                        </Form.Item>
                                        <Form.Item label="Last Name" style={{ margin: "0px" }}>
                                            <Paragraph
                                                editable={{
                                                    onChange: value => onUserChange("lastName", value)
                                                }}
                                                style={{ margin: "0px" }}
                                            >
                                                {user.lastName && user.lastName}
                                            </Paragraph>
                                            {/* {errors.lastName && (
                                                <div className="validation">{errors.lastName}</div>
                                            )} */}
                                        </Form.Item>
                                        <Form.Item label="Email" style={{ margin: "0px" }}>
                                            <Paragraph
                                                editable={{
                                                    onChange: value => onUserChange("email", value)
                                                }}
                                                style={{ margin: "0px" }}
                                            >
                                                {user.email && user.email}
                                            </Paragraph>
                                            {/* {errors.email && (
                                                <div className="validation">{errors.email}</div>
                                            )} */}
                                        </Form.Item>
                                        <Form.Item label="Phone" style={{ margin: "0px" }}>
                                            <Paragraph
                                                editable={{
                                                    onChange: value => onUserChange("phone", value)
                                                }}
                                                style={{ margin: "0px" }}
                                            >
                                                {user.phone && user.phone}
                                            </Paragraph>
                                            {/* {errors.phone && (
                                                <div className="validation">{errors.phone}</div>
                                            )} */}
                                        </Form.Item>
                                    </div>
                                </div>
                            </Col>

                            <Button block onClick={handleSubmit}>
                                Update
                            </Button>

                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
};


export default UserProfile;