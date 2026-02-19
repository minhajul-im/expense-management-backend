import { database } from "../../config/Database";

export async function healthTable() {
	await database.query(`
        CREATE TABLE IF NOT EXISTS healths (
            id              SERIAL PRIMARY KEY,
            name            VARCHAR(100),
            message         VARCHAR(255),
            created_at      TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `);
}
