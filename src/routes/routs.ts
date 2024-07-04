import { Router } from "express";
import backendcalciRouter from "./calculator.routes"
const router =Router();
router.use("/backend",backendcalciRouter)
export default router;