import React, { useState } from "react";

import styled from "styled-components";

import { Helmet } from "react-helmet";
import { Form, Input, Spin, Result } from "antd";

import { useDebounce } from "use-debounce";

import { Cards } from "../../components";

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

    const [search] = useDebounce(searchValue, 800);

    const { data, isFetching, loadMore, totalCount } = useImagesQuery({
        search,
    });

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
                <Cards
                    data={data}
                    totalCount={totalCount}
                    loadMore={loadMore}
                    noDataPlaceholder={
                        !isFetching && (
                            <Result
                                title={
                                    search
                                        ? "Try another query"
                                        : "Start typing to see the result"
                                }
                            />
                        )
                    }
                />
            </Spin>
        </>
    );
};

export default Home;
