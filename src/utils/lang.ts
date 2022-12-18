import { isNull, isUndefined } from "lodash";

export const isNullOrUndefined = (v: any): boolean =>
    isNull(v) || isUndefined(v);
