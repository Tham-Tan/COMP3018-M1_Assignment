export interface PortfolioResult {
    initialInvestment: number;
    currentValue: number;
    profitOrLoss: number;
    percentageChange: number;
    performanceSummary: string;
}

export function calculatePortfolioPerformance(
    initialInvestment: number = 10000, 
    currentValue: number = 12000
): PortfolioResult {
    const profitOrLoss = currentValue - initialInvestment;
    const percentageChange = (profitOrLoss / initialInvestment) * 100;

    let performanceSummary: string;
    if (percentageChange >= 30) {
        performanceSummary = `Excellent performance! Your investments are doing great.`;
    } else if (percentageChange >= 10) {
        performanceSummary = `Solid gain. Keep monitoring your investments.`;
    } else {
        performanceSummary = `The portfolio has performed poorly with a loss of $${Math.abs(profitOrLoss)}.`;
    }

    return {
        initialInvestment,
        currentValue,
        profitOrLoss,
        percentageChange,
        performanceSummary,
    };
}