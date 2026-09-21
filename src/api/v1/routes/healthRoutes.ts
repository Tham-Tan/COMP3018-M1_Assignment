import { Router, Request, Response } from "express";

const router = Router();

// Returns server status, uptime, timestamp, and API version
router.get("/health", (req: Request, res: Response) => {
    res.status(200).json({
        status: "OK",
        version: "1.0.0",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
    });
});

export default router;
