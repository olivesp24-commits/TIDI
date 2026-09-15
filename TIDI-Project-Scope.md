# Total Impact Development Initiative (TIDI) — Website Project Scope

**Doc type:** Design & Content Direction
**Prepared for:** TIDI Website v1.0
**Status:** Draft for internal alignment

**Tagline:** Igniting Hope, Shaping Futures.

> **Brand assets confirmed:** TIDI's logo is a hexagonal mark formed by six interlocking hands — symbolizing collaboration and community — paired with a wordmark and the tagline above. It comes in two approved color treatments (see Section 3.2). This resolves the earlier flag about the mismatched HDI Figma link; TIDI's own identity is now confirmed as distinct.

---

## 1. Project Overview

TIDI is a newly established NGO working across three pillars — **Education, Health, and Human Services** — to build resilient communities and break cycles of poverty. As a new organization, the website carries extra weight: it's likely the *first* touchpoint many donors, partners, and government stakeholders will have with TIDI, so it needs to establish credibility fast while being honest about being early-stage (no need to fake a decade of history — lean into founding clarity of mission instead).

The site should feel **modern, warm, and evidence-driven** — combining the emotional warmth of Luminate Marketing's photography-led storytelling, the structured multi-cause navigation of VidyaKutumb, and the stats-and-goals transparency of EVECE — filtered through a distinct TIDI visual identity once confirmed.

---

## 2. Brand Foundation

### Mission
To deliver holistic, community-driven programs that improve access to quality education, essential health services, and comprehensive human support systems, enabling people to achieve their full potential and break cycles of poverty and vulnerability.

### Vision
A world where every individual has equitable access to the knowledge, health, and social support needed to thrive and contribute meaningfully to society.

### Three Core Pillars

| Pillar | Focus |
|---|---|
| **Education** | Expanding access to quality learning for children, youth, and adults; literacy, skills development, vocational training, lifelong learning; partnering with schools/communities to reduce barriers to schooling. |
| **Health** | Preventive healthcare, health education, essential services access; maternal and child health, sexual and reproductive health, mental well-being, community health awareness; partnering with local health systems and community health workers. |
| **Human Services** | Social support, protection, and empowerment for vulnerable groups (women, children, youth, persons with disabilities, marginalized families); capacity building, livelihood support, psychosocial care, pathways to social inclusion and economic independence; strengthening community structures for dignity, safety, and opportunity. |

### Approach (site should reflect these principles structurally, not just state them)
- Locally led solutions
- Evidence-based programming
- Strong partnerships (community, government, other organizations)
- Transparency, accountability, measurable impact
- Sustainable, inclusive, responsive programming

This "Approach" section is a natural candidate for a dedicated "How We Work" page or homepage module — similar to how EVECE's "Our Goals" stats section makes principles concrete with numbers.

---

## 3. Design Direction

### 3.0 Logo & Brand Marks
- **Primary icon:** six interlocking hands forming a hexagon — a strong visual metaphor for collaboration, unity, and the "total impact" of many hands working together. Works well as a standalone favicon/app icon at small sizes since the hexagon silhouette holds up when the hand detail is lost.
- **Two approved color treatments:**
  - **Navy-on-white** — Navy `#1A3C7A` icon + wordmark, used as the primary/default lockup.
  - **Lavender-on-white** — Lavender `#C8BEFA` icon with navy `#1A3C7A` wordmark and tagline — a lighter secondary treatment for dark backgrounds or softer contexts.
- **Lockup structure:** icon centered, wordmark ("TOTAL IMPACT DEVELOPMENT INITIATIVE") in tracked-out uppercase below it, a short rule, then the tagline ("IGNITING HOPE, SHAPING FUTURES") beneath — consistent with the lockup pattern used in the HDI and YEIB brand files, suggesting a shared design-agency template across these NGO clients.

### 3.1 Reference Site Takeaways

**VidyaKutumb**
- Dark hero with a bold headline over a warm, human photograph; single high-contrast CTA button.
- Segmented action tabs (Pledge / Support / Donate / Inspire) — a strong pattern for TIDI's three pillars if adapted (e.g., Education / Health / Human Services as a similar tabbed or pill-selector module).
- Partner NGO logo carousel and an icon-based "Explore by Popular Causes" grid — directly reusable for TIDI's three pillars as icon cards with one highlighted/active state.
- FAQ accordion and "Latest Insights" blog cards — good, low-effort pattern for a young org's Updates page.

**Luminate Marketing**
- Warm, editorial serif+sans headline pairing; strong photography-led hero.
- A **dark full-bleed stat band** (500+ Clients, $50M+ Raised, etc.) directly below the fold — excellent trust-building pattern for a new org to adapt with modest, honest early-stage numbers (or "founding commitments" if no track record yet).
- Draggable before/after or comparison image slider for services — optional stretch feature, more relevant to agencies than NGOs, use sparingly if at all.
- Founder/CEO spotlight with a personal letter — strong pattern for a *new* NGO specifically, since founder credibility often substitutes for track record early on.

**EVECE**
- "Our Goals" section pairing bullet principles with hard numbers (Volunteers, People Helped, Funds Collected) — a strong direct model for TIDI's "Approach" section.
- "Our Teams" grid of named volunteer/staff photo cards — good for showing TIDI has real people behind it from day one.
- Upcoming Events cards with date badges — useful if TIDI runs community events/outreach days.
- Circular, organic image cropping and warm illustrative background shapes — softens an otherwise institutional layout.

**Synthesis for TIDI:** Lead with photography and a founder-forward human story (per Luminate) given the organization's newness; structure the three pillars as an interactive, tabbed or icon-grid module (per VidyaKutumb); ground credibility in an "Our Approach" stats/principles section (per EVECE) rather than inflated historical claims.

### 3.2 Color, Type & Components — Confirmed Base Palette

| Name | Hex | Role |
|---|---|---|
| TIDI Navy | `#1A3C7A` | Primary — foundation, ink, wordmark, primary CTA fills |
| TIDI Lavender | `#C8BEFA` | Secondary — action highlights, icon fills, softer backgrounds |

**Notes:**
- This Navy/Lavender pairing is close in family to HDI's own Champion Blue/Lavender Tonic system (and `#C8BEFA` is an exact hex match to HDI's Lavender Tonic) — apply the same "one color, one job" discipline established in the HDI and YEIB systems: Navy carries text/ink and primary actions, Lavender is reserved for accents, fills, and secondary highlights — never mix them as competing inks in the same block of text.
- **Still needed:** a light neutral background tone (off-white/tint) and a supporting surface color to round out the palette the way HDI (Warm Off-White, Subtle Mist) and YEIB (Mint Cream, Pale Oak) each have — recommend a soft lavender-tinted off-white as the base background, sampled at low saturation from the Lavender value above, plus a light gray/lavender-gray for borders and dividers. Confirm exact tints before finalizing in code.
- **Typography:** not yet confirmed for TIDI specifically. Following the pattern from HDI (Asul + General Sans) and YEIB (Asul + Chivo + General Sans), recommend pairing a confident serif display face for headlines with a clean grotesque sans for body/UI — but treat this as a recommendation pending TIDI's own type selection, not a locked spec.

### 3.3 Component Patterns to Build
- Three-pillar interactive selector (tabs or icon cards: Education / Health / Human Services), each revealing focus-area detail.
- Full-bleed dark stat/principles band (adapt EVECE's "Our Goals" + Luminate's stat bar).
- Founder/leadership spotlight module.
- Program/cause cards with progress or status indicators (per VidyaKutumb's campaign cards).
- Team/staff photo grid.
- Blog/Updates cards with date badges.
- FAQ accordion.
- Partner/collaborator logo strip.

---

## 4. Website Content Style & Voice

- **Tone:** Warm but substantive. TIDI is new, so copy should lean into clarity of purpose and founding intent rather than manufactured history or inflated claims.
- **Be honest about stage:** where VidyaKutumb/Luminate/EVECE cite large historical numbers, TIDI should instead lead with **commitments, methodology, and founding team credibility** until real outcome data exists — never fabricate impact figures.
- **Structure every pillar the same way:** what it is → who it serves → how TIDI delivers it (methodology: locally led, evidence-based, partnership-driven) → how progress will be measured. This consistency across Education/Health/Human Services makes the three-pillar model easy to scan.
- **Avoid:** generic charity clichés, pity-based imagery framing, vague "make a difference today" CTAs, invented statistics.
- **Prefer:** specific mechanism language ("community health workers," "vocational training," "psychosocial care," "livelihood support") pulled directly from the founding description — this specificity is what will differentiate TIDI's copy from a generic NGO template.
- **CTAs:** pair action with outcome, e.g. "Partner with TIDI," "Support a pillar," "See our approach" rather than bare "Donate Now."

---

## 5. Suggested Site Structure

1. **Home** — Hero (mission statement + primary CTA), three-pillar interactive module, "Our Approach" principles/stats band, founder/leadership spotlight, featured programs, latest updates, closing CTA.
2. **About** — Mission, Vision, founding story, approach principles in full.
3. **Our Pillars** — Dedicated Education / Health / Human Services pages or a single page with three deep-dive sections.
4. **Get Involved** — Donate, Partner, Volunteer — broken out by audience type.
5. **Our Team** — Leadership and staff spotlight (important early-trust signal for a new org).
6. **Updates / Blog** — Program news, community stories.
7. **Contact**

---

## 6. Tech Stack & Project Folder Structure

### 6.1 Stack

| Layer | Choice |
|---|---|
| Framework | **Next.js (latest)** — App Router |
| UI library | React (as shipped with Next.js) |
| Icons | **Lucide (react-lucide)** |
| Animation | **GSAP** (with ScrollTrigger for scroll-based reveals — stat counters, pillar transitions, hero motion) |
| Styling | Tailwind CSS (recommended pairing with Next.js/Lucide; confirm if a different system is preferred) |
| Fonts | To be finalized alongside brand system (see Section 3.2) |

### 6.2 Folder Structure — Feature-Based + Component-Based Hybrid

```
tidi-website/
├── app/                          # Next.js App Router — routing only
│   ├── layout.tsx
│   ├── page.tsx                  # Home
│   ├── about/
│   │   └── page.tsx
│   ├── pillars/
│   │   ├── education/
│   │   │   └── page.tsx
│   │   ├── health/
│   │   │   └── page.tsx
│   │   └── human-services/
│   │       └── page.tsx
│   ├── get-involved/
│   │   └── page.tsx
│   ├── team/
│   │   └── page.tsx
│   ├── updates/
│   │   └── page.tsx
│   └── contact/
│       └── page.tsx
│
├── features/                     # Feature-based: one folder per site section
│   ├── home/
│   │   ├── components/
│   │   │   ├── Hero.tsx
│   │   │   ├── PillarSelector.tsx      # Tabbed/icon Education-Health-Human Services module
│   │   │   ├── ApproachStatsBand.tsx
│   │   │   └── FounderSpotlight.tsx
│   │   └── data.ts
│   ├── pillars/
│   │   ├── components/
│   │   │   ├── PillarDetailLayout.tsx
│   │   │   └── ProgramCard.tsx
│   │   └── data.ts
│   ├── get-involved/
│   │   ├── components/
│   │   │   ├── DonateForm.tsx
│   │   │   ├── PartnerCTA.tsx
│   │   │   └── VolunteerCTA.tsx
│   │   └── data.ts
│   ├── team/
│   │   ├── components/
│   │   │   └── TeamGrid.tsx
│   │   └── data.ts
│   └── updates/
│       ├── components/
│       │   └── UpdateCard.tsx
│       └── data.ts
│
├── components/                   # Shared, reusable UI (design-system driven)
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Tag.tsx
│   │   ├── Card.tsx
│   │   └── StatCounter.tsx
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── Section.tsx
│   └── icons/
│       └── index.ts               # Re-exported Lucide icons used across the site
│
├── animations/                    # GSAP setup, shared timelines, hooks
│   ├── gsapConfig.ts
│   ├── useScrollReveal.ts
│   └── statCounterAnimation.ts
│
├── lib/
│   ├── utils.ts
│   └── constants.ts               # Brand colors/type scale as code constants, once confirmed
│
├── styles/
│   └── globals.css                # Tailwind base + design tokens
│
├── public/
│   ├── fonts/
│   └── images/
│
└── content/                       # Structured content for Updates/Team, etc.
    └── team-members.json
```

**Guiding rules:**
- **`app/`** stays thin — routing/composition only.
- **`features/<name>/`** owns everything specific to that page — components and content data live together.
- **`components/`** only holds UI reused across two or more features.
- **`animations/`** centralizes GSAP setup for consistent timing/easing across the site.
- Design tokens should be defined once in `styles/globals.css` (Tailwind theme extensions / CSS variables) as soon as TIDI's brand system is confirmed — never hardcoded per component.

---

*This document sets design and content direction only. Logo and base color palette are confirmed (Section 3); supporting neutrals and typography are recommendations pending final confirmation. Final copy, imagery, and page-level wireframes to be developed in the next phase.*
