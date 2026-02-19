import { HealthRepository } from "../../modules/health/HealthRepository";
import { DbClient } from "../../config/Database";

describe("HealthRepository", () => {
	let mockDb: jest.Mocked<Partial<DbClient>>;
	let repository: HealthRepository;

	beforeEach(() => {
		mockDb = {
			query: jest.fn(),
		};

		repository = new HealthRepository(mockDb as DbClient);
	});

	describe("getAll", () => {
		it("should return all health records from database", async () => {
			const mockRecords = [
				{ id: 1, name: "check1", message: "ok", created_at: new Date() },
				{ id: 2, name: "check2", message: "ok", created_at: new Date() },
			];

			(mockDb.query as jest.Mock).mockResolvedValue({
				rows: mockRecords,
			});

			const result = await repository.getAll();

			expect(mockDb.query).toHaveBeenCalledWith("SELECT * FROM healths");
			expect(result).toEqual(mockRecords);
		});

		it("should return null when no records exist", async () => {
			(mockDb.query as jest.Mock).mockResolvedValue({
				rows: undefined,
			});

			const result = await repository.getAll();

			expect(result).toBeNull();
		});

		it("should throw error on database failure", async () => {
			const dbError = new Error("Connection failed");
			(mockDb.query as jest.Mock).mockRejectedValue(dbError);

			await expect(repository.getAll()).rejects.toThrow("Connection failed");
		});
	});

	describe("create", () => {
		it("should create a new health record and return it", async () => {
			const input = { name: "test-health", message: "System check" };
			const createdRecord = {
				id: 1,
				...input,
				created_at: new Date(),
			};

			(mockDb.query as jest.Mock).mockResolvedValue({
				rows: [createdRecord],
			});

			const result = await repository.create(input);

			expect(mockDb.query).toHaveBeenCalledWith(
				"INSERT INTO healths (name, message) VALUES ($1, $2) RETURNING id, name, message, created_at",
				[input.name, input.message]
			);
			expect(result).toEqual(createdRecord);
		});

		it("should pass parameters correctly to database query", async () => {
			const input = { name: "db-check", message: "Database health" };
			(mockDb.query as jest.Mock).mockResolvedValue({ rows: [{}] });

			await repository.create(input);

			const calls = (mockDb.query as jest.Mock).mock.calls;
			expect(calls[0]?.[1]).toEqual(["db-check", "Database health"]);
		});

		it("should throw error on database failure", async () => {
			const input = { name: "test", message: "test" };
			const dbError = new Error("Insert failed");
			(mockDb.query as jest.Mock).mockRejectedValue(dbError);

			await expect(repository.create(input)).rejects.toThrow("Insert failed");
		});
	});
});
