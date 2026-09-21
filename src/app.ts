// import the express application and type definition
import express, { Express } from "express";
import healthRouter from "./api/v1/routes/healthRoutes";

// initialize the express application
const app: Express = express();

// respond to GET request at endpoint "/" with message
app.get("/", (req, res) => {
    res.send("Hello, world!");
});

app.get("/api/v1/health", (req, res) => {
    res.json({
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0",
    });
});

app.use("/api/v1", healthRouter);

// export app and server for testing
export default app;