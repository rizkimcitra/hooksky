import { useState } from "react";
import { useTimeoutFn } from "./use-timeout-fn";

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
