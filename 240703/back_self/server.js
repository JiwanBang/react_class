import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import multer from "multer";
import router from "./controller/index.js";
import { Sequelize, sequelize } from "./models/index.js";
import cors from "cors";
import session from "express-session";

sequelize.sync({ force: false });

dotenv.config();
const app = express();

// app.use();

app.set("port", process.env.PORT || 8000);

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({ origin: "http://localhost:8080", credentials: true }));

app.use(router);

app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "project",
    name: "user",
    store: new FileStore({
      reapInterval: 1000,
      path: "./user_session",
    }),
    cookie: {
      maxAge: 20 * 60 * 1000,
    },
  })
);

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "server open");
});
