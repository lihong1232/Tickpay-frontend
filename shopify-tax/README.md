# Tax Display

Tax Display is a Shopify app with a Theme App Extension. Merchants can add the **Tax note** app block to a compatible Online Store theme and enter the text shown on their storefront. The block displays merchant-provided copy only; it does not calculate tax or determine whether prices include tax.

## Local Development

Requirements: Node.js `>=20.19 <22 || >=22.12`, pnpm, and Shopify CLI.

```shell
pnpm install
pnpm run dev
```

Connect the app to a development store when prompted. Shopify CLI starts the app and makes the theme extension available for preview in the theme editor.

## Add the Block

In Shopify admin, open **Online Store > Themes > Customize**. Add **Tax note** from the Apps section to a compatible theme section, enter the desired tax information, and save the theme.

## Project Structure

- `extensions/tax-display/` contains the storefront app block and its theme-editor translations.
- `app/` contains Shopify authentication, session storage, onboarding, and webhook handlers.
- `prisma/` stores Shopify app sessions.

## Validation

```shell
pnpm run typecheck
pnpm run lint
pnpm run build
pnpm exec shopify app build
```

## to run this project, run these commands

$env:NODE_EXTRA_CA_CERTS = "$HOME\Volvo_CA.pem"
pnpm run dev
