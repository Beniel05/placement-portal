const express = require("express");

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Health check route
app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Placement Portal backend is running",
  });
});

module.exports = app;
