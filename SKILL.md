---
name: solvely-ai-design-system
description: Use the Solvely.ai Design System for solver, study, explanation, history, and AI learning interfaces based on the project evidence package.
user-invocable: true
---

# Solvely.ai Design System Skill

## What's inside

- `README.md`: package guide, product context, source references, preview manifest, and reuse workflow.
- `DESIGN.md`: canonical visual, layout, component, motion, voice, and anti-pattern rules.
- `colors_and_type.css`: CSS tokens, typography stacks, spacing, radii, shadows, and base utility classes.
- `PROVENANCE.md`: evidence log and missing-source notes.
- `preview/`: focused review cards for colors, themes, typography, spacing, component states, and brand asset status.
- `assets/`: includes `figma-source-thumbnail.png` from the attached Figma archive; reserved for future real logos, app icons, wordmarks, avatars, and image assets.
- `fonts/`: reserved for preserved source font files and future `@font-face` bindings.
- `source_examples/`: reserved for copied high-signal original source components when code evidence exists.
- `ui_kits/app/`: runnable React/Babel applied solver interface kit.

No `build/` directory exists in this package because no captured runtime icons or installer assets were present. If future evidence adds `context/.../files/build/...`, preserve representative originals in root `build/` and update this skill.

## Source Context

The available evidence is limited to:

- `context/source-context.md`
- `context/figma/2026-ios-solver-q2-1.md`
- `context/figma/_26 Solvely Design System Refresh.fig` (local symlink to `/Users/mac/Desktop/放一下/_26 Solvely Design System Refresh.fig`)
- `context/figma/open-source.command`
- `context/figma/meta.json`
- `context/figma/archive-inventory.json`

The attached local Figma archive can be opened in the Figma app and preserves export metadata, thumbnail evidence, and image inventory. Figma MCP cannot yet inspect the node tree because the local archive does not provide a cloud `fileKey` with editor access. Treat the palette and components as inferred Solvely.ai solver defaults, not recovered proprietary tokens, until a cloud Figma URL/fileKey is added and MCP extraction succeeds.

## When to use this skill

Use this skill for design interfaces, prototypes, and production-oriented artifacts such as:

- Solvely.ai solver workspaces.
- AI problem intake, scan, upload, and manual-entry flows.
- Step-by-step solution and explanation screens.
- Study history, saved problems, review, and follow-up question interfaces.
- Responsive web, mobile web, tablet, and app-like learning surfaces that need Solvely.ai visual rules.

Do not use it for unrelated generic AI chat, marketing landing pages, or products that need verified source brand assets not present in this package.

## How to use

1. Read `README.md` and `PROVENANCE.md` to understand evidence limits.
2. Read `DESIGN.md` before choosing layout, color, motion, or copy patterns.
3. Load `colors_and_type.css` into the artifact and use its `--svy-*` tokens.
4. Check `preview/` for the focused token and component cards.
5. Inspect `ui_kits/app/` for a runnable applied solver workspace.
6. Inspect `assets/`, `build/`, `fonts/`, and `source_examples/` when they exist or receive future source files.
7. Keep primary actions, solver states, and step-by-step reasoning visible. Avoid generic marketing sections and fake metrics.

## Design System Highlights

Grounded source evidence: Solvely.ai identity, `2026 iOS Solver 迭代【Q2】 (1).fig` as an iOS solver iteration, and the attached local `_26 Solvely Design System Refresh.fig` archive. Inferred implementation defaults and MCP limits are documented in `PROVENANCE.md`.

- Calm cool surfaces with a green solve action and blue learning accent.
- System UI typography tuned for native app and web workspace readability.
- Solver-specific modules: problem intake, parsed interpretation, step cards, answer card, history rail, confidence/status modules, and follow-up composer.
- Compact spacing with 44px minimum iOS tap targets and pill-shaped chips/actions.
- Motion favors structured solving progress over decorative AI shimmer.
- Voice is direct, supportive, and recovery-oriented.
