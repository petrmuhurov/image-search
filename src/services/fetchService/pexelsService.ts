import baseService from "./baseService";

const API_KEY = "563492ad6f91700001000001dc2cbd4818c3457cab41c94ddf3291fc";
const URL = "https://api.pexels.com/v1/search";

interface FindPicturesParams {
    query: string;
    page: number;
}

const pexelsService = {
    findPictures: async ({ query, page }: FindPicturesParams) => {
        return await baseService.get(`${URL}`, {
            search: { query, page },
            headers: { Authorization: API_KEY },
        });
    },
};

export default pexelsService;
