import { Layout } from "antd";

import styled from "styled-components";

export const StyledLayout = styled(Layout)`
    min-height: 100vh;

    & .ant-layout-content {
        max-height: calc(100vh - 64px);
        overflow-y: auto;
    }
`;
