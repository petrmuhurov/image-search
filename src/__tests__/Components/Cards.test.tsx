import React from "react";

import { Cards } from "../../components";
import render, { fireEvent, waitFor } from "../../utils/tests";

import { CARDS } from "../../__mocks__/cards";

const noop = () => {};

describe("<Cards>:", function () {
    describe("placeholder", function () {
        it("default", async () => {
            const { getByTestId } = render(
                <Cards data={[]} totalCount={0} loadMore={noop} />
            );

            const node = getByTestId("cards");

            expect(node).toBeInTheDocument();

            expect(node).toHaveTextContent("No Data");
        });

        it("custom", async () => {
            const { getByTestId } = render(
                <Cards
                    data={[]}
                    totalCount={0}
                    loadMore={noop}
                    noDataPlaceholder="Custom placeholder"
                />
            );

            const node = getByTestId("cards");

            expect(node).toBeInTheDocument();

            expect(node).toHaveTextContent("Custom placeholder");
        });
    });

    describe("loadMore", function () {
        it("triggers", async () => {
            const loadMore = jest.fn(() => {});

            const { getByTestId } = render(
                <Cards data={CARDS} totalCount={1000} loadMore={loadMore} />
            );

            const node = getByTestId("cards");

            fireEvent.scroll(node, { target: { scrollTop: 10000 } });

            await waitFor(() => {
                expect(loadMore).toHaveBeenCalled();
            });
        });

        it("doesn't trigger when totalCount <= data.length", async () => {
            const loadMore = jest.fn(() => {});

            const { getByTestId } = render(
                <Cards
                    data={CARDS}
                    totalCount={CARDS.length}
                    loadMore={loadMore}
                />
            );

            const node = getByTestId("cards");

            fireEvent.scroll(node, { target: { scrollTop: 10000 } });

            await waitFor(() => {
                expect(loadMore).not.toHaveBeenCalled();
            });
        });
    });
});
