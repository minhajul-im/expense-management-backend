import { Request, Response, NextFunction } from "express";
import { NotFoundError } from "../errors/AppError";
import { IOrganizationRepository } from "../../modules/organization/OrganizationRepository";

export const organizationMiddleware = (organizationRepo: IOrganizationRepository) => {
	return async function (req: Request, res: Response, next: NextFunction) {
		const orgUsername = req.headers?.username;
		if (!orgUsername) {
			return next(new NotFoundError("Organization username required!"));
		}
		const findOrg = await organizationRepo.findByUsername(orgUsername as string);

		if (!findOrg) {
			return next(new NotFoundError("Organization is not found!"));
		}

		(req as any).orgId = findOrg?.id;

		next();
	};
};
