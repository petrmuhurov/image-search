import React from "react";

import styled from "styled-components";

import { Layout, Button } from "antd";
import { useAuthUser } from "../../utils/hooks";

const StyledHeader = styled(Layout.Header)`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: #fff !important;
    gap: 24px;
`;

const Header = () => {
    const { user, isLoggedIn, logout } = useAuthUser();

    return (
        <StyledHeader>
            {isLoggedIn && (
                <>
                    <span className="header-caption">{`Hello, ${user?.name}`}</span>
                    <Button onClick={logout}>Logout</Button>
                </>
            )}
        </StyledHeader>
    );
};

export default Header;
