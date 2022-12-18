import { stringifyParams } from "../../utils/urls";

interface GetParams {
    search: Record<string, number | string>;
    headers: HeadersInit;
}

const service = {
    get: async (
        url: string,
        { search, headers }: GetParams
    ): Promise<Response> => {
        const response = await fetch(`${url}${stringifyParams(search)}`, {
            headers,
        });

        return await response.json();
    },
};

export default service;
