# React + Vite + Tailwind v4 + Styled Components Template

A modern, lightweight starter template using React + Vite with the latest Tailwind CSS v4 & Styled Components configured — ready for rapid UI development with zero setup friction.

## What's included

- React 19 + TypeScript (Vite powered)
- Tailwind CSS v4 (high-performance engine, CSS-first config)
- Tailwind PostCSS integration via `@tailwindcss/postcss`
- Styled Components for scoped component styling
- ESLint and TypeScript dev tooling

## Quick start

Clone the project and install dependencies (this repo uses pnpm):

```bash
pnpm install
```

Run the dev server:

```bash
pnpm dev
```

Build for production:

```bash
pnpm build
```

Preview the production build:

```bash
pnpm preview
```

## Tailwind v4 notes

Tailwind v4 moved the PostCSS plugin into a separate package. This template already uses the PostCSS plugin package `@tailwindcss/postcss` in `postcss.config.js`. If you update Tailwind or change PostCSS config, make sure to:

1. Install or update the PostCSS plugin package:

```bash
pnpm add -D tailwindcss @tailwindcss/postcss
```

2. Keep `postcss.config.js` pointing to the PostCSS plugin package instead of `tailwindcss` directly:

```js
export default {
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
}
```

Alternatively, for Vite you can use the first-party Vite plugin for even better performance:

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwind()],
})
```

## Styling approach

- Use Tailwind utilities for fast layout and spacing.
- Use Styled Components for component-scoped CSS when you need JavaScript-driven styles or more complex stateful styling patterns.

Example: `src/App.tsx` uses Tailwind for layout, and `src/styles/ButtonStyle.tsx` demonstrates a small styled button.

## Notes & Tips

- If you see PostCSS errors about using `tailwindcss` directly, install `@tailwindcss/postcss` and update `postcss.config.js` as shown above.
- This template uses `pnpm` and ships a `pnpm-lock.yaml`. You can use `npm` or `yarn`, but lockfile behavior will differ.

## License

MIT
