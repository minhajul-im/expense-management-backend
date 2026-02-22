import { Router } from "express";
import { ExpenseController } from "./ExpenseController";
import { IOrganizationRepository } from "../organization/OrganizationRepository";
import { organizationMiddleware } from "../../core/middleware/organization";

export function createExpenseRouter(
	controller: ExpenseController,
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
