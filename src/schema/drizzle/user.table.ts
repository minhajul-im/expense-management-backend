import { pgTable, serial, timestamp, boolean, pgEnum, varchar } from "drizzle-orm/pg-core";
import { USER_ROLE } from "../../modules/user/user.validator";

export const ENUM_ROLE = pgEnum("role", [USER_ROLE.ADMIN, USER_ROLE.MANAGER, USER_ROLE.USER]);

export const users = pgTable("users", {
	id: serial("id").primaryKey(),
	full_name: varchar("full_name", { length: 100 }).notNull(),
	email: varchar("email", { length: 100 }).notNull().unique(),
	password: varchar("password", { length: 100 }).notNull(),
	is_active: boolean("is_active").default(true).notNull(),
	roles: ENUM_ROLE("roles").array().notNull().default([]),
	image: varchar("image", { length: 255 }),
	created_at: timestamp("created_at").defaultNow().notNull(),
	updated_at: timestamp("updated_at").defaultNow().notNull(),
});

export type UserSchemeType = typeof users.$inferInsert;
