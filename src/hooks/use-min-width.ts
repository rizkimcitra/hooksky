import { useMediaQuery } from "./use-media-query";

/**
 * The function `useMinWidth` returns a boolean value indicating whether the viewport width is greater
 * than or equal to a specified minimum width.
 * @param {number} width - The `width` parameter is a number that represents the minimum width in
 * pixels. It is used to define a media query that checks if the viewport width is greater than or
 * equal to the specified minimum width.
 * @returns The function `useMinWidth` returns the result of the `useMediaQuery` hook with the
 * specified `width` value.
 */
export function useMinWidth(width: number) {
  return useMediaQuery(`(min-width: ${width}px)`);
}
