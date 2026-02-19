import { DbClient } from "./config/Database";
import { AuthController } from "./modules/auth/AuthController";
import { AuthService } from "./modules/auth/AuthService";
import { UserRepository } from "./modules/auth/UserRepository";
import { createAuthRouter } from "./modules/auth/auth.routes";
import { HealthController } from "./modules/health/HealthController";
import { HealthRepository } from "./modules/health/HealthRepository";
import { createHealthRouter } from "./modules/health/health.routes";
import { CategoryController } from "./modules/category/CategoryController";
import { CategoryService } from "./modules/category/CategoryService";
import { CategoryRepository } from "./modules/category/CategoryRepository";
import { createCategoryRouter } from "./modules/category/category.routes";

export interface IContainer {
	authRouter: ReturnType<typeof createAuthRouter>;
	healthRouter: ReturnType<typeof createHealthRouter>;
	categoryRouter: ReturnType<typeof createCategoryRouter>;
}

export function createContainer(dbClient: DbClient): IContainer {
	const userRepository = new UserRepository(dbClient);
	const authService = new AuthService(userRepository);
	const authController = new AuthController(authService);
	const authRouter = createAuthRouter(authController);

	const healthRepository = new HealthRepository(dbClient);
	const healthController = new HealthController(healthRepository);
	const healthRouter = createHealthRouter(healthController);

	const categoryRepository = new CategoryRepository();
	const categoryService = new CategoryService(categoryRepository);
	const categoryController = new CategoryController(categoryService);
	const categoryRouter = createCategoryRouter(categoryController);

	return {
		authRouter,
		healthRouter,
		categoryRouter,
	};
}
