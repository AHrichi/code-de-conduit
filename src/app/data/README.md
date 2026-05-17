# 📁 Data Directory (`src/app/data/`)

This directory acts as the central **data store** for all the static content in the driving license application. It uses plain TypeScript files instead of an external database to allow the app to work fully offline (especially when packaged with Electron).

## Architecture for AI Agents

When expanding or modifying content, follow these conventions:

### 1. `chapter-X.data.ts`
- Each chapter has its own dedicated data file (e.g., `chapter-1.data.ts`).
- **Typing**: Files must strictly implement the `Chapter` interface exported from `src/app/models/content.models.ts`.
- **Images/SVGs**: Use inline SVGs or public URLs. If an `icon` is provided but no `imageOrSvg`, the UI will render a FontAwesome icon instead.
- **Tables**: Use the `distancesTable` or `speedLimits` properties inside a `RuleItem` if tabular data needs to be presented. Do not try to hardcode HTML tables inside the `description` string.

### 2. `tests/chapter-X.test.data.ts`
- Quizzes are separated into their own folder (`src/app/data/tests/`).
- **Typing**: Each file exports an array of `QuizQuestion` objects.
- **Important**: The `correctAnswerIndex` is `0`-indexed.

### 3. `test.registry.ts`
- **CRITICAL**: If you add a new test file, you **MUST** register it in `test.registry.ts` under the correct key (e.g., `'ch11'`). 
- The routing system dynamically pulls tests from this registry based on the URL parameter (`/test/:chapterId`).

### 4. `chapters.data.ts`
- This is the master index of all chapters. If you add a new chapter, it must be imported and added to the `CHAPTERS` array here so it appears in the navigation and dashboard menus.
