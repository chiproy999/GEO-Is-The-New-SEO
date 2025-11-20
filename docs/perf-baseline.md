# Performance Baseline (2025-11-18)

Initial bundle snapshot generated with `npm run analyze` prior to refactors:

| Asset | Size | gzip |
| --- | --- | --- |
| `index-CNDQMuOO.js` | 548.50 kB | 152.01 kB |
| `index-COhMAJuy.css` | 104.52 kB | 16.54 kB |

Key observations:

1. Primary JS chunk exceeded Vite's 500 kB warning threshold and included every route/component.
2. Fonts were pulled from Google Fonts at runtime which added extra DNS/TLS cost and layout shift.
3. No performance guardrails existed; `npm run verify` could succeed even if payloads regressed.

Actions taken in this branch introduce route-level code splitting, lazy CTA surfaces, self-hosted fonts, manual vendor chunking, and an automated budget check (`npm run perf:budget`). Rerun `npm run analyze` to regenerate `dist/public/bundle-report.html` whenever large UI changes land.


