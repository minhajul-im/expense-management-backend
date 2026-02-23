import { Request, RequestHandler, Response } from "express";
import { asyncHandler } from "../../core/middleware/asyncHandler";
import { ResponseUtil } from "../../core/success/SuccessResponse";
import { NotFoundError } from "../../core/errors/AppError";
import {
	buildPaginationMeta,
	getOrgIdFromReq,
	getParamsIdNumber,
	getPaginationParams,
} from "../../core/utils/helper";
import { IExpenseService } from "./ExpenseService";
import { IExpenseRepository } from "./ExpenseRepository";
import { ICategoryRepository } from "../category/CategoryRepository";

export class ExpenseController {
	constructor(
		private service: IExpenseService,
		private repository: IExpenseRepository,
		private categoryRepository: ICategoryRepository
	) {}

	private async getExpense(req: Request) {
		const orgId = getOrgIdFromReq(req);
		const id = getParamsIdNumber(req, "Invalid expense ID");
		const result = await this.repository.findById(orgId, id);
		if (!result) throw new NotFoundError("Expense not found");
		return result;
	}

	private async hasCategory(orgId: number, id: number) {
		const result = await this.categoryRepository.findById(orgId, id);
		if (!result) throw new NotFoundError("Category not found");
		return result;
	}

	public getAll: RequestHandler = asyncHandler(async (req: Request, res: Response) => {
		const orgId = getOrgIdFromReq(req);
		const pagination = getPaginationParams(req.query);
		const { items, totalItems } = await this.repository.getAll(orgId, pagination);
		const meta = buildPaginationMeta({ ...pagination, totalItems });

		ResponseUtil.sendCustom(
			res,
			{
				expenses: items,
				meta,
			},
			"Expenses retrieved successfully"
		);
	});

	public getById: RequestHandler = asyncHandler(async (req: Request, res: Response) => {
		const result = await this.getExpense(req);
		ResponseUtil.sendOk(res, result, "Expense retrieved successfully");
	});

	public create: RequestHandler = asyncHandler(async (req: Request, res: Response) => {
		const orgId = getOrgIdFromReq(req);
		const input = this.service.createValidator(req.body);
		await this.hasCategory(orgId, input.category_id);

		const result = await this.repository.create({
			...input,
			organization_id: orgId,
			amount: input.amount.toFixed(2),
			expense_date: new Date(input.expense_date),
		});
		ResponseUtil.sendCreate(res, result, "Expense created successfully");
	});

	public update: RequestHandler = asyncHandler(async (req: Request, res: Response) => {
		const orgId = getOrgIdFromReq(req);
		const id = getParamsIdNumber(req, "Invalid expense ID");
		const input = this.service.updateValidator(req.body);
		await this.getExpense(req);
		const result = await this.repository.update(orgId, id, input);
		ResponseUtil.sendUpdate(res, result, "Expense updated successfully");
	});

	public delete: RequestHandler = asyncHandler(async (req: Request, res: Response) => {
		const orgId = getOrgIdFromReq(req);
		const id = getParamsIdNumber(req, "Invalid expense ID");
		await this.getExpense(req);
		await this.repository.delete(orgId, id);
		ResponseUtil.sendDelete(res, "Expense deleted successfully");
	});
}
