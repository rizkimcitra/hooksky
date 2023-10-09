import { useMediaQuery } from "./use-media-query";

/**
 * The function `useMaxWidth` returns a boolean value indicating whether the current viewport width is
 * less than or equal to the specified `width`.
 * @param {number} width - The `width` parameter is a number that represents the maximum width of
 * the screen or viewport. It is used to create a media query that checks if the screen width is less
 * than or equal to the specified `width`.
 * @returns the result of the `useMediaQuery` hook with the specified `width` value.
 */
export function useMaxWidth(width: number) {
  return useMediaQuery(`(max-width: ${width}px)`);
}
