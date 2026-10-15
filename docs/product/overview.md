# Product Overview

## Product Direction

The repository is named `tax-display`, which suggests a Shopify app related to displaying tax information. The codebase does not yet define the target user, tax scenarios, calculation rules, supported markets, or where the information should appear. Treat the product direction as an unconfirmed intent, not as a complete requirement.

## Current Implementation

The current application is the Shopify React Router template with its demo content:

- The embedded app home page creates a sample snowboard through the Admin GraphQL API, sets a variant price, writes a demo product metafield, and upserts a demo metaobject.
- An additional page displays template guidance.
- There is no implemented tax calculation, tax display, merchant configuration, storefront integration, or tax-specific persistence model.
- The configured access scope is `write_products`; do not assume additional Shopify permissions are available.

These template behaviors are scaffolding and must not be described as tax-display product features.

## Requirements to Define

Before implementing tax-related behavior, product requirements should identify:

- The merchant or shopper problem and primary user.
- Which tax values or explanations must be shown, and their source of truth.
- Supported countries/regions, currencies, tax-inclusive or tax-exclusive scenarios, and relevant edge cases.
- Where information appears and how merchants configure it.
- Required Shopify data access, privacy expectations, and retention behavior.
- Acceptance criteria and observable success/error behavior.

Do not infer tax rules from the app name or silently choose business behavior. Resolve missing or conflicting requirements with the user before implementation.
