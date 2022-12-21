import React from "react";

import { Spin } from "antd";

import { StyledApplicationFallback } from "./styled";

const ApplicationFallback = () => {
    return (
        <StyledApplicationFallback>
            <Spin size="large" />
        </StyledApplicationFallback>
    );
};

export default ApplicationFallback;
