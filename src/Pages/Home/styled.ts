import { Form } from "antd";

import styled from "styled-components";

export const StyledForm = styled(Form)`
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 12px;
    z-index: 10;
    background: #f5f5f5;

    & .ant-form-item {
        width: 400px;
        margin-bottom: 12px;
    }
`;
