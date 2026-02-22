import { and, eq, Update } from "drizzle-orm";
import { drizzleDb } from "../../config/Database";
import { budgets, BudgetSchemaType } from "../../schema/drizzle/budget.table";

export interface IBudgetRepository {
	findAll(orgId: number, query?: any): Promise<any>;
	findById(orgId: number, id: number): Promise<any>;
	findByCategoryId(orgId: number, categoryId: number): Promise<any>;
	create(input: BudgetSchemaType): Promise<any>;
	update(orgId: number, id: number, input: any): Promise<any>;
	delete(orgId: number, id: number): Promise<any>;
}

export class BudgetRepository implements IBudgetRepository {
	public async findAll(orgId: number): Promise<any> {
		const result = await drizzleDb
			.select()
			.from(budgets)
			.where(eq(budgets.organization_id, orgId));
		return result;
	}

	public async findById(orgId: number, id: number): Promise<any> {
		const result = await drizzleDb
			.select()
			.from(budgets)
			.where(and(eq(budgets.id, id), eq(budgets.organization_id, orgId)))
			.limit(1);
		return result[0];
	}

	public async findByCategoryId(orgId: number, categoryId: number): Promise<any> {
		const result = await drizzleDb
			.select()
			.from(budgets)
			.where(and(eq(budgets.category_id, categoryId), eq(budgets.organization_id, orgId)))
			.limit(1);
		return result[0];
	}

	public async create(input: BudgetSchemaType): Promise<any> {
		const result = await drizzleDb.insert(budgets).values(input).returning();
		return result[0];
	}

	public async update(orgId: number, id: number, input: any): Promise<any> {
		const result = await drizzleDb
			.update(budgets)
			.set(input)
			.where(and(eq(budgets.id, id), eq(budgets.organization_id, orgId)))
			.returning();
		return result[0];
	}

	public async delete(orgId: number, id: number): Promise<any> {
		const result = await drizzleDb
			.delete(budgets)
			.where(and(eq(budgets.id, id), eq(budgets.organization_id, orgId)))
			.returning();
		return result[0];
	}
}
