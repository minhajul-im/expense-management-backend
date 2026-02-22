import { RequestHandler, Request, Response } from "express";
import { asyncHandler } from "../../core/middleware/asyncHandler";
import { ResponseUtil } from "../../core/success/SuccessResponse";
import { IBudgetRepository } from "./BudgetRepository";
import { IBudgetService } from "./BudgetService";
import { getOrgIdFromReq, getParamsIdNumber } from "../../core/utils/helper";
import { ICategoryRepository } from "../category/CategoryRepository";
import { ConflictError, NotFoundError } from "../../core/errors/AppError";

export class BudgetController {
	constructor(
		private service: IBudgetService,
		private repository: IBudgetRepository,
		private categoryRepository: ICategoryRepository
	) {}

	private findOne = async (orgId: number, id: number) => {
		const result = await this.repository.findById(orgId, id);
		if (!result) throw new ConflictError("Budget not found");
		return result;
	};

	public getAll: RequestHandler = asyncHandler(async (req: Request, res: Response) => {
		const orgId = getOrgIdFromReq(req);
		const result = await this.repository.findAll(orgId, req.query);
		ResponseUtil.sendList(res, result, "Budgets retrieved successfully");
	});

	public getById: RequestHandler = asyncHandler(async (req: Request, res: Response) => {
		const orgId = getOrgIdFromReq(req);
		const id = getParamsIdNumber(req, "Invalid budget ID");

		const result = await this.findOne(orgId, id);
		ResponseUtil.sendOk(res, result, "Budget retrieved successfully");
	});

	public create: RequestHandler = asyncHandler(async (req: Request, res: Response) => {
		const orgId = getOrgIdFromReq(req);
		const input = this.service.createValidator(req.body);

		const category = await this.categoryRepository.findById(orgId, input?.category_id);

		if (!category) throw new NotFoundError("Category is not found");
		if (!category?.is_active) throw new ConflictError("Category is not active");

		const hasBudget = await this.repository.findByCategoryId(orgId, input?.category_id);
		if (hasBudget) throw new ConflictError("Budget already exists");

		const result = await this.repository.create({ ...input, organization_id: orgId });
		ResponseUtil.sendCreate(res, result, "Budget created successfully");
	});

	public update: RequestHandler = asyncHandler(async (req: Request, res: Response) => {
		const orgId = getOrgIdFromReq(req);
		const id = getParamsIdNumber(req, "Invalid budget ID");

		const input = this.service.updateValidator(req.body);
		await this.findOne(orgId, id);

		const result = await this.repository.update(orgId, id, input);
		ResponseUtil.sendUpdate(res, result, "Budget updated successfully");
	});

	public delete: RequestHandler = asyncHandler(async (req: Request, res: Response) => {
		const orgId = getOrgIdFromReq(req);
		const id = getParamsIdNumber(req, "Invalid budget ID");

		await this.findOne(orgId, id);
		await this.repository.delete(orgId, id);

		ResponseUtil.sendDelete(res, null, "Budget deleted successfully");
	});
}
