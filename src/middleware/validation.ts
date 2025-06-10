import { Request, Response, NextFunction } from "express";

export const validateName = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name } = req.body;

  if (!name || typeof name !== "string" || name.trim() === "") {
    res
      .status(400)
      .json({ error: "Name is required and must be a non-empty string." });
  }

  next();
};
