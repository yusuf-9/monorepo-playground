# Monorepo Playground

JavaScript/TypeScript monorepo using pnpm workspaces.

## Structure
- `apps/app` - Main application (JavaScript)
- `packages/utils` - Shared TypeScript utilities (@repo/utils)

## TypeScript Package Setup
The utils package is self-compiling - it builds TypeScript (`src/`) to JavaScript (`dist/`) using its own tsc scripts. The main app simply consumes the pre-compiled `dist/` output via workspace dependency linking.

## Scripts
- `pnpm dev` - Start both TypeScript compiler (watch) and app (dev) concurrently with full hot reload
- `pnpm start` - Build all packages, then start app in production
- `pnpm build` - Build all packages recursively

**Execution order**: `start` and `build` first compile TypeScript packages, then run the app.

**Hot reload**: Both utils TypeScript compilation and app restart automatically on file changes during development.

Run `pnpm install` from root to install dependencies.
