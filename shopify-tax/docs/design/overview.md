# Design Overview

## Current UI Baseline

This is an embedded Shopify Admin application. The app shell is rendered by `app/routes/app.tsx` and uses Shopify App Bridge through `AppProvider`. Navigation currently contains `Home` and `Additional page`.

The existing pages are still React Router template examples, not approved product designs:

- `app/routes/app._index.tsx` renders a Shopify page with sections, paragraphs, buttons, links, stacks, and boxes using Polaris Web Components (`s-*`). Its demo action creates a sample product, updates its variant price, and upserts a demo metaobject. It shows a loading state, a success toast, an edit-product action, and formatted JSON responses.
- `app/routes/app.additional.tsx` is a static template information page.
- `app/root.tsx` loads Shopify's Inter font and provides the document shell.

Do not treat template copy, demo actions, or the current navigation as approved tax-display product requirements. No design assets or product-specific visual specifications are currently present in this directory.

## Design Constraints

- Keep the application embedded in Shopify Admin and follow the existing App Bridge and React Router navigation patterns.
- Prefer Shopify Polaris Web Components for Admin UI, consistent with the current implementation and `docs/AGENTS.md`.
- Before changing a page, identify its product requirement, inspect any supplied design assets, and reuse suitable existing components.
- Specify and implement loading, empty, success, and error states for asynchronous product workflows where applicable.
- Avoid inventing tax settings, storefront placements, labels, or interactions until product requirements define them.

## Open Design Questions

The intended tax information, supported merchant workflows, target placement (Admin, storefront, or both), configuration controls, and responsive behavior are not defined by the current implementation. Record these in a feature-specific design document when requirements are available.
