import { Request, RequestHandler, Response } from "express";
import { ICategoryService } from "./CategoryService";
import { ICategoryRepository } from "./CategoryRepository";
import { asyncHandler } from "../../core/middleware/asyncHandler";
import { ResponseUtil } from "../../core/success/SuccessResponse";
import { ConflictError, NotFoundError } from "../../core/errors/AppError";
import { getOrgIdFromReq, getParamsIdNumber } from "../../core/utils/helper";

export class CategoryController {
	constructor(
		private service: ICategoryService,
		private repository: ICategoryRepository
	) {}

	private async hasCategory(id: number, orgId: number) {
		const hasData = await this.repository.findById(orgId, id);
		if (!hasData) throw new NotFoundError("Category not found!");
		return hasData;
	}

	private async hasDuplicate(name: string, orgId: number) {
		const hasData = await this.repository.findByName(orgId, name);
		if (hasData) throw new ConflictError("Category with this name already exists");
		return hasData;
	}

	public getAll: RequestHandler = asyncHandler(async (req: Request, res: Response) => {
		const orgId = getOrgIdFromReq(req);
		const result = await this.repository.getAll(orgId);
		ResponseUtil.sendList(res, result, "Categories retrieved successfully");
	});

	public getById: RequestHandler = asyncHandler(async (req: Request, res: Response) => {
		const orgId = getOrgIdFromReq(req);
		const id = getParamsIdNumber(req, "Invalid category ID");
		const result = await this.hasCategory(orgId, id);
		ResponseUtil.sendOk(res, result, "Category retrieved successfully");
	});

	public create: RequestHandler = asyncHandler(async (req: Request, res: Response) => {
		const orgId = getOrgIdFromReq(req);
		const data = this.service.createValidator(req.body);
		await this.hasDuplicate(data.name, orgId);
		const result = await this.repository.create({ ...data, organization_id: orgId });
		ResponseUtil.sendCreate(res, result, "Category created successfully");
	});

	public update: RequestHandler = asyncHandler(async (req: Request, res: Response) => {
		const orgId = getOrgIdFromReq(req);
		const id = getParamsIdNumber(req, "Invalid category ID");
		const data = this.service.updateValidator(req.body);
		await this.hasCategory(id, orgId);
		const result = await this.repository.update(orgId, id, data);
		ResponseUtil.sendUpdate(res, result, "Category updated successfully");
	});

	public delete: RequestHandler = asyncHandler(async (req: Request, res: Response) => {
		const orgId = getOrgIdFromReq(req);
		const id = getParamsIdNumber(req, "Invalid category ID");
		await this.hasCategory(id, orgId);
		await this.repository.delete(orgId, id);
		ResponseUtil.sendDelete(res, null, "Category deleted successfully");
	});
}
