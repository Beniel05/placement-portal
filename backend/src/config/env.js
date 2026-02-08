import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || 5000;
export const DATABASE_URL = process.env.DATABASE_URL;
export const CLERK_SECRET_KEY = process.env.CLERK_SECRET_KEY;
