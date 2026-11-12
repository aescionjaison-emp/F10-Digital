import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import dotenv from "dotenv";
import apiRoutes from "./routes/api";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health Check
app.get("/api/health", (req: Request, res: Response) => {
  res.json({
    status: "healthy",
    company: "F10 DIGITAL",
    version: "2027.PRO",
    timestamp: new Date().toISOString(),
  });
});

// Mount API Routes
app.use("/api", apiRoutes);

// Global Error Handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error("Unhandled Error:", err);
  res.status(500).json({
    success: false,
    message: err.message || "Internal server error occurred",
  });
});

// Start Server
app.listen(port, () => {
  console.log(`===============================================`);
  console.log(`🚀 F10 DIGITAL Backend running on port ${port}`);
  console.log(`📡 Health Check: http://localhost:${port}/api/health`);
  console.log(`🔒 Admin Auth: http://localhost:${port}/api/admin/login`);
  console.log(`===============================================`);
});

export default app;

