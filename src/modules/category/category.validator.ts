import z from "zod";

export const createCategorySchema = z.object({
	name: z.string().min(1, "Category name is required"),
	image: z.string().optional(),
	is_active: z.boolean().default(true).optional(),
});

export const updateCategorySchema = z.object({
	name: z.string().min(1).optional(),
	image: z.string().optional(),
	is_active: z.boolean().optional(),
});

export type CreateCategoryInput = z.infer<typeof createCategorySchema>;
export type UpdateCategoryInput = z.infer<typeof updateCategorySchema>;
