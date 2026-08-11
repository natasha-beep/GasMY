# MRANTI Park × Gas Malaysia — Workshop Portal

Static GitHub Pages prototype.

## What is authoritative
For all MAS Land Detail calculations, use **Land Information → Size (acre) → Revised Masterplan (2026)**.

Current verified revised acreage used in this prototype:
- Total mapped land: 492.56 acres
- Phase 1 — Innovation Gateway: 105.25 acres
- Phase 2 — Learning & Creative Media: 185.08 acres
- Phase 3 — Living Lab: 202.23 acres
- Developmental (MRANTI): 66.23 acres
- Tenured Lessee: 163.75 acres
- Reserve: 51.95 acres
- Potential (Vacant): 191.08 acres

## Deploy to GitHub Pages
1. Create a repository.
2. Upload all files/folders in this package to the repository root.
3. In GitHub: **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select `main` and `/ (root)`.
6. Save.

`index.html` will be the site entry point.

## Important controls
- The `~700 MW` park power requirement is marked as a **working estimate** and should be owner-confirmed before the Gas Malaysia workshop.
- HIVE 5 cooling information is **site-specific** and must not be extrapolated to total park thermal demand.
- Gas/Cogen/biomethane content is labelled **Concept / Opportunity**, not existing or approved infrastructure.
- Do not upload confidential raw Drive documents, TNB bills, engineering drawings or source spreadsheets to a public repository.

## Main files
- `index.html` — portal
- `css/styles.css` — styling
- `js/app.js` — navigation
- `data/park_summary.json`
- `data/energy.json`
- `data/utility_registry.json`
- `data/sources.json`

The Power BI embed URL is already included in `index.html`.
