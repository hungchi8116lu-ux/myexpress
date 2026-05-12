## Context

The current `index.html` and `style.css` use a generic interface for the price change list. We are overhauling the visual language to use the "Sentry" aesthetic, resulting in the "PriceBlame" design. This requires updating the DOM structure and CSS properties heavily, utilizing specific design tokens (e.g., `#1f1633` background, `#79628c` buttons).

## Goals / Non-Goals

**Goals:**
- Translate the 6 specific visual elements (body/h1/input/button/li/help-text) to Sentry's dark IDE design system.
- Build a maintainable CSS file with clear styling rules (variables or direct mapping) corresponding to `sentry.md` rules.

**Non-Goals:**
- Do not refactor the data fetching or backend express app logic.
- Do not introduce React, Vue, or other complex frontend frameworks (stick to Vanilla HTML/CSS).
- Do not change how items are stored or updated in the database.

## Decisions

**1. CSS Management approach**
- *Decision:* Use standard CSS with custom properties (CSS variables).
- *Rationale:* Vanilla CSS with variables maps well to the design tokens described in `sentry.md` (e.g., `--color-bg-primary: #1f1633`, `--color-btn-muted: #79628c`). It allows us to keep the build process simple while still achieving the design system layout.

**2. Font Loading**
- *Decision:* Import Google Fonts for `Rubik` and use a local or fallback font stack for `Dammit Sans` if unavailable (e.g., Arial Black / Impact fallback).
- *Rationale:* Sentry uses custom fonts. `Rubik` is easily accessible.

**3. Styling Strategy by Element**
- `body`: Dark purple (`#1f1633`) with `Rubik` default.
- `h1`: `Dammit Sans`, white, 80px+ scale.
- `input`: Light background (`#fff`) with 6px border radius, inset shadow on focus.
- primary button: `background: #79628c`, uppercase, `letter-spacing: 0.2px`, inset shadow.
- `li`: Floating cards with glass effect or `rgba(255, 255, 255, 0.05)`, 8px radius.
- System text (under input): `e5e7eb` color, monospace or clear Rubik.

## Risks / Trade-offs

- *Risk:* `Dammit Sans` is a commercial/custom font and may not be available on Google Fonts.
- *Mitigation:* Use an aggressive fallback stack like `sans-serif` or `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto...` with bold weights, or a similar free display font.
