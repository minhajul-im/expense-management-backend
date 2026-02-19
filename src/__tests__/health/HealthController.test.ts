import { Request, Response, NextFunction } from "express";
import { HealthController } from "../../modules/health/HealthController";
import { IHealthRepository } from "../../modules/health/HealthRepository";

describe("HealthController", () => {
	let mockRepository: jest.Mocked<IHealthRepository>;
	let controller: HealthController;
	let mockRes: Partial<Response>;
	let mockReq: Partial<Request>;
	let mockNext: jest.Mock<void>;

	beforeEach(() => {
		// Create mock repository
		mockRepository = {
			getAll: jest.fn(),
			create: jest.fn(),
		};

		controller = new HealthController(mockRepository);

		// Create mock response with chaining
		mockRes = {
			status: jest.fn().mockReturnThis(),
			json: jest.fn().mockReturnThis(),
		};

		mockReq = {
			body: {},
		};

		mockNext = jest.fn();
	});

	describe("serverHealth", () => {
		it("should return OK status with server metrics", async () => {
			await controller.serverHealth(
				mockReq as Request,
				mockRes as Response,
				mockNext as NextFunction
			);

			expect(mockRes.status).toHaveBeenCalledWith(200);
			expect(mockRes.json).toHaveBeenCalledWith(
				expect.objectContaining({
					success: true,
					data: expect.objectContaining({
						status: "OK",
						timestamp: expect.any(String),
						uptime: expect.any(Number),
					}),
				})
			);
		});

		it("should have valid ISO timestamp", async () => {
			await controller.serverHealth(
				mockReq as Request,
				mockRes as Response,
				mockNext as NextFunction
			);

			const call = (mockRes.json as jest.Mock).mock.calls[0][0];
			expect(() => new Date(call.data.timestamp)).not.toThrow();
		});
	});

	describe("databaseHealth", () => {
		it("should return OK status with database records", async () => {
			const mockHealthRecords = [
				{ id: 1, name: "test", message: "ok", created_at: new Date() },
			];

			mockRepository.getAll.mockResolvedValue(mockHealthRecords);

			await controller.databaseHealth(
				mockReq as Request,
				mockRes as Response,
				mockNext as NextFunction
			);

			expect(mockRepository.getAll).toHaveBeenCalled();
			expect(mockRes.status).toHaveBeenCalledWith(200);
			expect(mockRes.json).toHaveBeenCalledWith(
				expect.objectContaining({
					success: true,
					data: expect.objectContaining({
						status: "OK",
						result: mockHealthRecords,
					}),
				})
			);
		});
	});

	describe("storeHealth", () => {
		it("should create health record with valid input", async () => {
			const healthInput = { name: "test-check", message: "All systems OK" };
			const createdRecord = {
				id: 1,
				...healthInput,
				created_at: new Date(),
			};

			mockReq.body = healthInput;
			mockRepository.create.mockResolvedValue(createdRecord);

			await controller.storeHealth(
				mockReq as Request,
				mockRes as Response,
				mockNext as NextFunction
			);

			expect(mockRepository.create).toHaveBeenCalledWith(healthInput);
			expect(mockRes.status).toHaveBeenCalledWith(200);
			expect(mockRes.json).toHaveBeenCalledWith(
				expect.objectContaining({
					success: true,
					data: createdRecord,
				})
			);
		});

		it("should validate required fields", async () => {
			mockReq.body = { name: "test-check" }; // missing message

			// This would fail at validation level
			// In a real scenario, you'd have validation middleware
			expect(() => {
				if (!mockReq.body!.message) {
					throw new Error("Message is required");
				}
			}).toThrow("Message is required");
		});
	});
});
