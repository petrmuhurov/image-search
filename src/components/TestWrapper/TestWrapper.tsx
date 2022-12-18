import React from "react";
import { BrowserRouter } from "react-router-dom";

import { RecoilRoot } from "recoil";

const TestWrapper = ({ children }: React.PropsWithChildren) => (
    <BrowserRouter>
        <RecoilRoot>{children}</RecoilRoot>
    </BrowserRouter>
);

export default TestWrapper;
