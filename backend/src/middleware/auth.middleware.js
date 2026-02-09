import { clerkClient } from "../config/clerk.js";
import prisma from "../config/db.js";

export const requireAuth = async (req, res, next) => {
  try {
    /*  DEVELOPMENT MODE (No Clerk) */
    if (process.env.NODE_ENV === "development") {
      let user = await prisma.user.findUnique({
        where: { id: "dev-user-id" },
      });

      if (!user) {
        user = await prisma.user.create({
          data: {
            id: "dev-user-id",
            clerkUserId: "dev-clerk-id",
            email: "dev@example.com",
            role: "STUDENT",
          },
        });
      }

      req.user = user;
      return next();
    }

    /* PRODUCTION MODE (Clerk JWT) */
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const token = authHeader.split(" ")[1];

    const payload = await clerkClient.verifyToken(token);

    if (!payload?.sub) {
      return res.status(401).json({
        success: false,
        message: "Invalid token",
      });
    }

    const clerkUserId = payload.sub;

    let user = await prisma.user.findUnique({
      where: { clerkUserId },
    });

    if (!user) {
      const clerkUser = await clerkClient.users.getUser(clerkUserId);

      user = await prisma.user.create({
        data: {
          clerkUserId,
          email: clerkUser.emailAddresses[0].emailAddress,
          role: "STUDENT",
        },
      });
    }

    req.user = user;

    next();
  } catch (error) {
    next(error);
  }
};
