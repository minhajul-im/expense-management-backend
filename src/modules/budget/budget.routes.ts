import { Router } from "express";
import { IOrganizationRepository } from "../organization/OrganizationRepository";
import { organizationMiddleware } from "../../core/middleware/organization";
import { BudgetController } from "./BudgetController";

export function createBudgetRouter(
	controller: BudgetController,
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
