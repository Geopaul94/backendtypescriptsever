"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.divisionController = exports.multplicationController = exports.substractionController = exports.additionController = void 0;
const additionController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { num1, num2 } = req.body;
        return res.status(200).json({
            data: num1 + num2
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "internal server error" });
    }
});
exports.additionController = additionController;
const substractionController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { num1, num2 } = req.body;
        return res.status(200).json({
            data: num1 - num2
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "internal server error" });
    }
});
exports.substractionController = substractionController;
const multplicationController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { num1, num2 } = req.body;
        return res.status(200).json({
            data: num1 * num2
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "internal server error" });
    }
});
exports.multplicationController = multplicationController;
const divisionController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { num1, num2 } = req.body;
        return res.status(200).json({
            data: num1 / num2
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "internal server error" });
    }
});
exports.divisionController = divisionController;
//# sourceMappingURL=calci.controller.js.map