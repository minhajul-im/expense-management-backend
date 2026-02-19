# Expense Management System - Backend

A clean, production-grade REST API for an expense management application built with TypeScript and Node.js.

## 🛠️ Technologies

- **Runtime:** Node.js 22+
- **Framework:** Express.js
- **Language:** TypeScript (strict mode)
- **Database:** PostgreSQL with `pg` library
- **Validation:** Zod
- **Authentication:** JWT + Cookie-based
- **Security:** Helmet, CORS, Rate Limiting
- **Logging:** Pino
- **Testing:** Jest + ts-jest
- **Dev Tools:** tsx, Prettier, ESLint

## 📁 Folder Structure

```
src/
├── __tests__/
│   ├── setup.ts
│   └── health/
│       ├── HealthController.test.ts
│       └── HealthRepository.test.ts
├── config/
│   ├── Database.ts        # PostgreSQL pool setup
│   ├── env.ts             # Environment validation (Zod)
│   └── auth.config.ts     # JWT & auth configuration
├── core/
│   ├── errors/
│   │   ├── AppError.ts    # Custom error classes
│   │   └── zodHelper.ts   # Zod validation helpers
│   ├── middleware/
│   │   ├── asyncHandler.ts    # Async route wrapper
│   │   ├── errorHandler.ts    # Global error handler
│   │   └── auth.ts            # Authentication middleware
│   ├── success/
│   │   └── SuccessResponse.ts # Response formatter
│   ├── types/
│   │   └── index.ts       # TypeScript types
│   └── utils/             # Utility functions
├── modules/
│   ├── health/
│   │   ├── HealthController.ts
│   │   ├── HealthRepository.ts
│   │   └── health.routes.ts
│   ├── auth/
│   │   ├── AuthController.ts
│   │   ├── AuthService.ts
│   │   ├── UserRepository.ts
│   │   ├── user.dto.ts
│   │   └── auth.routes.ts
│   └── category/
│       ├── CategoryController.ts
│       ├── CategoryService.ts
│       ├── CategoryRepository.ts
│       └── category.dto.ts
├── schema/
│   ├── health.table.ts    # Database table definitions
│   └── index.ts
├── container.ts           # Dependency injection
└── index.ts               # Main app entry point

```

## 🚀 Getting Started

```bash
# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env

# Run dev server
npm run dev

# Run tests
npm test

# Build for production
npm run build
```

## 📝 Architecture

- **Controllers:** Handle HTTP requests/responses
- **Services:** Business logic layer
- **Repositories:** Database access layer
- **DTOs:** Data validation with Zod
- **Middleware:** Request processing (auth, error handling, etc.)

## 🧪 Testing

```bash
npm test                    # Run all tests
npm run test:watch         # Watch mode
npm run test:cov           # Coverage report
npm test -- src/__tests__/health  # Test specific module
```

See [TESTING.md](TESTING.md) for detailed testing guide.
