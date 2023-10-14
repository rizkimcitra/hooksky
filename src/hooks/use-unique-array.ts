import { useMemo } from "react";

type TItem = {
  id?: null | number | string;
};

/**
 * useUniqueArray can normalize and remove your duplicate items in an array, by storing temporary unique id on each items on a memory, this hooks can filter the duplicate items
 * @param items expecting an array that contain id on each items, this id is the variable to determine if an item contain duplicate data
 * @returns
 */
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
