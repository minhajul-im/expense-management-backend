import { Request, Response } from "express";
import { IAuthService } from "./AuthService";
import { asyncHandler } from "../../core/middleware/asyncHandler";
import { ResponseUtil } from "../../core/success/SuccessResponse";

export class AuthController {
	constructor(private service: IAuthService) {}

	public signup = asyncHandler(async (req: Request, res: Response) => {
		const result = await this.service.signup(req.body);
		ResponseUtil.sendCreate(res, result, "User signup successfully");
	});

	public signin = asyncHandler(async (req: Request, res: Response) => {
		const result = await this.service.signin(req.body);
		ResponseUtil.sendOk(res, result, "User signin successfully");
	});

	public signout = asyncHandler(async (req: Request, res: Response) => {
		ResponseUtil.sendOk(res, null, "User signout successfully");
	});
}
