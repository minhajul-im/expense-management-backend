import { drizzleDb } from "../../config/Database";
import { categories } from "../../schema/drizzle/category.table";

export interface ICategoryRepository {
	getAll(): Promise<any | null>;
	create(input: CategoryInput): Promise<any | null>;
}

interface CategoryInput {
	name: string;
	isActive?: boolean;
}

export class CategoryRepository implements ICategoryRepository {
	async getAll(): Promise<any | null> {
		return await drizzleDb.select().from(categories);
	}

	async create(input: CategoryInput) {
		const result = await drizzleDb
			.insert(categories)
			.values({
				name: input.name,
				isActive: input.isActive ?? true,
			})
			.returning();
		return result[0];
	}
}
