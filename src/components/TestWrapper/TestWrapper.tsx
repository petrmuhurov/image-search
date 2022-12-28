import React from "react";
import { BrowserRouter } from "react-router-dom";

import { RecoilRoot } from "recoil";

import { HelmetProvider } from "react-helmet-async";

const TestWrapper = ({ children }: React.PropsWithChildren) => (
    <BrowserRouter>
        <HelmetProvider>
            <RecoilRoot>{children}</RecoilRoot>
        </HelmetProvider>
    </BrowserRouter>
);

export default TestWrapper;
