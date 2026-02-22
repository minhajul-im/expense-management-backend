import {
	pgTable,
	serial,
	integer,
	varchar,
	boolean,
	timestamp,
	decimal,
	text,
} from "drizzle-orm/pg-core";
import { organizations } from "./organization.table";
import { categories } from "./category.table";

export const expenses = pgTable("expenses", {
	id: serial("id").primaryKey(),
	amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
	description: varchar("description", { length: 255 }),
	user_id: integer("user_id"),
	is_over_limit: boolean("is_over_limit").default(false).notNull(),
	approval_note: text("approval_note"),
	expense_date: timestamp("expense_date").notNull(),
	created_at: timestamp("created_at").defaultNow().notNull(),
	updated_at: timestamp("updated_at").defaultNow().notNull(),
	category_id: integer("category_id")
		.notNull()
		.references(() => categories.id, {
			onDelete: "cascade",
		}),
	organization_id: integer("organization_id")
		.notNull()
		.references(() => organizations.id, {
			onDelete: "cascade",
		}),
});

export type ExpenseSchemaType = typeof expenses.$inferInsert;
