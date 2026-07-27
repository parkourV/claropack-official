# DESIGN.md — Claropack (final brand)

Produced via: canvas-designer subagent (Canvas Design Contract Gate passed)

## Design Direction
Move away from the green/eco-centric look of competitors to a **"Crystal Clear & Professional"** aesthetic. Ice blues and crisp whites emphasize the transparency and hygiene of PET/PP plastic products. High-density B2B information grids; factory credibility (certifications, capacity) and clear product specifications over lifestyle marketing. English only.

## Reference Sources
- vendor/open-design/adapter/STATIC_POLICY.md
- vendor/open-design/upstream/design-systems/enterprise/DESIGN.md — high-contrast corporate structure, adapted to lighter "Ice Blue" profile
- vendor/open-design/upstream/design-systems/enterprise/tokens.css — spacing, radius, typography scales
- vendor/open-design/upstream/craft/anti-ai-slop.md — avoid generic SaaS patterns
- Link Research Notes:
  - bioleaderpack.com (benchmark, web_fetch): IA adopted — hero one-liner, category grid, factory profile, certification wall, Why Choose Us 6-grid, per-line Solutions blocks, deep footer nav, B2B inquiry form, WhatsApp float. Do NOT copy its copywriting/images/green palette.
  - jinghaipacking.en.alibaba.com (user's store, web_fetch): product taxonomy — PET Cold Cups (89/93/95/98mm, 12–22oz), Injection PP Cups, PLA Cups, Paper Cups, Lids, Sealing Film; MOQ 1000pcs, $0.02–0.10; custom logo printing, ODM, SGS.
  - Richpack company profile PDF: spec-table format reference for cup size tables (top/bottom diameter, height, capacity, packing).

## Design Tokens
- Colors: --primary-ice #0EA5E9; --primary-deep #0C4A6E; --bg-clear #F8FAFC; --surface-white #FFFFFF; --border-frost #E2E8F0
- Typography: system-ui stack (English project): system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif. NO external font CDN, NO @import.
- Radius: --radius-product 8px
- Shadow: --shadow-subtle 0 1px 3px rgba(0,0,0,0.05)

## Page Structure
1. **Home**: Hero (clear PET cups + ice visual, "One-Stop Solution for Premium Beverage Packaging") → 4-card category grid (PET / PP / Lids & Films / Paper & PLA) → Factory strength stats (years, 98.6% on-time dispatch, 4.9 rating) → Certification wall → Why Choose Us 6-grid (Small MOQ, Custom Logo, ODM/OEM, Food Grade, Fast Shipping, Global Support) → per-line Solutions blocks (features + applications) → inquiry CTA.
2. **Products** (/products + category anchor/tabs): grid of product cards with specs (caliber 89–98mm, volume 12–22oz, MOQ 1000pcs); spec tables per series.
3. **About / Factory** (/about): production lines, QC, company story.
4. **Contact** (/contact): B2B inquiry form (Name, Email, Company, Country, Inquiry Type: Sample/Bulk/Customization, Order Quantity select, Product Category select, Message) + WhatsApp link. Static form (no backend yet) — submit shows success note + mailto fallback.

## Component Plan
- Header: sticky nav + "Get a Quote" primary button
- ProductCard (data-component="product-item"): specs + Request Quote hover action
- InquiryForm (data-component="b2b-form"): B2B fields incl. Inquiry Type, Order Quantity
- CertSlider (data-component="trust-marquee"): certification badges marquee
- FeatureItem (data-component="value-prop"): Why Choose Us icons
- WhatsAppFloat (data-component="whatsapp-anchor"): fixed floating chat button

## Copy Tone
Professional, manufacturing-direct, efficient. E.g. "Custom Logo Printing on PET & PP Cups," "Food Grade Materials," "Direct from Manufacturer Pricing." Forbidden: "Revolutionizing", "AI-powered", generic hype.

## Responsive Rules
- Mobile: single-column category grid; horizontal-scroll cert wall; thumb-reachable WhatsApp button
- Tablet: 2-col product grid
- Desktop: 4-col product grid; full nav

## Implementation Notes
- data-component tags on all major sections
- Inquiry form includes Inquiry Type (Sample Request / Bulk Order / Customization)
- Images only from Image Manifest (local public/assets/images/) — no external hotlinks
- No cart/checkout/payment; inquiry-driven only
- Placeholder contact details (WhatsApp/email) marked TODO for user's real info

## Image Manifest
| Filename | Source | Usage |
| --- | --- | --- |
| public/assets/images/hero-clear-cup.jpg | imageGenerate: Clear PET plastic cups with ice and colorful fruit drinks, studio lighting, water droplets, white background | Hero |
| public/assets/images/cat-pet.jpg | imageGenerate: Stack of clear PET plastic cups, 98mm caliber, product photography | PET category card |
| public/assets/images/cat-pp.jpg | imageGenerate: Frosted PP injection cups with lids, bubble tea inside, product shot | PP category card |
| public/assets/images/cat-lids.jpg | imageGenerate: Various plastic cup lids, flat and dome, clear and black, arranged neatly | Lids category card |
| public/assets/images/cat-paper.jpg | imageGenerate: Kraft and white paper cups with PLA clear cups, clean studio arrangement | Paper & PLA category card |
| public/assets/images/factory-line.jpg | imageGenerate: Clean modern plastic cup production line, automated machinery | Factory section |
| public/assets/images/custom-print.jpg | imageGenerate: Plastic cup with custom brand logo printing, vivid colors, mockup | Customization section |
| (certifications) | CSS text badges (SGS-audited supplier, Food Contact Safe, Trade Assurance) — no fabricated cert-logo URLs | Cert wall |

Note: subagent-suggested cert-logo URLs were unverifiable placeholders; replaced with text badges until the user provides real certificate scans.

## Risks / Open Questions
- AI product shots need user approval; replace with real factory photos ASAP for accuracy (rim/caliber details).
- Static form has no backend; wire Supabase/Edge Function later if the user wants inquiries saved.
- "Claropack" is the final brand name.
