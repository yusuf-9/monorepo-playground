# Monorepo Playground

Frontend monorepo using pnpm workspaces with Vite + React + TypeScript.

## Structure

- `apps/saas-web` - Main frontend application (Vite + React + TypeScript + Tailwind CSS v4)
- `packages/ui` - Shared UI components (@repo/ui)
- `packages/utils` - Shared utility functions (@repo/utils)

## Tech Stack

- **React** v19.2 - UI library
- **TypeScript** v5.9 - Type safety
- **Vite** v7.3 - Build tool and dev server
- **Tailwind CSS** v4.2 - Utility-first CSS framework
- **pnpm** workspaces - Monorepo management
- **ESLint** v9 - Code linting
- **Prettier** v3 - Code formatting

## Shared Configuration

This monorepo uses **root-level configuration files** that all packages extend:

### Root Config Files

- **`tsconfig.base.json`** - Base TypeScript compiler settings
- **`eslint.config.js`** - Base ESLint rules (flat config format)
- **`prettier.config.js`** - Base Prettier formatting rules

### How It Works

Each package/app extends these root configs and adds package-specific overrides:

```json
// Example: apps/saas-web/tsconfig.app.json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "types": ["vite/client"]
  }
}
```

This approach ensures consistency across all packages while allowing flexibility for package-specific needs.

## Getting Started

### Install Dependencies

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

Starts the Vite development server with hot module replacement (HMR).

### Build

```bash
pnpm build
```

Builds the application for production. Output is in `apps/saas-web/dist/`.

### Preview Production Build

```bash
pnpm preview
```

Preview the production build locally.

### Lint

```bash
pnpm lint
```

Run ESLint to check code quality.

### Format

```bash
pnpm format
```

Format code with Prettier.

```bash
pnpm format:check
```

Check if code is formatted correctly without making changes.

## Scripts

- `pnpm dev` - Start development server with HMR
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check code formatting

## Project Setup

This monorepo uses pnpm workspaces to manage the frontend application. The structure is designed to easily add more applications or shared packages in the future.

### Adding New Apps

Create new apps in the `apps/` directory. They will automatically be included in the workspace.

### Adding Shared Packages

Create shared packages in the `packages/` directory for code reuse across multiple apps.
