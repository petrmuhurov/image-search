import React from "react";

import { Image, ImageProps } from "antd";

export interface CardProps extends ImageProps {}

const Card = ({ src, alt, preview, height, placeholder }: CardProps) => {
    return (
        <Image
            src={src}
            alt={alt}
            preview={preview}
            height={height}
            placeholder={placeholder}
        />
    );
};

export default Card;
