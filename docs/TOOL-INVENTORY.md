# COCOA TOOLS — Current Tool Inventory

Snapshot from the current browser tool registry on the Phase 2 branch.

**Registry count: 24 tool entries.** This is not a claim that 24 tools have passed complete browser/end-to-end QA. The reusable core has targeted runtime checks; full input, result, mobile, keyboard, copy/download, and error-state QA remains open for each page.

## Current entries

| Tool | Category | Current scope / notes |
|---|---|---|
| Word Counter | Text | Word, character, sentence, paragraph and reading-time counts |
| Character Counter | Text | Character and word counts |
| Case Converter | Text | Uppercase, lowercase, title and sentence case |
| Text to Slug | Text | ASCII URL slug normalization |
| Password Generator | Security | Secure random generation, length 8–128, selected character groups |
| UUID Generator | Developer | Browser crypto UUID |
| JSON Formatter | Data & JSON | JSON parse and pretty-print |
| Base64 Encoder / Decoder | Developer | Text Base64 conversion; browser string APIs |
| Color Converter | Color | HEX to RGB/HSL; HEX input only |
| CSS Gradient Generator | CSS | Linear gradient from exactly two HEX colors |
| Box Shadow Generator | CSS | Adjustable offsets, blur, spread, color, opacity and inset |
| BMI Calculator | Calculators | Metric weight/height; screening estimate only |
| Percentage Calculator | Calculators | Percentage of a value |
| Age Calculator | Time & Date | Calendar years, months and days |
| Loan Calculator | Business | Fixed-rate amortizing loan estimate; zero-interest case supported |
| Keyword Density Analyzer | SEO | Top word-frequency percentages (English-oriented tokenization) |
| Meta Tag Generator | SEO | Title, description and keyword meta markup |
| URL Parser | Internet | HTTP/HTTPS URL component parsing |
| Speed Converter | Unit Conversion | km/h, mph, m/s and knots |
| Unit Converter | Unit Conversion | Length only: m, km, cm, mm, mile, foot and inch in core; UI exposes a subset |
| Markdown to HTML | HTML | Basic heading/emphasis/code and line-break conversion; not a full CommonMark parser |
| CSV to JSON | Data & JSON | Header-row CSV with quoted fields, commas and embedded newlines |
| JSON to CSV | Data & JSON | Array of objects; nested values serialized as JSON cells |
| Hash Generator | Security | Web Crypto digest algorithms; not password hashing |

## Category coverage

Categories with at least one current registry entry: Text, Security & Password, Developer, Data & JSON, Color, CSS, Calculators, Time & Date, Business, SEO, Internet & Website, Unit Conversion, HTML.

Categories currently with no registry entries: Image, PDF, File Conversion, Math, JavaScript, Education, Writing.

The category cards are taxonomy/navigation only where no tool entry exists. Do not advertise empty categories as populated or claim 50 tools per category.

## QA status

- JavaScript syntax parsing: passed for `assets/app.js` and `assets/tool-core.js`.
- Targeted runtime checks: 14 checks passed against the loaded core source, covering BMI, input validation, percentages, zero-interest loan payments, loan validation, unit compatibility, speed conversion, calendar age/month-end dates, invalid dates, slug normalization, quoted CSV, CSV export escaping, and password constraints.
- Node `node:test` suite: authored in `tests/tool-core.test.js`; automated CI execution has not yet been observed.
- Browser end-to-end and mobile QA: not yet performed.
- All 24 tools: not yet individually certified as complete.
