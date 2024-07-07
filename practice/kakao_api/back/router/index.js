import { Router } from "express";
import main from "./main.js";
import regist from "./regist.js";

const router = Router();
router.use("/", main);
router.post("/regist", regist);

export default router;
