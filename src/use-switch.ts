import { useState } from "react";

export function useSwitch(initialValue?: boolean) {
  const [state, setState] = useState(initialValue);

  const on = () => setState(true);
  const off = () => setState(false);
  const toggle = () => setState((prev) => !prev);

  return [state, { on, off, toggle }] as const;
}
