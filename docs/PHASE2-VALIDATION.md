# COCOA TOOLS — Phase 2 Validation Notes

Validation performed against the current Phase 2 branch source.

## Source syntax
- `assets/app.js`: JavaScript syntax parse passed.
- `assets/tool-core.js`: JavaScript syntax parse passed.
- `tests/tool-core.test.js`: test-file syntax parse passed.

## Targeted runtime checks
14 direct runtime checks passed against the loaded `assets/tool-core.js` implementation:
1. BMI calculation.
2. BMI rejects zero/invalid measurements.
3. Percentage calculation.
4. Zero-interest amortizing loan payment.
5. Loan amount validation.
6. Metric length conversion.
7. Incompatible unit rejection.
8. Speed conversion.
9. Calendar age at month-end (31 January to 1 March in leap year).
10. Invalid calendar date rejection.
11. Accent/punctuation URL slug normalization.
12. CSV quoted comma and embedded newline parsing.
13. JSON-to-CSV quoting/escaping.
14. Password length and requested character group constraints using an injected deterministic crypto test double.

## GitHub Actions
A workflow runs `npm run check` and `npm test` on pushes and pull requests. GitHub Actions run #13 completed successfully for commit `6a4a659d60d266660a3fb8742bd5d5a47cd5d179`, including both syntax checks and the Node test suite. Commits after that successful run only update documentation/checklist files; the JavaScript and test sources are unchanged.

## Not covered yet
- Full browser automation, page rendering, mobile layout, keyboard navigation, accessibility audits, and end-to-end tool workflows.
- Individual QA for every one of the 24 tool registry entries.
- Production deployment and live email delivery.
