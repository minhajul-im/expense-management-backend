import { Router } from "express";
import { authMiddleware } from "../../core/middleware/authHandler";
import { IAuthService } from "../auth/AuthService";
import { UserController } from "./UserController";

export function createUserRouter(controller: UserController, service: IAuthService): Router {
	const router = Router();

	const middleware = authMiddleware(service);

	router.get("/me", middleware, controller.me);
	// router.post("/");
	// router.get("/:id");
	// router.patch("/:id");
	// router.delete("/:id");

	return router;
}
