import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import { RecoilRoot } from "recoil";

import { Helmet, HelmetProvider } from "react-helmet-async";

import Authentication from "./Pages/Authentication";
import AppRoutes from "./Pages/Routes";
import { ApplicationFallback } from "./components";

import "./App.css";

function App() {
    return (
        <div className="App">
            <HelmetProvider>
                <Helmet
                    defaultTitle="Image Search"
                    titleTemplate="Image Search - %s"
                />
                <Suspense fallback={<ApplicationFallback />}>
                    <RecoilRoot>
                        <Authentication>
                            <BrowserRouter>
                                <AppRoutes />
                            </BrowserRouter>
                        </Authentication>
                    </RecoilRoot>
                </Suspense>
            </HelmetProvider>
        </div>
    );
}

export default App;
