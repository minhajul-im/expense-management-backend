import { Router } from "express";
import { CategoryController } from "./CategoryController";
import { IOrganizationRepository } from "../organization/OrganizationRepository";
import { organizationMiddleware } from "../../core/middleware/organization";

export function createCategoryRouter(
	controller: CategoryController,
	organizationRepo: IOrganizationRepository
): Router {
	const router = Router();

	const middleware = organizationMiddleware(organizationRepo);

	router.get("/", middleware, controller.getAll);
	router.post("/", middleware, controller.create);
	router.get("/:id", middleware, controller.getById);
	router.patch("/:id", middleware, controller.update);
	router.delete("/:id", middleware, controller.delete);

	return router;
}
