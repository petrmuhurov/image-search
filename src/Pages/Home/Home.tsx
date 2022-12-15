import React, { useState } from "react";

import { Helmet } from "react-helmet";
import { Form, Input, Spin } from "antd";

import Layout from "../../components/Layout";
import Cards from "../../components/Cards";

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
                        <Input.Search
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            loading={isFetching}
                            disabled={isFetching}
                        />
                    </Form.Item>
                </Form>
                <Spin spinning={isFetching}>
                    <Cards data={data} />
                </Spin>
            </Layout>
        </>
    );
};

export default Home;
