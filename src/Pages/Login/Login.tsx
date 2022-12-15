import React, { useEffect } from "react";

import styled from "styled-components";

import { Helmet } from "react-helmet";
import { Form, Input, Button } from "antd";

import Layout from "../../components/Layout";

import { useAuthUser } from "../../utils/hooks";

const FormWrapper = styled("div")`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Login: React.FC = () => {
    const { login } = useAuthUser();

    return (
        <Layout>
            <Helmet title="Login" />
            <FormWrapper>
                <Form onFinish={login}>
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
                        <Input placeholder="Please enter your name" />
                    </Form.Item>
                    <Button type="primary" htmlType="submit">
                        Login
                    </Button>
                </Form>
            </FormWrapper>
        </Layout>
    );
};

export default Login;
