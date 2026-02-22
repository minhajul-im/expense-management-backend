import { pgTable, serial, integer, varchar, boolean, timestamp } from "drizzle-orm/pg-core";
import { organizations } from "./organization.table";

export const categories = pgTable("categories", {
	id: serial("id").primaryKey(),
	name: varchar("name", { length: 100 }).notNull().unique(),
	image: varchar("image", { length: 255 }),
	is_active: boolean("is_active").default(true).notNull(),
	created_at: timestamp("created_at").defaultNow().notNull(),
	updated_at: timestamp("updated_at").defaultNow().notNull(),
	organization_id: integer("organization_id")
		.notNull()
		.references(() => organizations.id, {
			onDelete: "cascade",
		}),
});

export type CategorySchemaType = typeof categories.$inferInsert;
