import { Request } from "express";

export type RequestWithOrgType = Request & { orgId: number };

export type PaginationParamsType = {
	page: number;
	limit: number;
};

export type PaginationMetaType = {
	page: number;
	limit: number;
	totalItems: number;
	totalPages: number;
	hasNext: boolean;
	hasPrevious: boolean;
};
