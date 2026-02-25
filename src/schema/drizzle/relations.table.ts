import { relations } from "drizzle-orm";
import { organizations } from "./organization.table";
import { categories } from "./category.table";
import { budgets } from "./budget.table";
import { expenses } from "./expense.table";
import { users } from "./user.table";

export const usersRelations = relations(users, ({ many }) => ({
	organizations: many(organizations),
	budgets: many(budgets),
}));

export const organizationsRelations = relations(organizations, ({ many, one }) => ({
	user: one(users, {
		fields: [organizations.user_id],
		references: [users.id],
	}),
	categories: many(categories),
	budgets: many(budgets),
}));

export const categoriesRelations = relations(categories, ({ one }) => ({
	organization: one(organizations, {
		fields: [categories.organization_id],
		references: [organizations.id],
	}),
	budget: one(budgets),
}));

export const budgetsRelations = relations(budgets, ({ one }) => ({
	organization: one(organizations, {
		fields: [budgets.organization_id],
		references: [organizations.id],
	}),
	category: one(categories, {
		fields: [budgets.category_id],
		references: [categories.id],
	}),
	user: one(users, {
		fields: [budgets.user_id],
		references: [users.id],
	}),
}));

export const expensesRelations = relations(expenses, ({ one }) => ({
	organization: one(organizations, {
		fields: [expenses.organization_id],
		references: [organizations.id],
	}),
	category: one(categories, {
		fields: [expenses.category_id],
		references: [categories.id],
	}),
}));
