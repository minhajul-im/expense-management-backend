import { Request } from "express";

export type RequestWithOrgType = Request & { orgId: number };
export type RequestWithUserType = Request & { user: UserType };

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

export type UserType = {
	id: number;
	full_name: string;
	email: string;
	roles: string[];
	image: string;
	is_active: boolean;
	created_at: string;
};
