import express from "express";
import prisma from "./config/db.js";
import { requireAuth } from "./middleware/auth.middleware.js";

// Dummy route
import { requireRole } from "./middleware/role.middleware.js";

import errorMiddleware from "./middleware/error.middleware.js";

const app = express();

/* Global Middlewares */

app.use(express.json());

/* Public Routes */

// Health Check
app.get("/health", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Placement Portal backend is running",
  });
});

// Database Test Route (temporary – can remove later)
app.get("/db-test", async (req, res, next) => {
  try {
    await prisma.$queryRaw`SELECT 1`;

    return res.status(200).json({
      success: true,
      message: "Database connected successfully",
    });
  } catch (error) {
    next(error);
  }
});

/* Protected Routes */

// Get Current Logged-in User
app.get("/me", requireAuth, (req, res) => {
  return res.status(200).json({
    success: true,
    data: req.user,
    message: "User fetched successfully",
  });
});


// Dummy check
app.get(
  "/admin-test",
  requireAuth,
  requireRole("ADMIN"),
  (req, res) => {
    return res.status(200).json({
      success: true,
      message: "Welcome Admin",
    });
  }
);



/* Global Error Handler */
app.use(errorMiddleware);

export default app;
