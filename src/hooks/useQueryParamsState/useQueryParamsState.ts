import { useSearchParams, useRouter, redirect } from 'next/navigation';

import { queryParamDefaults, queryParamDefaults2, queryParamNames } from './constants';
import type { QueryParamsStringified } from './types';
import queryParamsSchema from './schema';

const useQueryParamsState = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const paramsObject = Object.fromEntries(searchParams);
  const queryResult = queryParamsSchema.safeParse(paramsObject);

  // const setQueryParams = () => {
  //   if (queryResult.success) {
  //     const queryString = new URLSearchParams(queryResult.data);
  //     window.history.pushState({}, "", window.location.pathname + "?" + queryString.toString());

  //     return
  //   }

  //   const queryString = new URLSearchParams(queryParamDefaults2);
  //   window.history.pushState({}, "", window.location.pathname + "?" + queryString.toString());
  // };

  if (queryResult.success) {
    return [queryResult.data] as const;
  }

  const queryString = new URLSearchParams(queryParamDefaults2);
  redirect("/?" + queryString.toString());

  // return [queryParamDefaults2, setQueryParams] as const;
};

export default useQueryParamsState;
