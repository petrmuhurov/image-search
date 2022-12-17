import { remove, set, get } from "local-storage";

import { AUTH_USER_STORAGE_KEY } from "../../constants";

interface User {
    name: string;
    password?: string;
}

const service = {
    login: (user: User): User => {
        set(AUTH_USER_STORAGE_KEY, user)

        return get(AUTH_USER_STORAGE_KEY)
    },
    logout: () => remove(AUTH_USER_STORAGE_KEY),
};

export default service;
