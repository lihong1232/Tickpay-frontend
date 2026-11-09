# Design Overview

## Current UI Baseline

The product surface is a Shopify Theme App Extension block rendered in the storefront. The non-embedded app host remains available for installation onboarding and is rendered by `app/routes/app.tsx`.

- `extensions/tax-display/blocks/tax-note.liquid` renders merchant-entered text and inherits the host theme's typography.
- `app/routes/app._index.tsx` gives merchants instructions for adding and configuring the block.
- `app/root.tsx` provides the app host document shell; the storefront block does not depend on it.

## Design Constraints

- Keep the app host non-embedded; storefront content belongs in the theme extension.
- Keep the block lightweight, configurable in the theme editor, and styled to inherit the active theme.
- Display only merchant-provided wording. Do not imply a tax calculation or choose tax wording on the merchant's behalf.

## Open Design Questions

Future dynamic tax values, placement defaults, and localization requirements need separate product decisions before implementation.
