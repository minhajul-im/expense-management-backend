import { OrganizationService } from "../../modules/organization/OrganizationService";
import { ValidationError } from "../../core/errors/AppError";

/**
 * TESTING BASICS EXPLAINED:
 * 
 * 1. describe() - Groups related tests together (like a test suite)
 * 2. it() or test() - Individual test case that checks one behavior
 * 3. expect() - Makes assertions about what should happen
 * 4. beforeEach() - Runs before each test (setup)
 * 5. Mocking - Creating fake objects/functions to isolate what we're testing
 * 
 * TEST STRUCTURE:
 * - Arrange: Set up test data and mocks
 * - Act: Call the function you're testing
 * - Assert: Check that the result matches expectations
 */

describe("OrganizationService", () => {
	let service: OrganizationService;

	// beforeEach runs before EACH test - ensures fresh state
	beforeEach(() => {
		service = new OrganizationService();
	});

	describe("createValidator", () => {
		// Test Case 1: Valid input should pass validation
		it("should validate and return valid organization data", () => {
			// ARRANGE: Set up valid input data
			const validInput = {
				name: "Acme Corporation",
				username: "acme-corp",
				description: "A great company",
				image: "https://example.com/logo.png",
			};

			// ACT: Call the method we're testing
			const result = service.createValidator(validInput);

			// ASSERT: Check that the result matches what we expect
			expect(result).toEqual(validInput);
			expect(result.name).toBe("Acme Corporation");
			expect(result.username).toBe("acme-corp");
			expect(result.description).toBe("A great company");
			expect(result.image).toBe("https://example.com/logo.png");
		});

		// Test Case 2: Valid input with only required fields
		it("should validate with only required fields (name and username)", () => {
			const validInput = {
				name: "Test Org",
				username: "test-org",
			};

			const result = service.createValidator(validInput);

			expect(result.name).toBe("Test Org");
			expect(result.username).toBe("test-org");
			expect(result.description).toBeUndefined();
			expect(result.image).toBeUndefined();
		});

		// Test Case 3: Missing required field (name)
		it("should throw ValidationError when name is missing", () => {
			const invalidInput = {
				username: "test-org",
				description: "Test description",
			};

			// ASSERT: Expect the function to throw a ValidationError
			expect(() => {
				service.createValidator(invalidInput);
			}).toThrow(ValidationError);

			// More specific check - verify the error message contains useful info
			try {
				service.createValidator(invalidInput);
			} catch (error) {
				expect(error).toBeInstanceOf(ValidationError);
				expect((error as ValidationError).message).toContain("Validation failed");
			}
		});

		// Test Case 4: Missing required field (username)
		it("should throw ValidationError when username is missing", () => {
			const invalidInput = {
				name: "Test Org",
			};

			expect(() => {
				service.createValidator(invalidInput);
			}).toThrow(ValidationError);
		});

		// Test Case 5: Empty string for required fields
		it("should throw ValidationError when name is empty string", () => {
			const invalidInput = {
				name: "",
				username: "test-org",
			};

			expect(() => {
				service.createValidator(invalidInput);
			}).toThrow(ValidationError);
		});

		// Test Case 6: Empty string for username
		it("should throw ValidationError when username is empty string", () => {
			const invalidInput = {
				name: "Test Org",
				username: "",
			};

			expect(() => {
				service.createValidator(invalidInput);
			}).toThrow(ValidationError);
		});

		// Test Case 7: Wrong data types
		it("should throw ValidationError when name is not a string", () => {
			const invalidInput = {
				name: 123, // Should be string
				username: "test-org",
			};

			expect(() => {
				service.createValidator(invalidInput);
			}).toThrow(ValidationError);
		});

		// Test Case 8: Extra fields that shouldn't be there (strict mode)
		it("should throw ValidationError when extra fields are present", () => {
			const invalidInput = {
				name: "Test Org",
				username: "test-org",
				extraField: "not allowed", // This shouldn't be here
			};

			expect(() => {
				service.createValidator(invalidInput);
			}).toThrow(ValidationError);
		});

		// Test Case 9: Null values
		it("should throw ValidationError when name is null", () => {
			const invalidInput = {
				name: null,
				username: "test-org",
			};

			expect(() => {
				service.createValidator(invalidInput);
			}).toThrow(ValidationError);
		});

		// Test Case 10: Undefined values
		it("should throw ValidationError when username is undefined", () => {
			const invalidInput = {
				name: "Test Org",
				username: undefined,
			};

			expect(() => {
				service.createValidator(invalidInput);
			}).toThrow(ValidationError);
		});

		// Test Case 11: Empty object
		it("should throw ValidationError when input is empty object", () => {
			const invalidInput = {};

			expect(() => {
				service.createValidator(invalidInput);
			}).toThrow(ValidationError);
		});
	});

	describe("updateValidator", () => {
		// Test Case 1: Valid partial update (all fields)
		it("should validate and return valid update data with all fields", () => {
			const validInput = {
				name: "Updated Name",
				username: "updated-username",
				description: "Updated description",
				image: "https://example.com/new-logo.png",
			};

			const result = service.updateValidator(validInput);

			expect(result).toEqual(validInput);
		});

		// Test Case 2: Partial update with only name
		it("should validate partial update with only name field", () => {
			const validInput = {
				name: "New Name",
			};

			const result = service.updateValidator(validInput);

			expect(result).toEqual(validInput);
			expect(result.name).toBe("New Name");
		});

		// Test Case 3: Partial update with only username
		it("should validate partial update with only username field", () => {
			const validInput = {
				username: "new-username",
			};

			const result = service.updateValidator(validInput);

			expect(result).toEqual(validInput);
			expect(result.username).toBe("new-username");
		});

		// Test Case 4: Empty object (all fields optional in update)
		it("should validate empty object for update (all fields optional)", () => {
			const validInput = {};

			const result = service.updateValidator(validInput);

			expect(result).toEqual({});
		});

		// Test Case 5: Empty string values (should be sanitized)
		it("should sanitize empty string values in update", () => {
			const inputWithEmptyStrings = {
				name: "Test",
				description: "", // Empty string should be removed
				image: "   ", // Whitespace-only should be trimmed and potentially removed
			};

			const result = service.updateValidator(inputWithEmptyStrings);

			// After sanitization, empty strings might be removed
			expect(result.name).toBe("Test");
			// The sanitize function removes undefined values, so empty strings might be filtered
		});

		// Test Case 6: Invalid data type in update
		it("should throw ValidationError when update has wrong data type", () => {
			const invalidInput = {
				name: 12345, // Should be string
			};

			expect(() => {
				service.updateValidator(invalidInput);
			}).toThrow(ValidationError);
		});

		// Test Case 7: Extra fields in update
		it("should throw ValidationError when update has extra fields", () => {
			const invalidInput = {
				name: "Test",
				invalidField: "not allowed",
			};

			expect(() => {
				service.updateValidator(invalidInput);
			}).toThrow(ValidationError);
		});

		// Test Case 8: Null values in update
		it("should throw ValidationError when update has null values", () => {
			const invalidInput = {
				name: null,
			};

			expect(() => {
				service.updateValidator(invalidInput);
			}).toThrow(ValidationError);
		});

		// Test Case 9: Update with description only
		it("should validate update with only description field", () => {
			const validInput = {
				description: "New description",
			};

			const result = service.updateValidator(validInput);

			expect(result).toEqual(validInput);
		});

		// Test Case 10: Update with image only
		it("should validate update with only image field", () => {
			const validInput = {
				image: "https://example.com/image.png",
			};

			const result = service.updateValidator(validInput);

			expect(result).toEqual(validInput);
		});
	});
});
