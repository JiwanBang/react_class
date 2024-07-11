"use strict";

import mySQLconfig from "../config/config.json" assert { type: "json" };
console.log(mySQLconfig);
import fs from "fs";
import path from "path";
import Sequelize, { Model } from "sequelize";
const env = process.env.NODE_ENV || "development";
const config = mySQLconfig[env];
import Apitestmodel from "./Apitest.js";

export const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

export const Apitest = Apitestmodel.init(sequelize);

const db = { Apitest };

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

export { Sequelize };
db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
