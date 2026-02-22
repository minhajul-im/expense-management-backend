import { relations } from "drizzle-orm";
import { organizations } from "./organization.table";
import { categories } from "./category.table";
import { budgets } from "./budget.table";

export const organizationsRelations = relations(organizations, ({ many }) => ({
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
}));
