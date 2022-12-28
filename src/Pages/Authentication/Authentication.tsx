import React from "react";

import { Helmet } from "react-helmet-async";
import { Form, Input, Button } from "antd";

import { Layout } from "../../components";
import { useAuthUser } from "../../utils/hooks";

import { StyledFormWrapper } from "./styled";

const Authentication = ({ children }: React.PropsWithChildren) => {
    const { isLoggedIn, login } = useAuthUser();

    return (
        <Layout>
            <Helmet title="Login" />
            {!isLoggedIn && (
                <StyledFormWrapper>
                    <h2>Please enter your first name</h2>
                    <Form onFinish={login}>
                        <Form.Item
                            data-testid="name-field"
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: "Field is required",
                                },
                                {
                                    max: 32,
                                    message: "Only 32 symbols allowed",
                                },
                            ]}
                        >
                            <Input
                                placeholder="Please enter your name"
                                data-testid="name-field-input"
                            />
                        </Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            data-testid="submit-button"
                        >
                            Sign In
                        </Button>
                    </Form>
                </StyledFormWrapper>
            )}
            {isLoggedIn && children}
        </Layout>
    );
};

export default Authentication;
