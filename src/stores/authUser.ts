import { atom } from "recoil";

import { get, set, remove } from "local-storage";

import { AUTH_USER_STORAGE_KEY } from "../constants";

interface AuthUser {
    name?: string;
}

export default atom({
    key: "authUser",
    default: get(AUTH_USER_STORAGE_KEY) || {} as AuthUser,
    effects: [
        ({ onSet }) => {
            onSet((user: AuthUser) => {
                if (!user?.name) {
                    remove(AUTH_USER_STORAGE_KEY);
                } else set(AUTH_USER_STORAGE_KEY, user);
            });
        },
    ],
});
