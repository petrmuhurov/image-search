import React from "react";

import Authentication from "./Authentication";
import render from "../../utils/tests";

const Auth = () => <Authentication>Signed in</Authentication>;

describe("<Authentication>:", function () {
    describe("All controls are visible", function () {
        it("First Name", async () => {
            const { getByTestId } = render(<Auth />);

            const node = getByTestId("name-field");

            expect(node).toBeInTheDocument();
            expect(node).toBeVisible();
        });

        it("Sign In", async () => {
            const { getByTestId } = render(<Auth />);

            const node = getByTestId("submit-button");

            expect(node).toBeInTheDocument();
            expect(node).toBeVisible();
        });
    });

    describe("Validation errors", function () {
        xit("Max length 32", async () => {});

        xit("Is Required", async () => {});
    });
});
