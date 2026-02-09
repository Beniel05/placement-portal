import prisma from "../../config/db.js";

export const createProfileService = async (userId, body) => {
  const existing = await prisma.studentProfile.findUnique({
    where: { userId }
  });

  if (existing) {
    throw new Error("Profile already exists");
  }

  const { degree, department, yearOfStudy, cgpa, skills } = body;

  const profile = await prisma.studentProfile.create({
    data: {
      userId,
      degree,
      department,
      yearOfStudy,
      cgpa,
      skills
    }
  });

  return profile;
};
