import { useCallback } from "react";

import { useRecoilState } from "recoil";

import { authUser } from "../../stores";

interface User {
    name: string;
}

const useAuthUser = () => {
    const [user, setUser] = useRecoilState(authUser);

    const logout = useCallback(() => {
        setUser({});
    }, [setUser]);

    const login = useCallback(
        (user: User) => {
            setUser(user);
        },
        [setUser]
    );

    return {
        user,
        isLoggedIn: !!user?.name,

        login,
        logout,
    };
};

export default useAuthUser;
