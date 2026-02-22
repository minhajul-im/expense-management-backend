import z from "zod";

export const createOrganizationInput = z
	.object({
		name: z.string().min(1, "Organization name is required"),
		username: z.string().min(1, "Organization username is required"),
		description: z.string().optional(),
		image: z.string().optional(),
	})
	.strict();

export type CreateOrganizationInput = z.infer<typeof createOrganizationInput>;

export const updateOrganizationInput = createOrganizationInput.partial();

export type UpdateOrganizationInput = z.infer<typeof updateOrganizationInput>;
