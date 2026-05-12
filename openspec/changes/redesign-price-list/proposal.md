## Why

The current Price Change List UI resembles a basic, uninspired table that is boring and lacks tactile feedback. By applying the "Sentry" design language—using a biophosphorescent dark theme of deep purple-black, a dual-typography approach (Dammit Sans and Rubik), and "tactile" inset shadow elements—we will create a professional, vibrant, and highly engaging interface called "PriceBlame", tailored perfectly for catching price hikes with the feel of a premium developer tool.

## What Changes

- Redesign the global container (`body` and `#app`) using the Sentry dark theme palette (`#1f1633`).
- Update the main heading (`h1`) to use the display font `Dammit Sans` at scale.
- Redesign form inputs to have light backgrounds with precise focus states (6px border radius).
- Overhaul the primary "Add" button with Sentry's signature muted purple (`#79628c`), complete with inset shadows and uppercase wide-spaced text.
- Convert list items (`li`) into floating frosted glass or deep purple content cards (8px radius) with ambient elevation.
- Redesign the help text below the input field to resemble a terminal log using `Rubik` and clear typography (`#e5e7eb`).

## Capabilities

### New Capabilities
- `ui-price-list-sentry`: Redesign of the Price Change list UI with Sentry's visual theme.

### Modified Capabilities
- (None - this is purely a visual design overhaul)

## Impact

- `public/index.html` structure will be modified to support the new styles.
- `public/stylesheets/style.css` will be rewritten to implement the new Sentry design tokens.
- No impact on the Express server (`app.js`, `routes/`, `db.js`) or core data logic.
