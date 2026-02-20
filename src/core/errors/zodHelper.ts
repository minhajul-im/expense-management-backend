import { ZodError, ZodIssue } from "zod";
import { ValidationError } from "./AppError";

export function handleZodError(zodError: ZodError): ValidationError {
	const formattedErrors = zodError.errors?.map((issue: ZodIssue) => {
		const field = issue.path.join(".") || "root";

		let message = issue.message;

		if (issue.code === "unrecognized_keys") {
			message = `Unrecognized key(s): ${(issue.keys as string[]).join(", ")} (remove them)`;
		} else if (issue.code === "invalid_type" && issue.received === "undefined") {
			message = "This field is required";
		} else if (issue.code === "too_small" && issue.type === "string") {
			message = "Cannot be empty";
		} else if (issue.code === "invalid_string" && issue.validation === "email") {
			message = "Must be a valid email address";
		}

		return {
			field,
			code: issue.code,
			message: issue.message,
		};
	});

	const summary = formattedErrors?.map((err) => `${err.field}: ${err?.message}`).join(" | ");

	return new ValidationError(`Validation failed: ${summary}`, { errors: formattedErrors });
}
