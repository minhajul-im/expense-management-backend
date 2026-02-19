import { Router } from "express";

import { HealthController } from "./HealthController";

export function createHealthRouter(controller: HealthController): Router {
	const router = Router();

	router.get("/server", controller.serverHealth);
	router.get("/database", controller.databaseHealth);
	router.post("/database", controller.storeHealth);

	return router;
}
