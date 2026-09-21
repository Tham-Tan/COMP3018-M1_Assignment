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
    } else if (percentageChange > 0){
        performanceSummary = `Modest gain. Your portfolio is growing slowly.`;
    } else if (percentageChange == 0){
        performanceSummary = `No change. Your portfolio is holding steady.`;
    } else if (percentageChange >= -10){
        performanceSummary = `Minor loss. Stay calm and review your options.`;
    } else {
        performanceSummary = `Significant loss. Review your portfolio strategy.`
    }

    return {
        initialInvestment,
        currentValue,
        profitOrLoss,
        percentageChange,
        performanceSummary,
    };
}