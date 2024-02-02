import { useSyncExternalStore, useCallback } from "react";
import { useSearchParams } from "next/navigation";

// const queryParamsNamesInUse = ['test1', 'test2', 'test3'] as const;

// type QueryParamsNamesInUse = typeof queryParamsNamesInUse[number];
// type QueryParamsStringified = Partial<Record<QueryParamsNamesInUse, string | undefined>> | null; // todo remove undefined

const useQueryParamsState = () => {
  const searchParams = useSearchParams();
  const searchParamSubscription = useCallback(() => () => searchParams, [searchParams]);

  const urlStateStringified = useSyncExternalStore(
    searchParamSubscription,
    () => searchParams.get('test'),
  );

  // zod

  return urlStateStringified;
};

export default useQueryParamsState;
