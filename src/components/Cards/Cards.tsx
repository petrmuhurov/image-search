import { map } from "lodash";

import React from "react";

import styled from "styled-components";

import { Image, Spin } from "antd";

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
}

const CardWrapper = styled("div")`
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
    padding: 24px;
    justify-content: space-between;
`;

const Cards = ({ data }: Props) => {
    return (
        <CardWrapper>
            {map(data, (item) => (
                <Image
                    key={`image-${item.url}`}
                    src={item.smallSrc}
                    alt={item.alt}
                    preview={{ src: item.originalSrc }}
                    height="240px"
                    placeholder={<Spin />}
                />
            ))}
        </CardWrapper>
    );
};

export default Cards;
