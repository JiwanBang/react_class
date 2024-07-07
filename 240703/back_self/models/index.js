"use strict";

import mySQLconfig from "../config/config.json" assert { type: "json" };
import fs from "fs";
import path from "path";
import Sequelize, { Model } from "sequelize";
const env = process.env.NODE_ENV || "development";
const config = mySQLconfig[env];
import TodoModel from "./Todo.js";

export const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

export const Todo = TodoModel.init(sequelize);

const db = { Todo };

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

export { Sequelize };
db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
