import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import noteRoutes from "./routes/note.route.js";  
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./docs/swagger.js";

dotenv.config();

const app = express();

// Global middlewares
app.use(cors());
app.use(express.json());

// Health-check endpoint
app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    timestamp: new Date().toISOString()
  });
});

// Register routes
app.use("/notes", noteRoutes);
// Swagger docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app;
