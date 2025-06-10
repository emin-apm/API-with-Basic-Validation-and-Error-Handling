import { Item } from "../types/item";
import { v4 as uuidv4 } from "uuid";

let items: Item[] = [];

export const getAll = (): Item[] => {
  return items;
};

export const addItem = (name: string): Item => {
  const newItem: Item = { id: uuidv4(), name };
  items.push(newItem);
  return newItem;
};
