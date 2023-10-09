import { useSyncExternalStore } from "react";
import type { TVoidFN } from "./types/common";

function getServerSnapshot() {
  throw new Error("use 'use client` at top level of your component to use this hooks");
}

function getSnapshot(mediaQuery: string) {
  return () => {
    window.matchMedia(mediaQuery).matches;
  };
}

function subscribe(mediaQuery: string) {
  return (listener: TVoidFN) => {
    window.matchMedia(mediaQuery).addEventListener("change", listener);

    return () => {
      window.matchMedia(mediaQuery).removeEventListener("change", listener);
    };
  };
}

export function useMediaQuery(mediaQuery: string) {
  return useSyncExternalStore(subscribe(mediaQuery), getSnapshot(mediaQuery), getServerSnapshot);
}
