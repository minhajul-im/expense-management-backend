import z from "zod";

export enum USER_ROLE {
	ADMIN = "admin",
	MANAGER = "manager",
	USER = "user",
}

export const createUserInput = z.object({
	full_name: z.string().min(1, "Full name is required"),
	email: z.string().email("Invalid email format").min(1, "Email is required"),
	password: z.string().min(6, "Password must be at least 6 characters long"),
	image: z.string().optional(),
	roles: z
		.array(z.enum([USER_ROLE.ADMIN, USER_ROLE.MANAGER, USER_ROLE.USER]))
		.default([USER_ROLE.MANAGER])
		.optional(),
});

export type CreateUserInput = z.infer<typeof createUserInput>;

export const updateUserInput = createUserInput.partial();

export type UpdateUserInput = z.infer<typeof updateUserInput>;
