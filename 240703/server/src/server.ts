import express, { Express } from "express";
import { sequelize } from "./models";
import router from "./Router";
import cors from "cors";

const app: Express = express();
app.set("port", 8000);
app.use(cors());
app.use(express.json());
sequelize.sync({ force: true });

app.use("/api", router);

app.listen(app.get("port"), (): void => {
  console.log(app.get("port"), "server open");
});
