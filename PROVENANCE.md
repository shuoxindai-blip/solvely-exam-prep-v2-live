# Solvely.ai Design System Provenance

## Evidence Read

- `context/source-context.md`: generated source contract and package requirements.
- `context/figma/2026-ios-solver-q2-1.md`: local parse summary for `2026 iOS Solver 迭代【Q2】 (1).fig`.
- Existing `DESIGN.md`: initial scaffold with no concrete tokens.

## Intake Result

- GitHub repositories: none linked.
- Local code folders: none linked.
- Browser-selected local code snapshots: none present.
- Figma source: attached locally at `context/figma/_26 Solvely Design System Refresh.fig` as a symlink to `/Users/mac/Desktop/放一下/_26 Solvely Design System Refresh.fig`.
- Figma local open status: confirmed with macOS `open`; `context/figma/open-source.command` opens the same source archive in the local Figma app.
- Figma archive metadata: captured in `context/figma/meta.json`; the source export name is `*26 Solvely Design System Refresh`, exported at `2026-06-01T15:09:31.011Z`.
- Figma archive inventory: captured in `context/figma/archive-inventory.json`; the archive contains `canvas.fig`, `thumbnail.png`, and 608 image files (`569` PNG, `39` JPG).
- Figma MCP status: not MCP-readable yet. A read-only `use_figma` probe against the locally opened file returned an edit-access/cloud-file error. MCP extraction still requires a Figma cloud URL/fileKey with editor access.
- Uploaded brand assets: no separate brand assets were supplied; `assets/figma-source-thumbnail.png` was extracted from the attached Figma archive.
- Binary assets and fonts found in workspace before generation: none.

## Package Decisions

- Product context is limited to Solvely.ai and the iOS solver iteration filename.
- Color, spacing, typography, and component rules in `DESIGN.md` and `colors_and_type.css` remain documented as inferred Solvely.ai solver defaults, not recovered Figma tokens. The attached archive improves traceability and openability, but does not yet provide an MCP-readable node tree.
- No `build/` directory was created because there were no captured runtime app icons, installer icons, tray icons, or wordmarks under `context/.../files/build/...`.
- `assets/` now preserves the Figma thumbnail. `fonts/` and `source_examples/` include README notes documenting that no source-backed font files or source components were available to preserve.
- `ui_kits/app/` is an applied kit for the evidenced solver product category. It is not a copy of source implementation code.

## Audit Notes

Future maintainers should replace inferred tokens with extracted values if the Figma archive is uploaded/saved to Figma cloud and a `figma.com/design/...` URL with editor access is added. At that point, use Figma MCP `get_metadata`, `get_design_context`, `get_variable_defs`, and/or the Open Design `figma-extract -> token-map` pipeline, then update `DESIGN.md`, `colors_and_type.css`, previews, and UI kit examples from node-backed evidence.
