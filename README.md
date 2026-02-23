# Monorepo Playground

Frontend monorepo using pnpm workspaces with Vite + React + TypeScript.

## Structure
- `apps/saas-web` - Main frontend application (Vite + React + TypeScript)

## Tech Stack
- **React** v19.2 - UI library
- **TypeScript** v5.9 - Type safety
- **Vite** v7.3 - Build tool and dev server
- **pnpm** workspaces - Monorepo management
- **ESLint** - Code linting

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

## Scripts
- `pnpm dev` - Start development server with HMR
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint

## Project Setup

This monorepo uses pnpm workspaces to manage the frontend application. The structure is designed to easily add more applications or shared packages in the future.

### Adding New Apps
Create new apps in the `apps/` directory. They will automatically be included in the workspace.

### Adding Shared Packages
Create shared packages in the `packages/` directory for code reuse across multiple apps.
