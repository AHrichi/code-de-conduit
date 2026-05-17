# 📁 Components Directory (`src/app/components/`)

This directory contains highly reusable, **Standalone** Angular UI components.

## Architecture for AI Agents

### Conventions
- **Standalone**: All components must have `standalone: true`. Do not create NgModules.
- **Control Flow**: Use the modern Angular Control Flow syntax (`@if`, `@for`, `@switch`). Do not use `*ngIf` or `*ngFor`.
- **Inputs/Outputs**: Use the new Signal-based inputs: `myInput = input<string>()` instead of `@Input()`.
- **Styling**: Prefer Tailwind CSS utility classes directly in the template. Use SCSS for complex animations or pseudo-elements.

### Key Components

#### 1. `RuleCardComponent`
- The core presentation layer for study rules.
- **Data Binding**: Receives a `RuleItem` via input.
- **Hide Mode Integration**: It relies on an `.content-wrapper` DIV with a `blur-lg opacity-20` class applied when the store's `hideInformation` is true. **Crucial**: Any new UI element (like a table or a list) added to this card MUST be placed inside the `.content-wrapper` so it respects the hide mode.

#### 2. `SignCardComponent`
- Similar to `RuleCardComponent` but specifically styled and tailored for displaying traffic signs.
- Handles responsive square rendering and icon-centric layouts.

#### 3. `ChapterNavigationComponent`
- A reusable footer navigation to allow users to move between chapters linearly.
