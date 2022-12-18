import React from "react";

import userEvent from "@testing-library/user-event";

import Authentication from "../../Pages/Authentication";
import render, { fireEvent } from "../../utils/tests";

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
        it("Is Required", async () => {
            const { getByTestId } = render(<Auth />);

            const node = getByTestId("name-field-input");
            const button = getByTestId("submit-button");

            await userEvent.click(button);

            expect(node).toBeInTheDocument();
        });

        it("Max Length 32", async () => {
            const { getByTestId } = render(<Auth />);

            const node = getByTestId("name-field-input");
            const button = getByTestId("submit-button");

            fireEvent.change(node, { target: { value: "a".repeat(33) } });

            await userEvent.click(button);

            expect(node).toBeInTheDocument();
        });
    });
});
