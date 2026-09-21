import express, { Application, Request, Response } from 'express';
import healthRoutes from './api/v1/routes/healthRoutes';

// 1. Initialize the Express application
const app: Application = express();

// 2. Add middleware to parse JSON bodies
app.use(express.json());

// 3. Basic root/testing routes
app.get('/', (req: Request, res: Response) => {
  res.send('API is running...');
});

app.get('/ping', (req: Request, res: Response) => {
  res.json({ message: 'pong' });
});

// 4. Mount API v1 router (includes /api/v1/health)
app.use('/api/v1', healthRoutes);

// 5. Export app for server.ts and Jest tests
export default app;