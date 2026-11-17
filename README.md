# Photography Portfolio

A photography portfolio built with Vue 3, Vite, Vue Router, and Tailwind CSS.

## Getting started

```sh
npm install
npm run dev
```

## Available commands

```sh
npm run lint
npm run lint:fix
npm run build
npm run preview
```

## Project structure

- `src/components/` contains shared layout, home, gallery, and contact components.
- `src/pages/` contains the home page, gallery category page, and not-found page.
- `src/data/` contains the site copy, services, navigation, and gallery entries.
- `src/router/` defines the home and `/gallery/:category` routes.
- `src/assets/styles/` contains the design tokens and shared styles.
- `public/images/` contains the replaceable portfolio photographs.

Update the English copy and image paths in `src/data/`. Replace photographs in `public/images/` while keeping the current filenames, or update the corresponding paths in `src/data/galleryData.js` and `src/data/siteConfig.js`.

The contact form validates fields and shows the original success state. Email delivery is not connected; configure a form endpoint in `src/services/contactService.js` before using it to receive inquiries.

For static hosting, configure a fallback rewrite to /index.html so direct visits to /gallery/:category work.
