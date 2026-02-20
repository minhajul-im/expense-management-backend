import { Request, Response, RequestHandler } from "express";
import { asyncHandler } from "../../core/middleware/asyncHandler";
import { ResponseUtil } from "../../core/success/SuccessResponse";
import { IOrganizationRepository } from "./OrganizationRepository";
import { IOrganizationService } from "./OrganizationService";
import { ConflictError, NotFoundError } from "../../core/errors/AppError";
import { getParamsIdNumber } from "../../core/utils/helper";

export class OrganizationController {
	constructor(
		private service: IOrganizationService,
		private repository: IOrganizationRepository
	) {}

	public create: RequestHandler = asyncHandler(async (req: Request, res: Response) => {
		const input = this.service.createValidator(req.body);
		await this.hasDuplicate(input.username);
		const result = await this.repository.create(input);
		ResponseUtil.sendCreate(res, result, "Organization created successfully");
	});

	public getAll: RequestHandler = asyncHandler(async (req: Request, res: Response) => {
		const result = await this.repository.findAll(req.query);
		ResponseUtil.sendList(res, result, "Organizations retrieved successfully");
	});

	public getById: RequestHandler = asyncHandler(async (req: Request, res: Response) => {
		const id = getParamsIdNumber(req, "Invalid organization ID");
		const result = await this.repository.findById(id);
		if (!result) throw new Error("Organization not found!");
		ResponseUtil.sendOk(res, result, "Organization retrieved successfully");
	});

	public getByUsername: RequestHandler = asyncHandler(async (req: Request, res: Response) => {
		const username = req.params?.username as string;
		if (!username) throw new NotFoundError("Organization not found!");
		const result = await this.hasDuplicate(username);
		ResponseUtil.sendOk(res, result, "Organization retrieved successfully");
	});

	public update: RequestHandler = asyncHandler(async (req: Request, res: Response) => {
		const id = getParamsIdNumber(req, "Invalid organization ID");
		const input = this.service.updateValidator(req.body);
		await this.hasOrganization(id);
		if (input?.username) {
			await this.hasDuplicate(input?.username);
		}
		const result = await this.repository.update(id, input);
		ResponseUtil.sendUpdate(res, result, "Organization updated successfully");
	});

	public delete: RequestHandler = asyncHandler(async (req: Request, res: Response) => {
		const id = getParamsIdNumber(req, "Invalid organization ID");
		await this.hasOrganization(id);
		const result = await this.repository.delete(id);
		ResponseUtil.sendDelete(res, result, "Organization deleted successfully");
	});

	private async hasOrganization(id: number) {
		const hasData = await this.repository.findById(id);
		if (!hasData) throw new NotFoundError("Organization not found!");
		return hasData;
	}

	private async hasDuplicate(username: string) {
		const hasData = await this.repository.findByUsername(username);
		if (hasData) throw new ConflictError("Organization with this username already exists");
		return hasData;
	}
}
