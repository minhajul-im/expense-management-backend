import { Pool, PoolClient } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";

import { env } from "./env";

class Database {
	private static instance: Database;
	public readonly pool: Pool;
	public readonly drizzle: ReturnType<typeof drizzle>;

	private constructor() {
		this.pool = new Pool({
			connectionString: env.DATABASE_URL,
			max: 20,
			idleTimeoutMillis: 30000,
			connectionTimeoutMillis: 2000,
		});

		this.drizzle = drizzle(this.pool);

		this.pool.on("error", (err) => {
			console.error("Unexpected error on idle client", err);
			process.exit(-1);
		});
	}

	public static getInstance(): Database {
		if (!Database.instance) {
			Database.instance = new Database();
		}
		return Database.instance;
	}

	async connect(): Promise<PoolClient> {
		console.log("Database connected successfully");
		return this.pool.connect();
	}

	async query(text: string, params?: any[]) {
		return this.pool.query(text, params);
	}

	async close(): Promise<void> {
		await this.pool.end();
	}
}

export type DbClient = PoolClient;

export const database = Database.getInstance();
export const dbClient = database.pool as unknown as PoolClient;
export const drizzleDb = database.drizzle;
