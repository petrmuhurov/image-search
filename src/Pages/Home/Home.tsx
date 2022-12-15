import React, { useState } from "react";

import styled from "styled-components";

import { Helmet } from "react-helmet";
import { Form, Input, Spin } from "antd";

import Layout from "../../components/Layout";
import Cards from "../../components/Cards";

import { useImagesQuery } from "../../utils/hooks";

const FormWrapper = styled(Form)`
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 12px;

    & .ant-form-item {
        width: 400px;
        margin-bottom: 12px;
    }
`;

const Home: React.FC = () => {
    const [searchValue, setSearchValue] = useState("");

    const { data, isFetching } = useImagesQuery({ search: searchValue });

    return (
        <>
            <Helmet title="Home" />
            <Layout>
                <FormWrapper>
                    <Form.Item>
                        <Input.Search
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            loading={isFetching}
                            disabled={isFetching}
                            placeholder="We will get you whatever you want"
                        />
                    </Form.Item>
                </FormWrapper>
                <Spin spinning={isFetching}>
                    <Cards data={data} />
                </Spin>
            </Layout>
        </>
    );
};

export default Home;
