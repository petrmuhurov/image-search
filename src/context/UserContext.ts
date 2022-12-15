import { createContext } from "react";

export interface IUser {
    name: string
}

export interface IUserContext {
    user: IUser | undefined,
    isLoggedIn: boolean,
    login: () => void,
    logout: () => void
}

const UserContext = createContext<IUserContext | {}>({});

export default UserContext;
