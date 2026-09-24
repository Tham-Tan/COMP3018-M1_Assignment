import request from 'supertest';
import app from '../src/app';
import { calculatePortfolioPerformance } from '../src/portfolio/portfolioPerformance';

// ==========================================
// SECTION 1: API ENDPOINT TESTS
// ==========================================
describe('API Core Endpoints', () => {
  
  it('should return Hello World text when hitting the root endpoint', async () => {
    // Arrange (No specific setup required)

    // Act
    const response = await request(app).get('/');

    // Assert
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello, world!');
  });

  it('should return a 200 status and JSON payload for the health check', async () => {
    // Arrange (No specific setup required)

    // Act
    const response = await request(app).get('/api/v1/health');

    // Assert
    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
  });

  it('should successfully calculate portfolio data when valid parameters are sent', async () => {
    // Arrange
    const queryParams = { initialInvestment: 1000, currentValue: 1200 };

    // Act
    const response = await request(app)
      .get('/api/v1/portfolio/performance')
      .query(queryParams);
    
    // Assert
    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
    expect(response.body).toHaveProperty('profitOrLoss');
  });
});

// ==========================================
// SECTION 2: PORTFOLIO FUNCTION TESTS
// ==========================================
describe('Portfolio Performance Function', () => {

  it('should correctly calculate a solid positive gain above 10%', () => {
    // Arrange
    const initial = 10000;
    const current = 12000;

    // Act
    const result = calculatePortfolioPerformance(initial, current);

    // Assert
    expect(result.initialInvestment).toBe(10000);
    expect(result.currentValue).toBe(12000);
    expect(result.profitOrLoss).toBe(2000);
    expect(result.percentageChange).toBe(20);
    expect(result.performanceSummary).toBe('Solid gain. Keep monitoring your investments.');
  });

  it('should correctly calculate an excellent return above 30%', () => {
    // Arrange
    const initial = 10000;
    const current = 14000;

    // Act
    const result = calculatePortfolioPerformance(initial, current);

    // Assert
    expect(result.profitOrLoss).toBe(4000);
    expect(result.percentageChange).toBe(40);
    expect(result.performanceSummary).toBe('Excellent performance! Your investments are doing great.');
  });

  it('should handle zero growth gracefully when the portfolio is holding steady', () => {
    // Arrange
    const initial = 5000;
    const current = 5000;

    // Act
    const result = calculatePortfolioPerformance(initial, current);

    // Assert
    expect(result.profitOrLoss).toBe(0);
    expect(result.percentageChange).toBe(0);
    expect(result.performanceSummary).toBe('No change. Your portfolio is holding steady.');
  });

  it('should correctly calculate a minor loss scenario', () => {
    // Arrange
    const initial = 10000;
    const current = 9500;

    // Act
    const result = calculatePortfolioPerformance(initial, current);

    // Assert
    expect(result.profitOrLoss).toBe(-500);
    expect(result.percentageChange).toBe(-5);
    expect(result.performanceSummary).toBe('Minor loss. Stay calm and review your options.');
  });
});
