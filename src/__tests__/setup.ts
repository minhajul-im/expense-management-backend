import "@jest/globals";

// This file runs before all tests
// Setup common test configurations here

beforeAll(() => {
	// Set environment variables for testing
	process.env.JWT_SECRET = "test-secret-key";
	process.env.JWT_EXPIRES_IN = "7d";
	process.env.DATABASE_URL = "postgresql://test:test@localhost/test_db";
});

export {};
