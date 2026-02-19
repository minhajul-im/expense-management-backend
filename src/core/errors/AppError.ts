export type ErrorCode = "VALIDATION_ERROR" | "UNAUTHORIZED" | "FORBIDDEN" | "NOT_FOUND" | "CONFLICT" | "RATE_LIMITED" | "INTERNAL_ERROR";

export class AppError extends Error {
  public readonly code: ErrorCode;
  public readonly statusCode: number;
  public readonly isOperational: boolean;
  public readonly details?: any;

  constructor(message: string, code: ErrorCode, statusCode: number = 500, isOperational: boolean = true, details?: any) {
    super(message);
    this.code = code;
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    this.details = details;

    Object.setPrototypeOf(this, new.target.prototype);
  }

  public toJSON(): object {
    return {
      errorType: this.code,
      message: this.message,
      statusCode: this.statusCode,
      ...(this.details && { details: this.details }),
    };
  }
}

export class ValidationError extends AppError {
  constructor(message: string = "Validation failed", details?: any) {
    super(message, "VALIDATION_ERROR", 400, true, details);
  }
}

export class UnauthorizedError extends AppError {
  constructor(message: string = "Unauthorized access", details?: any) {
    super(message, "UNAUTHORIZED", 401, true, details);
  }
}

export class ForbiddenError extends AppError {
  constructor(message: string = "Access forbidden", details?: any) {
    super(message, "FORBIDDEN", 403, true, details);
  }
}

export class NotFoundError extends AppError {
  constructor(message: string = "Resource not found", details?: any) {
    super(message, "NOT_FOUND", 404, true, details);
  }
}

export class ConflictError extends AppError {
  constructor(message: string = "Resource conflict", details?: any) {
    super(message, "CONFLICT", 409, true, details);
  }
}

export class RateLimitError extends AppError {
  constructor(message: string = "Rate limit exceeded", details?: any) {
    super(message, "RATE_LIMITED", 429, true, details);
  }
}

export class InternalError extends AppError {
  constructor(message: string = "Internal server error", details?: any) {
    super(message, "INTERNAL_ERROR", 500, false, details);
  }
}
