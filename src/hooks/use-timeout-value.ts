import { useState } from "react";
import { useTimeoutFn } from "./use-timeout-fn";

/**
 * The `useTimeoutValue` function returns a value after a specified timeout period.
 * @param {TValue} value - The value that will be returned after the specified timeout.
 * @param {number} [timeout] - The `timeout` parameter is an optional number that specifies the delay
 * in milliseconds before the value is updated. If no timeout is provided, the value will be updated
 * immediately.
 * @returns The `useTimeoutValue` function returns the current state value.
 */
export function useTimeoutValue<TValue>(value: TValue, timeout?: number) {
  const [state, setState] = useState(value);

  useTimeoutFn(
    () => {
      setState(value);
    },
    [value],
    timeout,
  );

  return state;
}
