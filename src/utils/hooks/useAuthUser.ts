import { useContext } from "react";

import { UserContext } from "../../context";

const useAuthUser = () => {
    const userContext = useContext(UserContext);

    return {
        ...userContext,
    };
};

export default useAuthUser;
