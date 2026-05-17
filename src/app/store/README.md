# 📁 Store Directory (`src/app/store/`)

This directory contains the **Angular Signals-based state management** logic for the application.

## Architecture for AI Agents

This app uses modern Angular 18/19 state management via `@ngrx/signals` or plain Angular Signals. **Do NOT use RxJS BehaviorSubjects or NgRx Store (Actions/Reducers).**

### 1. `app.store.ts` (or similar main store files)
- **Structure**: We use `signalStore` from `@ngrx/signals` to create a unified, reactive state.
- **Global State**: The store tracks globally needed information such as:
  - `hideInformation`: A boolean toggle for "Reading Mode" (which applies a glassmorphism blur to rule answers).
  - `memorizedRules`: A set/array of IDs representing the rules the user has marked as "memorized".
- **Reactivity**: Use `computed()` to derive state (e.g., progress percentages) rather than manually updating derived values.
- **Injection**: The store is provided in root (`providedIn: 'root'`) and injected into components using `inject(AppStore)`.

### Guidelines for modifying State:
- **Immutability**: Always use `patchState` or the `.update()` method on signals to create new references.
- **Persisting Data**: If you add a new state property that needs to survive app reloads, ensure you hook it into the `localStorage` sync mechanism if one exists in the store logic.
