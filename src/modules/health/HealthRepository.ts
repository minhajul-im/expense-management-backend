import { DbClient } from "../../config/Database";
export interface IHealthRepository {
	getAll(): Promise<any | null>;
	create(input: HealthInput): Promise<any | null>;
}

interface HealthInput {
	name: string;
	message: string;
}

export class HealthRepository implements IHealthRepository {
	constructor(private db: DbClient) {}

	async getAll(): Promise<any | null> {
		const rows = await this.db.query("SELECT * FROM healths");
		return rows.rows || null;
	}
	async create(input: HealthInput) {
		const rows = await this.db.query(
			"INSERT INTO healths (name, message) VALUES ($1, $2) RETURNING id, name, message, created_at",
			[input.name, input.message]
		);
		return rows.rows[0];
	}
}
