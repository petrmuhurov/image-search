import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../../context";
import { useAuthorization } from "../../utils/hooks";
import { ROUTES } from "../../constants";

interface Props {
    children: React.ReactElement;
}

const Authorization: React.FunctionComponent<Props> = ({ children }) => {
    const navigate = useNavigate();

    const { user, login, logout, isLoggedIn } = useAuthorization();

    useEffect(() => {
        if (isLoggedIn) navigate(ROUTES.HOME);
        if (!isLoggedIn) navigate(ROUTES.LOGIN);
    }, [isLoggedIn]);

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
