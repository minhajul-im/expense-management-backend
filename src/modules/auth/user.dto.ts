import { z } from "zod";

// Input validation schemas
export const registerSchema = z.object({
	email: z.string().email(),
	password: z.string().min(6),
	name: z.string().min(1),
});

export const loginSchema = z.object({
	email: z.string().email(),
	password: z.string().min(1),
});

// Infer types from schemas
export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;

// Output response types
export const authResponseSchema = z.object({
	id: z.number(),
	email: z.string().email(),
	name: z.string(),
	createdAt: z.string(),
});

export type AuthResponse = z.infer<typeof authResponseSchema>;
