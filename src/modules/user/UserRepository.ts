import { eq } from "drizzle-orm";
import { drizzleDb } from "../../config/Database";
import { CreateUserInput, UpdateUserInput } from "./user.validator";
import { users } from "../../schema/drizzle/user.table";

export interface PaginatedResult<T> {
	items: T[];
	totalItems: number;
}

export interface IUserRepository {
	getAll(): Promise<PaginatedResult<any>>;
	findByEmail(email: string): Promise<any | null>;
	findById(id: number): Promise<any | null>;
	create(input: CreateUserInput): Promise<any | null>;
	update(input: UpdateUserInput, id: number): Promise<any | null>;
	delete(id: number): Promise<any | null>;
}

export class UserRepository implements IUserRepository {
	public async getAll(): Promise<any> {
		const result = await drizzleDb.select().from(users);
		return result;
	}
	public async findByEmail(email: string): Promise<any | null> {
		const result = await drizzleDb.select().from(users).where(eq(users.email, email)).limit(1);
		return result[0];
	}
	public async findById(id: number): Promise<any | null> {
		const result = await drizzleDb.select().from(users).where(eq(users.id, id)).limit(1);
		return result[0];
	}
	public async create(input: CreateUserInput): Promise<any | null> {
		const result = await drizzleDb.insert(users).values(input).returning();
		return result[0];
	}
	public async update(input: UpdateUserInput, id: number): Promise<any | null> {
		const result = await drizzleDb.update(users).set(input).where(eq(users.id, id)).returning();
		return result[0];
	}
	public async delete(id: number): Promise<any | null> {
		const result = await drizzleDb.delete(users).where(eq(users.id, id)).returning();
		return result[0];
	}
}
