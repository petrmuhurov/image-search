import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import { Helmet } from "react-helmet";
import { Form, Input, Button } from "antd";

import Layout from "../../components/Layout";

import { useAuthUser } from "../../utils/hooks";
import { ROUTES } from "../../constants";

const StyledLayout = styled(Layout)`
    & .ant-form {
        display: flex;
        justify-content: center;
    }
`;

const Login: React.FC = () => {
    const navigate = useNavigate();

    const { login, isLoggedIn } = useAuthUser();

    useEffect(() => {
        if (isLoggedIn) navigate(ROUTES.HOME);
    }, [isLoggedIn, navigate]);

    return (
        <StyledLayout>
            <Helmet title="Login" />
            <Form
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 8 }}
                onFinish={login}
            >
                <Form.Item
                    label="First name"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: "Please fill the required field",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form>
        </StyledLayout>
    );
};

export default Login;
