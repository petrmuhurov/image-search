import { renderHook, act } from "@testing-library/react-hooks";

import useAuthorization from "./useAuthorization";

describe("useAuthorization:", function () {
    describe("Initialization", function () {
        it("user", function () {
            const { result } = renderHook(() => useAuthorization());

            expect(result.current.user).toBe(undefined);
        });

        it("login/logout", function () {
            const { result } = renderHook(() => useAuthorization());

            expect(typeof result.current.login).toBe("function");
            expect(typeof result.current.logout).toBe("function");
        });

        it("isLoggedIn", function () {
            const { result } = renderHook(() => useAuthorization());

            expect(result.current.isLoggedIn).toBe(false);
        });
    });

    describe("Acts", function () {
        it("login", function () {
            const { result } = renderHook(() => useAuthorization());

            act(() => {
                result.current.login({ name: "Test" });
            });

            expect(result.current.isLoggedIn).toBe(true);
        });

        it("logout", function () {
            const { result } = renderHook(() => useAuthorization());

            act(() => {
                result.current.login({ name: "Test" });
            });

            expect(result.current.isLoggedIn).toBe(true);

            act(() => {
                result.current.logout();
            });

            expect(result.current.isLoggedIn).toBe(false);
        });
    });
});
