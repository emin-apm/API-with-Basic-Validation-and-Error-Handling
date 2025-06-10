import { Router, Request, Response } from "express";
import * as itemService from "../service/ItemService";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  try {
    const items = itemService.getAll();
    res.status(200).json(items);
  } catch (err) {
    console.log(`Error fetching items:${err}`);
    res.status(500).json({ message: "Error fetching data" });
  }
});

router.post("/", (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const createdItem = itemService.addItem(name);
    res.status(201).json(createdItem);
  } catch (err) {
    console.error(`Error adding item: ${err}`);
    res.status(500).json({ message: "Error adding item" });
  }
});

export default router;
