import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import { router } from "./routes";

const app = express();

app.use(express.json());

app.use(router);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    const status = (error as any).status || 500;
    const message = error.message || "Internal Server Error";
    return response.status(status).json({
      status: "Error",
      message,
    });
  }
);

app.listen(3000, () => console.log("Server is running on port 3000"));
