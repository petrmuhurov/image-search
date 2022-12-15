interface IImageQuery {
    search: string | undefined
}

interface IImageQueryResult {
    isFetching: boolean,
    data: []
}

const useImagesQuery = ({ search }: IImageQuery): IImageQueryResult => {
    return {
        isFetching: false,
        data: []
    }
};

export default useImagesQuery;
