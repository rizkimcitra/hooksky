import { useMediaQuery } from "./use-media-query";

/**
 * The function `useMinHeight` returns a boolean value indicating whether the current viewport height
 * is greater than or equal to the specified height.
 * @param {number} height - The `height` parameter is a number that represents the minimum height in
 * pixels.
 * @returns the result of the `useMediaQuery` hook with the specified minimum height as the media query
 * parameter.
 */
export function useMinHeight(height: number) {
  return useMediaQuery(`(min-height: ${height}px)`);
}
