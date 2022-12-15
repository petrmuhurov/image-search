import { userStore } from "../../stores";

const useAuthentication = () => {
    const {
        user,
        isLoggedIn,

        login,
        logout,
    } = userStore;

    return {
        user,
        isLoggedIn,

        login,
        logout,
    };
};

export default useAuthentication;
