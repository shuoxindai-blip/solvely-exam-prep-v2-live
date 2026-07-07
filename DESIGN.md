# Solvely.ai Design System

> Category: Custom
> Surface: web and app
> Canonical source: `context/source-context.md`
> Primary evidence: `context/figma/2026-ios-solver-q2-1.md`

Solvely.ai is treated here as an AI solver and guided-learning product. The available source evidence names a Figma file, `2026 iOS Solver 迭代【Q2】 (1).fig`, which points to an iOS solver iteration, but the local parse did not expose readable colors, type styles, layer names, component names, assets, or font files. This design system therefore preserves the evidence boundary: product rules are grounded in the Solvely.ai identity and iOS solver context, while colors and component decisions are documented as inferred package defaults for future Solvely.ai artifacts.

## Source Context

- `context/source-context.md` identifies the canonical title as Solvely.ai Design System and records no linked GitHub repositories or local code folders.
- `context/figma/2026-ios-solver-q2-1.md` records the selected source file `2026 iOS Solver 迭代【Q2】 (1).fig`, size 109.9 MB, last modified 2026-06-01, with a 512 KB local parse window.
- The Figma parse explicitly reports no readable color tokens, text-style tokens, component-like layer names, or readable layer names.
- No logos, app icons, tray icons, wordmarks, avatars, source font files, package source files, or build resources were present in the workspace.
- `PROVENANCE.md` is the package-level evidence log and must be updated whenever richer source evidence is added.

## Product Context

The strongest source-backed product signal is "iOS Solver". The system therefore focuses on the core capabilities an AI solver surface must express: problem intake, image/manual entry, parsed problem confirmation, step-by-step reasoning, answer verification, study history, and follow-up questions. Any artifact generated from this system should make those capabilities visible before decorative brand expression.

## 1. Visual Theme & Atmosphere

Solvely.ai should feel like a calm learning workspace: fast enough for AI problem solving, structured enough for students to trust multi-step reasoning, and friendly enough for repeated homework use. The UI posture is app-like rather than marketing-led.

- Use clean white and cool blue-tinted surfaces for study focus.
- Reserve green for the primary solving action and verified progress states.
- Use soft blue as the secondary learning accent for hints, scan states, and explanation panels.
- Keep decorative flourishes limited to one solver-gradient surface or one progress animation per screen.
- Prioritize legible problem statements, step-by-step reasoning, source inputs, and answer confidence over large hero copy.

## 2. Color

Use `colors_and_type.css` as the executable token source. The source Figma summary did not expose real color tokens, so this palette is an inferred Solvely.ai solver default, not a recovered brand extraction.

### Core Tokens

- `--svy-bg`: oklch(98.5% 0.008 210), page background
- `--svy-surface`: oklch(100% 0 0), default panels and cards
- `--svy-surface-soft`: oklch(96.5% 0.018 210), elevated study panels
- `--svy-fg`: oklch(19% 0.028 235), primary text
- `--svy-muted`: oklch(49% 0.026 235), secondary text
- `--svy-border`: oklch(89% 0.014 220), separators and hairlines
- `--svy-primary`: oklch(62% 0.16 156), solve action and confirmation
- `--svy-primary-ink`: oklch(20% 0.06 155), text on light primary surfaces
- `--svy-secondary`: oklch(62% 0.14 235), learning accent, scan focus, selected tabs
- `--svy-warning`: oklch(76% 0.14 74), caution and partial confidence
- `--svy-danger`: oklch(60% 0.18 28), errors and blocked inputs

### Usage Rules

- Primary green appears on one main action per screen: solve, continue, verify, or submit.
- Secondary blue supports information architecture: active tab, camera focus ring, selected subject chip, or explanation rail.
- Avoid purple-heavy AI gradients and generic beige teaching canvases.
- Do not use color alone for correctness; pair status color with text and iconography.
- Use `color-mix()` for state tints rather than new ad hoc colors.

## 3. Typography

No source font files or named Figma text styles were readable. Use native San Francisco-compatible stacks for iOS realism and strong system fallback.

- Display: `var(--svy-font-display)` = `SF Pro Display`, `Inter`, system UI
- Body: `var(--svy-font-body)` = `SF Pro Text`, `Inter`, system UI
- Mono/math: `var(--svy-font-mono)` = `SFMono-Regular`, `ui-monospace`, `Menlo`

### Scale

- App title: 32/38, weight 760
- Screen heading: 24/30, weight 720
- Section heading: 18/24, weight 680
- Body: 15/22, weight 450
- Caption: 12/16, weight 560
- Math/code: 14/20, mono, tabular numerics

Headlines should be concise and functional. For solver screens, the problem and answer hierarchy is more important than editorial display type.

## 4. Spacing

Use a compact app rhythm with generous touch targets.

- Base scale: 4, 8, 12, 16, 20, 24, 32, 40, 56, 72
- Mobile page inset: 16-20
- Desktop page inset: 32-48
- Card padding: 16 mobile, 20-24 desktop
- Minimum tap target: 44px iOS, 48px Android
- Default radius: 16
- Compact chip radius: 999
- Sheet radius: 28 top corners on mobile; 20 on desktop panels

Use whitespace to separate learning phases: input, interpretation, solving, verification, and next action.

## 5. Layout & Composition

Solvely.ai surfaces should be arranged around the solver workflow.

### Mobile Solver

1. Top bar with subject, history, or plan context.
2. Problem intake area: camera/import/manual input.
3. AI interpretation preview: what the system thinks the problem says.
4. Step-by-step solution with expandable reasoning.
5. Bottom composer/action bar for follow-up questions.

### Desktop/Web Workspace

Use a three-region layout when space allows:

- Left rail: recent problems, subjects, saved chats.
- Main canvas: problem, answer, reasoning steps.
- Right inspector: hints, formula references, confidence, exports.

At tablet widths, collapse the right inspector into a sheet or tab. At mobile widths, collapse navigation into bottom tabs and keep one primary task visible at a time.

## 6. Components

### Buttons

- Primary button: filled `--svy-primary`, 44px minimum height, 14-16px label.
- Secondary button: white/surface, border token, subdued text.
- Ghost button: transparent, used only in dense toolbars.
- Destructive button: `--svy-danger`, requires clear text label.

### Inputs

- Problem composer supports text, image attachment, subject selector, and solve action.
- Input focus uses a blue ring from `--svy-secondary`.
- Validation errors appear inline with concise recovery copy.

### Solver Cards

- Problem card: contains raw input, parsed text, attachments, and subject.
- Step card: numbered reasoning step with equation/body, optional hint, and confidence.
- Answer card: visually decisive but not oversized; include unit, final expression, or uncertainty note.
- History item: subject, timestamp, short problem summary, status.

### Navigation

- Desktop: vertical rail with active state and recent-work list.
- Mobile: bottom navigation for Home, Scan, History, Profile.
- Avoid navigation that looks like design preview controls or theme toggles.

### Modals and Sheets

- Use bottom sheets for camera/import options on mobile.
- Use centered dialogs only for confirmations, account actions, and destructive operations.

## 7. Motion & Interaction

- Default transition: 160ms ease-out for hover/focus and 220ms cubic for sheets.
- Solver generation should show structured progress: parsing, solving, checking.
- Use skeleton lines for answer loading, not generic spinners as the only feedback.
- Respect `prefers-reduced-motion`; disable decorative progress shimmer and large transforms.
- Copy, expand, regenerate, and attach actions must be real interactive controls in prototypes.

## 8. Voice & Brand

Tone is clear, supportive, and precise.

- Explain what the AI is doing: "正在识别题目", "已拆成 4 个步骤".
- Avoid inflated claims like "10x smarter" without a source.
- Use student-centered verbs: scan, solve, explain, practice, review.
- Error copy should be recoverable: "图片有点模糊，重新拍摄或手动输入题目。"
- Keep subject labels concrete: Algebra, Geometry, Calculus, Chemistry, Physics.

## 9. Anti-Patterns

- Do not invent Solvely.ai logos, app icons, or proprietary brand assets.
- Do not claim recovered Figma tokens; the available parse did not expose them.
- Do not use generic purple AI gradients as the main product background.
- Do not turn the app into a marketing landing page when the task calls for solver UI.
- Do not show designer controls, theme knobs, screen-count badges, or generated-output metadata inside product artifacts.
- Do not bury the answer below decorative cards; problem, result, and steps are the core.
- Do not use anonymous "Feature One" cards or fake performance metrics.
