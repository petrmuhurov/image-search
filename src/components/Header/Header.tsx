import React from "react";

import { Button } from "antd";

import { useAuthUser } from "../../utils/hooks";

import { StyledHeader } from "./styled";

const Header = () => {
    const { isLoggedIn, user, logout } = useAuthUser();

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
