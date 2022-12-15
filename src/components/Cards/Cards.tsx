import React from "react";

import styled from "styled-components";

import { Image } from "antd";
import { map } from "lodash";

interface ICardItem {
    link: string;
    context: string;
    height: number;
    width: number;
    title: string;
    thumbnailLink: string;
}

interface IProps {
    data: ICardItem[];
}

const CardWrapper = styled("div")`
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
    padding: 24px;
    justify-content: space-evenly;
`;

const Cards = ({ data }: IProps) => {
    return (
        <CardWrapper style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            {map(data, (item) => (
                <Image
                    key={`image-${item.link}`}
                    src={item.thumbnailLink}
                    alt={item.context}
                    preview={{ src: item.link }}
                    height="240px"
                />
            ))}
        </CardWrapper>
    );
    // return (
    //     <List
    //         grid={{ sm: 2, lg: 4, xl: 6 }}
    //         dataSource={data}
    //         renderItem={(item) => (
    //             <List.Item title={item.title}>
    // <ImageWrapper
    //     src={item.thumbnailLink}
    //     alt={item.context}
    //     preview={{ src: item.link }}
    // />
    //             </List.Item>
    //         )}
    //     />
    // );
};

export default Cards;
