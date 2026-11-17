# COCOA TOOLS — Architecture & Delivery Plan

## Brand decision (working, not legal clearance)
- Working brand: **COCOA TOOLS**
- Tagline: **Smart Tools. Simple Solutions.**
- ZYVO is not recommended for launch pending legal clearance: public search results show existing software/business brands and multiple trademark records.
- COCOA TOOLS has not been legally cleared. Run an official trademark similarity search in each intended market and secure the matching domain before launch.
- Never use a placeholder canonical host in production. Set the real origin in one deployment configuration and generate canonical URLs/sitemap from it.

## Current repository baseline
This repository is currently a static HTML/CSS/JavaScript site, not a React/Vite application. It contains core pages and a browser-side tool registry. The initial stylesheet referenced by pages was missing; Phase 1 adds the stylesheet expected at `/assets/styles.css`.
Keep the static architecture for the first quality milestone: it is lightweight, progressively enhanced, and can be migrated to React later if the tool registry and routing complexity justify it. Avoid introducing a framework merely for appearance.

## Architecture
- **Pages:** static semantic HTML documents for Home, Tools, Categories, About, Contact, Privacy, Terms, Disclaimer, Cookies, Blog, FAQ, Advertise, Tool detail, and 404.
- **Shared presentation:** `assets/styles.css` provides design tokens, responsive layout, accessible focus states, dark theme variables, reusable cards/forms/tool panels, reduced-motion support.
- **Tool registry/runtime:** `assets/app.js` owns canonical tool metadata, routing, input validation, execution, result rendering, copy/download/reset actions, and local history/favorites where supported.
- **Tool implementation contract:** every entry must identify a real implementation; no placeholder handler or demo output. Unsupported server-dependent features must be marked unavailable until configured.
- **Content:** each blog post is a standalone, edited article with unique metadata, date, internal links, and meaningful instructions.
- **SEO:** unique titles/descriptions, real canonical origin, crawlable internal links, sitemap, robots, Open Graph, breadcrumbs, and appropriate structured data.
- **Privacy/security:** prefer local processing; validate all inputs; never use `innerHTML` with untrusted user input; do not store sensitive user data; external services require explicit disclosure.
- **Contact:** client validation alone is not delivery. Production requires a serverless/API endpoint or configured email provider, spam protection, and tested delivery.
- **Ads:** reserve labeled, non-interactive ad containers only on substantial content pages. Never put ads adjacent to primary tool controls or fake download buttons. No ads on empty/unavailable pages.
- **Deployment:** static hosting (Cloudflare Pages, Netlify, Vercel, or GitHub Pages) with custom domain and HTTPS. Production host must replace all example canonical URLs.

## Major category taxonomy
Image; PDF; Text; Calculators; SEO; Developer; File Conversion; Unit Conversion; Time & Date; Math; Color; CSS; HTML; JavaScript; Data & JSON; Security & Password Utilities; Education; Writing; Business; Internet & Website Utilities.

## Quality gates for every tool
1. Dedicated clean URL and unique metadata.
2. Clear purpose, accurate description, inputs, constraints, and supported file types/limits.
3. Real implementation with deterministic, validated output.
4. Error, empty, boundary, and invalid-input states.
5. Copy/download/reset behavior tested where applicable.
6. Keyboard and mobile usability.
7. Instructions, relevant FAQs, and related links.
8. Unit or browser tests recorded before marking complete.

## Contact service configuration
The current static form cannot deliver email on its own. Before production, configure one of:
- A serverless endpoint (recommended) with SMTP/API secret stored as deployment environment variables; or
- Formspree/Resend/another provider with verified sender/domain and server-side validation.
Never put private API keys in client JavaScript. Test success, invalid data, rate limiting, and provider failure.

## AdSense readiness checklist
- [ ] Publish substantive original content and genuinely useful working tools.
- [ ] Publish accurate privacy/cookie disclosures reflecting actual analytics, ads, consent, and data flows.
- [ ] Add owner/contact identity and accessible navigation.
- [ ] Configure domain, HTTPS, Search Console, sitemap, and ads.txt only when an AdSense publisher ID exists.
- [ ] Ensure consent handling meets applicable regional requirements.
- [ ] Keep ads distinguishable and away from navigation/tool controls.
- [ ] Review current Google Publisher Policies before applying.
- [ ] No approval guarantee.

## Phase roadmap
- Phase 1 — brand audit, architecture, working design foundation, fix broken assets and false claims.
- Phase 2 — audit every existing tool implementation; tests and dedicated SEO URLs.
- Phase 3 — category expansion in small tested batches; never generate fake catalog entries.
- Phase 4 — original blog articles and legal pages reviewed against real data practices.
- Phase 5 — contact backend, deployment/domain, technical SEO, accessibility and performance testing.
- Phase 6 — AdSense readiness review and application only after substantial site quality is established.
