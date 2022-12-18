import { reduce } from "lodash";

import { isNullOrUndefined } from "./lang";

type Params = Record<string, string | number>;

//@TODO make deep method
export const stringifyParams = (params: Params) => {
    return reduce(
        params,
        (result, value, key) =>
            !isNullOrUndefined(value) ? `${result}${key}=${value}&` : result,
        "?"
    ).slice(0, -1);
};
