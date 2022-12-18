import baseService from "./baseService";

//you should set your own api key
//https://pexels.com/
const API_KEY = "";
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
