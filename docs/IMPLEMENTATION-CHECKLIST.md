# COCOA TOOLS — Implementation Checklist

Status definitions: **Done** = implemented and verified; **In progress** = code exists but not fully verified; **Blocked** = requires external configuration; **Planned** = not implemented.

## Phase 1 — foundation
- [x] Locate and inspect existing repository.
- [x] Record brand conflict findings and working-name decision.
- [x] Document architecture and tool quality gates.
- [x] Add shared responsive design system stylesheet.
- [ ] Verify every HTML page loads with no missing assets.
- [ ] Replace unsupported 500+ tool marketing claim with verified count.
- [ ] Replace placeholder canonical domain after domain is supplied.
- [ ] Run browser, accessibility, and link checks.

## Existing tool catalog audit
- [x] Enumerate the 24 current registry entries and document actual supported scope in `docs/TOOL-INVENTORY.md`.
- [ ] Verify all 24 tools end-to-end: metadata, errors, boundaries, keyboard/mobile behavior, copy/download/reset.
- [x] Add Node built-in test coverage for shared core calculations and converters.\n- [ ] Add browser-level tests for every tool implementation.
- [ ] Mark unsupported or server-dependent capabilities honestly.

## Phase 2 — functional core\n- [x] Add reusable validated core functions for calculations, dates, unit conversion, CSV/JSON, slugs, and secure passwords.\n- [x] Add adjustable CSS box-shadow controls and stricter gradient validation.\n- [x] Add text result download and accessible live result announcements.\n- [x] Add syntax and targeted runtime validation; see `docs/TOOL-INVENTORY.md`.\n- [ ] Observe a passing GitHub Actions run for the Node test suite.\n- [ ] Complete browser-based QA across all current tools.\n\n## Content and policy
- [ ] Review all legal pages against actual data collection and third-party services.
- [ ] Add original blog articles with editorial review and citations where needed.
- [ ] Configure contact delivery backend and test it end-to-end.
- [ ] Configure real canonical origin, sitemap, robots, and Search Console.
- [ ] Review current Google AdSense / Publisher Policies before applying.

## 20-category expansion
For each category, add only tools that have a distinct user need and can be implemented and tested. Target 50+ per major category is a long-term roadmap, not a launch claim.
- [ ] Image Tools
- [ ] PDF Tools
- [ ] Text Tools
- [ ] Calculators
- [ ] SEO Tools
- [ ] Developer Tools
- [ ] File Conversion Tools
- [ ] Unit Conversion Tools
- [ ] Time and Date Tools
- [ ] Math Tools
- [ ] Color Tools
- [ ] CSS Tools
- [ ] HTML Tools
- [ ] JavaScript Tools
- [ ] Data and JSON Tools
- [ ] Security and Password Utility Tools
- [ ] Education Tools
- [ ] Writing Tools
- [ ] Business Tools
- [ ] Internet and Website Utility Tools

## External dependencies / blockers
- [ ] Final brand and legal clearance.
- [ ] Production domain.
- [ ] Contact email delivery provider + server-side secrets.
- [ ] Hosting and HTTPS.
- [ ] AdSense publisher account and required consent setup (only if/when applying).
