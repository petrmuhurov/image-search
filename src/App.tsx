import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Spin } from "antd";
import { Helmet } from "react-helmet";

import { ROUTES } from "./constants";

import "./App.css";

const Home = lazy(() => import("./Pages/Home"));
const Login = lazy(() => import("./Pages/Login"));
const NotFound = lazy(() => import("./Pages/NotFound"));
const Authorization = lazy(() => import("./Pages/Authorization"));

function App() {
    return (
        <div className="App">
            <Helmet
                defaultTitle="Image Search"
                titleTemplate="Image Search - %s"
            />
            <Suspense fallback={<Spin size="large" />}>
                <BrowserRouter>
                    <Authorization>
                        <Routes>
                            <Route
                                path={ROUTES.HOME}
                                element={<Home />}
                                errorElement={<NotFound />}
                            />
                            <Route path={ROUTES.LOGIN} element={<Login />} />
                        </Routes>
                    </Authorization>
                </BrowserRouter>
            </Suspense>
        </div>
    );
}

export default App;
