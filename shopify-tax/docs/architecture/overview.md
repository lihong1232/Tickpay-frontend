# Architecture Overview

## Runtime Shape

This repository is a non-embedded Shopify app with a Theme App Extension. The app host uses React 18, React Router 7, TypeScript, and Vite; the storefront block is implemented with Liquid. Shopify CLI configuration and the `dev` script provide the local development entry point.

## Application Layers

- **Document shell:** `app/root.tsx` renders the HTML document and route outlet.
- **App host:** `app/routes/app.tsx` authenticates the merchant and hosts a standalone onboarding page. It is not rendered as an embedded Admin app.
- **Theme extension:** `extensions/tax-display/` contains the `tax-note` app block, which renders merchant-provided text in a compatible Online Store theme.
- **Shopify integration:** `app/shopify.server.ts` configures the Shopify React Router library, Admin API version July 2026, session storage, and webhooks. The storefront block makes no Admin API calls and requests no Admin API scopes.
- **Persistence:** `app/db.server.ts` provides the Prisma client. `prisma/schema.prisma` currently defines only the `Session` model, using a MySQL datasource.
- **Webhooks:** `app/routes/webhooks.app.uninstalled.tsx` removes stored sessions for an uninstalled shop. `app/routes/webhooks.app.scopes_update.tsx` updates the session's stored scopes.
- **Extensions:** The root package declares `extensions/*` as workspaces; Shopify CLI discovers the Theme App Extension from its `shopify.extension.toml` manifest.

## Request and Data Flow

1. Shopify hosts the merchant-provided note in the storefront through the theme app block.
2. The app host handles Shopify installation and provides onboarding; protected app routes authenticate through `authenticate.admin`.
3. Session data is persisted through Prisma. Shopify webhook routes authenticate webhook requests before updating or deleting session records.

## Current Boundaries

- The extension displays only text entered by the merchant in the theme editor. It does not calculate tax, read Shopify tax settings, or infer tax-inclusive pricing.
- No tax-specific persistence model or Admin API access scope is required for the current behavior.
- The app retains session storage and app-uninstalled cleanup for Shopify installation lifecycle handling.
- App configuration files contain local/development configuration. Runtime credentials and secrets must remain in environment variables and must not be committed or returned to clients.

Keep the storefront block independent of app-host sessions. Add tax calculation or other data access only after the source of truth and applicable business rules are defined.
