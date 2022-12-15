import React from "react";

import styled from "styled-components";

import { Spin } from "antd";

const Wrapper = styled("div")`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ApplicationFallback = () => {
    return (
        <Wrapper>
            <Spin size="large" />
        </Wrapper>
    );
};

export default ApplicationFallback;
