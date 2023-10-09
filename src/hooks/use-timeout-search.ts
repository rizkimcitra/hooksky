import { useCallback, useState } from "react";
import { useTimeoutValue } from "./use-timeout-value";

/**
 * The `useSearch` function is a custom hook in TypeScript that provides a debounced search value and
 * an onChange handler for input elements.
 * @param {number} [timeout] - The `timeout` parameter is an optional number that specifies the delay
 * in milliseconds before the search value is updated. It is used to debounce the search input, meaning
 * that the search value will only be updated after the specified delay has passed since the last input
 * change. This helps to reduce unnecessary search requests and
 * @returns The `useSearch` function returns an array with two elements:
 */
export function useSearch(timeout?: number) {
  const [value, setValue] = useState("");
  const debounced = useTimeoutValue(value, timeout);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement> | string) => {
    if (typeof e === "string") {
      setValue(e);
      return;
    }
    setValue(e.target.value);
  }, []);

  return [{ value, debounced }, onChange] as const;
}
