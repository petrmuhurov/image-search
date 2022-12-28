import React from "react";
import { Link } from "react-router-dom";

import { Result, Button } from "antd";
import { Helmet } from "react-helmet-async";

import { ROUTES } from "../../constants";

const NotFound = () => {
    return (
        <>
            <Helmet title="Not Found" />
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={
                    <Link to={ROUTES.HOME}>
                        <Button type="primary">Back Home</Button>
                    </Link>
                }
            />
        </>
    );
};

export default NotFound;
