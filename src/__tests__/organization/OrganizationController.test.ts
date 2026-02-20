import { Request, Response, NextFunction } from "express";
import { OrganizationController } from "../../modules/organization/OrganizationController";
import { IOrganizationService } from "../../modules/organization/OrganizationService";
import { IOrganizationRepository } from "../../modules/organization/OrganizationRepository";
import { ConflictError, NotFoundError } from "../../core/errors/AppError";

describe("OrganizationController", () => {
	let controller: OrganizationController;
	let mockService: jest.Mocked<IOrganizationService>;
	let mockRepository: jest.Mocked<IOrganizationRepository>;
	let mockReq: Partial<Request>;
	let mockRes: Partial<Response>;
	let mockNext: jest.MockedFunction<NextFunction>;

	beforeEach(() => {
		mockService = {
			createValidator: jest.fn(),
			updateValidator: jest.fn(),
		};

		mockRepository = {
			findById: jest.fn(),
			findByUsername: jest.fn(),
			findAll: jest.fn(),
			create: jest.fn(),
			update: jest.fn(),
			delete: jest.fn(),
		};

		controller = new OrganizationController(mockService, mockRepository);

		mockReq = {
			body: {},
			params: {},
			query: {},
		};

		mockRes = {
			status: jest.fn().mockReturnThis(),
			json: jest.fn().mockReturnThis(),
		};

		mockNext = jest.fn();
	});

	describe("create", () => {
		it("should create organization successfully", async () => {
			const input = {
				name: "Acme Corp",
				username: "acme",
				description: "Test org",
			};

			const created = { id: 1, ...input };

			mockReq.body = input;
			mockService.createValidator.mockReturnValue(input as any);
			(mockRepository.findByUsername as jest.Mock).mockResolvedValue(undefined);
			(mockRepository.create as jest.Mock).mockResolvedValue(created);

			await controller.create(
				mockReq as Request,
				mockRes as Response,
				mockNext as NextFunction
			);

			expect(mockService.createValidator).toHaveBeenCalledWith(input);
			expect(mockRepository.findByUsername).toHaveBeenCalledWith("acme");
			expect(mockRepository.create).toHaveBeenCalledWith(input);

			expect(mockRes.status).toHaveBeenCalledWith(201);

			const jsonArg = (mockRes.json as jest.Mock).mock.calls[0][0];
			expect(jsonArg).toEqual(
				expect.objectContaining({
					success: true,
					message: "Organization created successfully",
					data: created,
				})
			);

			expect(mockNext).not.toHaveBeenCalled();
		});

		it("should call next with ConflictError when username already exists", async () => {
			const input = {
				name: "Acme Corp",
				username: "acme",
			};

			mockReq.body = input;
			mockService.createValidator.mockReturnValue(input as any);
			(mockRepository.findByUsername as jest.Mock).mockResolvedValue({
				id: 1,
				...input,
			});

			await controller.create(
				mockReq as Request,
				mockRes as Response,
				mockNext as NextFunction
			);

			expect(mockRepository.create).not.toHaveBeenCalled();
			expect(mockNext).toHaveBeenCalledTimes(1);

			const errorArg = mockNext?.mock?.calls?.[0]?.[0];
			expect(errorArg).toBeInstanceOf(ConflictError);
		});
	});

	describe("getAll", () => {
		it("should return organizations list", async () => {
			const organizations = [
				{ id: 1, name: "Org1", username: "org1" },
				{ id: 2, name: "Org2", username: "org2" },
			];

			(mockRepository.findAll as jest.Mock).mockResolvedValue(organizations);

			await controller.getAll(
				mockReq as Request,
				mockRes as Response,
				mockNext as NextFunction
			);

			expect(mockRepository.findAll).toHaveBeenCalledWith(mockReq.query);
			expect(mockRes.status).toHaveBeenCalledWith(200);

			const jsonArg = (mockRes.json as jest.Mock).mock.calls[0][0];
			expect(jsonArg).toEqual(
				expect.objectContaining({
					success: true,
					message: "Organizations retrieved successfully",
					data: organizations,
				})
			);

			expect(mockNext).not.toHaveBeenCalled();
		});
	});

	describe("getById", () => {
		it("should return organization when found", async () => {
			const org = { id: 1, name: "Org1", username: "org1" };

			mockReq.params = { id: "1" };
			(mockRepository.findById as jest.Mock).mockResolvedValue(org);

			await controller.getById(
				mockReq as Request,
				mockRes as Response,
				mockNext as NextFunction
			);

			expect(mockRepository.findById).toHaveBeenCalledWith(1);
			expect(mockRes.status).toHaveBeenCalledWith(200);

			const jsonArg = (mockRes.json as jest.Mock).mock.calls[0][0];
			expect(jsonArg).toEqual(
				expect.objectContaining({
					success: true,
					message: "Organization retrieved successfully",
					data: org,
				})
			);

			expect(mockNext).not.toHaveBeenCalled();
		});

		it("should call next with error when organization is not found", async () => {
			mockReq.params = { id: "1" };
			(mockRepository.findById as jest.Mock).mockResolvedValue(undefined);

			await controller.getById(
				mockReq as Request,
				mockRes as Response,
				mockNext as NextFunction
			);

			expect(mockRepository.findById).toHaveBeenCalledWith(1);
			expect(mockNext).toHaveBeenCalledTimes(1);

			const errorArg = mockNext.mock?.calls?.[0]?.[0];
			expect(errorArg).toBeInstanceOf(Error);
			expect((errorArg as any).message).toBe("Organization not found!");
		});

		it("should call next with NotFoundError when id is invalid", async () => {
			mockReq.params = { id: "abc" }; // will cause getParamsIdNumber to throw

			await controller.getById(
				mockReq as Request,
				mockRes as Response,
				mockNext as NextFunction
			);

			expect(mockNext).toHaveBeenCalledTimes(1);
			const errorArg = mockNext.mock.calls?.[0]?.[0];
			expect(errorArg).toBeInstanceOf(NotFoundError);
		});
	});

	describe("update", () => {
		it("should update organization successfully", async () => {
			const orgId = 1;
			const updateInput = {
				name: "Updated Org",
				username: "updated-org",
			};

			const existingOrg = { id: orgId, name: "Old", username: "old" };
			const updatedOrg = { ...existingOrg, ...updateInput };

			mockReq.params = { id: String(orgId) };
			mockReq.body = updateInput;

			mockService.updateValidator.mockReturnValue(updateInput as any);
			(mockRepository.findById as jest.Mock).mockResolvedValue(existingOrg);
			// username is present -> will check duplicate
			(mockRepository.findByUsername as jest.Mock).mockResolvedValue(undefined);
			(mockRepository.update as jest.Mock).mockResolvedValue(updatedOrg);

			await controller.update(
				mockReq as Request,
				mockRes as Response,
				mockNext as NextFunction
			);

			expect(mockService.updateValidator).toHaveBeenCalledWith(updateInput);
			expect(mockRepository.findById).toHaveBeenCalledWith(orgId);
			expect(mockRepository.findByUsername).toHaveBeenCalledWith("updated-org");
			expect(mockRepository.update).toHaveBeenCalledWith(orgId, updateInput);

			expect(mockRes.status).toHaveBeenCalledWith(200);
			const jsonArg = (mockRes.json as jest.Mock).mock.calls[0][0];
			expect(jsonArg).toEqual(
				expect.objectContaining({
					success: true,
					message: "Organization updated successfully",
					data: updatedOrg,
				})
			);

			expect(mockNext).not.toHaveBeenCalled();
		});

		it("should call next with ConflictError when updating to duplicate username", async () => {
			const orgId = 1;
			const updateInput = {
				username: "duplicate-username",
			};

			const existingOrg = { id: orgId, name: "Old", username: "old" };

			mockReq.params = { id: String(orgId) };
			mockReq.body = updateInput;

			mockService.updateValidator.mockReturnValue(updateInput as any);
			(mockRepository.findById as jest.Mock).mockResolvedValue(existingOrg);
			// hasDuplicate will find record and throw ConflictError
			(mockRepository.findByUsername as jest.Mock).mockResolvedValue({
				id: 99,
				name: "Other",
				username: "duplicate-username",
			});

			await controller.update(
				mockReq as Request,
				mockRes as Response,
				mockNext as NextFunction
			);

			expect(mockRepository.update).not.toHaveBeenCalled();
			expect(mockNext).toHaveBeenCalledTimes(1);

			const errorArg = mockNext.mock.calls?.[0]?.[0];
			expect(errorArg).toBeInstanceOf(ConflictError);
		});

		it("should call next with NotFoundError when updating non-existing organization", async () => {
			const orgId = 1;
			const updateInput = {
				name: "Updated Org",
			};

			mockReq.params = { id: String(orgId) };
			mockReq.body = updateInput;

			mockService.updateValidator.mockReturnValue(updateInput as any);
			(mockRepository.findById as jest.Mock).mockResolvedValue(undefined);

			await controller.update(
				mockReq as Request,
				mockRes as Response,
				mockNext as NextFunction
			);

			expect(mockRepository.update).not.toHaveBeenCalled();
			expect(mockNext).toHaveBeenCalledTimes(1);

			const errorArg = mockNext.mock.calls?.[0]?.[0];
			expect(errorArg).toBeInstanceOf(NotFoundError);
		});
	});

	describe("delete", () => {
		it("should delete organization successfully", async () => {
			const orgId = 1;
			const existingOrg = { id: orgId, name: "Org1", username: "org1" };
			const deletedOrg = { ...existingOrg };

			mockReq.params = { id: String(orgId) };

			(mockRepository.findById as jest.Mock).mockResolvedValue(existingOrg);
			(mockRepository.delete as jest.Mock).mockResolvedValue(deletedOrg);

			await controller.delete(
				mockReq as Request,
				mockRes as Response,
				mockNext as NextFunction
			);

			expect(mockRepository.findById).toHaveBeenCalledWith(orgId);
			expect(mockRepository.delete).toHaveBeenCalledWith(orgId);

			expect(mockRes.status).toHaveBeenCalledWith(200);
			const jsonArg = (mockRes.json as jest.Mock).mock.calls[0][0];
			expect(jsonArg).toEqual(
				expect.objectContaining({
					success: true,
					message: "Organization deleted successfully",
				})
			);

			expect(mockNext).not.toHaveBeenCalled();
		});

		it("should call next with NotFoundError when deleting non-existing organization", async () => {
			const orgId = 1;
			mockReq.params = { id: String(orgId) };

			(mockRepository.findById as jest.Mock).mockResolvedValue(undefined);

			await controller.delete(
				mockReq as Request,
				mockRes as Response,
				mockNext as NextFunction
			);

			expect(mockRepository.delete).not.toHaveBeenCalled();
			expect(mockNext).toHaveBeenCalledTimes(1);

			const errorArg = mockNext.mock.calls?.[0]?.[0];
			expect(errorArg).toBeInstanceOf(NotFoundError);
		});
	});
});
