# TIDI (Total Impact Development Initiative) — Design System v1.0

**Doc type:** Design System Reference
**Scope:** Color, type, voice, and components for TIDI's brand and website.

> **⚠️ Flag before use:** This source doc's headline ("Bridging care, building confidence and inspiring change") and Champion Blue value (`#151130`) are **identical to Horizon Development Initiative's (HDI) design system** — down to the exact wording and hex code. TIDI's actual confirmed tagline is **"Igniting Hope, Shaping Futures"** and its logo uses Navy `#1A3C7A`, not `#151130`. Only the Lavender Tonic (`#C8BEFA`) matches TIDI's real logo color exactly. This looks like an HDI template that wasn't fully updated for TIDI — recommend confirming with whoever produced this file before treating it as final. Everything below is transcribed as shown, with this discrepancy flagged rather than silently corrected.

---

## 01 — Color

### Lavender warmth meets deep blue conviction.

| Name | Hex | Role |
|---|---|---|
| Champion Blue ⚠️ | `#151130` | Primary — foundation *(conflicts with TIDI logo Navy `#1A3C7A` — confirm which is correct)* |
| Lavender Tonic | `#C8BEFA` | Primary — action *(matches TIDI's actual logo lavender exactly)* |
| Lavender Tint | `#F2F0FE` | Light background |
| Mid Purple | `#7A66D6` | Secondary elements |
| Warm Off-White | `#FAF9FF` | Body backgrounds |
| Subtle Mist | `#E4E3F0` | Borders & dividers |

---

## 02 — Typography

### Asul carries authority. General Sans does the work.

Clean serif display handles the inspiration, while a highly legible sans-serif conveys resilient innovations.

| Style | Font | Size |
|---|---|---|
| Display / H1 | Asul Bold | 56px |
| H2 | Asul Bold | 40px |
| H3 | Asul Bold | 28px |
| H4 | Asul Bold | 22px |
| Lead | Asul Regular | 19px |
| Body | Asul Regular | 16px |
| Small | General Sans Medium | 14px |
| Eyebrow | Manrope SemiBold | 12px |

**Example scale (as shown in the system):**
- Display/H1: "Aa Inspiring change"
- H2: "Resilient Innovations"
- H3: "Zero Obstacles to Nation-building"
- H4: "Holistic Outreach Programs"
- Lead: "We cultivate a world where everyone steps confidently into potential and self-sustainability."
- Body: "Through community empowerment, health awareness, and educational access, we de-risk the growth journey."
- Small: "All key metrics are verified by independent third-party impact assessments."
- Eyebrow: "VERIFIED IMPACT OUTCOME"

> Note: this headline/body copy set ("Resilient Innovations," "Zero Obstacles to Nation-building," "Holistic Outreach Programs") reads as HDI's H.O.R.I.Z.O.N. framework language, not TIDI's Education/Health/Human Services pillar language — another sign this template needs a TIDI-specific content pass.

---

## 03 — Components

### Buttons, tags, cards.

**Buttons**
- **Primary (filled):** e.g. "Partner with us" — solid Lavender Tonic fill.
- **Secondary (outlined):** e.g. "Read our mission" — outlined, transparent fill.
- **Tertiary (text link):** e.g. "Explore programs →" — Mid Purple/Lavender colored text with arrow, no container.

**Tags / Chips**
Examples: "NGO-led," "Community Impact," "Verified Outreach" (green) — low-saturation pill labels for category/status markers.

**Pillars of Impact — Cards**
Icon (in a soft rounded square) + H4 title + short description. Example set shown: **Education** ("Facilitating robust digital classrooms and physical resources to ignite self-sustaining skills in youth"), **Health & Wellness** ("Empowering communities with localized medical outreach, sanitation networks, and hygiene awareness"), **Community Empowerment** ("Nurturing cooperative structures, entrepreneurship grants, and resilient municipal infrastructure").

> Note: for TIDI specifically, this card set should map to TIDI's actual three pillars — **Education, Health, Human Services** — rather than "Community Empowerment," which is closer to HDI's own pillar language. Confirm and relabel before implementation.

---

## 04 — Signature Element: "The Verified Impact Outreach Metric."

A full-bleed dark (Champion Blue) band containing 3 stat cards — the flagship trust module. Each card shows a large numeral, a short label, and a small green "● Verified · [source]" tag.

**Example stats shown in the system:**

| Stat | Label | Source tag |
|---|---|---|
| 50,000+ | Lives reached through holistic outreach programs | ● Verified · FY2025 |
| 120+ | Active resilient communities built and sustained | ● Verified · Partner Data |
| 850+ | Outreach and zero-obstacle nation-building events | ● Verified · Field Reports |

> Note: these exact figures and phrasing ("zero-obstacle nation-building events") appear copied directly from HDI's own signature stat module. TIDI will need its own real (or clearly placeholder-labeled) figures here — using HDI's numbers for TIDI would misrepresent TIDI's actual track record, especially given TIDI is a newly established organization.

---

## Do / Don't Summary

**Do**
- Use Lavender Tonic for exactly one high-heat action button per section.
- Always accompany every green "Verified" mark with independent data.
- Let Asul headlines have generous line height and max 2 lines.

**Don't**
- Never paint a full section background in Champion Blue with Lavender Tonic body text.
- Avoid setting body copy or fine print in Asul display serif.
- Never add a "Verified" status pill to speculative or unsourced outcomes.

---

## Recommended Next Step

Before this system is used to build any TIDI page: reconcile the Champion Blue value, the headline/tagline copy, the pillar card labels, and the signature-metric figures against TIDI's actual confirmed brand assets (Navy `#1A3C7A`, tagline "Igniting Hope, Shaping Futures," and the Education/Health/Human Services pillar structure) so the design system doesn't accidentally ship HDI's identity under TIDI's name.
