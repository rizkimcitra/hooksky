import { useCallback } from "react";
import { TVoidFN } from "./common.type";

export function useTimeoutFn<TDeps = never>(callback: TVoidFN, deps: Array<TDeps>, timeout = 250) {
  useCallback(() => {
    const timeoutId = setTimeout(callback, timeout);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [...deps]);
}
