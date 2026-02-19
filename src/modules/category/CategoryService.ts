import { ICategoryRepository } from "./CategoryRepository";

export interface ICategoryService {
	getAllCategories(): Promise<any>;
	createCategory(input: CategoryInput): Promise<any>;
}

interface CategoryInput {
	name: string;
	isActive?: boolean;
}

export class CategoryService implements ICategoryService {
	constructor(private categoryRepository: ICategoryRepository) {}

	async getAllCategories() {
		return await this.categoryRepository.getAll();
	}

	async createCategory(input: CategoryInput) {
		// You can add validation or business logic here
		return await this.categoryRepository.create(input);
	}
}
