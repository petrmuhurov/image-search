import { isEmpty, map } from "lodash";

import React, { useEffect, useRef } from "react";

import InfiniteScroll from "react-infinite-scroll-component";

import { Divider } from "antd";

import Card, { CardProps } from "./Card";

import { StyledScrollable, StyledCards } from "./styled";

export interface CardsProps {
    data: CardProps[];
    loadMore: () => void;
    isLoading: boolean;
    totalCount: number;
    noDataPlaceholder?: React.ReactNode;
}

const Cards = ({
    data = [],
    loadMore,
    isLoading,
    totalCount,
    noDataPlaceholder = "No Data",
}: CardsProps) => {
    const scrollableRef = useRef<HTMLDivElement>(null);

    const hasMore = data.length < totalCount;

    useEffect(() => {
        if (scrollableRef.current && hasMore && !isLoading) {
            const { scrollHeight, clientHeight } = scrollableRef.current

            if (scrollHeight <= clientHeight) loadMore()
        }
    }, [isLoading, hasMore, loadMore]);

    return (
        <StyledScrollable
            id="scrollableDiv"
            data-testid="cards"
            ref={scrollableRef}
        >
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
                    scrollThreshold="200px"
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
