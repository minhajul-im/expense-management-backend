import { handleZodError } from "../../core/errors/zodHelper";
import { sanitizeObjectFn } from "../../core/utils/sanitize.object";
import {
	CreateExpenseInput,
	createExpenseInput,
	updateExpenseInput,
	UpdateExpenseInput,
} from "./expense.validator";

export interface IExpenseService {
	createValidator(input: any): CreateExpenseInput;
	updateValidator(input: any): UpdateExpenseInput;
}

export class ExpenseService implements IExpenseService {
	public createValidator(input: any): CreateExpenseInput {
		const data = createExpenseInput.safeParse(input);
		if (!data.success) {
			throw handleZodError(data.error);
		}
		return data.data;
	}

	public updateValidator(input: any): any {
		const data = updateExpenseInput.safeParse(input);
		if (!data.success) {
			throw handleZodError(data.error);
		}
		const sanitized = sanitizeObjectFn(data.data);

		if (sanitized?.expense_date) {
			sanitized.expense_date = new Date(sanitized.expense_date);
		}
		if (sanitized?.amount) {
			sanitized.amount = sanitized.amount.toFixed(2);
		}
		return sanitized;
	}
}
