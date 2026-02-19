import { pgTable, uuid, varchar, boolean, timestamp, unique } from "drizzle-orm/pg-core";

export const categories = pgTable("categories", {
	id: uuid("id").primaryKey().defaultRandom(),
	name: varchar("name", { length: 100 }).notNull(),
	isActive: boolean("is_active").default(true).notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export type CategorySchemaType = typeof categories.$inferSelect;
