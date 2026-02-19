# Unit Testing Guide for Expense Management System

## ✅ What We've Set Up

Your project now has a complete Jest testing setup configured with:

- **Jest** - Testing framework
- **ts-jest** - TypeScript support for Jest
- **Supertest** - HTTP testing library
- **@jest/globals** - Jest types

## 🚀 Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode (re-run on file changes)
npm run test:watch

# Run with coverage report
npm run test:cov
```

## 📁 Project Structure

Tests are centralized in the `src/__tests__/` folder, organized by module:

```
src/
├── __tests__/
│   ├── setup.ts
│   └── health/
│       ├── HealthController.test.ts   ✓
│       └── HealthRepository.test.ts   ✓
├── modules/
│   ├── health/
│   │   ├── HealthController.ts
│   │   ├── HealthRepository.ts
│   │   └── health.routes.ts
│   └── auth/
│       ├── AuthService.ts
│       └── UserRepository.ts
```

## 🎯 Best Practices

### 1. **Test Structure (AAA Pattern)**

```typescript
describe("ClassName", () => {
	let dependency: DependencyType;
	let service: ServiceType;

	beforeEach(() => {
		// Arrange - Set up mocks and dependencies
		dependency = jest.fn();
		service = new ServiceType(dependency);
	});

	describe("methodName", () => {
		it("should do something specific", async () => {
			// Act - Execute the function
			const result = await service.methodName(input);

			// Assert - Verify the result
			expect(result).toEqual(expectedResult);
		});
	});
});
```

### 2. **Mocking Dependencies**

```typescript
// Mock a repository/service
const mockRepository = {
	findById: jest.fn(),
	create: jest.fn(),
	delete: jest.fn(),
} as jest.Mocked<IUserRepository>;

// Mock return values
mockRepository.findById.mockResolvedValue(userData);
mockRepository.create.mockRejectedValue(new Error("DB Error"));
```

### 3. **Testing Async Code**

```typescript
it("should fetch user data", async () => {
	mockRepository.findById.mockResolvedValue(userData);

	const result = await service.getUser(1);

	expect(result).toEqual(userData);
	expect(mockRepository.findById).toHaveBeenCalledWith(1);
});
```

### 4. **Testing Error Handling**

```typescript
it("should throw error when user not found", async () => {
	mockRepository.findById.mockResolvedValue(null);

	await expect(service.getUser(999)).rejects.toThrow("User not found");
});
```

### 5. **Mock External Modules**

```typescript
jest.mock("bcryptjs");
jest.mock("jsonwebtoken");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

bcrypt.hash.mockResolvedValue("hashedPassword");
jwt.sign.mockReturnValue("token");
```

## 📝 Example Tests Included

### Health Module Tests ✅

**HealthRepository.test.ts** - Database operations

- ✓ Returning all records
- ✓ Handling null cases
- ✓ Creating records with correct parameters
- ✓ Error handling

**HealthController.test.ts** - HTTP endpoints

- ✓ Server health check with server metrics
- ✓ Database health check with repository data
- ✓ Storing health records with validation

**Status:** All 11 tests passing in `src/__tests__/health/`

Run health tests:

```bash
npm test -- src/__tests__/health
```

### Auth Module Tests

**AuthService.test.ts** - Business logic

- ✓ User registration with password hashing
- ✓ Preventing duplicate email registration
- ✓ User login with JWT generation
- ✓ Password validation
- ✓ Removing sensitive data from responses

## 🛠️ Common Matchers

```typescript
// Equality
expect(result).toBe(5);                    // Exact match (===)
expect(result).toEqual({ id: 1, name: "John" }); // Deep equality

// Truthiness
expect(value).toBeTruthy();
expect(value).toBeFalsy();
expect(value).toBeNull();
expect(value).toBeUndefined();

// Numbers
expect(count).toBeGreaterThan(5);
expect(count).toBeLessThan(10);
expect(count).toBeGreaterThanOrEqual(5);

// Strings
expect(message).toContain("success");
expect(email).toMatch(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

// Arrays
expect(items).toHaveLength(3);
expect(items).toContain(item);
expect(items).toEqual(expect.arrayContaining([item1, item2]));

// Objects
expect(obj).toHaveProperty("id");
expect(obj).toEqual(expect.objectContaining({ name: "John" }));

// Functions/Mocks
expect(mockFn).toHaveBeenCalled();
expect(mockFn).toHaveBeenCalledWith(arg1, arg2);
expect(mockFn).toHaveBeenCalledTimes(2);
expect(mockFn).toReturn(): // For sync functions

// Promises
await expect(promise).resolves.toEqual(value);
await expect(promise).rejects.toThrow("Error message");
```

## 🎨 Writing Tests for Different Component Types

### Testing Services (Business Logic)

```typescript
describe("AuthService", () => {
	let mockRepository: jest.Mocked<IUserRepository>;
	let service: AuthService;

	beforeEach(() => {
		mockRepository = {
			findByEmail: jest.fn(),
			create: jest.fn(),
		};
		service = new AuthService(mockRepository);
	});

	it("should register new user with hashed password", async () => {
		const input = { email: "user@test.com", password: "123456", name: "John" };
		const hashedPassword = "hashed_123456";

		mockRepository.findByEmail.mockResolvedValue(null);
		jest.spyOn(bcrypt, "hash").mockResolvedValue(hashedPassword);

		await service.register(input);

		expect(mockRepository.create).toHaveBeenCalledWith(
			expect.objectContaining({
				password: hashedPassword,
			})
		);
	});
});
```

### Testing Controllers (HTTP Handlers)

```typescript
describe("UserController", () => {
	let controller: UserController;
	let mockService: jest.Mocked<IUserService>;
	let mockRes: Partial<Response>;
	let mockReq: Partial<Request>;

	beforeEach(() => {
		mockService = { getUser: jest.fn() };
		controller = new UserController(mockService);

		mockRes = {
			status: jest.fn().mockReturnThis(),
			json: jest.fn().mockReturnThis(),
		};
		mockReq = { params: { id: "1" } };
	});

	it("should return user data on success", async () => {
		const userData = { id: 1, name: "John", email: "john@test.com" };
		mockService.getUser.mockResolvedValue(userData);

		await controller.getUser(mockReq as Request, mockRes as Response, jest.fn());

		expect(mockRes.status).toHaveBeenCalledWith(200);
		expect(mockRes.json).toHaveBeenCalledWith(expect.objectContaining({ data: userData }));
	});
});
```

### Testing Repositories (Database Layer)

```typescript
describe("UserRepository", () => {
	let mockDb: jest.Mocked<Partial<DbClient>>;
	let repository: UserRepository;

	beforeEach(() => {
		mockDb = { query: jest.fn() };
		repository = new UserRepository(mockDb as DbClient);
	});

	it("should retrieve user by email", async () => {
		const user = { id: 1, email: "user@test.com", name: "John" };
		(mockDb.query as jest.Mock).mockResolvedValue({ rows: [user] });

		const result = await repository.findByEmail("user@test.com");

		expect(mockDb.query).toHaveBeenCalledWith(expect.stringContaining("WHERE email"), [
			"user@test.com",
		]);
		expect(result).toEqual(user);
	});
});
```

## 🔍 Debugging Tests

```bash
# Run specific test file
npm test HealthController.test.ts

# Run specific test suite
npm test -- -t "HealthController"

# Run specific test
npm test -- -t "should return OK status"

# Debug mode (very detailed output)
npm test -- --verbose

# Update snapshots (if using snapshot testing)
npm test -- -u
```

## 📊 Coverage Report

```bash
npm run test:cov
```

This generates a coverage report showing:

- **Statements** - How much code was executed
- **Branches** - How many if/else branches were tested
- **Functions** - How many functions were called
- **Lines** - How many lines were executed

Aim for 80%+ coverage in business logic, 100% in critical paths.

## 🚫 Common Mistakes

❌ **Don't:**

```typescript
// Testing implementation details
expect(mockFn).toHaveBeenCalled();
// When you should test the result

// Not waiting for async
it("should fetch data", () => {
	service.fetchData(); // Missing 'await'
	expect(result).toEqual(data);
});

// Not clearing mocks
// This causes state leakage between tests
mockFn.mockResolvedValue(value1);
// Next test still has this mock!
```

✅ **Do:**

```typescript
// Test behavior and outcomes
expect(result).toEqual(expectedValue);

// Always await async operations
it("should fetch data", async () => {
	const result = await service.fetchData();
	expect(result).toEqual(data);
});

// Clear before each test
beforeEach(() => {
	jest.clearAllMocks();
});
```

## 📚 Next Steps

1. **Write tests for all Auth module controllers** - Follow the Health module patterns
2. **Add integration tests** - Test multiple components together
3. **Test error cases** - Unauthorized, validation errors, etc.
4. **Add E2E tests** - Test full API flows with Supertest

## 🎓 Resources

- [Jest Documentation](https://jestjs.io/)
- [Jest Matchers Reference](https://jestjs.io/docs/expect)
- [Testing Best Practices](https://jestjs.io/docs/tutorial-react#snapshot-testing)

---

**Your tests are now running! Run `npm test` to verify all tests pass.** ✨
