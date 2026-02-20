import {
	organizations,
	OrganizationSchemaInsertType,
} from "../../schema/drizzle/organization.table";
import { eq, ilike, or } from "drizzle-orm";
import { drizzleDb } from "../../config/Database";

export interface IOrganizationRepository {
	findById(id: number): Promise<any>;
	findByUsername(username: string): Promise<any>;
	findAll(query?: any): Promise<any>;
	create(input: any): Promise<any>;
	update(id: number, input: any): Promise<any>;
	delete(id: number): Promise<any>;
}

export class OrganizationRepository implements IOrganizationRepository {
	async create(input: OrganizationSchemaInsertType): Promise<any> {
		const result = await drizzleDb.insert(organizations).values(input).returning();
		return result[0];
	}

	async findById(id: number): Promise<any> {
		const result = await drizzleDb
			.select()
			.from(organizations)
			.where(eq(organizations.id, id))
			.limit(1);
		return result[0];
	}

	async findByUsername(username: string): Promise<any> {
		const result = await drizzleDb
			.select()
			.from(organizations)
			.where(eq(organizations.username, username))
			.limit(1);
		return result[0];
	}

	async findAll(query?: any): Promise<any> {
		let queryBuilder = drizzleDb.select().from(organizations);
		if (query?.search) {
			queryBuilder.where(
				or(
					ilike(organizations.name, `%${query.search}%`),
					ilike(organizations.username, `%${query.search}%`)
				)
			);
		}
		const result = await queryBuilder;
		return result;
	}

	async update(id: number, input: OrganizationSchemaInsertType): Promise<any> {
		const result = await drizzleDb
			.update(organizations)
			.set(input)
			.where(eq(organizations.id, id))
			.returning();
		return result[0];
	}

	async delete(id: number): Promise<any> {
		const result = await drizzleDb
			.delete(organizations)
			.where(eq(organizations.id, id))
			.returning();
		return result[0];
	}
}
