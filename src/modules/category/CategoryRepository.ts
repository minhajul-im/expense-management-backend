import { and, eq, sql } from "drizzle-orm";
import { drizzleDb } from "../../config/Database";
import { CategorySchemaType, categories } from "../../schema/drizzle/category.table";
import { UpdateCategoryInput } from "./category.validator";

export interface ICategoryRepository {
	getAll(orgId: number): Promise<any | null>;
	create(input: CategorySchemaType): Promise<any | null>;
	update(orgId: number, id: number, input: UpdateCategoryInput): Promise<any | null>;
	findById(orgId: number, id: number): Promise<any | null>;
	findByName(orgId: number, name: string): Promise<any | null>;
	delete(id: number, orgId: number): Promise<any | null>;
}

export class CategoryRepository implements ICategoryRepository {
	public async getAll(orgId: number) {
		return await drizzleDb
			.select()
			.from(categories)
			.where(eq(categories.organization_id, orgId));
	}

	public async create(input: CategorySchemaType) {
		const result = await drizzleDb.insert(categories).values(input).returning();
		return result[0];
	}

	public async update(orgId: number, id: number, input: any) {
		const result = await drizzleDb
			.update(categories)
			.set(input)
			.where(and(eq(categories.id, id), eq(categories.organization_id, orgId)))
			.returning();
		return result[0];
	}

	public async findById(orgId: number, id: number) {
		const result = await drizzleDb
			.select()
			.from(categories)
			.where(and(eq(categories.id, id), eq(categories.organization_id, orgId)))
			.limit(1);
		return result[0];
	}

	public async findByName(orgId: number, name: string) {
		const result = await drizzleDb
			.select()
			.from(categories)
			.where(
				and(
					eq(sql`lower(${categories.name})`, name.toLowerCase()),
					eq(categories.organization_id, orgId)
				)
			)
			.limit(1);
		return result[0];
	}
	public async delete(orgId: number, id: number) {
		const result = await drizzleDb
			.delete(categories)
			.where(and(eq(categories.id, id), eq(categories.organization_id, orgId)))
			.returning();
		return result[0];
	}
}
