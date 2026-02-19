import { ZodError } from "zod";
import { ValidationError } from "./AppError";

export function handleZodError(error: ZodError): ValidationError {
	const message = error.errors.map((err) => `${err.path.join(".")}: ${err.message}`).join(", ");
	return new ValidationError(`Validation failed: ${message}`);
}
