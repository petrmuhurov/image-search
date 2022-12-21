import { map } from "lodash";

import { useState, useEffect, useCallback } from "react";

import { pexelsService } from "../../services/fetchService";
import { usePrevious } from ".";

export interface ImageQuery {
    search?: string;
}

export interface ImageItem {
    alt: string;
    url: string;
    smallSrc: string;
    originalSrc: string;
    height: number;
    width: number;
}

export interface ImageQueryResult {
    isFetching: boolean;
    data: ImageItem[];
    error: any;
    loadMore: () => void;
    totalCount: number;
}

/* eslint-disable react-hooks/exhaustive-deps */
const useImagesQuery = ({ search }: ImageQuery): ImageQueryResult => {
    const [page, setPage] = useState(1);
    const [isFetching, setFetching] = useState(false);

    const [data, setData] = useState<ImageItem[]>([]);
    const [error, setError] = useState({});
    const [totalCount, setTotalCount] = useState(0);

    const prevSearch = usePrevious(search);

    useEffect(() => {}, [search, prevSearch]);

    useEffect(() => {
        const nextPage = search === prevSearch ? page : 1;

        if (search !== prevSearch) {
            setPage(1);
            setData([]);
        }

        if (search && !isFetching) {
            setFetching(true);

            pexelsService
                .findPictures({ query: search, page: nextPage })
                .then(({ photos, total_results }: any) => {
                    const newData = map(photos, (photo) => ({
                        alt: photo.alt,
                        url: photo.url,
                        smallSrc: photo.src?.small,
                        originalSrc: photo.src?.original,
                        height: photo.height,
                        width: photo.width,
                    }));

                    setTotalCount(total_results);

                    if (prevSearch === search)
                        return setData([...data, ...newData]);

                    setData(newData);
                })
                .catch((error: any) => setError(error))
                .finally(() => setFetching(false));
        }
    }, [search, page]);

    const loadMore = useCallback(() => {
        if (!isFetching) setPage(page + 1);
    }, [page, isFetching]);

    return {
        isFetching,
        data,
        error,
        totalCount,

        loadMore,
    };
};

export default useImagesQuery;
