import { Router } from "express";
import { requireAuth } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";
import { createStudentProfile } from "./student.controller.js";

const router = Router();

router.post(
  "/profile",
  requireAuth,
  requireRole("STUDENT"),
  createStudentProfile
);

export default router;
