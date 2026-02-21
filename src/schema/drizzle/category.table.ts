import { pgTable, serial, integer, varchar, boolean, timestamp } from "drizzle-orm/pg-core";
import { organizations } from "./organization.table";

export const categories = pgTable("categories", {
	id: serial("id").primaryKey(),
	name: varchar("name", { length: 100 }).notNull().unique(),
	image: varchar("image", { length: 255 }),
	isActive: boolean("is_active").default(true).notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
	organization_id: integer("organization_id")
		.notNull()
		.references(() => organizations.id, {
			onDelete: "cascade",
		}),
});

export type CategorySchemaType = typeof categories.$inferInsert;
