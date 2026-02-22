import { Request } from "express";
import { NotFoundError } from "../errors/AppError";
import { RequestWithOrgType } from "../types";

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
