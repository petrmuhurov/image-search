import React from "react";

import { UserContext } from "../../context";
import { useAuthorization } from "../../utils/hooks";

interface Props {
    children: React.ReactElement;
}

const Authorization: React.FunctionComponent<Props> = ({ children }) => {
    const { user, login, logout, isLoggedIn } = useAuthorization();

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
