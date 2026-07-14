# Commit & Commit Message Skill

## Pattern

```
<type>(<scope>): <what changed> — <why or detail>
```

- **type**: `feat` | `fix` | `refactor` | `chore` | `style` | `docs`
- **scope**: optional, component area (e.g. `desktop`, `mobile`, `data`)
- **what changed**: short verb phrase, present tense, no period
- **detail after —**: only when context is non-obvious

Subject ≤ 60 chars. Body only when "why" isn't clear from subject alone.

## Examples

```
feat(mobile): add EducationDetail push panel
refactor(desktop): remove window system, use sidebar panels
fix(data): correct project image paths
chore: update i18n keys for EN/TH
```

## Rules

1. Human-readable — write like telling a teammate what changed
2. No "implement", "add functionality for", or bloated phrases
3. Scope optional but helps navigation in large refactors
4. Never add "Co-Authored-By" unless explicitly requested
5. Stage specific files — avoid `git add -A` on accident

## When to use

- Any `git commit` in this project
- Invoke with `/caveman-commit` for ultra-compressed suggestions
