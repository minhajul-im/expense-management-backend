import z from "zod";
import { USER_ROLE } from "../user/user.validator";

export const signupInput = z.object({
	full_name: z.string().min(1, "Full name is required"),
	email: z.string().email("Invalid email format").min(1, "Email is required"),
	password: z.string().min(6, "Password must be at least 6 characters long"),
	roles: z
		.array(z.enum([USER_ROLE.ADMIN, USER_ROLE.MANAGER, USER_ROLE.USER]))
		.default([USER_ROLE.MANAGER])
		.optional(),
});

export type SignupInput = z.infer<typeof signupInput>;

export const signinInput = z.object({
	email: z.string().email("Invalid email format").min(1, "Email is required"),
	password: z.string().min(6, "Password must be at least 6 characters long"),
});

export type SigninInput = z.infer<typeof signinInput>;
