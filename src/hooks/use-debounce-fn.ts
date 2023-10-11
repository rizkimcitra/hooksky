import { useEffect } from "react";

type TOptions<T> = {
  deps: Array<T>;
  timeout?: number;
};

/**
 * The `useDebounceFn` function is a custom hook in TypeScript that debounces a callback function with
 * a specified timeout.
 * @param {TimerHandler} callback - The callback function that will be executed after the debounce
 * timeout.
 */
export function useDebounceFn<T>(callback: TimerHandler, options: TOptions<T>) {
  useEffect(() => {
    const timeoutId = setTimeout(callback, options?.timeout ?? 500);

    return () => clearTimeout(timeoutId);
  }, options.deps);
}
