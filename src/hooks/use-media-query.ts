import { useSyncExternalStore } from "react";

function getSnapshot(mediaQuery: string) {
  return () => {
    return window.matchMedia(mediaQuery).matches;
  };
}

function subscribe(mediaQuery: string) {
  return (listener: () => void) => {
    window.matchMedia(mediaQuery).addEventListener("change", listener);

    return () => {
      window.matchMedia(mediaQuery).removeEventListener("change", listener);
    };
  };
}

function getServerSnapshot() {
  return false;
}

/**
 * The hooks `useMediaQuery` is a hooks that returns the result of using a media query
 * to subscribe to an external store and retrieve the snapshot.
 * @param {string} mediaQuery - The `mediaQuery` parameter is a string that represents a CSS media
 * query. It is used to define the conditions under which the code should be executed or the component
 * should be rendered. Examples of media queries include `@media (max-width: 600px)` or `@media
 * (orientation: horizontal)`
 * @returns boolean value if the mediaQuery is matches with the provided value from the hooks
 */
export function useMediaQuery(mediaQuery: string) {
  return useSyncExternalStore(subscribe(mediaQuery), getSnapshot(mediaQuery), getServerSnapshot);
}
