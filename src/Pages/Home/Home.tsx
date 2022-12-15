import React, { useState } from "react";

import { Helmet } from "react-helmet";
import { Form, Input } from "antd";

import Layout from "../../components/Layout";

import { useImagesQuery } from "../../utils/hooks";

const Home: React.FC = () => {
    const [searchValue, setSearchValue] = useState("");

    const { data, isFetching } = useImagesQuery({ search: searchValue });

    return (
        <>
            <Helmet title="Home" />
            <Layout>
                <Form>
                    <Form.Item label="Enter">
                        <Input
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                        />
                    </Form.Item>
                </Form>
            </Layout>
        </>
    );
};

export default Home;
