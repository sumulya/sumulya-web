import React, { FC, useState, useEffect } from 'react';
import { Avatar, Badge, Col, Typography, Space, Row } from 'antd';
import { UserOutlined } from "@ant-design/icons";
import './../../../App.css';
import MainLayout from "../../Layouts/MainLayout"

const { Title, Text } = Typography;


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
            <div className="userWrapper">
                <Row>
                    <Col span={5} push={2}>
                        <div className="profileDetails">
                            <div className="avatar">
                                <span className="avatar-item">
                                    <Badge>
                                        {imageUrls.length ? (
                                            <img
                                                src={imageUrls[0]}
                                            />
                                        ) : (
                                                <Avatar
                                                    shape="circle"
                                                    icon={<UserOutlined />}
                                                    style={{
                                                        height: "150px",
                                                        width: "150px",
                                                        fontSize: "72px"
                                                    }}
                                                />
                                            )}
                                    </Badge>
                                </span>
                                <div className="avatar-update-button">Update Photo</div>
                            </div>

                            <div>
                                <div className="info">
                                    <Space direction="vertical">
                                        <Title level={4}>{user && user.firstName} {user && user.lastName}</Title>
                                        <Text><b>Email:</b> {user && user.email}</Text>
                                        <Text><b>Phone No.:</b> {user && user.phone}</Text>
                                    </Space>
                                </div>
                            </div>
                            <div className="user-update-button">Edit Profile</div>
                        </div>
                    </Col>
                    <Col span={18} push={2}>
                        <div className="profileActivities">
                            <Title level={1}>Hi, I'm {user && user.firstName}</Title>

                            <h2>About</h2>
                        Lives in Kathmandu, Nepal
                    </div>
                    </Col>
                </Row>
            </div>
        </MainLayout>
    )
};



export default UserProfile;