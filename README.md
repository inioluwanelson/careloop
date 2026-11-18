# CareLoop

CareLoop is a React, TypeScript, and Vite application scaffold for remote
patient monitoring and caregiver communication.

## Development

- `npm run dev` starts the Vite development server.
- `npm run build` runs the TypeScript project checks and creates a production
  build.
- `npm run lint` runs ESLint.
- `npm run preview` serves the production build locally.

Tailwind CSS v4 is integrated through its Vite plugin. Shared color, font, and
spacing tokens and responsive base typography are defined in
`src/styles/global.css`. Lucide React is available for icons.

## Source structure

- `src/assets/` — static application assets
- `src/components/layout/` — shared layout components
- `src/components/common/` — reusable UI components
- `src/sections/` — composed page sections
- `src/hooks/` — shared React hooks
- `src/pages/` — route-level pages
- `src/types/` — shared TypeScript types
- `src/utils/` — utility functions
- `src/styles/` — global styles and design tokens
