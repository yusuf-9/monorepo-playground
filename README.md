# Monorepo Playground

JavaScript/TypeScript monorepo using pnpm workspaces.

## Structure
- `apps/app` - Main application (JavaScript)
- `packages/utils` - Shared TypeScript utilities (@repo/utils)

## TypeScript Package Setup
The utils package compiles TypeScript (`src/`) to JavaScript (`dist/`) using tsc. The main app imports the compiled output via workspace dependency linking.

## Scripts
- `pnpm dev` - Start app in development mode (app hot reload only)
- `pnpm start` - Build all packages, then start app in production
- `pnpm build` - Build all packages recursively

**Execution order**: `start` and `build` first compile TypeScript packages, then run the app.

**Hot reload**: App reloads on changes, but utils package requires manual rebuild (`pnpm --filter @repo/utils build`) during development.

Run `pnpm install` from root to install dependencies.
