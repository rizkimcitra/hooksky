import { useState } from "react";

/**
 * The `useSwitch` function is a custom hook in TypeScript that returns a boolean state value and
 * functions to turn the state on, off, or toggle it.
 * @param [initialValue=false] - The `initialValue` parameter is an optional parameter that specifies
 * the initial value of the switch. If no initial value is provided, the switch will default to
 * `false`.
 * @returns The function `useSwitch` returns an array with two elements. The first element is the
 * current state value, and the second element is an object with three functions: `on`, `off`, and
 * `toggle`.
 */
export function useSwitch(initialValue = false) {
  const [state, setState] = useState(initialValue);

  const on = () => setState(true);
  const off = () => setState(false);
  const toggle = () => setState((prev) => !prev);

  return [state, { on, off, toggle }] as const;
}
