# 📁 Pages Directory (`src/app/pages/`)

This directory contains the **routed views** (pages) of the application.

## Architecture for AI Agents

- **Structure**: Organized by feature areas: `study`, `dashboard`, `test`, `report`.
- **Lazy Loading**: The application utilizes modern router lazy loading for these components via `loadComponent` in the app routing file.

### 1. `study/chapters/`
- Contains individual page components for each chapter (e.g., `Chapter1Component`, `Chapter2Component`).
- **Data Fetching**: These components directly import their specific data payload (e.g., `CHAPTER_1_DATA`) and render lists of `RuleCardComponent` and `SignCardComponent`.
- **Why individual files?**: Although they look similar, splitting them allows for chapter-specific UI overrides, specialized interactive components, and keeps the bundle sizes optimized per route.

### 2. `test/`
- Contains the `QuizComponent`.
- **Dynamic Routing**: The quiz component relies on a route parameter (`:chapterId`) to look up the correct test array from the `TEST_REGISTRY` (in `src/app/data/tests/test.registry.ts`).
- If an agent is tasked with adding a new chapter test, they do not need to create a new page component; they only need to update the data files and the registry.

### 3. `dashboard/`
- The entry point of the app. It calculates global progress by reading the `AppStore` and iterating over the `CHAPTERS` array.
