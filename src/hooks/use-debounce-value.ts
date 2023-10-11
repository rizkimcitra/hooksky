import { useState } from "react";
import { useDebounceFn } from "./use-debounce-fn";

/**
 * The `useDebounceValue` function returns a debounced value that updates after a specified timeout.
 * @param {T} value - The value that you want to debounce. This can be of any type.
 * @param [timeout=500] - The `timeout` parameter is the duration in milliseconds that determines how
 * long to wait after the value has stopped changing before updating the debounced value. By default,
 * it is set to 500 milliseconds.
 * @returns The function `useDebounceValue` returns the debounced value.
 */
export function useDebounceValue<T>(value: T, timeout = 500) {
  const [debounced, setDebounced] = useState(value);

  useDebounceFn(() => setDebounced(value), { deps: [value, timeout], timeout });

  return debounced;
}
