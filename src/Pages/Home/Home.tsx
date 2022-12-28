import map from "lodash/map";

import React, { useMemo, useState } from "react";

import { Helmet } from "react-helmet-async";
import { Form, Input, Spin, Result } from "antd";

import { useDebounce } from "use-debounce";

import Cards, { CardProps } from "../../components/Cards";

import { ImageItem, useImagesQuery } from "../../utils/hooks";
import { DEFAULT_CARD_HEIGHT } from "./constants";

import { StyledForm } from "./styled";

const Home = () => {
    const [searchValue, setSearchValue] = useState("");

    const [search] = useDebounce(searchValue, 800);

    const { data, isFetching, loadMore, totalCount } = useImagesQuery({
        search,
    });

    const cards = useMemo(
        () =>
            map(
                data,
                (item: ImageItem): CardProps => ({
                    src: item.smallSrc,
                    alt: item.alt,
                    preview: { src: item.originalSrc },
                    height: DEFAULT_CARD_HEIGHT,
                    placeholder: <Spin spinning />,
                })
            ),
        [data]
    );

    return (
        <>
            <Helmet title="Home" />
            <StyledForm>
                <Form.Item>
                    <Input.Search
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        loading={isFetching}
                        disabled={isFetching}
                        placeholder="We will get you whatever you want"
                    />
                </Form.Item>
            </StyledForm>
            <Spin spinning={isFetching}>
                <Cards
                    data={cards}
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
