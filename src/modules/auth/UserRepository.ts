import { DbClient } from "../../config/Database";
import { RegisterInput, AuthResponse } from "./user.dto";

export interface IUserRepository {
	getAll(): Promise<AuthResponse[] | null>;
	findByEmail(email: string): Promise<AuthResponse | null>;
	create(input: RegisterInput): Promise<AuthResponse>;
	findById(id: number): Promise<AuthResponse | null>;
	update(id: number, input: RegisterInput): Promise<AuthResponse>;
	delete(id: number): Promise<AuthResponse | null>;
}

export class UserRepository implements IUserRepository {
	constructor(private db: DbClient) {}

	async getAll(): Promise<AuthResponse[] | null> {
		const result = await this.db.query("SELECT id, email, name, created_at FROM users");
		return result.rows || null;
	}

	async findByEmail(email: string): Promise<AuthResponse | null> {
		const result = await this.db.query(
			"SELECT id, email, name, password, created_at FROM users WHERE email = $1",
			[email]
		);
		return result.rows[0] || null;
	}

	async create(input: RegisterInput): Promise<AuthResponse> {
		// TODO: Hash password before storing
		const result = await this.db.query(
			"INSERT INTO users (email, password, name) VALUES ($1, $2, $3) RETURNING id, email, name, created_at",
			[input.email, input.password, input.name]
		);
		return result.rows[0];
	}

	async findById(id: number): Promise<AuthResponse | null> {
		const result = await this.db.query(
			"SELECT id, email, name, created_at FROM users WHERE id = $1",
			[id]
		);
		return result.rows[0] || null;
	}

	async update(id: number, input: RegisterInput): Promise<AuthResponse> {
		// TODO: Hash password before updating
		const result = await this.db.query(
			"UPDATE users SET email = $1, password = $2, name = $3 WHERE id = $4 RETURNING id, email, name, created_at",
			[input.email, input.password, input.name, id]
		);
		return result.rows[0];
	}

	async delete(id: number): Promise<AuthResponse | null> {
		const result = await this.db.query(
			"DELETE FROM users WHERE id = $1 RETURNING id, email, name, created_at",
			[id]
		);
		return result.rows[0] || null;
	}
}
