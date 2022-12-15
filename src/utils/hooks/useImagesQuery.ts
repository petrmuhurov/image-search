import { map } from "lodash";

import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";

import { googleApiSearchService } from "../../services";

interface IImageQuery {
    search: string | undefined;
}

interface IImageItem {
    link: string;
    context: string;
    height: number;
    width: number;
    title: string;
    thumbnailLink: string;
}

interface IImageQueryResult {
    isFetching: boolean;
    data: IImageItem[];
    error: any;
}

const useImagesQuery = ({ search }: IImageQuery): IImageQueryResult => {
    const [searchValue] = useDebounce(search, 800);

    const [isFetching, setFetching] = useState(false);
    const [data, setData] = useState<IImageItem[]>([]);
    const [error, setError] = useState({});

    useEffect(() => {
        if (searchValue) {
            setFetching(true);

            googleApiSearchService
                .find(searchValue)
                .then(({ items }) => {
                    setData(
                        map(items, (item: any) => ({
                            link: item.link,
                            context: item.image?.contextLink,
                            height: item.image?.height,
                            width: item.image?.width,
                            title: item.title,
                            thumbnailLink: item.image?.thumbnailLink
                        }))
                    );
                })
                .catch((error: any) => setError(error))
                .finally(() => setFetching(false))
        }
    }, [searchValue]);

    return {
        isFetching,
        data,
        error,
    };
};

export default useImagesQuery;
