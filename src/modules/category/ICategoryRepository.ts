export interface ICategoryRepository {
	getAll(): Promise<any | null>;
	create(input: CategoryInput): Promise<any | null>;
}

interface CategoryInput {
	name: string;
	isActive?: boolean;
}
