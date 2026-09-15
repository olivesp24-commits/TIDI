# Total Impact Development Initiative (TIDI) — Website PRD

**Doc type:** Product Requirements Document
**Product:** TIDI Public Website v1.0
**Status:** Draft

> **Brand assets confirmed:** TIDI's logo (hexagonal interlocking-hands mark) and base palette (Navy `#1A3C7A`, Lavender `#C8BEFA`) are now confirmed — see the companion Project Scope doc, Section 3, for full detail. Supporting neutrals and typography are still recommendations pending final sign-off.

---

## 1. Purpose & Background

TIDI is a newly established NGO operating across three pillars — Education, Health, and Human Services — aimed at underserved communities. The organization currently has no public digital presence. This website is the **first product deliverable** for TIDI and will serve as its primary channel for:
- Establishing organizational credibility with donors, government partners, and NGOs.
- Communicating mission, vision, and program focus clearly.
- Enabling initial engagement (contact, partnership inquiries, and — if ready — donations/volunteering).

Because TIDI is pre-track-record, this PRD treats **credibility-through-clarity** (clear methodology, real people, transparent approach) as a primary product goal, distinct from a mature NGO site that can lean on historical impact numbers.

---

## 2. Goals & Success Metrics

| Goal | Success Metric |
|---|---|
| Communicate mission/pillars clearly | Visitors can correctly describe TIDI's three pillars after visiting Home + About (qualitative, via informal user testing) |
| Build early-stage credibility | Founder/team page live; "Our Approach" section published with concrete methodology (not vague claims) |
| Generate partnership/donor interest | Functional Contact / Get Involved forms with working submission + confirmation flow |
| Establish scalable content structure | Updates/Blog and Team sections structured so new entries can be added without a rebuild |
| Deliver a modern, credible visual product | Site passes a basic Lighthouse audit (performance, accessibility, best practices ≥ 90 where feasible) |

**Out of scope for v1.0:** online payment/donation processing integration (unless confirmed as a launch requirement), multi-language support, a full CMS/admin dashboard (structured content files are sufficient for v1.0; a CMS can be a v1.1 consideration), native mobile app.

---

## 3. Users & Use Cases

| User type | Primary need | Key pages |
|---|---|---|
| Individual donor/supporter | Understand mission, decide whether to trust/support TIDI | Home, About, Pillars, Get Involved |
| Institutional/government partner | Assess credibility, methodology, and alignment for potential partnership | About, Our Approach, Team, Contact |
| Beneficiary / community member | Understand what support is available and how to access it | Pillars, Get Involved, Contact |
| Journalist / researcher | Find accurate mission/program info and updates | About, Updates, Contact |
| Internal team | Publish updates, manage team/program listings | Content structure (see Section 6) |

---

## 4. Functional Requirements

### 4.1 Home Page
- Hero section with mission-forward headline and primary CTA (e.g., "Support our work" / "Partner with TIDI").
- Interactive three-pillar module (Education / Health / Human Services) — tabbed or icon-grid, each revealing a short summary and link to the full pillar page.
- "Our Approach" section presenting core principles (locally led, evidence-based, partnership-driven, transparent, sustainable) — paired with concrete detail, not just adjectives.
- Founder/leadership spotlight module.
- Featured programs or "get involved" preview cards.
- Latest updates preview (pulls from Updates section, most recent 2–3 entries).
- Closing CTA band.

### 4.2 About Page
- Full mission and vision statements.
- Founding story / "why TIDI exists now."
- Full expansion of the five approach principles.

### 4.3 Pillars Section (Education / Health / Human Services)
- Each pillar gets a dedicated page or anchor section with:
  - What the pillar covers (per the founding description's bullet points).
  - Who it serves.
  - How TIDI delivers it (mechanisms: e.g., vocational training, community health workers, psychosocial care).
  - How progress will be tracked (even if data isn't populated yet, the framework should be visible).

### 4.4 Get Involved
- Separate, clearly labeled paths for: **Donate**, **Partner** (institutional/government), **Volunteer**.
- Each path has its own short explanation and a contact/intake form or external link (e.g., to a payment processor, if applicable).

### 4.5 Team Page
- Grid of leadership/staff with name, role, and short bio — critical for early trust-building given the org has no track record yet.

### 4.6 Updates / Blog
- List of dated posts/program updates, each with title, date, short excerpt, and full-post view.
- Structured as a content collection so posts can be added without code changes (JSON/MDX-driven).

### 4.7 Contact
- General contact form (name, email, subject, message).
- Organizational contact details (address, email, phone — pending TIDI's actual details).

### 4.8 Global
- Responsive navigation with clear access to all top-level sections.
- Footer with quick links, contact info, and (if applicable) newsletter signup and social links.
- FAQ accordion component (reusable — could live on Home, Get Involved, or a dedicated FAQ page).

---

## 5. Non-Functional Requirements

- **Performance:** Fast initial load (Next.js App Router with image optimization); target Lighthouse performance ≥ 90 on key pages.
- **Accessibility:** WCAG AA baseline — semantic HTML, sufficient color contrast (pending final palette), keyboard-navigable interactive modules (pillar selector, accordion, forms).
- **Responsiveness:** Fully functional and visually coherent from mobile (360px) through desktop (1440px+).
- **SEO:** Proper meta tags, semantic headings, sitemap, and OG tags for social sharing — important for a new org building initial search/discovery presence.
- **Maintainability:** Content (team members, updates, program details) stored in structured data files so non-developers or future CMS integration can update content without touching component code.
- **Animation restraint:** GSAP-driven motion should support comprehension (scroll reveals, stat counters) rather than distract — avoid gratuitous animation that undercuts institutional credibility.

---

## 6. Technical Requirements

See companion Project Scope doc, Section 6, for the full stack and folder structure. Summary:

- **Framework:** Next.js (latest, App Router)
- **Icons:** Lucide (react-lucide)
- **Animation:** GSAP + ScrollTrigger
- **Styling:** Tailwind CSS (proposed)
- **Structure:** Feature-based + component-based hybrid (`features/` for page-specific logic, `components/` for shared UI)
- **Content:** Structured JSON/MDX for Team and Updates, enabling content updates without full redeploys of component logic

---

## 7. Content & Design Dependencies (Blocking Items)

These need to be resolved before final visual design/build can be locked:

1. **Typography selection** — pending brand system (logo and base palette are now confirmed — see companion Project Scope doc, Section 3).
2. **Supporting neutral/tint colors** — background and border tones to round out the confirmed Navy/Lavender base.
3. **Real photography or approved stock direction** — reference sites all lean heavily on human photography; TIDI needs a sourcing plan (real program photos preferred over generic stock, per the honesty principle in the content style guide).
4. **Founding team bios/photos** — required for the Team module and Founder Spotlight.
5. **Confirmed contact details and organizational registration info** (for footer/legal/contact page).
6. **Decision on donation processing** — whether v1.0 needs a live payment integration or a "contact us to give" holding pattern.

---

## 8. Phased Rollout (Proposed)

| Phase | Scope |
|---|---|
| **Phase 1 — MVP** | Home, About, Pillars (single combined page), Get Involved (contact-based, no live payments), Contact. Placeholder team section if bios aren't ready. |
| **Phase 2** | Full Team page, Updates/Blog, dedicated pillar pages, FAQ. |
| **Phase 3** | Live donation processing, newsletter integration, expanded impact/metrics reporting once real program data exists. |

---

*This PRD should be read alongside the TIDI Project Scope doc for full design-direction detail. Logo and base palette are confirmed; a revision pass is still needed once typography and supporting neutrals are finalized.*
