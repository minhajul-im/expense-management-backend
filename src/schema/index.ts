import { healthTable } from "./raw/health.table";

const schemaApplyOrder = [healthTable];

export async function setupDatabaseSchema() {
	console.log("🔧 Initializing / updating database schema...");

	try {
		for (const applySchema of schemaApplyOrder) {
			await applySchema();
		}

		console.log("✅ All database schemas are up-to-date! 🎉");
	} catch (error: any) {
		console.error("❌ Schema update failed:", error.message);
	}
}
