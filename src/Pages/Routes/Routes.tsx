import React, { lazy } from "react";

import { Routes, Route } from "react-router-dom";

import { ROUTES } from "../../constants";

const Home = lazy(() => import("../Home"));
const NotFound = lazy(() => import("../NotFound"));

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;
