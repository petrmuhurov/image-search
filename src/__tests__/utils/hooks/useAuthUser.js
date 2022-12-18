import { renderHook, act } from "@testing-library/react-hooks";
import { RecoilRoot } from "recoil";

import { useAuthUser } from "../../../utils/hooks";

describe("<useAuthUser>:", function () {
    describe("Initialization", function () {
        it("User is empty", async () => {
            const { result } = renderHook(() => useAuthUser(), {
                wrapper: RecoilRoot,
            });

            expect(result.current.user.name).toBe(undefined);
            expect(result.current.isLoggedIn).toBeFalsy();
        });
    });

    describe("Logging in", function () {
        it("User data stores correctly", async () => {
            const { result } = renderHook(() => useAuthUser(), {
                wrapper: RecoilRoot,
            });

            act(() => {
                result.current.login({ name: "Name" });
            });

            expect(result.current.user.name).toBe("Name");
        });
    });

    describe("Logging out", function () {
        it("User data clears from state", async () => {
            const { result } = renderHook(() => useAuthUser(), {
                wrapper: RecoilRoot,
            });

            act(() => {
                result.current.login({ name: "Name" });
            });

            expect(result.current.user.name).toBe("Name");

            act(() => {
                result.current.logout();
            });

            expect(result.current.user.name).toBe(undefined);
        });
    });

    describe("isLoggedIn", function () {
        it("true after logging in", async () => {
            const { result } = renderHook(() => useAuthUser(), {
                wrapper: RecoilRoot,
            });

            act(() => {
                result.current.login({ name: "Name" });
            });

            expect(result.current.isLoggedIn).toBeTruthy();
        });

        it("false after logging out", async () => {
            const { result } = renderHook(() => useAuthUser(), {
                wrapper: RecoilRoot,
            });

            act(() => {
                result.current.login({ name: "Name" });
            });

            expect(result.current.isLoggedIn).toBeTruthy();

            act(() => {
                result.current.logout();
            });

            expect(result.current.isLoggedIn).toBeFalsy();
        });
    });
});
