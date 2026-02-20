import { pgTable, serial, varchar, boolean, timestamp } from "drizzle-orm/pg-core";

export const organizations = pgTable("organizations", {
	id: serial("id").primaryKey(),
	name: varchar("name", { length: 100 }).notNull(),
	username: varchar("username", { length: 100 }).notNull().unique(),
	description: varchar("description", { length: 255 }),
	image: varchar("image", { length: 255 }),
	isActive: boolean("is_active").default(true).notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export type OrganizationSchemaInsertType = typeof organizations.$inferInsert;
