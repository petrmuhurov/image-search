import React from "react";

import styled from "styled-components";

import { Helmet } from "react-helmet";
import { Form, Input, Button } from "antd";

import Layout from "../../components/Layout";

import { useAuthUser } from "../../utils/hooks";

const FormWrapper = styled("div")`
    height: calc(100vh - 64px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & .ant-form {
        min-width: 400px;
    }
`;

const Login: React.FC = () => {
    const { login } = useAuthUser();

    return (
        <Layout>
            <Helmet title="Login" />
            <FormWrapper>
                <h2>Please enter your first name</h2>
                <Form onFinish={login}>
                    <Form.Item
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: "Please fill the required field",
                            },
                            {
                                max: 32,
                                message: "Only 32 symbols allowed",
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
