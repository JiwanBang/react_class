import express, { Express, Request, Response } from "express";
import cors from "cors";

const app: Express = express();
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.status(200).send(process.env.MESSAGE || "AWS's Members");
});

export default app;
