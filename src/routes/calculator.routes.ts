import { Router } from "express";
import { additionController, divisionController, multiplicationController, substractionController } from "../controllers/calci.controller";

const backendcalciRouter = Router();

backendcalciRouter.get("/", (req, res) => {
    res.send({ data: "hello" });
});

backendcalciRouter.post("/add", additionController);
backendcalciRouter.post("/sub", substractionController);
backendcalciRouter.post("/multi", multiplicationController);
backendcalciRouter.post("/div", divisionController);

export default backendcalciRouter;
