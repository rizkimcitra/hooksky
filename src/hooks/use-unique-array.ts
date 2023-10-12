import { useMemo } from "react";

type TItem = {
  id?: null | number | string;
};

export function useUniqueArray<T extends TItem>(items?: Array<T>) {
  return useMemo(() => {
    if (!items) return [];

    const uniqueItems: { [key: string]: T } = {};

    for (const item of items) {
      if (item.id && !uniqueItems[item.id]) {
        uniqueItems[item.id] = item;
      }
    }

    const result = Object.values(uniqueItems);

    return result;
  }, [items]);
}
