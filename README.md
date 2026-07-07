# Solvely.ai Design System

Reusable Open Design package for Solvely.ai solver experiences across web and app surfaces.

## Product Overview

Solvely.ai is represented in this workspace as an AI solver and guided-learning product. This package supports solver app and workspace surfaces where students capture a problem, inspect the parsed interpretation, follow step-by-step reasoning, verify the final answer, and continue with practice. The primary source evidence is the selected Figma file `2026 iOS Solver 迭代【Q2】 (1).fig`, recorded in `context/figma/2026-ios-solver-q2-1.md`. That filename is the strongest product signal available: it indicates an iOS solver iteration for Q2 2026.

The local Figma archive is now attached under `context/figma/` and can be opened from the package via `context/figma/open-source.command` or the linked `_26 Solvely Design System Refresh.fig` file. The archive exposes Figma export metadata, a thumbnail, and an image inventory, but the local `canvas.fig` payload is Figma's binary `fig-kiwi` format and does not expose readable node names, tokens, styles, or components without opening/saving the file in Figma with cloud file access.

- Source-backed context: Solvely.ai product identity and iOS solver surface.
- Source-backed archive evidence: `_26 Solvely Design System Refresh.fig`, `context/figma/meta.json`, `context/figma/archive-inventory.json`, and `assets/figma-source-thumbnail.png`.
- Inferred system defaults: calm study workspace, green solve action, blue learning accent, native app typography, solver-specific cards and input patterns.
- Explicit gaps: no MCP-readable Figma node tree, variables, component names, text styles, real logos, runtime app icons, fonts, or source code components were available to preserve.

Use this package for Solvely.ai learning, scanning, solution, explanation, history, and study-workspace UI. Do not use it as proof of recovered Figma colors or proprietary brand assets.

## Product Context

Primary UI surfaces supported by this package:

- Mobile solver intake: scan/import/manual problem entry and subject selection.
- Solution workspace: parsed problem, final answer, reasoning steps, and verification.
- Study history: saved problems, recent attempts, in-progress checks, and review actions.
- Follow-up composer: student questions, hints, and similar-practice generation.

Core capabilities evidenced or inferred from the Solvely.ai iOS solver context:

- AI-assisted problem recognition.
- Step-by-step explanation.
- Answer checking.
- Continued study and practice.

## Source Context

- `context/source-context.md`: setup contract, source list, and package requirements.
- `context/figma/2026-ios-solver-q2-1.md`: parsed Figma summary for the original Q2 solver export.
- `context/figma/_26 Solvely Design System Refresh.fig`: local symlink to the attached source archive.
- `context/figma/open-source.command`: opens the source archive in the local Figma app.
- `context/figma/meta.json` and `context/figma/archive-inventory.json`: archive metadata, image counts, hash, and MCP-access status.
- `PROVENANCE.md`: evidence boundary, missing assets, and package decisions.

No GitHub repositories or local code folders were linked. No `context/github/*/files/`, `context/local-code/*/files/`, `build/`, or preserved source assets were available during generation.

Preserved artifact status: the Figma archive link, export metadata, thumbnail, and image inventory are captured. Fonts/source files, build/runtime files, and source_examples/components were not captured in this run. The package keeps `assets/`, `fonts/`, and `source_examples/` as documented holding areas so future source-backed brand, font, runtime, and component evidence can be preserved without changing the package shape.

## Package Contents

- `DESIGN.md`: canonical design-system rules and usage guidance.
- `colors_and_type.css`: reusable CSS tokens, typography stacks, spacing, radii, shadows, and base component utility classes.
- `PROVENANCE.md`: source-backed evidence log and missing-evidence notes.
- `SKILL.md`: agent-usable skill entry for future Open Design work.
- `assets/`: source asset holding area; currently includes `figma-source-thumbnail.png` extracted from the attached Figma archive.
- `fonts/`: source font holding area; currently contains a note because no font files were supplied.
- `source_examples/`: original source component holding area; currently contains a note because no code snapshots were supplied.
- `preview/`: focused review cards for tokens, spacing, components, and asset evidence.
- `ui_kits/app/`: runnable React/Babel applied solver interface kit.

## Preview Manifest

- `preview/colors-primary.html`: inspect the inferred Solvely.ai primary, secondary, warning, danger, text, surface, and border tokens from `colors_and_type.css`.
- `preview/colors-theme-light.html`: inspect the light solver workspace palette with problem, answer, and step panels.
- `preview/colors-theme-dark.html`: inspect the dark-mode token behavior using the same solver modules.
- `preview/typography-specimens.html`: inspect display, heading, body, caption, and mono/math specimens bound to the package font stacks.
- `preview/spacing-tokens.html`: inspect the spacing scale from 4px through 72px and how it supports compact solver layouts.
- `preview/spacing-radius.html`: inspect chip, input, card, panel, and sheet radius tokens.
- `preview/spacing-shadows.html`: inspect card and sheet elevation tokens against light surfaces.
- `preview/components-buttons.html`: inspect source-informed button roles for solve, secondary, ghost, and danger actions.
- `preview/components-inputs.html`: inspect solver composer, subject chips, attachment actions, focus states, and validation copy.
- `preview/components-solver-workspace.html`: inspect the applied app-shell pattern: history rail, problem canvas, reasoning steps, answer card, and follow-up input.
- `preview/brand-assets.html`: inspect preserved asset status. Current source evidence includes a Figma thumbnail and archive inventory, but no source logos, app icons, fonts, or build assets were captured.

Keep this manifest synchronized with actual `preview/*.html` files whenever previews change.

## Reuse Workflow

1. Read `PROVENANCE.md` first to understand which values are evidence-backed and which are inferred defaults.
2. Read `DESIGN.md` for product posture, component rules, interaction behavior, voice, and anti-patterns.
3. Import `colors_and_type.css` before writing Solvely.ai artifacts.
4. Review the focused cards in `preview/` for token behavior and component examples.
5. Use `ui_kits/app/` as the starting point for solver workspace prototypes.
6. If future evidence adds a Figma cloud URL/fileKey with editor access, rerun MCP extraction and replace inferred tokens/components with node-backed values. Update `PROVENANCE.md`, copy any source files into the proper package folders, then revise `DESIGN.md`, `colors_and_type.css`, previews, and this README together.

## Package Reuse Guide

For new Open Design projects, start with `DESIGN.md` and `colors_and_type.css`, then choose one of the preview cards closest to the requested surface. For product UI, use `ui_kits/app/index.html` and its modular components as the implementation reference. For brand or asset-dependent work, check `assets/`, `build/`, and `fonts/` first; if they are still empty or absent, keep brand marks abstract and source limitations explicit.

## Design Priorities

- Make solving feel trustworthy: show input, parsed interpretation, steps, answer, and confidence.
- Keep the primary action singular and obvious.
- Use compact, native-feeling app components rather than marketing sections.
- Show recoverable states for blurry images, unsupported inputs, partial confidence, and follow-up questions.
- Avoid unverified performance claims, fake logos, and generic AI gradient branding.
