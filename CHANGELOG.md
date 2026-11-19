# Changelog

All notable changes to this project are documented here. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and this project uses [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.1] - Unreleased

### Changed

- Serve optimized WebP photographs from Cloudflare R2 instead of shipping them with the project.
- Move Playwright end-to-end tests to `test/e2e/`.
- Validate version tags in the release workflow without deploying to Cloudflare Pages.

## [1.0.0] - 2026-11-17

### Added

- Responsive photography portfolio with portrait, wedding, editorial, and travel galleries.
- Accessible mobile navigation, client-side contact form validation, and reduced-motion support.
- End-to-end tests and CI checks on Windows and Linux with Node.js 22.18.0 and 24.12.0.
- Docker image build and deployment support.
- Cloudflare Pages deployment workflow triggered by version tags.

[1.0.1]: https://github.com/rpdigitalmain/photography-portfolio-helena-duarte/releases/tag/v1.0.1
[1.0.0]: https://github.com/rpdigitalmain/photography-portfolio-helena-duarte/releases/tag/v1.0.0
