# ADR-0003: Store Optimized Images in Cloudflare R2

- **Status:** Accepted
- **Date:** 2026-11-19

## Context

The portfolio needs to serve optimized photographs without keeping image files in the application repository. The site already uses WebP images grouped by gallery category and site section.

## Decision

Store the optimized WebP photographs in a Cloudflare R2 bucket. Keep the existing `images/` object paths and category structure so gallery records and responsive variants remain predictable. The application builds image URLs through `src/data/imageUrls.js`.

Do not keep source originals or duplicate WebP files in the project repository. Add or replace photographs in the R2 bucket, preserving the expected object path, and update the site data when a path or filename changes.

## Consequences

- The deployed site and local development require network access to the R2 bucket to display photographs.
- Image updates are managed in the bucket separately from application code.
- The repository and application bundle no longer include the portfolio image files.
- Portfolio photographs are public assets and can be viewed or downloaded by visitors.
