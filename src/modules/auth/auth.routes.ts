import { Router } from "express";
import { AuthController } from "./AuthController";
import { authMiddleware } from "../../core/middleware/auth";

export function createAuthRouter(controller: AuthController): Router {
	const router = Router();

	router.post("/register", controller.register);
	router.post("/login", controller.login);
	router.get("/profile", authMiddleware, controller.getProfile);

	return router;
}
