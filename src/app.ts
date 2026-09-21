// Imports
import express, { Express } from "express";
import healthRouter from "./api/v1/routes/healthRoutes";
import portfolioRouter from "./portfolio/portfolioRouter";

// initialize the express application
const app: Express = express();

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello, world!");
});

// Routes
app.use("/api/v1", healthRouter);
app.use("/api/v1/portfolio", portfolioRouter);

// export app and server for testing
export default app;