import { ValidationError } from "../../core/errors/AppError";
import { handleZodError } from "../../core/errors/zodHelper";
import { sanitizeObjectFn } from "../../core/utils/sanitize.object";
import {
	createOrganizationInput,
	CreateOrganizationInput,
	updateOrganizationInput,
	UpdateOrganizationInput,
} from "./organization.validator";

export interface IOrganizationService {
	createValidator(input: any): CreateOrganizationInput;
	updateValidator(input: any): UpdateOrganizationInput;
}

export class OrganizationService implements IOrganizationService {
	createValidator(input: any): CreateOrganizationInput {
		const data = createOrganizationInput.safeParse(input);
		if (!data.success) {
			throw handleZodError(data.error);
		}
		return data.data;
	}

	updateValidator(input: any): any {
		const data = updateOrganizationInput.safeParse(input);
		if (!data.success) {
			throw new ValidationError(data.error.message);
		}
		return sanitizeObjectFn(data.data);
	}
}
