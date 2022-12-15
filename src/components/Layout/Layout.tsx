import React from "react";

import styled from "styled-components";

import { Layout } from "antd";

import Header from "../Header";

interface IProps {
    children: React.ReactNode;
}

const StyledLayout = styled(Layout)`
    min-height: 100vh;

    & .ant-layout-content {
        max-height: calc(100vh - 64px);
        overflow-y: auto;
    }
`;

const AppLayout: React.FC<IProps> = ({ children }) => (
    <StyledLayout className="layout">
        <Header />
        <Layout.Content>{children}</Layout.Content>
    </StyledLayout>
);

export default AppLayout;
