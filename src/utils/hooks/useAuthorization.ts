import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { get, set } from "local-storage";

import { ROUTES } from "../../constants";

const __STORAGE_KEY__ = "__AUTHENTICATED_USER__";

interface IUser {
    name: string;
}

const useAuthorization = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState<IUser | undefined>(get(__STORAGE_KEY__));

    const login = (user: IUser) => {
        setUser(user);

        set(__STORAGE_KEY__, user);

        navigate(ROUTES.HOME);
    };

    const logout = () => {
        setUser(undefined);

        set(__STORAGE_KEY__, undefined);

        navigate(ROUTES.LOGIN);
    };

    return {
        user,
        login,
        logout,
        isLoggedIn: !!user?.name,
    };
};

export default useAuthorization;
