import { Request, Response } from "express";
import { additionRepo, divisionRepo, multiplicationRepo, substractionRepo } from "../repositories/calci.repo";

export const additionController = async (req: Request, res: Response) => {
    try {
        const { num1, num2 } = req.body;

const maths =additionRepo(num1,num2)

        return res.status(200).json({
            data: maths
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "internal server error" });
    }
};

export const substractionController = async (req: Request, res: Response) => {
    try {
        const { num1, num2 } = req.body;

        const maths =substractionRepo(num1,num2)

        return res.status(200).json({
            data: maths
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "internal server error" });
    }
};

export const multiplicationController = async (req: Request, res: Response) => {
    try {
        const { num1, num2 } = req.body;
        const maths =multiplicationRepo(num1,num2)
        return res.status(200).json({
            data: maths
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "internal server error" });
    }
};

export const divisionController = async (req: Request, res: Response) => {
    try {
        const { num1, num2 } = req.body;
        if (num2 === 0) {
            return res.status(400).json({ message: "Division by zero is not allowed" });
        }

        const maths =divisionRepo(num1,num2)
        return res.status(200).json({
            data: maths
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "internal server error" });
    }
};
