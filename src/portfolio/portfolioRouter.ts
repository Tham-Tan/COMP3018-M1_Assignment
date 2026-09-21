
import { Router, Request, Response } from "express";
import { calculatePortfolioPerformance } from "./portfolioPerformance";

const portfolioRouter = Router();

portfolioRouter.get("/performance", (req: Request, res: Response) => {

    const initial = req.query.initialInvestment ? Number(req.query.initialInvestment) : undefined;
    const current = req.query.currentValue ? Number(req.query.currentValue) : undefined;

    const result = calculatePortfolioPerformance(initial, current);
    res.json(result);
});

export default portfolioRouter;
