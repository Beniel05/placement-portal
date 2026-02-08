import { Clerk } from "@clerk/clerk-sdk-node";
import { CLERK_SECRET_KEY } from "./env.js";

if (!CLERK_SECRET_KEY) {
  throw new Error("CLERK_SECRET_KEY is not defined in environment variables");
}

export const clerkClient = new Clerk({
  secretKey: CLERK_SECRET_KEY,
});
