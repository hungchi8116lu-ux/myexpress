## ADDED Requirements

### Requirement: Sentry Dark Theme Body
The main application shell SHALL use the designated dark purple background and default sans-serif font setting.

#### Scenario: App loads
- **WHEN** the HTML document is rendered in the browser
- **THEN** the background must be `#1f1633` and font-family must default to Rubik.

### Requirement: Sentry Display Heading
The main `h1` element SHALL render in Dammit Sans (or aggressive fallback) with high contrast and tight leading.

#### Scenario: Heading is displayed
- **WHEN** the user sees the page title
- **THEN** it is displayed in white (`#ffffff`), 80px+ scale, and uppercase styling if applicable.

### Requirement: Tactile Form Inputs
Text inputs SHALL appear as sharp white boxes with 6px borders and specific focus states.

#### Scenario: User focuses input
- **WHEN** a user clicks the input box
- **THEN** it shows a subtle inset shadow and retains `#cfcfdb` border.

### Requirement: Sentry Primary Button
The main action button SHALL display the "tactile pressed effect" using muted purple.

#### Scenario: User hovers button
- **WHEN** a user hovers over the "Add" button
- **THEN** it elevates its shadow to `rgba(0, 0, 0, 0.18) 0px 0.5rem 1.5rem` over `#79628c` background.

### Requirement: Floating Price List Cards
Each item in the list of prices SHALL be a distinct floating card against the dark background.

#### Scenario: Items are rendered
- **WHEN** the list of prices is displayed
- **THEN** each item has an 8px border radius, a semi-transparent purple/glass background, and slight elevation shadow.

### Requirement: System Message Text
The help or system output text beneath the input SHALL look like a terminal log.

#### Scenario: System message is visible
- **WHEN** informational text is rendered
- **THEN** it uses `#e5e7eb` color, `Rubik` font with wide letter spacing, mimicking a system log status.
