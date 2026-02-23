import { Request } from "express";
import { NotFoundError } from "../errors/AppError";
import { PaginationMetaType, PaginationParamsType, RequestWithOrgType } from "../types";

export function getParamsIdNumber(req: Request, message: string = "Invalid Id") {
	const id = Number(req.params?.id);
	if (isNaN(id)) throw new NotFoundError(message);
	return id;
}

export function getOrgIdFromReq(_req: Request): number {
	const req = _req as RequestWithOrgType;
	const orgId = (req as any).orgId;
	if (!orgId) {
		throw new NotFoundError("Organization not found!");
	}
	return orgId;
}

export function getPaginationParams(
	query: any,
	defaultPage: number = 1,
	defaultLimit: number = 10,
	maxLimit: number = 100
): PaginationParamsType {
	let page = Number(query?.page) || defaultPage;
	let limit = Number(query?.limit) || defaultLimit;

	if (page < 1) page = 1;
	if (limit < 1) limit = 1;
	if (limit > maxLimit) limit = maxLimit;

	return { page, limit };
}

export function buildPaginationMeta(params: {
	page: number;
	limit: number;
	totalItems: number;
}): PaginationMetaType {
	const { page, limit, totalItems } = params;
	const totalPages = limit > 0 ? Math.max(1, Math.ceil(totalItems / limit)) : 1;

	return {
		page,
		limit,
		totalItems,
		totalPages,
		hasNext: page < totalPages,
		hasPrevious: page > 1,
	};
}
