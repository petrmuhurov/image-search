import { map } from "lodash";

import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";

import { pexelsService } from "../../services";

interface IImageQuery {
    search?: string;
}

interface IImageItem {
    alt: string;
    url: string;
    smallSrc: string;
    originalSrc: string;
    height: number;
    width: number;
}

interface IImageQueryResult {
    isFetching: boolean;
    data: IImageItem[];
    error: any;
}

const useImagesQuery = ({ search }: IImageQuery): IImageQueryResult => {
    const [page] = useState(1);
    const [isFetching, setFetching] = useState(false);

    const [data, setData] = useState<IImageItem[]>([]);
    const [error, setError] = useState({});

    const [query] = useDebounce(search, 800);

    useEffect(() => {
        if (query) {
            setFetching(true);

            pexelsService
                .findPictures({ query, page })
                .then((data: any) => {
                    const newData = map(data.photos, (photo) => ({
                        alt: photo.alt,
                        url: photo.url,
                        smallSrc: photo.src?.small,
                        originalSrc: photo.src?.original,
                        height: photo.height,
                        width: photo.width,
                    }));

                    setData(newData);
                })
                .catch((error) => setError(error))
                .finally(() => setFetching(false));
        }
    }, [query, page]);

    return {
        isFetching,
        data,
        error
    };
};

export default useImagesQuery;
