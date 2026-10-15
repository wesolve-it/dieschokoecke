# Copilot instructions for dieschokoecke

## Project overview

This repository is a React + Create React App marketing site for a confectionery brand, with a mostly static storefront and landing-page experience. The app is structured as a small SPA, not a large app framework or data-heavy client app.

- `src/App.js` is the root composition layer. It bootstraps the app, runs AOS initialization, and fetches CMS entries from Contentful. It also defines the top-level routes.
- `src/Client.js` creates the Contentful client used to load product and FAQ data.
- `src/pages/` contains the routed page-level screens such as `Home`, `Products`, `Contact`, `Privacy`, `Impressum`, and `NotFound`.
- `src/components/` contains reusable marketing sections like `Hero`, `About`, `Features`, `Reviews`, `FAQ`, `Navigation`, `Footer`, and product cards.
- `src/assets/` stores static images and brand assets; `public/` contains static app metadata and deployment assets such as `index.html`, `manifest.json`, and the redirect file.
- Styling is a combination of Tailwind CSS and inline/custom CSS variable-driven classes; `src/index.css` includes the Tailwind directives and Flowbite import.

## Build, test, and lint commands

Use the standard CRA scripts from the project root:

- `npm install` — install dependencies
- `npm start` — run the app in development mode
- `npm run build` — create the production build in `build/`
- `npm test -- --watch=false` — run the current test suite once in CI mode
- Single test file: `CI=1 npm test -- --watch=false --runInBand --runTestsByPath src/App.test.js`

There is no dedicated `lint` script in `package.json`, and the project does not define a custom lint workflow. The default CRA ESLint rules are enabled via the `eslintConfig` section, so validation happens through the standard React/CRA toolchain rather than a separate `npm run lint` command.

## High-level architecture and data flow

The app is a content-driven marketing site with a small amount of client-side routing:

- `App` loads `product` and `faq` entries from Contentful with `client.getEntries(...)`.
- Product data is passed into the `/produkte` page, where each item is rendered by `src/components/Product.js`.
- FAQ entries are passed into the `FAQ` accordion component.
- The site uses `BrowserRouter` from `react-router-dom` and defines routes such as `/`, `/produkte`, `/kontakt`, `/datenschutz`, and `/impressum`.
- `Navigation` is a global component that handles the fixed header, responsive mobile menu, and scroll-to-section behavior for home-page anchors.
- `Footer` and other section components remain globally mounted so the layout is reused across pages.

The project is intentionally more “landing page / brochure site” than “application dashboard”: most logic is page composition and content rendering rather than stateful business logic.

## Key conventions in this codebase

- The implementation is in German. UI copy, route labels, and CTA text are in German, and new marketing copy should match that tone and localization.
- Component structure is functional and simple: small presentational components receive props, render JSX, and keep local UI state only where needed (for example, the FAQ accordion state).
- Styling is driven by Tailwind utility classes plus CSS variables used across sections (for example `--accent-color`, `--light-bg`, `--cta-bg`, `--header-bg`). Preserve those tokens when editing or extending the design.
- Motion is handled with AOS (`aos` package); many sections use `data-aos` attributes and `AOS.init()` during app startup. Follow the same pattern when introducing new animated sections.
- Assets are imported from `src/assets` or used from `public` for static files; do not reach for a different asset pipeline unless the project specifically moves to one.
- `tailwind.config.js` extends the default Tailwind palette with brand-specific colors such as `chocolateBrown`, `textBrown`, and `valentinesPink`. Reuse those theme tokens instead of inventing ad hoc color values.
- This repo ships with a default CRA smoke test in `src/App.test.js`; it is not a meaningful end-to-end test suite, so keep validation lightweight and aligned with the project’s static marketing-site scope.

## Practical guidance for changes

- Keep edits small and aligned with the existing component structure; the site is assembled from a set of section components rather than a deeply nested state layer.
- When changing routes or navigation, update the corresponding route definitions in `src/App.js` and the related header links in `src/components/Navigation.js`.
- If a new page is added, prefer composing it from the current page/component patterns instead of creating a new application architecture.
- When adding content that comes from Contentful, keep fields consistent with the existing `product.fields.*` and `faq.fields.*` structure used by the current components.
- Avoid introducing heavy client state management or new routing abstractions unless the business need clearly requires it; this repo is intentionally simple and direct.
