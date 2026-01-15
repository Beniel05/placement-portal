import express from "express";
import errorMiddleware from "./middleware/error.middleware.js";

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Placement Portal backend is running",
  });
});

app.use(errorMiddleware);

export default app;