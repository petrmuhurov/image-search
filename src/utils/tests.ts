import { render as baseRender } from "@testing-library/react";

import { TestWrapper } from "../components";

//@ts-ignore
const render = (ui, options = {}) =>
    baseRender(ui, { wrapper: TestWrapper, ...options });

export default render;
