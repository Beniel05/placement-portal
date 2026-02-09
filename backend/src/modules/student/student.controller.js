import { createProfileService } from "./student.service.js";

export const createStudentProfile = async (req, res, next) => {
  try {
    const profile = await createProfileService(req.user.id, req.body);

    return res.status(201).json({
      success: true,
      data: profile,
      message: "Profile created successfully"
    });
  } catch (error) {
    next(error);
  }
};
