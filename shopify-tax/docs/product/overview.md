# Product Overview

## Product Direction

Tax display is a Shopify Theme App Extension that lets a merchant place and configure a tax-information note in a compatible Online Store theme.

## Current Implementation

The app includes a non-embedded Shopify app host and a theme app block named `Tax note`. Merchants add the block through the theme editor and enter the text that appears on the storefront. The block has no default tax statement, does not calculate tax, and does not infer price tax treatment.

## Requirements to Define

Any future tax calculation or dynamic tax display must define:

- The merchant or shopper problem and primary user.
- Which tax values or explanations must be shown, and their source of truth.
- Supported countries/regions, currencies, tax-inclusive or tax-exclusive scenarios, and relevant edge cases.
- The source of truth and where the information appears.
- Supported storefront placements and merchant configuration controls.
- Required Shopify data access, privacy expectations, and retention behavior.
- Acceptance criteria and observable success/error behavior.

Do not infer tax rules from the app name or the merchant's note. Resolve missing or conflicting requirements with the user before implementation.
