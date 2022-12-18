import { isEmpty, map } from "lodash";

import React from "react";

import InfiniteScroll from "react-infinite-scroll-component";
import styled from "styled-components";

import { Image, Spin, Divider } from "antd";

interface CardItem {
    alt: string;
    url: string;
    smallSrc: string;
    originalSrc: string;
    height: number;
    width: number;
}

interface Props {
    data: CardItem[];
    loadMore: () => void;
    totalCount: number;
    noDataPlaceholder?: React.ReactNode;
}

const ScrollableDiv = styled("div")`
    overflow: auto;
    padding: 0 16px;
    height: calc(100vh - 120px);
`;

const CardsWrapper = styled("div")`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 16px;
`;

const Cards = ({
    data = [],
    loadMore,
    totalCount,
    noDataPlaceholder = "No Data",
}: Props) => {
    return (
        <ScrollableDiv id="scrollableDiv">
            {totalCount === 0 ? (
                noDataPlaceholder
            ) : (
                <InfiniteScroll
                    dataLength={data.length}
                    next={loadMore}
                    hasMore={data.length < totalCount}
                    loader={null}
                    endMessage={
                        !isEmpty(data) && <Divider plain>That's all</Divider>
                    }
                    scrollableTarget="scrollableDiv"
                >
                    <CardsWrapper>
                        {map(data, (item) => (
                            <Image
                                key={`image-${item.url}`}
                                src={item.smallSrc}
                                alt={item.alt}
                                preview={{ src: item.originalSrc }}
                                height="240px"
                                placeholder={<Spin spinning />}
                            />
                        ))}
                    </CardsWrapper>
                </InfiniteScroll>
            )}
        </ScrollableDiv>
    );
};

export default Cards;
