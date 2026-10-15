# Development Standards

## Existing Project Conventions

- Use TypeScript and React Router route modules. File-based routes are discovered with `@react-router/fs-routes` through `app/routes.ts`.
- Keep server work in route `loader` and `action` functions, and keep browser UI in route components. Authenticate protected Admin requests with `authenticate.admin(request)` from `app/shopify.server.ts`.
- Authenticate webhook requests with `authenticate.webhook(request)`. Keep webhook handling idempotent where Shopify may retry delivery.
- Use Shopify App Bridge for embedded-app capabilities and Polaris Web Components (`s-*`) for Admin UI, matching existing routes.
- Use the existing Prisma client and session-storage integration for persistence. The current Prisma datasource is MySQL and the schema stores Shopify sessions; do not assume a tax-domain data model exists.
- Keep credentials and access tokens on the server and in environment configuration. Never expose secrets in client code or documentation.
- Keep changes focused, reuse existing patterns, and do not add dependencies without a concrete need.

## Validation

The repository currently defines these package scripts:

- `pnpm run lint` for ESLint.
- `pnpm run typecheck` for React Router type generation and TypeScript checking.
- `pnpm run build` for the production build.

There is currently no test script or test framework configured in `package.json`. Add or run focused tests when a suitable test setup exists; do not claim tests passed unless they were run. The declared Node.js range is `>=20.19 <22 || >=22.12`.

## Shopify and Data Safety

- Follow the Shopify API version and scopes configured in the app; verify required scopes before introducing API calls.
- Validate inputs and handle Shopify API errors explicitly. Do not assume GraphQL responses succeeded merely because the HTTP request completed.
- Treat webhooks as retryable and verify them through the existing Shopify authentication integration.
- Do not run destructive database operations, deploy, publish, or release without explicit authorization.
- Update these documents when an implementation changes documented architecture, product behavior, or development conventions.
