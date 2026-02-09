import express from "express";
import { requireAuth } from "../middleware/auth.middleware.js";
import studentRoutes from "../modules/student/student.routes.js";

const router = express.Router();

router.use("/student", studentRoutes);

router.get("/me", requireAuth, (req, res) => {
  return res.status(200).json({
    success: true,
    data: req.user,
    message: "User fetched successfully",
  });
});


export default router;
