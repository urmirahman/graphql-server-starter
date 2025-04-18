import dotenv from "dotenv";

dotenv.config();

if (!process.env.DATABASE_URL) {
  throw new Error("Missing DATABASE_URL in .env");
}

export const env = {
  databaseUrl: process.env.DATABASE_URL,
};
