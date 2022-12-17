import React, { useState } from "react";

import styled from "styled-components";

import { Helmet } from "react-helmet";
import { Form, Input, Spin } from "antd";

import Cards from "../../components/Cards";

import { useImagesQuery } from "../../utils/hooks";

const FormWrapper = styled(Form)`
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 12px;
    z-index: 10;
    background: #f5f5f5;

    & .ant-form-item {
        width: 400px;
        margin-bottom: 12px;
    }
`;

const Home = () => {
    const [searchValue, setSearchValue] = useState("");

    const { data, isFetching } = useImagesQuery({ search: searchValue });

    return (
        <>
            <Helmet title="Home" />
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
        </>
    );
};

export default Home;
