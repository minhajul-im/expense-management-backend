import { relations } from "drizzle-orm";
import { organizations } from "./organization.table";
import { categories } from "./category.table";

export const organizationsRelations = relations(organizations, ({ many }) => ({
	categories: many(categories),
}));

export const categoriesRelations = relations(categories, ({ one }) => ({
	organization: one(organizations, {
		fields: [categories.organization_id],
		references: [organizations.id],
	}),
}));
