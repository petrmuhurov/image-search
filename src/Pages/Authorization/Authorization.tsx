import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../../context";
import { useAuthorization } from "../../utils/hooks";
import { ROUTES } from "../../constants";

interface IProps {
    children: React.ReactElement;
}

const Authorization = ({ children }: IProps) => {
    const navigate = useNavigate();

    const { user, login, logout, isLoggedIn } = useAuthorization();

    useEffect(() => {
        if (isLoggedIn) navigate(ROUTES.HOME);
        if (!isLoggedIn) navigate(ROUTES.LOGIN);
    }, [isLoggedIn, navigate]);

    return (
        <UserContext.Provider
            value={{
                user,
                login,
                logout,
                isLoggedIn,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default Authorization;
