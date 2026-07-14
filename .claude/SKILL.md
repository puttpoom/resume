# Commit Message Style Guide

## Pattern

```
<type>(<scope>): <what changed> — <detail>
```

| field | value |
|-------|-------|
| **type** | `feat` · `fix` · `refactor` · `chore` · `style` · `docs` |
| **scope** | `desktop` · `mobile` · `data` · `ui` · `shared` (optional) |
| **what changed** | present tense verb phrase, no period |
| **— detail** | only when subject alone is unclear |

Subject ≤ 60 chars. Body only when "why" isn't obvious.

## Examples

```
feat(mobile): add EducationDetail push panel
refactor(desktop): remove window system, use sidebar panels
fix(data): correct project image paths
chore: update i18n keys for EN/TH
style(ui): tighten card spacing on mobile
```

## Rules

1. Write like telling a teammate — human readable
2. No padding: "implement", "add functionality for", "update X to Y"
3. Stage specific files, not blind `git add -A`
4. No `Co-Authored-By` unless asked
5. Never skip hooks (`--no-verify`)
