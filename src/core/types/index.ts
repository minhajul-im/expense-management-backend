import { Request } from "express";

export type RequestWithOrgType = Request & { orgId: number };
