# Monorepo Playground

TypeScript monorepo using pnpm workspaces.

## Structure
- `apps/app` - Main application (TypeScript)
- `packages/utils` - Shared utilities package (@repo/utils) (TypeScript, source-exported)
- `packages/services` - Services package (@repo/services) (TypeScript, self-compiling)

## TypeScript Package Patterns

This monorepo demonstrates **two different TypeScript package patterns**:

### 1. Source-Exported Package (utils)
- **Exports**: TypeScript source directly (`./src/index.ts`)
- **Consumed by**: App compiles it using `tsx` (dev) or `tsc` (production)
- **No build scripts**: Package doesn't compile itself
- **Use case**: Simple shared utilities that don't need pre-compilation

### 2. Self-Compiling Package (services)
- **Exports**: Compiled JavaScript (`./dist/index.js`)
- **Build scripts**: `dev` (tsc --watch) and `build` (tsc)
- **Consumed by**: App imports pre-compiled JavaScript
- **Use case**: Complex packages with build steps, or when you want package isolation

## Scripts
- `pnpm dev` - Start development mode with hot reload
- `pnpm start` - Build all packages, then start app in production mode
- `pnpm build` - Build all packages recursively (compiles TypeScript to JavaScript)

### Development Mode (`pnpm dev`)
1. **Initial build**: `pnpm build` compiles all packages
2. **Concurrent watchers** (using concurrently):
   - **services** (magenta): `tsc --watch` monitors `packages/services/src/` → compiles to `packages/services/dist/`
   - **app** (green): `tsx watch src` executes TypeScript directly and auto-restarts on changes

**How it works**:
- The **services** package compiles itself to JavaScript in watch mode
- The **app** uses `tsx` to execute TypeScript directly (including the utils package source)
- When services TypeScript changes, tsc recompiles → app detects dist change → app restarts
- When utils TypeScript changes, app detects source change → app restarts directly

### Production Mode (`pnpm start`)
1. **Build all packages**: `pnpm -r build` compiles all TypeScript recursively
   - services: TypeScript → JavaScript in `dist/`
   - app: TypeScript → JavaScript in `dist/`
2. **Start app**: Runs compiled JavaScript from `dist/index.js`

Run `pnpm install` from root to install dependencies.
