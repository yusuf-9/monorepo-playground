# Monorepo Playground

TypeScript monorepo using pnpm workspaces.

## Structure
- `apps/app` - Main application (TypeScript)
- `packages/utils` - Shared utilities package (@repo/utils) (TypeScript)

## TypeScript Setup
The utils package exports TypeScript source directly (`src/index.ts`) via workspace dependency linking (`@repo/utils`). The app uses `tsx` to execute TypeScript directly in development mode. For production, the app can be compiled to JavaScript using `tsc`.

## Scripts
- `pnpm dev` - Start app in development mode using tsx (executes TypeScript directly with hot reload)
- `pnpm start` - Build all packages, then start app in production mode
- `pnpm build` - Build all packages recursively (compiles TypeScript to JavaScript)

**Development mode**: Uses `tsx watch` to execute TypeScript directly without compilation, with automatic restart on file changes.

**Production mode**: Compiles TypeScript to JavaScript in `dist/` directories before running.

Run `pnpm install` from root to install dependencies.
