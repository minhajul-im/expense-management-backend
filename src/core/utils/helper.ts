import { Request } from "express";
import { NotFoundError } from "../errors/AppError";

export function getParamsIdNumber(req: Request, message: string = "Invalid Id") {
	const id = Number(req.params?.id);
	if (isNaN(id)) throw new NotFoundError(message);
	return id;
}
