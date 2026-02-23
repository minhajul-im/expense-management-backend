import z from "zod";

export enum LIMIT_TYPE {
	NORMAL = "normal",
	SOFT = "soft",
	HARD = "hard",
}

export const LIMIT_TYPE_ENUM = z.enum([LIMIT_TYPE.NORMAL, LIMIT_TYPE.SOFT, LIMIT_TYPE.HARD]);

export const createBudgetInput = z.object({
	amount: z.number().positive("Amount must be positive").min(1, "Amount must be at least 1"),
	category_id: z
		.number()
		.int("Category ID must be an integer")
		.positive("Category ID must be positive"),
	year: z
		.number()
		.int("Year must be an integer")
		.positive("Year must be positive")
		.refine((val) => val === new Date().getFullYear(), {
			message: "Year must be the current year",
		}),
	limit_type: LIMIT_TYPE_ENUM.default(LIMIT_TYPE.NORMAL).optional(),
});

export type CreateBudgetInput = z.infer<typeof createBudgetInput>;

export const updateBudgetInput = createBudgetInput.partial();

export type UpdateBudgetInput = z.infer<typeof updateBudgetInput>;
