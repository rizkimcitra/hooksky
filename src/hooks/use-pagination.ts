import { useCallback, useState } from "react";
import { useDebounceValue } from "..";

export type TUsePaginationValue = {
  /**
   * by default, the page will be 1
   */
  page: number;
  /**
   * by default, this limit is set to `10`-per-page
   */
  limit: number;
  /**
   * By default, this search value is already `debounced` with `250ms` of debounce
   */
  search: string;
};

export type TUsePaginationOptions = {
  /**
   * partially set the initial value, it could be the `search` state, `page`, or `limit`
   */
  initialValue?: Partial<TUsePaginationValue>;
  /**
   * by default this will be `250ms`
   */
  searchTimeout?: number;
};

export function usePagination(options?: TUsePaginationOptions) {
  const [state, setState] = useState<TUsePaginationValue>({
    limit: options?.initialValue?.limit ?? 10,
    page: options?.initialValue?.page ?? 1,
    search: options?.initialValue?.search ?? "",
  });

  const debouncedSearch = useDebounceValue(state.search, options?.searchTimeout ?? 250);

  const changeSearch = useCallback((search: string) => {
    setState((prev) => ({ limit: prev.limit, page: prev.page, search }));
  }, []);
  const nextPage = useCallback(() => {
    setState((prev) => ({ ...prev, page: prev.page + 1 }));
  }, []);
  const prevPage = useCallback(() => {
    setState((prev) => ({ ...prev, page: prev.page - 1 }));
  }, []);
  const changePage = useCallback((page: number) => {
    setState((prev) => ({ ...prev, page }));
  }, []);
  const changeLimit = useCallback((limit: number) => {
    setState((prev) => ({ ...prev, limit }));
  }, []);

  const handlers = {
    changeSearch,
    nextPage,
    prevPage,
    changePage,
    changeLimit,
  };

  const values: TUsePaginationValue = {
    search: debouncedSearch,
    limit: state.limit,
    page: state.page,
  };

  return [values, handlers] as const;
}
