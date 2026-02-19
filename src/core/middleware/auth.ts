import { Request, Response, NextFunction } from "express";
import { UnauthorizedError } from "../errors/AppError";

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
	// For now, just a placeholder - you'll implement actual auth logic later
	const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

	if (!token) {
		return next(new UnauthorizedError("Authentication required"));
	}

	// TODO: Implement actual token verification logic
	// For now, just pass through
	next();
};
