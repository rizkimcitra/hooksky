import { useMediaQuery } from "./use-media-query";

/**
 * The function `useMaxHeight` returns a boolean value indicating whether the current viewport height
 * is less than or equal to the specified height.
 * @param {number} height - The `height` parameter is a number that represents the maximum height in
 * pixels.
 * @returns the result of the `useMediaQuery` hook with the specified maximum height as the media query
 * parameter.
 */
export function useMaxHeight(height: number) {
  return useMediaQuery(`(max-height: ${height}px)`);
}
