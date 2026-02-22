import { handleZodError } from "../../core/errors/zodHelper";
import {
	CreateCategoryInput,
	UpdateCategoryInput,
	createCategorySchema,
	updateCategorySchema,
} from "./category.validator";

export interface ICategoryService {
	createValidator(input: any): CreateCategoryInput;
	updateValidator(input: any): UpdateCategoryInput;
}

export class CategoryService implements ICategoryService {
	public createValidator(input: any): CreateCategoryInput {
		const data = createCategorySchema.safeParse(input);
		if (!data.success) {
			throw handleZodError(data.error);
		}
		return data.data;
	}

	public updateValidator(input: any): UpdateCategoryInput {
		const data = updateCategorySchema.safeParse(input);
		if (!data.success) {
			throw handleZodError(data.error);
		}
		return data.data;
	}
}
