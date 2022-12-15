import React from "react";
import { Link } from "react-router-dom";

import { Result, Button } from "antd";
import { Helmet } from "react-helmet";

const NotFound: React.FC = () => {
    return (
        <>
            <Helmet title="Not Found" />
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={
                    <Link to={"/"}>
                        <Button type="primary">Back Home</Button>
                    </Link>
                }
            />
        </>
    );
};

export default NotFound;
