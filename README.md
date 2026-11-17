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
npm run images:optimize
npm run build
npm run preview
```

## Project structure

- `src/components/` contains shared layout, home, gallery, and contact components.
- `src/pages/` contains the home page, gallery category page, and not-found page.
- `src/data/` contains the site copy, services, navigation, and gallery entries.
- `src/router/` defines the home and `/gallery/:category` routes.
- `src/assets/styles/` contains the design tokens and shared styles.
- `src/assets/images/originals/` stores replaceable, full-quality source photographs.
- `public/images/` contains generated WebP files served by the site.

To replace photographs, use the same English filenames in `src/assets/images/originals/` and run `npm run images:optimize`. The script creates WebP files and 768-pixel variants where the source is wide enough. Site data and image paths are in `src/data/`.

The contact form validates fields and shows the original success state. Email delivery is not connected; configure a form endpoint in `src/services/contactService.js` before using it to receive inquiries.

For static hosting, configure a fallback rewrite to `/index.html` so direct visits to `/gallery/:category` work.
