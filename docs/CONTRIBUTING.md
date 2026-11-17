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
npm audit --audit-level=high
```

The Playwright browser only needs to be installed once per environment. The [CI workflow](../.github/workflows/ci.yml) runs lint, build, and E2E checks on Windows with Node.js 22.18.0 and 24.12.0, and audits dependencies.

Add or update E2E coverage when changing user-visible navigation, galleries, or contact flows. Include `package-lock.json` when changing npm dependencies.

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
