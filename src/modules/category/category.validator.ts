import z from "zod";

export const createCategoryInput = z.object({
	name: z
		.string()
		.min(1, "Category name is required")
		.max(50, "Category name must be at most 50 characters"),
	image: z.string().optional(),
	is_active: z.boolean().default(true).optional(),
});

export const updateCategoryInput = createCategoryInput.partial();

export type CreateCategoryInput = z.infer<typeof createCategoryInput>;
export type UpdateCategoryInput = z.infer<typeof updateCategoryInput>;
