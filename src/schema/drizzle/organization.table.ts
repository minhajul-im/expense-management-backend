import { pgTable, serial, varchar, boolean, timestamp } from "drizzle-orm/pg-core";

export const organizations = pgTable("organizations", {
	id: serial("id").primaryKey(),
	name: varchar("name", { length: 100 }).notNull(),
	username: varchar("username", { length: 100 }).notNull().unique(),
	description: varchar("description", { length: 255 }),
	image: varchar("image", { length: 255 }),
	is_active: boolean("is_active").default(true).notNull(),
	created_at: timestamp("created_at").defaultNow().notNull(),
	updated_at: timestamp("updated_at").defaultNow().notNull(),
});

export type OrganizationSchemaInsertType = typeof organizations.$inferInsert;
