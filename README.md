# Monorepo Playground

JavaScript monorepo using pnpm workspaces.

## Structure
- `apps/app` - Main application
- `packages/utils` - Shared utilities (@repo/utils)

## Scripts
- `pnpm dev` - Start app in development mode
- `pnpm start` - Start app in production mode

**Hot reload**: In dev mode, tsx watches both app source files and linked package changes, automatically restarting when either the main app or utils package is modified.

Run `pnpm install` from root to install dependencies.
