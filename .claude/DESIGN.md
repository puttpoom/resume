Build a developer PORTFOLIO for a Full Stack Developer with TWO responsive
experiences that share the same content and an Apple design language:
 - Wide screens (PC / laptop browser)  → a full macOS DESKTOP.
 - Narrow screens (phone)              → an iOS-style SETTINGS window.
Switch between the two at a ~820px breakpoint.

STACK: Next.js + Tailwind + TypeScript. Apple system font stack
(-apple-system, "SF Pro Display", "Inter" fallback). System blue accent
(#007AFF light / #0A84FF dark). Realistic placeholder content I can swap.

SHARED CONTENT (both layouts): About, Skills, Projects, Experience, Contact.

=== DESKTOP → macOS desktop ===
- Menu bar (top, translucent blur):  logo, frontmost app's name in bold,
  File / Edit / View / Window / Help, and on the right: battery + wifi glyphs,
  a LIVE clock, and the light/dark toggle.
- Full-screen wallpaper (macOS Sonoma-style; a different wallpaper per theme).
- DOCK at the bottom: translucent rounded bar. Icons magnify + lift on hover.
  On hover, show a POPOVER above the icon — a small rounded card with a pointer
  arrow showing the app's name and a one-line description. Open apps get a dot
  beneath the icon.
- Clicking a dock app opens a real WINDOW: rounded corners, big shadow, title bar
  with WORKING traffic lights (red = close, yellow = minimize, green =
  maximize/restore). Windows drag by the title bar, click brings to front, new
  windows cascade.
- Windows styled as macOS apps: About = Notes, Skills = Launchpad grid,
  Projects = Finder (favorites sidebar + file icons), Experience = card of rows,
  Contact = Contacts card + Email button, Résumé = Preview with a Download button.

=== MOBILE → iOS Settings window ===
- The whole screen is Settings. A list with: a search field, an Apple-ID-style
  profile card (avatar, name, role, "Available for work"), then rows — each a
  colored rounded-square icon + label + chevron — for About, Skills, Projects,
  Experience, Contact.
- Tapping a row PUSHES to a detail view (slide transition) with a "‹ Settings"
  back button. Detail content = grouped rounded cards with inset hairline
  separators, iOS-style, including a real toggle switch on About.
- iOS status bar feel (time + battery).

=== TECH STACK ICONS (both layouts) ===
- In Skills, each technology uses its OWN real brand logo (React, Next.js,
  TypeScript, Tailwind, Node.js, Python, PostgreSQL, Redis, Docker, AWS, GraphQL,
  Git…) — NOT letters. Use clean SVG logos (e.g. Simple Icons), each on a
  rounded-square tile in an Apple home-screen-style grid. Keep brand colors but
  ensure they stay legible in both light and dark.

=== LIGHT / DARK MODE ===
- Support both. Default to the system setting (prefers-color-scheme) AND provide
  a manual toggle — in the menu bar on desktop, and in the Settings list on mobile.
- Dark = macOS dark: near-black translucent chrome, dark window bodies (~#1E1E1E),
  light text, brighter blue accent, a dark wallpaper. Every element must be
  readable in both themes.

=== UX / QUALITY ===
- System UI icons (dock, setting rows) = clean SF-Symbol-style line glyphs, white
  on colored tiles. Tech icons = real brand logos (above).
- Accessible: semantic HTML, keyboard navigable, visible focus rings, respects
  prefers-reduced-motion. Content is real readable text — nothing to decode.
- Set colors, radii, spacing, and the theme as design tokens in one place.

DO NOT: no terminal, no gradients except the wallpapers, no emoji as icons, no
generic AI purple-gradient hero. Match Apple's real spacing, radii, and typography.