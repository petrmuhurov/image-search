import { isEmpty, map } from "lodash";

import React from "react";

import InfiniteScroll from "react-infinite-scroll-component";

import { Divider } from "antd";

import Card, { CardProps } from "./Card";

import { StyledScrollable, StyledCards } from "./styled";

export interface CardsProps {
    data: CardProps[];
    loadMore: () => void;
    totalCount: number;
    noDataPlaceholder?: React.ReactNode;
}

const Cards = ({
    data = [],
    loadMore,
    totalCount,
    noDataPlaceholder = "No Data",
}: CardsProps) => {
    return (
        <StyledScrollable id="scrollableDiv" data-testid="cards">
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
                    <StyledCards>
                        {map(data, (item) => (
                            <Card
                                key={`image-${item.src}`}
                                src={item.src}
                                preview={item.preview}
                                height={item.height}
                                placeholder={item.placeholder}
                            />
                        ))}
                    </StyledCards>
                </InfiniteScroll>
            )}
        </StyledScrollable>
    );
};

export default Cards;
