Stage all relevant changes and commit using the project's commit message pattern.

## Commit Message Pattern

```
<type>(<scope>): <what changed> — <detail>
```

**type** — pick one:
- `feat` new feature or visible behavior
- `fix` bug fix
- `refactor` restructure without behavior change
- `chore` tooling, deps, config, cleanup
- `style` UI/CSS only
- `docs` documentation only

**scope** — optional, component area: `desktop` | `mobile` | `data` | `ui` | `shared`

**what changed** — short verb phrase, present tense, no period, ≤ 60 chars total subject

**detail after —** — only when context is non-obvious from subject alone

## Body (optional)

Write body only when "why" isn't obvious from the subject. 2–3 lines max. Plain sentences, no bullet spam.

## Examples

```
feat(mobile): add EducationDetail push panel
refactor(desktop): remove window system, use sidebar panels — sidebar layout already in place
fix(data): correct project image paths
chore: update i18n keys for EN/TH
style(ui): tighten card spacing on mobile
```

## Rules

1. Write like telling a teammate — human readable, not robotic
2. No "implement", "add functionality for", "update the X to Y" padding
3. Stage specific files, not blind `git add -A`
4. No `Co-Authored-By` unless explicitly asked
5. Never skip hooks (`--no-verify`)
