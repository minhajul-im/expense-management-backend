import { Response, Request, NextFunction } from "express";
import { UnauthorizedError } from "../errors/AppError";
import { IAuthService } from "../../modules/auth/AuthService";
import { RequestWithUserType } from "../types";

export const authMiddleware = (service: IAuthService) => {
	return async function (req: Request, _res: Response, next: NextFunction) {
		const authHeader = req.headers.authorization;

		if (!authHeader || !authHeader.startsWith("Bearer ")) {
			return next(new UnauthorizedError("Authentication required"));
		}

		const token = authHeader?.split(" ")?.[1] ?? "";

		try {
			const user = await service.verifyToken(token);
			(req as RequestWithUserType).user = user;
			next();
		} catch (error) {
			next(new UnauthorizedError("Invalid or expired token"));
		}
	};
};
