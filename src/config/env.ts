import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const envSchema = z.object({
	NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
	PORT: z.coerce.number().default(8080),
	DATABASE_URL: z.string().min(1, "DATABASE_URL is required"),
	JWT_SECRET: z.string().min(1, "JWT_SECRET is required"),
	JWT_EXPIRES_IN: z.string().default("24h"),
	CORS_ORIGIN: z.string().default("*"),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
	console.error("Environment validation error:", parsedEnv.error.flatten());
	throw new Error(`Invalid environment variables: ${parsedEnv.error}`);
}

export const env = parsedEnv.data;
