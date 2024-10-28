import { Router } from "express";
import { create } from "../controllers/controllerExpedition.js";

const router = Router();

router.post("/", create);

export default router;