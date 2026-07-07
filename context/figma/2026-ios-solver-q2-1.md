# Figma Source Summary: Solvely Figma Archives

The original setup parse only sampled the start of a `.fig` zip archive and therefore captured `PK...` bytes rather than the uncompressed Figma payload. The package now attaches the local Solvely Figma source archive directly and records archive-level metadata for future extraction.

## File

- Original setup name: 2026 iOS Solver 迭代【Q2】 (1).fig
- Attached local source: `/Users/mac/Desktop/放一下/_26 Solvely Design System Refresh.fig`
- Package symlink: `context/figma/_26 Solvely Design System Refresh.fig`
- Local opener: `context/figma/open-source.command`
- Archive size: 294,947,387 bytes
- Exported Figma file name from `meta.json`: `*26 Solvely Design System Refresh`
- Figma export timestamp: `2026-06-01T15:09:31.011Z`
- Source metadata: `context/figma/meta.json`
- Archive inventory: `context/figma/archive-inventory.json`
- Extracted thumbnail: `assets/figma-source-thumbnail.png`

## Extracted Signals

Archive structure:

- `canvas.fig`: 23,524,370 bytes, binary `fig-kiwi` payload.
- `thumbnail.png`: 29,541 bytes, extracted to `assets/figma-source-thumbnail.png`.
- `images/`: 608 image files, including 569 PNG and 39 JPG files.

Canvas-level readable signals:

- Colors: no readable color tokens found from local binary scan.
- Text styles and font names: no readable text-style tokens found from local binary scan.
- Component-like layer names: no reliable component names found from local binary scan.
- Readable layer names: no reliable layer names found from local binary scan.

MCP status:

- The source archive can be opened locally in Figma.
- Figma MCP cannot yet inspect the node tree because it requires a Figma cloud `fileKey` with editor access. A read-only `use_figma` probe returned an edit-access error.

## Integration Notes

Use this archive as the traceable source file for the current Solvely package. Treat current tokens, components, and UI-kit examples as inferred until a cloud Figma URL/fileKey is provided and MCP extraction can read nodes, variables, styles, components, and assets directly.
