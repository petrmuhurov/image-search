import { makeObservable, observable, computed, action } from "mobx";

import { get, set } from "local-storage";

interface User {
    name: string;
}

const __STORAGE_KEY__ = "__LOGGED_IN_USER__";

class UserStore {
    user: User | undefined;

    constructor() {
        makeObservable(this, {
            user: observable,
            isLoggedIn: computed,
            login: action,
            logout: action,
        });

        this.user = get(__STORAGE_KEY__);
    }

    get isLoggedIn() {
        return Boolean(this.user);
    }

    login(user: User) {
        this.user = user;

        set(__STORAGE_KEY__, user)
    }

    logout() {
        this.user = undefined;
    }
}

export default new UserStore();
