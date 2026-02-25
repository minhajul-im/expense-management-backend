import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import rateLimit from "express-rate-limit";
import express, { Express } from "express";

import { env } from "./config/env";
import { database, dbClient } from "./config/Database";
import { errorHandler } from "./core/middleware/errorHandler";
import { createContainer } from "./container";
import { NotFoundError } from "./core/errors/AppError";
import { setupDatabaseSchema } from "./schema";

const app: Express = express();

// Middleware setup
app.use(helmet());
app.use(cookieParser());
app.use(express.json({ limit: "100kb" }));
app.use(express.urlencoded({ extended: true, limit: "100kb" }));

// CORS configuration
app.use(
	cors({
		origin: env.CORS_ORIGIN,
		credentials: true,
	})
);

// Rate limiting
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000,
	max: 100,
	message: {
		success: false,
		error: {
			code: "RATE_LIMITED",
			message: "Too many requests, please try again later",
		},
	},
});

const container = createContainer(dbClient);

app.use("/api", limiter);
app.use("/health", container.healthRouter);
app.use("/api/v1/auth", container.authRouter);
app.use("/api/v1/users", container.userRouter);
app.use("/api/v1/organizations", container.organizationRouter);
app.use("/api/v1/categories", container.categoryRouter);
app.use("/api/v1/budgets", container.budgetRouter);
app.use("/api/v1/expenses", container.expenseRouter);

app.use("*", (_req, _res, next) => {
	next(new NotFoundError("Route is not found!"));
});

app.use(errorHandler);

const server = app.listen(env.PORT, () => {
	console.log(`Server running on port ${env.PORT}`);

	(async function () {
		try {
			await setupDatabaseSchema();
			console.log("✅ Schema update successful");
		} catch (error) {
			console.error("❌ Schema update failed:", error);
		}
	})();
});

const gracefulShutdown = async () => {
	console.log("Shutting down gracefully...");
	server.close(async () => {
		await database.close();
		console.log("Database connection closed");
		process.exit(0);
	});
};

process.on("SIGTERM", gracefulShutdown);
process.on("SIGINT", gracefulShutdown);

export default app;
