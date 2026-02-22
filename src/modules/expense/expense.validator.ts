import z from "zod";

export const createExpenseInput = z.object({
	expense_date: z
		.string()
		.refine(
			(val) => {
				const date = new Date(val);
				return !isNaN(date.getTime());
			},
			{ message: "Expense date must be a valid date string (e.g., ISO format)" }
		)
		.refine((val) => new Date(val) <= new Date(), {
			message: "Expense date cannot be in the future",
		}),
	category_id: z
		.number()
		.int("Category ID must be an integer")
		.positive("Category ID must be positive"),
	amount: z.number().positive("Amount must be positive").min(1, "Amount must be at least 1"),
	user_id: z.number().int("User ID must be an integer").positive("User ID must be positive"),
	description: z.string().optional(),
	is_over_limit: z.boolean().optional(),
	approval_note: z.string().optional(),
});

export type CreateExpenseInput = z.infer<typeof createExpenseInput>;

export const updateExpenseInput = createExpenseInput.partial();

export type UpdateExpenseInput = z.infer<typeof updateExpenseInput>;
