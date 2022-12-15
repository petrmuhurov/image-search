import React from "react";

import styled from "styled-components";

import { Layout } from "antd";

const { Header, Footer, Content } = Layout;

interface IProps {
    children: React.ReactNode;
}

const StyledLayout = styled(Layout)`
    min-height: 100vh;
`;

const AppLayout: React.FC<IProps> = ({ children }) => (
    <StyledLayout className="layout">
        <Header>Header</Header>
        <Content>{children}</Content>
        <Footer>Footer</Footer>
    </StyledLayout>
);

export default AppLayout;
