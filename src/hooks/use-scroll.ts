import { useSyncExternalStore } from "react";
import type { TVoidFN } from "../types/common";

function subscribe(listener: TVoidFN) {
  window.addEventListener("scroll", listener);

  return () => {
    window.removeEventListener("scroll", listener);
  };
}

function getSnapshot() {
  return { x: window.scrollX, y: window.scrollY };
}

function getServerSnapshot() {
  return { x: 0, y: 0 };
}

/**
 * this function will run on scroll event and the value will be updated accordingly
 *
 * if you are using SSR, this hooks will not thrown an error, instead it will return `0` value, see the example, below why I create this hooks:
 *
 * @example ```tsx
 * const { y } = useScroll()
 * // this component will have fixed element if scroll position is more than 180px
 * return <Navbar className={clsx(y > 180 && "fixed top-0 inset-x-0")}>
 * ```
 * @returns
 */
export function useScroll() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
