import { Router } from "express";
import itemController from "./controller/itemController";

const router = Router();

router.use("/items", itemController);

export default router;
