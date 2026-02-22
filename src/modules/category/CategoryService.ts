import { handleZodError } from "../../core/errors/zodHelper";
import { sanitizeObjectFn } from "../../core/utils/sanitize.object";
import {
	CreateCategoryInput,
	UpdateCategoryInput,
	createCategoryInput,
	updateCategoryInput,
} from "./category.validator";

export interface ICategoryService {
	createValidator(input: any): CreateCategoryInput;
	updateValidator(input: any): UpdateCategoryInput;
}

export class CategoryService implements ICategoryService {
	public createValidator(input: any): CreateCategoryInput {
		const data = createCategoryInput.safeParse(input);
		if (!data.success) {
			throw handleZodError(data.error);
		}
		return data.data;
	}

	public updateValidator(input: any): any {
		const data = updateCategoryInput.safeParse(input);
		if (!data.success) {
			throw handleZodError(data.error);
		}
		return sanitizeObjectFn(data.data);
	}
}
