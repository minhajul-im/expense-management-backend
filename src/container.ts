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
import { OrganizationRepository } from "./modules/organization/OrganizationRepository";
import { OrganizationService } from "./modules/organization/OrganizationService";
import { OrganizationController } from "./modules/organization/OrganizationController";
import { createOrganizationRouter } from "./modules/organization/organization.routes";
import { BudgetRepository } from "./modules/budget/BudgetRepository";
import { BudgetService } from "./modules/budget/BudgetService";
import { BudgetController } from "./modules/budget/BudgetController";
import { createBudgetRouter } from "./modules/budget/budget.routes";
import { ExpenseRepository } from "./modules/expense/ExpenseRepository";
import { ExpenseService } from "./modules/expense/ExpenseService";
import { ExpenseController } from "./modules/expense/ExpenseController";
import { createExpenseRouter } from "./modules/expense/expense.routes";

export interface IContainer {
	healthRouter: ReturnType<typeof createHealthRouter>;
	authRouter: ReturnType<typeof createAuthRouter>;
	categoryRouter: ReturnType<typeof createCategoryRouter>;
	organizationRouter: ReturnType<typeof createOrganizationRouter>;
	budgetRouter: ReturnType<typeof createBudgetRouter>;
	expenseRouter: ReturnType<typeof createExpenseRouter>;
}

export function createContainer(dbClient: DbClient): IContainer {
	// HEALTH CLASS
	const healthRepository = new HealthRepository(dbClient);
	const healthController = new HealthController(healthRepository);
	const healthRouter = createHealthRouter(healthController);

	// AUTH CLASS
	const userRepository = new UserRepository(dbClient);
	const authService = new AuthService(userRepository);
	const authController = new AuthController(authService);
	const authRouter = createAuthRouter(authController);

	// ORGANIZATION CLASS
	const organizationRepository = new OrganizationRepository();
	const organizationService = new OrganizationService();
	const organizationController = new OrganizationController(
		organizationService,
		organizationRepository
	);
	const organizationRouter = createOrganizationRouter(organizationController);

	// CATEGORY CLASS
	const categoryRepository = new CategoryRepository();
	const categoryService = new CategoryService();
	const categoryController = new CategoryController(categoryService, categoryRepository);
	const categoryRouter = createCategoryRouter(categoryController, organizationRepository);

	// BUDGET CLASS
	const budgetRepository = new BudgetRepository();
	const budgetService = new BudgetService();
	const budgetController = new BudgetController(
		budgetService,
		budgetRepository,
		categoryRepository
	);
	const budgetRouter = createBudgetRouter(budgetController, organizationRepository);

	// EXPENSE CLASS
	const expenseRepository = new ExpenseRepository();
	const expenseService = new ExpenseService();
	const expenseController = new ExpenseController(
		expenseService,
		expenseRepository,
		categoryRepository
	);
	const expenseRouter = createExpenseRouter(expenseController, organizationRepository);

	return {
		authRouter,
		healthRouter,
		categoryRouter,
		organizationRouter,
		budgetRouter,
		expenseRouter,
	};
}
