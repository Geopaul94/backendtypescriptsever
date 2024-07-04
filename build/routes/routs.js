"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const calculator_routes_1 = __importDefault(require("./calculator.routes"));
const router = (0, express_1.Router)();
router.use("/backend", calculator_routes_1.default);
exports.default = router;
//# sourceMappingURL=routs.js.map