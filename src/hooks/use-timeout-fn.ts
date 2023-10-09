import { useEffect } from "react";
import type { TVoidFN } from "../types/common";

/**
 * The `useTimeoutFn` function is a TypeScript function that takes a callback function, an array of
 * dependencies, and an optional timeout value, and returns a function that sets a timeout for the
 * callback function and clears it when the dependencies change.
 * @param {TVoidFN} callback - The callback is a function that will be executed after the specified
 * timeout period. It can be any function that you want to run after a certain delay.
 * @param deps - The `deps` parameter is an array of dependencies. These dependencies are used to
 * determine when the callback function should be re-created. If any of the dependencies change, the
 * callback function will be re-created.
 * @param [timeout=250] - The timeout parameter is the duration in milliseconds after which the
 * callback function will be executed. By default, it is set to 250 milliseconds.
 */
export function useTimeoutFn<TDeps = never>(callback: TVoidFN, deps: Array<TDeps>, timeout = 250) {
  useEffect(() => {
    const timeoutId = setTimeout(callback, timeout);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [...deps]);
}
