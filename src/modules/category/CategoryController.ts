import { Request, Response } from "express";
import { ICategoryService } from "./CategoryService";

export class CategoryController {
	constructor(private categoryService: ICategoryService) {}

	async getAllCategories(req: Request, res: Response) {
		try {
			const categories = await this.categoryService.getAllCategories();
			res.status(200).json({
				success: true,
				data: categories,
			});
		} catch (error: any) {
			res.status(500).json({
				success: false,
				message: error.message,
			});
		}
	}

	async createCategory(req: Request, res: Response) {
		try {
			const { name, isActive } = req.body;
			const category = await this.categoryService.createCategory({
				name,
				isActive,
			});
			res.status(201).json({
				success: true,
				data: category,
			});
		} catch (error: any) {
			res.status(500).json({
				success: false,
				message: error.message,
			});
		}
	}
}
