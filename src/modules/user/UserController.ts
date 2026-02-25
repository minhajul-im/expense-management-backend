import { Request, RequestHandler, Response } from "express";
import { asyncHandler } from "../../core/middleware/asyncHandler";
import { ResponseUtil } from "../../core/success/SuccessResponse";
import { NotFoundError } from "../../core/errors/AppError";
import { IUserRepository } from "./UserRepository";
import { RequestWithUserType } from "../../core/types";

export class UserController {
	constructor(private repository: IUserRepository) {}

	public me = asyncHandler(async (req: Request, res: Response) => {
		const data = (req as RequestWithUserType).user;
		ResponseUtil.sendOk(res, data, "User retrieved successfully");
	});
}
