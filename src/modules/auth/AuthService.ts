import { UnauthorizedError, ConflictError, NotFoundError } from "../../core/errors/AppError";
import { compare, hash } from "bcryptjs";
import { sign, verify } from "jsonwebtoken";
import { IUserRepository } from "../user/UserRepository";
import { USER_ROLE } from "../user/user.validator";
import { handleZodError } from "../../core/errors/zodHelper";
import { authConfig } from "../../config/auth.config";
import { signinInput, SigninInput, SignupInput, signupInput } from "./auth.validator";
import { UserType } from "../../core/types";

export interface IAuthService {
	signup(input: SignupInput): Promise<UserType>;
	signin(input: SigninInput): Promise<{ token: string; user: UserType }>;
	verifyToken(token: string): Promise<UserType>;
}

export class AuthService {
	constructor(private repository: IUserRepository) {}

	public async signup(input: SignupInput): Promise<any> {
		const data = signupInput.safeParse(input);
		if (!data.success) {
			throw handleZodError(data.error);
		}

		const existing = await this.repository.findByEmail(input?.email);
		if (existing) {
			throw new ConflictError("User with this email already exists");
		}

		const hashedPassword = await hash(input.password, authConfig.bcrypt.saltRounds);
		const userInput = {
			...data?.data,
			password: hashedPassword,
			roles: data.data.roles || [USER_ROLE.MANAGER],
		};

		const user = await this.repository.create(userInput);
		return this.formatUser(user);
	}

	public async signin(input: SigninInput): Promise<any> {
		const data = signinInput.safeParse(input);
		if (!data.success) {
			throw handleZodError(data.error);
		}

		const user = await this.verifyUser(data?.data?.email);

		const isValidPass = await compare(input?.password, user?.password);
		if (!isValidPass) {
			throw new UnauthorizedError("Invalid password");
		}

		const token = this.generateToken(user?.id);

		return {
			user: this.formatUser(user),
			token,
		};
	}

	private async verifyUser(email: string) {
		const user = await this.repository.findByEmail(email);
		if (!user) {
			throw new NotFoundError("User not found with this email");
		}

		if (!user.is_active) {
			throw new UnauthorizedError("User is inactive");
		}
		return user;
	}

	private generateToken(userID: number) {
		const token = sign({ userId: String(userID) }, authConfig.jwt.secret, {
			expiresIn: authConfig.jwt.expiresIn,
		} as any);

		return token;
	}

	public async verifyToken(token: string): Promise<UserType> {
		const decoded = verify(token, authConfig.jwt.secret) as {
			userId: number;
		};

		if (!decoded?.userId) {
			throw new UnauthorizedError("Verification failed");
		}

		const user = await this.repository.findById(decoded.userId);
		if (!user) {
			throw new UnauthorizedError("User not found");
		}

		return this.formatUser(user);
	}

	private formatUser(user: any) {
		return {
			id: user?.id,
			full_name: user?.full_name,
			email: user?.email,
			roles: user?.roles,
			image: user?.image,
			is_active: user?.is_active,
			created_at: user?.created_at,
		};
	}
}
