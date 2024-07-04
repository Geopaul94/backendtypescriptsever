"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const calci_controller_1 = require("../controllers/calci.controller");
const backendcalciRouter = (0, express_1.Router)();
backendcalciRouter.get("/", (req, res) => {
    res.send({ data: "hello" });
});
backendcalciRouter.post("/add", calci_controller_1.additionController);
backendcalciRouter.post("/sub", calci_controller_1.substractionController);
backendcalciRouter.post("/multi", calci_controller_1.multplicationController);
backendcalciRouter.post("/div", calci_controller_1.divisionController);
exports.default = backendcalciRouter;
//# sourceMappingURL=calculator.routes.js.map