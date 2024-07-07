import express, { Express } from "express";

import cors from "cors";

const app: Express = express();
app.set("port", 8000);
app.use(cors());
app.use(express.json());

app.listen(app.get("port"), (): void => {
  console.log(app.get("port"), "server open");
});
