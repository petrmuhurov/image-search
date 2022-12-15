import React from "react";

import { List, Image } from "antd";

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

const Cards = ({ data }: IProps) => {
    return (
        <List
            grid={{ gutter: 16, sm: 2, lg: 4, xxl: 6 }}
            dataSource={data}
            renderItem={(item) => (
                <List.Item title={item.title}>
                    <Image
                        src={item.thumbnailLink}
                        alt={item.context}
                        width="100%"
                        preview={{ src: item.link }}
                    />
                </List.Item>
            )}
        />
    );
};

export default Cards;
