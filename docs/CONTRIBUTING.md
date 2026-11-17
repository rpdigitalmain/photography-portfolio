# Contributing

Thanks for helping improve the photography portfolio. Keep changes focused and explain their purpose in the pull request.

## Local setup

Use Node.js `^22.18.0` or `>=24.12.0`, then install dependencies and start the development server:

```sh
npm ci
npm run dev
```

## Validate changes

Before opening a pull request, run:

```sh
npm run lint
npm run build
npx playwright install chromium
npm run test:e2e
npm audit --audit-level=high --omit dev
```

The Playwright browser only needs to be installed once per environment. The [CI workflow](../.github/workflows/ci.yml) runs lint, build, and E2E checks on Windows with Node.js 22.18.0 and 24.12.0, and on Ubuntu with Node.js 24.12.0. The Ubuntu job also audits dependencies.

Add or update E2E coverage when changing user-visible navigation, galleries, or contact flows. Include `package-lock.json` when changing npm dependencies.

## Run the Linux CI job locally

With Docker Desktop running and `act` installed, run the Linux job from the repository root:

```sh
act -j linux
```

The repository's [`.actrc`](../.actrc) selects the Ubuntu runner image used for this local run. `act` is an approximation of GitHub Actions; use the GitHub-hosted CI result as the final check.

## Build and run with Docker

Build the production image:

```sh
docker build -t photography-portfolio-helena-duarte:latest .
```

Run the container and visit <http://localhost:8080>:

```sh
docker run -d -p 8080:80 --name photography-portfolio-helena-duarte photography-portfolio-helena-duarte:latest
```

Or use Compose:

```sh
docker compose up --build
```

The production image is a multi-stage build: Node.js builds the Vite bundle, and nginx serves the static files with Vue Router history-mode support (direct visits to `/gallery/:category` rewrite to `/index.html`).

Stop and remove the container:

```sh
docker stop photography-portfolio-helena-duarte
docker rm photography-portfolio-helena-duarte
```

## Architecture decision records

For a significant architectural choice, add a separate, sequentially numbered record in [`adr/`](adr/). Include its status and date, then describe the context, decision, and consequences. Keep the record in English to match the existing ADRs.

## Commit messages

Use this format, with an optional scope:

```text
<type>(<scope>): <short description>
```

Choose a type that describes the change, such as `feat`, `fix`, `docs`, `refactor`, `test`, `build`, `ci`, or `chore`. Keep the description concise and start it with a verb.

Examples:

```text
feat(gallery): add category filters
test(e2e): cover contact form validation
ci: test Node.js 22 and 24 on Windows
docs: add contribution guidelines
```

## Pull requests

- Describe what changed and why.
- Mention relevant checks and any known limitations.
- Keep documentation in sync when behavior, setup, or architecture changes.
