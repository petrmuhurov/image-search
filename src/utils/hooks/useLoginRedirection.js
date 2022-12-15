import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useAuthentication from "./useAuthentication";

import { ROUTES } from "../../constants";

const useLoginRedirection = () => {
    const navigate = useNavigate();

    const { isLoggedIn } = useAuthentication();

    useEffect(() => {
        if (!isLoggedIn) navigate(ROUTES.LOGIN);
    }, [isLoggedIn, navigate]);
};

export default useLoginRedirection;
