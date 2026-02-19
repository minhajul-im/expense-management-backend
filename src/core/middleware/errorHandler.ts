import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";
import { AppError, InternalError } from "../errors/AppError";
import { handleZodError } from "../errors/zodHelper";
import { env } from "../../config/env";

export const errorHandler = (error: Error, _req: Request, res: Response, _next: NextFunction) => {
	let appError = error;

	if (error instanceof ZodError) {
		appError = handleZodError(error);
	} else if (!(error instanceof AppError)) {
		appError = new InternalError(error.message);
	}

	const response = {
		success: false,
		error: (appError as AppError).toJSON(),
	};

	if (env.NODE_ENV === "development") {
		(response as any).stack = error.stack;
	}

	res.status((appError as AppError).statusCode).json(response);
};
