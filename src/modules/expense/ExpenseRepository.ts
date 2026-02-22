import { and, eq } from "drizzle-orm";
import { drizzleDb } from "../../config/Database";
import { expenses, ExpenseSchemaType } from "../../schema/drizzle/expense.table";
import { UpdateExpenseInput } from "./expense.validator";

export interface IExpenseRepository {
	getAll(orgId: number): Promise<any | null>;
	create(input: ExpenseSchemaType): Promise<any | null>;
	update(orgId: number, id: number, input: UpdateExpenseInput): Promise<any | null>;
	findById(orgId: number, id: number): Promise<any | null>;
	delete(id: number, orgId: number): Promise<any | null>;
}

export class ExpenseRepository implements IExpenseRepository {
	public async getAll(orgId: number) {
		return await drizzleDb.select().from(expenses).where(eq(expenses.organization_id, orgId));
	}

	public async create(input: ExpenseSchemaType) {
		const result = await drizzleDb.insert(expenses).values(input).returning();
		return result[0];
	}

	public async update(orgId: number, id: number, input: any) {
		const result = await drizzleDb
			.update(expenses)
			.set(input)
			.where(and(eq(expenses.id, id), eq(expenses.organization_id, orgId)))
			.returning();
		return result[0];
	}

	public async findById(orgId: number, id: number) {
		const result = await drizzleDb
			.select()
			.from(expenses)
			.where(and(eq(expenses.id, id), eq(expenses.organization_id, orgId)))
			.limit(1);
		return result[0];
	}

	public async delete(orgId: number, id: number) {
		const result = await drizzleDb
			.delete(expenses)
			.where(and(eq(expenses.id, id), eq(expenses.organization_id, orgId)))
			.returning();
		return result[0];
	}
}
