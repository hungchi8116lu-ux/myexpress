## 1. Setup & CSS Foundations

- [x] 1.1 Link Google Fonts in `public/index.html` for `Rubik` and establish a general reset.
- [x] 1.2 Define Sentry CSS variables (`:root`) in `public/stylesheets/style.css` for palette (`#1f1633`, `#2b1f47`, `#79628c`, `#c2ef4e`, `#cfcfdb`, `#e5e7eb`).
- [x] 1.3 Apply body styles, fonts, and dark purple background (`#1f1633`).

## 2. Global Layout & Typography

- [x] 2.1 Update `h1` in `public/index.html` to leverage `Dammit Sans` alternative (e.g. bold wide font fallback) and white text with maximum scale.
- [x] 2.2 Style `#app` or main container to use proper Sentry layout principles (responsive padding, content islands).

## 3. Element Overhaul (Inputs & Buttons)

- [x] 3.1 Style `input` fields for the sharp 6px white box, handling the inner inset shadow and focus states.
- [x] 3.2 Update the primary "Add" button to the Sentry specs: background `#79628c`, uppercase `Rubik`, wide letter spacing, and the inset tactile shadow. Add hover effects with elevation.
- [x] 3.3 Style the system text below the input to use gray (`#e5e7eb`) with terminal/log visual structure, perhaps `Monaco` or clear `Rubik`.

## 4. List Rendering Updates

- [x] 4.1 Update DOM structure for `li` items if needed (add div wrapping or class names) within `index.html`.
- [x] 4.2 Write CSS for `.price-list li` to make them floating dark purple/glass cards with an 8px radius and level-2 elevation `rgba(0,0,0,0.1) 0px 10px 15px -3px`.
- [x] 4.3 Vertically align price data and "PriceBlame" data inside the cards.

## 5. Review & Polish

- [x] 5.1 Test responsive behavior from 576px up to 1152px to ensure the UI does not break.
- [x] 5.2 Validate against `DESIGN.md` intentions (no pure black, tactile feeling achieved, correct fallbacks used).
