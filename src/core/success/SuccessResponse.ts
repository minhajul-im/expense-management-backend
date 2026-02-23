import { Response } from "express";

export type ISuccessResponse<T = any> = {
	success: boolean;
	message: string;
	data: T | null;
};

export class SuccessHandler {
	static create<T>(data: T, message: string = "Created successfully"): ISuccessResponse<T> {
		return {
			success: true,
			message,
			data,
		};
	}

	static update<T>(data: T, message: string = "Updated successfully"): ISuccessResponse<T> {
		return {
			success: true,
			message,
			data,
		};
	}

	static delete<T>(message: string = "Deleted successfully"): ISuccessResponse<T> {
		return {
			success: true,
			message,
			data: null as T | null,
		};
	}

	static getOne<T>(data: T, message: string = "Retrieved successfully"): ISuccessResponse<T> {
		return {
			success: true,
			message,
			data,
		};
	}
	static getAll<T>(data: T, message: string = "Retrieved successfully"): ISuccessResponse<T> {
		return {
			success: true,
			message,
			data,
		};
	}

	static custom<T>(data: T, message: string = "Success"): ISuccessResponse<T> {
		return {
			success: true,
			message,
			data,
		};
	}
}

export class ResponseUtil {
	static sendCreate<T>(
		res: Response,
		data: T,
		message: string = "Created successfully",
		statusCode: number = 201
	): Response {
		return res.status(statusCode).json(SuccessHandler.create(data, message));
	}

	static sendOk<T>(
		res: Response,
		data: T,
		message: string = "Success",
		statusCode: number = 200
	): Response {
		return res.status(statusCode).json(SuccessHandler.getOne(data, message));
	}

	static sendUpdate<T>(
		res: Response,
		data: T,
		message: string = "Updated successfully",
		statusCode: number = 200
	): Response {
		return res.status(statusCode).json(SuccessHandler.update(data, message));
	}

	static sendDelete<T>(
		res: Response,
		message: string = "Deleted successfully",
		statusCode: number = 200
	): Response {
		return res.status(statusCode).json(SuccessHandler.delete(message));
	}

	static sendList<T>(
		res: Response,
		data: T[],
		message: string = "Retrieved successfully",
		statusCode: number = 200
	): Response {
		return res.status(statusCode).json(SuccessHandler.getAll(data, message));
	}

	static sendCustom<T>(
		res: Response,
		data: T,
		message: string = "Success",
		statusCode: number = 200
	): Response {
		return res.status(statusCode).json(SuccessHandler.custom(data, message));
	}
}
