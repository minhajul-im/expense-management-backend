import { Router } from "express";
import { AuthController } from "./AuthController";

export function createAuthRouter(controller: AuthController): Router {
	const router = Router();

	router.post("/signup", controller.signup);
	router.post("/signin", controller.signin);
	router.post("/signout", controller.signin);

	return router;
}
