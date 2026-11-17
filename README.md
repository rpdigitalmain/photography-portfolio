# Photography Portfolio

A responsive photography portfolio built with Vue 3 and Vite. It presents the photographer's work across portrait, wedding, editorial, and travel galleries, alongside biography, services, and contact information.

<p>
  <a href="https://vuejs.org/"><img alt="Vue 3" src="https://img.shields.io/badge/Vue.js-3-4FC08D?logo=vuedotjs&logoColor=white"></a>
  <a href="https://vite.dev/"><img alt="Vite 8" src="https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white"></a>
  <a href="https://tailwindcss.com/"><img alt="Tailwind CSS 4" src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white"></a>
  <a href="https://sharp.pixelplumbing.com/"><img alt="Sharp" src="https://img.shields.io/badge/Image_processing-Sharp-99CC00"></a>
  <a href="https://eslint.org/"><img alt="ESLint" src="https://img.shields.io/badge/Lint-ESLint-4B32C3?logo=eslint&logoColor=white"></a>
</p>

## Features

- Vue Router pages for the homepage and `/gallery/:category` routes.
- Responsive layouts and image sources for desktop and smaller screens.
- WebP photographs with generated 768-pixel variants.
- Self-hosted Inter and Cormorant Garamond variable fonts.
- Accessible mobile navigation, keyboard skip link, and reduced-motion support.
- Client-side contact form validation.
- Vercel Web Analytics component enabled in production builds.

## Requirements

Use Node.js `^22.18.0` or `>=24.12.0`, as specified in `package.json`.

## Getting started

```sh
npm install
npm run dev
```

Vite prints the local development URL after the server starts.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server. |
| `npm run build` | Create the production build in `dist/`. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Check JavaScript and Vue files with ESLint. |
| `npm run lint:fix` | Apply automatic ESLint fixes. |
| `npm run images:optimize` | Generate optimized WebP files from source photographs. |

## Project layout

```text
src/
├── assets/
│   ├── images/originals/
│   │   ├── portraits/
│   │   ├── weddings/
│   │   ├── editorial/
│   │   ├── travel/
│   │   └── site/
│   └── styles/
├── components/
│   ├── common/
│   ├── contact/
│   ├── gallery/
│   ├── home/
│   └── layout/
├── data/
├── pages/
├── router/
└── services/

public/images/
├── portraits/
├── weddings/
├── editorial/
├── travel/
└── site/

scripts/optimize-images.js
```

`src/data/` contains the site copy, navigation, services, and gallery entries. `src/assets/styles/` contains the design tokens and shared styles.

## Replacing photographs

Original photographs are grouped by category in `src/assets/images/originals/`. Replace an image in its matching folder while keeping its basename and file extension, then run:

```sh
npm run images:optimize
```

Sharp preserves the category folders when writing WebP files to `public/images/` and creates a 768-pixel variant when a source is wider than 960 pixels. Update `src/data/galleryData.js` or `src/data/siteConfig.js` when adding or renaming an image.

## Contact form

The form validates its fields and displays a confirmation state. Email delivery is not connected yet. Add a form endpoint in `src/services/contactService.js` before using the site to receive inquiries.

## Deployment

The project builds to `dist/` and can be hosted as a static site. Configure the host to rewrite unknown paths to `/index.html` so direct visits to `/gallery/:category` load the Vue Router application.

Vercel Analytics is included for production builds. Enable Web Analytics in the Vercel project settings to collect analytics data.

## Documentation

- [Architecture](docs/ARCHITECTURE.md) describes the application structure, routing, data flow, styling, and image pipeline.
- [Security policy](docs/SECURITY.md) explains supported versions and how to report a vulnerability.

## License

This project is licensed under the [MIT License](LICENSE).
