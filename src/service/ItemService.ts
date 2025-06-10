import { realpathSync } from "fs";
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

export const getItemById = (id: string): Item | null => {
  return items.find((item) => item.id === id) ?? null;
};

export const deleteItem = (id: string): boolean => {
  const index = items.findIndex((item) => item.id === id);
  if (index === -1) return false;
  items.splice(index, 1);
  return true;
};

export const updateItem = (id: string, newName: string): Item | null => {
  const item = items.find((item) => item.id === id);
  if (!item) return null;
  item.name = newName;
  return item;
};
