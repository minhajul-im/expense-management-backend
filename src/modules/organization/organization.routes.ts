import { Router } from "express";
import { OrganizationController } from "./OrganizationController";

export function createOrganizationRouter(controller: OrganizationController): Router {
	const router = Router();

	router.get("/", controller.getAll);
	router.get("/:id", controller.getById);
	router.get("/:username", controller.getByUsername);
	router.get("/", controller.getAll);
	router.post("/", controller.create);
	router.patch("/:id", controller.update);
	router.delete("/:id", controller.delete);

	return router;
}
