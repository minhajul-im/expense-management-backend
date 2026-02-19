import { Request, Response } from "express";

import { asyncHandler } from "../../core/middleware/asyncHandler";
import { ResponseUtil } from "../../core/success/SuccessResponse";
import { IHealthRepository } from "./HealthRepository";

export class HealthController {
	constructor(private healthRepository: IHealthRepository) {}

	serverHealth = asyncHandler(async (req: Request, res: Response) => {
		ResponseUtil.sendOk(
			res,
			{
				status: "OK",
				timestamp: new Date().toISOString(),
				uptime: process.uptime(),
			},
			"Server health check successful"
		);
	});

	databaseHealth = asyncHandler(async (req: Request, res: Response) => {
		ResponseUtil.sendOk(
			res,
			{
				status: "OK",
				timestamp: new Date().toISOString(),
				uptime: process.uptime(),
				result: await this.healthRepository.getAll(),
			},
			"Database health check successful"
		);
	});

	storeHealth = asyncHandler(async (req: Request, res: Response) => {
		console.log(req.body);
		const health = await this.healthRepository.create(req.body);
		ResponseUtil.sendOk(res, health, "Health check successful");
	});
}
