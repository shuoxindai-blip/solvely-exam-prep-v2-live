# Solvely.ai App UI Kit

Runnable applied interface kit for Solvely.ai solver workflows.

## Structure

- `index.html`: browser entry that loads React, ReactDOM, Babel, `../../colors_and_type.css`, then renders `window.App`.
- `components/App.jsx`: app shell composition and local interaction state.
- `components/Sidebar.jsx`: subject navigation, history, and saved problem rail.
- `components/SolverQueue.jsx`: queued problem list and status modules.
- `components/ProblemCanvas.jsx`: current problem, parsed interpretation, answer, and solution steps.
- `components/StepCard.jsx`: reusable numbered reasoning step.
- `components/InputBar.jsx`: follow-up composer with text input, attachment action, and submit behavior.

## Usage Workflow

1. Open `ui_kits/app/index.html` in the Open Design preview or a browser.
2. Use it as a starting point for Solvely.ai app or responsive web solver screens.
3. Keep `../../colors_and_type.css` as the single token source.
4. Copy components into a product prototype only when the target surface also needs solver history, problem intake, reasoning steps, answer verification, or follow-up questions.

## Design Notes

- The kit models the evidenced product category: an iOS solver iteration for Solvely.ai.
- The implementation is inferred because no source app code was linked.
- The interface keeps one primary action visible, supports real composer input, and separates problem parsing, answer, reasoning, and next practice.
- Components expose themselves on `window` so the entry page can load direct JSX files without a build step.

## Source Basis

- `../../context/source-context.md`
- `../../context/figma/2026-ios-solver-q2-1.md`
- `../../DESIGN.md`
- `../../colors_and_type.css`

No original source components or brand assets were available to copy into this kit.
