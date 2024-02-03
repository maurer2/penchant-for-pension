import { queryParamNames } from "./constants";

export type QueryParamNames = typeof queryParamNames[number];
export type QueryParamsStringified = Record<QueryParamNames, string | null>;
