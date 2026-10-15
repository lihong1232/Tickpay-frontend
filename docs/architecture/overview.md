# Architecture Overview

## Runtime Shape

This repository is an embedded Shopify app built with React 18, React Router 7, TypeScript, and Vite. Shopify CLI configuration and the `dev` script provide the local development entry point. React Router renders the application and exposes server-side route loaders and actions.

## Application Layers

- **Document shell:** `app/root.tsx` renders the HTML document and route outlet.
- **Embedded app shell:** `app/routes/app.tsx` authenticates Admin access, provides the API key to Shopify `AppProvider`, renders app navigation, and hosts child routes.
- **Pages and server handlers:** `app/routes/` contains file-based route modules. `app/routes.ts` enables flat-file route discovery. The home route currently contains a template GraphQL demo; the additional route is static template content.
- **Shopify integration:** `app/shopify.server.ts` configures the Shopify React Router library, Admin API version July 2026, scopes from environment configuration, embedded-app distribution, and Prisma-backed session storage.
- **Persistence:** `app/db.server.ts` provides the Prisma client. `prisma/schema.prisma` currently defines only the `Session` model, using a MySQL datasource.
- **Webhooks:** `app/routes/webhooks.app.uninstalled.tsx` removes stored sessions for an uninstalled shop. `app/routes/webhooks.app.scopes_update.tsx` updates the session's stored scopes.
- **Extensions:** The root package declares `extensions/*` as workspaces, but the `extensions` directory currently contains no extension implementation.

## Request and Data Flow

1. Shopify sends the merchant into the embedded app.
2. The app shell and protected routes authenticate the request through `authenticate.admin`.
3. Route loaders/actions perform server-side work. Shopify Admin API calls use the authenticated `admin` client; browser components receive only the route data needed to render.
4. Session data is persisted through Prisma. Shopify webhook routes authenticate webhook requests before updating or deleting session records.

The existing home-page GraphQL mutations are template demonstrations, not tax-domain services.

## Current Boundaries and Gaps

- No tax calculation or tax-display domain module is implemented.
- No tax-specific persistence model, storefront theme app extension, or other extension is present.
- Current Shopify configuration requests `write_products` and declares app-uninstalled and app-scopes-update webhooks. Any additional API access or extension behavior requires explicit product requirements and matching Shopify configuration.
- App configuration files contain local/development configuration. Runtime credentials and secrets must remain in environment variables and must not be committed or returned to clients.

Preserve the established React Router and Shopify authentication boundaries when adding functionality. Introduce a new domain or persistence layer only when required by defined product behavior.
