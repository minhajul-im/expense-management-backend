import { Request, Response } from "express";
import { AuthService } from "./AuthService";
import { registerSchema, loginSchema } from "./user.dto";
import { asyncHandler } from "../../core/middleware/asyncHandler";
import { UnauthorizedError } from "../../core/errors/AppError";
import { ResponseUtil } from "../../core/success/SuccessResponse";

export class AuthController {
	constructor(private authService: AuthService) {}

	register = asyncHandler(async (req: Request, res: Response) => {
		const validatedData = registerSchema.parse(req.body);
		const user = await this.authService.register(validatedData);

		ResponseUtil.sendCreate(res, user, "User registered successfully");
	});

	login = asyncHandler(async (req: Request, res: Response) => {
		const validatedData = loginSchema.parse(req.body);
		const { user, token } = await this.authService.login(validatedData);

		ResponseUtil.sendOk(res, { user, token }, "Login successful");
	});

	getProfile = asyncHandler(async (req: Request, res: Response) => {
		const userId = (req as any).userId;
		if (!userId) {
			throw new UnauthorizedError("User not authenticated");
		}

		const user = await this.authService.getProfile(userId);

		ResponseUtil.sendOk(res, user, "Profile retrieved successfully");
	});
}
