import { Request, Response, NextFunction } from "express";

export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error(err);

  if (err.status && typeof err.status === "number") {
    res.status(err.status).json({ message: err.message || "Error occurred" });
  }

  res.status(500).json({ message: "Internal Server Error" });
}
