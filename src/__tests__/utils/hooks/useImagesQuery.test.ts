import { rest } from "msw";
import { setupServer } from "msw/node";
import { renderHook } from "@testing-library/react-hooks";
import { RecoilRoot } from "recoil";

import { waitFor } from "../../../utils/tests";
import { useImagesQuery } from "../../../utils/hooks";

import {
    PEXELS_RESPONSE_FIRST_PAGE,
    PEXELS_RESPONSE_SECOND_PAGE,
} from "../../../__mocks__";

const QUERY_VALUES = {
    BANANA: "banana",
    TO_THROW_ERROR: "__THROW_ERROR__",
};

const server = setupServer(
    rest.get("https://api.pexels.com/v1/search", (req, res, ctx) => {
        const query = req.url.searchParams.get("query");
        const page = +(req.url.searchParams.get("page") ?? 2);

        if (query === QUERY_VALUES.BANANA)
            return res(ctx.json(PEXELS_RESPONSE_FIRST_PAGE));

        if (query === QUERY_VALUES.BANANA && page === 2)
            return res(ctx.json(PEXELS_RESPONSE_SECOND_PAGE));

        if (query === QUERY_VALUES.TO_THROW_ERROR) return res(ctx.status(400));
    })
);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe("<useImageQuery>:", function () {
    describe("Initialization: empty search", function () {
        it("Data is empty if search is empty", async () => {
            const { result } = renderHook(() => useImagesQuery({}), {
                wrapper: RecoilRoot,
            });

            expect(result.current.data).toStrictEqual([]);
        });

        it("isFetching is falsy", async () => {
            const { result } = renderHook(() => useImagesQuery({}), {
                wrapper: RecoilRoot,
            });

            expect(result.current.isFetching).toBeFalsy();
        });

        it("totalCount is equal to 0", async () => {
            const { result } = renderHook(() => useImagesQuery({}), {
                wrapper: RecoilRoot,
            });

            expect(result.current.totalCount).toBe(0);
        });

        it("error is empty", async () => {
            const { result } = renderHook(() => useImagesQuery({}), {
                wrapper: RecoilRoot,
            });

            expect(result.current.error).toStrictEqual({});
        });
    });

    describe("Initialization: search provided", function () {
        it("isFetching is true", async () => {
            const { result } = renderHook(
                () => useImagesQuery({ search: QUERY_VALUES.BANANA }),
                {
                    wrapper: RecoilRoot,
                }
            );

            expect(result.current.isFetching).toBeTruthy();

            await waitFor(() => {
                expect(result.current.isFetching).toBeFalsy();
            });
        });

        it("totalCount is set correctly", async () => {
            const { result } = renderHook(
                () => useImagesQuery({ search: QUERY_VALUES.BANANA }),
                {
                    wrapper: RecoilRoot,
                }
            );

            await waitFor(() => {
                expect(result.current.totalCount).toBe(5000);
            });
        });

        it("data length corresponds to the page", async () => {
            const { result } = renderHook(
                () => useImagesQuery({ search: QUERY_VALUES.BANANA }),
                {
                    wrapper: RecoilRoot,
                }
            );

            await waitFor(() => {
                expect(result.current.data.length).toBe(30);
            });
        });

        it("error is set correctly", async () => {
            const { result } = renderHook(
                () => useImagesQuery({ search: QUERY_VALUES.TO_THROW_ERROR }),
                {
                    wrapper: RecoilRoot,
                }
            );

            await waitFor(() => {
                /**
                 * @TODO fix when base service will be added correctly with catching errors
                 */
                expect(result.current.error).toBeInstanceOf(SyntaxError);
            });
        });

        it("loadMore works correctly", async () => {
            const { result } = renderHook(
                () => useImagesQuery({ search: QUERY_VALUES.BANANA }),
                {
                    wrapper: RecoilRoot,
                }
            );

            await waitFor(() => {
                expect(result.current.isFetching).toBeFalsy();
            });

            await waitFor(() => {
                result.current.loadMore();
            });

            await waitFor(() => {
                expect(result.current.data.length).toBe(60);
                expect(result.current.totalCount).toBe(5000);
            });
        });
    });
});
