import { pgTable, serial, varchar, boolean, timestamp, integer } from "drizzle-orm/pg-core";
import { users } from "./user.table";

export const organizations = pgTable("organizations", {
	id: serial("id").primaryKey(),
	name: varchar("name", { length: 100 }).notNull(),
	username: varchar("username", { length: 100 }).notNull().unique(),
	description: varchar("description", { length: 255 }),
	image: varchar("image", { length: 255 }),
	is_active: boolean("is_active").default(true).notNull(),
	created_at: timestamp("created_at").defaultNow().notNull(),
	updated_at: timestamp("updated_at").defaultNow().notNull(),
	user_id: integer("user_id")
		.notNull()
		.references(() => users.id, { onDelete: "cascade" }),
});

export type OrganizationSchemaInsertType = typeof organizations.$inferInsert;
