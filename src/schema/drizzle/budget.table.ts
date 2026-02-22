import { pgTable, serial, integer, timestamp, decimal, pgEnum } from "drizzle-orm/pg-core";
import { organizations } from "./organization.table";
import { categories } from "./category.table";

export const LIMIT_TYPE_ENUM = pgEnum("limit_type", ["normal", "soft", "hard"]);

export const budgets = pgTable("budgets", {
	id: serial("id").primaryKey(),
	amount: decimal("amount").notNull(),
	year: integer("year").notNull(),
	limit_type: LIMIT_TYPE_ENUM("limit_type").default("normal"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
	organization_id: integer("organization_id")
		.notNull()
		.references(() => organizations.id, {
			onDelete: "cascade",
		}),
	category_id: integer("category_id")
		.notNull()
		.unique()
		.references(() => categories.id, {
			onDelete: "cascade",
		}),
});
export type BudgetSchemaType = typeof budgets.$inferInsert;
