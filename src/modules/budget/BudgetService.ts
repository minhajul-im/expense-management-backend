import { handleZodError } from "../../core/errors/zodHelper";
import { sanitizeObjectFn } from "../../core/utils/sanitize.object";
import { createBudgetInput, CreateBudgetInputType, updateBudgetInput } from "./budget.schema";

export interface IBudgetService {
	createValidator(input: any): any;
	updateValidator(input: any): any;
}

export class BudgetService implements IBudgetService {
	public createValidator(input: any): CreateBudgetInputType {
		const data = createBudgetInput.safeParse(input);
		if (!data.success) {
			throw handleZodError(data.error);
		}
		return data.data;
	}
	public updateValidator(input: any): any {
		const data = updateBudgetInput.safeParse(input);
		if (!data.success) {
			throw handleZodError(data.error);
		}
		return sanitizeObjectFn(data.data);
	}
}
