import { Router } from "express";
import main from "./main.js";
import add from "./add.js";
import update from "./update.js";
import remove from "./remove.js";

const router = Router();

router.use("/", main);
router.post("/add", add);
router.post("/update", update);
router.post("/remove", remove);

export default router;
