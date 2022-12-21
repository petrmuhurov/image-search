import React from "react";

import { Layout } from "antd";

import Header from "../Header";

import { StyledLayout } from "./styled";

const AppLayout = ({ children }: React.PropsWithChildren) => (
    <StyledLayout className="layout">
        <Header />
        <Layout.Content>{children}</Layout.Content>
    </StyledLayout>
);

export default AppLayout;
