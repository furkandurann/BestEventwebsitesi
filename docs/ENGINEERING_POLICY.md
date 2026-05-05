# Best Event Engineering Policy

Last updated: 2026-03-22

This repository follows a Google-aligned quality baseline built on current official guidance from:

- Google Search Essentials: https://developers.google.com/search/docs/essentials
- Helpful, reliable, people-first content: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Core Web Vitals: https://web.dev/articles/vitals
- Core Web Vitals thresholds: https://web.dev/articles/defining-core-web-vitals-thresholds

## Policy

1. People first, search second.
   Content must be written to solve real visitor intent, not to inflate rankings with thin, repetitive, or mass-produced pages.

2. Technical SEO must be correct by default.
   Every indexable page must have a unique title, a descriptive primary heading, correct canonical handling, crawlable internal links, and valid structured data only when it matches visible content.

3. Performance is a release requirement.
   The engineering target is the current Core Web Vitals baseline at the 75th percentile:
   LCP <= 2.5s, INP <= 200ms, CLS <= 0.1.

4. Build outputs are not source of truth.
   `dist/` is a generated artifact. Source files live in `src/`, `public/`, `scripts/`, and project configuration files.

5. Tracked repository junk is not allowed.
   The repository must not track `dist/`, `.DS_Store`, `.MOV`, `.mov`, `.HEIC`, `.heic`, or similar raw leftovers unless there is an explicit documented exception.

6. Production pages must not ship obvious software faults.
   No broken routes, missing referenced assets, invalid imports, duplicate canonicals, silent build failures, or known console/runtime errors are acceptable.

7. Measurement must stay enabled.
   Build verification, sitemap generation, analytics/tracking hooks, and web-vitals instrumentation should remain intact unless replaced with a better equivalent.

## Workspace Rules

- Keep generated output out of commits unless a deployment platform explicitly requires it.
- Treat `public/` as curated production assets, not as a dumping ground for raw media exports.
- Prefer optimized `webp`, `avif`, and responsive variants over oversized originals.
- Remove or convert raw camera/video formats before they become part of the tracked source tree.
- Run `npm run audit:workspace` before large cleanup or release commits.
- Run `npm run build` before considering a release-ready state.

## Definition Of Done

A change set is not considered complete until:

- the workspace audit passes or its exceptions are documented,
- the production build succeeds,
- the affected pages render without obvious runtime issues,
- the affected pages comply with title, heading, canonical, structured-data, and internal-link expectations,
- the change improves or preserves people-first content quality.
