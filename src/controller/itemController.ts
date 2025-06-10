import { Router, Request, Response } from "express";
import * as itemService from "../service/ItemService";
import { validateName } from "../middleware/validation";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  try {
    const items = itemService.getAll();
    res.status(200).json(items);
  } catch (err) {
    console.error("Error fetching items:", err);
    res.status(500).json({ message: "Error fetching data" });
  }
});

router.post("/", validateName, (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const createdItem = itemService.addItem(name);
    res.status(201).json(createdItem);
  } catch (err) {
    console.error("Error adding item:", err);
    res.status(500).json({ message: "Error adding item" });
  }
});

router.get("/:id", (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const item = itemService.getItemById(id);

    if (!item) {
      res.status(404).json({ message: "Item not found" });
    }

    res.status(200).json(item);
  } catch (err) {
    console.error("Error fetching item:", err);
    res.status(500).json({ message: "Error fetching item" });
  }
});

router.put("/:id", validateName, (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { name } = req.body;

    const updatedItem = itemService.updateItem(id, name);

    if (!updatedItem) {
      res.status(404).json({ message: "Item not found" });
    }

    res.status(200).json(updatedItem);
  } catch (err) {
    console.error("Error updating item:", err);
    res.status(500).json({ message: "Error updating item" });
  }
});

router.delete("/:id", (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const deleted = itemService.deleteItem(id);

    if (!deleted) {
      res.status(404).json({ message: "Item not found" });
    }

    res.status(204).send();
  } catch (err) {
    console.error("Error deleting item:", err);
    res.status(500).json({ message: "Error deleting item" });
  }
});

export default router;
