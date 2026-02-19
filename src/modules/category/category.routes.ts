import { Router } from "express";
import { CategoryController } from "./CategoryController";

export function createCategoryRouter(controller: CategoryController): Router {
	const router = Router();

	router.get("/", controller.getAllCategories.bind(controller));
	router.post("/", controller.createCategory.bind(controller));

	return router;
}