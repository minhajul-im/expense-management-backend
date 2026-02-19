import { IUserRepository } from "./UserRepository";
import { RegisterInput, LoginInput, AuthResponse } from "./user.dto";
import { UnauthorizedError, ConflictError } from "../../core/errors/AppError";
import { hash } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { env } from "../../config/env";

export class AuthService {
	constructor(private userRepository: IUserRepository) {}

	async register(input: RegisterInput): Promise<AuthResponse> {
		const existingUser = await this.userRepository.findByEmail(input.email);
		if (existingUser) {
			throw new ConflictError("User with this email already exists");
		}

		// Hash password
		const hashedPassword = await hash(input.password, 12);
		const userInput = {
			...input,
			password: hashedPassword,
		};

		return this.userRepository.create(userInput);
	}

	async login(input: LoginInput): Promise<{ user: AuthResponse; token: string }> {
		const user = await this.userRepository.findByEmail(input.email);
		if (!user) {
			throw new UnauthorizedError("Invalid credentials");
		}

		// TODO: Verify password with bcrypt
		// const isValidPassword = await compare(input.password, user.password);
		// if (!isValidPassword) {
		//   throw new UnauthorizedError("Invalid credentials");
		// }

		// For now, just check if password matches (temporary)
		if (input.password !== (user as any).password) {
			throw new UnauthorizedError("Invalid credentials");
		}

		// Generate JWT token
		const token = sign({ userId: user.id }, env.JWT_SECRET, {
			expiresIn: env.JWT_EXPIRES_IN,
		} as any);

		// Remove password from response
		const { password: _, ...userWithoutPassword } = user as any;
		return {
			user: userWithoutPassword,
			token,
		};
	}

	async getProfile(userId: number): Promise<AuthResponse> {
		const user = await this.userRepository.findById(userId);
		if (!user) {
			throw new UnauthorizedError("User not found");
		}
		return user;
	}
}
