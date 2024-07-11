import { Router } from "express";
import main from "./main.js";
import regist from "./regist.js";
import login from "./login.js";

const router = Router();
router.get("/", main);
router.post("/regist", regist);
router.post("/login", login);

export default router;
