# IAG Loyalty Developer Portal

**Reducing partner onboarding from 67 days to 8 — and building the system to get it to 24 hours.**

> 📸 **[IMAGE: HERO]** *PMT partner detail page (the Aer Lingus page showing applications table) inside a browser mockup. This is your "movie poster."*

---

**Role:** Solo Senior Product Designer — owned the full design process  
**Team:** Started as 4 devs, 1 PM, 1 delivery lead — grew to 5 devs, 1 BA, 1 PM, 1 designer  
**Timeline:** Sep 2023 – ongoing (~2.5 years)  
**Platform:** Responsive web (desktop-first)

---

## The Problem

IAG Loyalty runs Avios, the loyalty currency behind British Airways, Iberia, Aer Lingus and Vueling. They have 69M+ members and dozens of partners across travel, retail, hospitality and finance.

When a new partner wanted to integrate with Avios APIs, the technical onboarding took around **3–4 months**. Partners were frustrated. The business was losing revenue. Six internal teams were involved and nobody had a clear picture of the full process.

They first came to us because the Developer Portal looked outdated and had accessibility issues. We cleaned it up. But in our conversations the real problem surfaced: the onboarding process itself was broken.

> 📸 **[IMAGE: OLD DEV PORTAL]** *The old developer portal homepage — the one with cyan bars. Place it here as the "before" state.*

> 📸 **[IMAGE: NEW DEV PORTAL HOMEPAGE]** *The redesigned developer portal homepage. Place directly after the old one for before/after contrast.*

---

## What Was Actually Going Wrong

I spent weeks mapping the real workflow — not the documented one, the actual one. I sat with Sales Engineering, traveled to London, watched how Loyalty Ops used CLM, read through Jira boards and Confluence pages, and talked to everyone separately because each person told a slightly different story.

The root cause wasn't bad tools. It was **scattered ownership and no source of truth**. Partner information lived across Jira tickets, emails, spreadsheets and at least four different systems. Six teams touched the process but nobody could see it end-to-end. Sales Engineering spent most of their time chasing people for information instead of actually onboarding partners.

> 📸 **[IMAGE: OLD ONBOARDING FLOW]** *The pre-sales partner onboarding process swim lane diagram — the massive chart showing 6+ teams across Mobilise → Discover → On-board → Validate → Launch → Post Live. This visual alone communicates the complexity better than any paragraph.*

---

## What We Built

We created **PMT (Partner Management Tool)** — a brand new internal platform that centralised the onboarding data and automated the manual handoffs. We also redesigned the Developer Portal for partners.

The idea: put Sales Engineering in the driver's seat. Instead of filing Jira tickets and waiting for other teams, they could now handle most of the process themselves.

> 📸 **[IMAGE: PMT PARTNERS LIST]** *The PMT partners overview table — shows the centralised partner directory that replaced scattered Jira tickets.*

### A. Application Creation

Previously, creating an API application for a partner meant: SE files a Jira ticket → Identity team manually creates it → back-and-forth → approval → delays. This alone could take weeks.

We moved application creation fully into PMT. SE could now create, manage and push applications from staging to production — with a built-in approval flow and audit trail.

The tricky part was convincing Identity team to let go. They were initially skeptical and wanted to stay as gatekeepers. After seeing how the system worked — with proper audit logs and guardrails — they trusted the process enough to step back. We even simplified the approval from a two-step flow (SE peer review → Identity approval) down to a single step once we saw the extra layer was slowing things down without adding real safety.

> 📸 **[IMAGE: PMT CREATE APPLICATION FORM]** *The create application form inside PMT — show the form that replaced the Jira ticket workflow.*

> 📸 **[IMAGE: PMT APPLICATION DETAIL]** *Application detail view showing "Approved (Live)" status, environment (STG), properties and scopes.*

> 📸 **[IMAGE: PMT PARTNER WITH APPLICATIONS]** *The Aer Lingus partner page showing the applications table with STG/PRD environments, statuses, visibility toggles, and actions like "Pull from stg".*

> 📸 **[IMAGE: PMT APPROVAL FLOW UI]** *The approval modal or approval status UI — showing the simplified single-step approval (Approve / Request Changes). If you have it.*

### B. CLM Integration

This was the biggest chunk. CLM (Customer Loyalty Management) is the core system that manages everything about how Avios points work — partner configs, promoter codes, programmes, business rules. Creating a partner there used to involve multiple teams, manual Jira tickets, and a lot of back-and-forth.

We integrated PMT directly with CLM so that SE could create partners, obtain CLM codes, and set up promoter codes — all from one place. The system validates data before sending it, pre-fills where possible, and keeps staging and production environments in sync.

This was by far the hardest design challenge. Partner info was split across PMT's own database, CLM, Partner Hub (another legacy system), and SAP. Each system had different naming conventions. Partner types (Award, Redemption, Opco) each had different rules. And the integration had to happen in phases — we started with Award partners in staging only, while the design needed to already account for the full future state.

> 📸 **[IMAGE: PMT PARTNER PROFILE]** *Partner profile page with side navigation showing General Info, Partnerhub ID, Award, Redemption sections — this shows the multi-step partner structure that emerged from the CLM integration.*

> 📸 **[IMAGE: PMT PROMOTER CODES SECTION]** *The promoter codes table or creation flow inside a partner — this was a major piece of work involving multiple teams. If you have it.*

> 📸 **[IMAGE: DOMAIN MODELING SESSION]** *The green flow diagram from your domain modeling session (Feb 4th) mapping partner setup journey and application setup journey. Shows how you worked through the complexity.*

> 📸 **[IMAGE: NEW ONBOARDING FLOW]** *The new NAP Partner Onboarding Process (2025) flow diagram — place this after or next to the old flow to show how the process was streamlined. The contrast between the two diagrams tells the story.*

> 📸 **[IMAGE: WORKSHOP PHOTOS]** *Any photos from the London workshops, whiteboard sessions, or on-site visits with IAGL teams. Even one photo humanises the process.*

### C. Developer Portal Redesign

In parallel, we gave the Developer Portal a complete redesign — better navigation, documentation, customer journeys, and self-service features so partners could manage more on their own.

> 📸 **[IMAGE: NEW DEV PORTAL — INNER PAGE]** *A documentation page, customer journeys page, or any inner page from the redesigned dev portal. Shows the redesign went deeper than just the homepage.*

> 📸 **[IMAGE: NEW DEV PORTAL — GET STARTED / SELF-SERVICE]** *Any self-service feature on the dev portal (e.g. the "Get Started" flow or documentation explorer). If you have it.*

---

## How I Worked

This was not a "do research, make wireframes, hand off" kind of project. It was two years of continuous discovery embedded in a deeply technical product.

**Research was daily conversation.** There was no clean requirements doc to start from. I asked the same questions to different people, cross-checked their answers, documented every decision, and still sometimes got it wrong. When that happened, I adjusted — more indirect questions, more stakeholders involved, decisions documented together.

**Design and dev were inseparable.** I couldn't design a single screen without understanding the backend. I spent most days with developers learning how the APIs worked, what CLM technically provided, what was possible. They were my primary research partners. Over two years I went from being shy about technical architecture to confidently navigating it.

**Feasibility drove every decision.** In a project this technical, I couldn't come up with a "pure UX" solution and throw it over the wall. Every design started with "is this technically possible and how?" — then we'd iterate from there. I focused on simple flows, safe defaults, clear guardrails, and a flexible UI that could absorb new requirements without a full redesign.

**Testing was a team sport.** Each major feature went through: internal team review → stakeholder walkthrough → prototype testing (I used Figma Make for near-live prototypes, which was a game changer) → staging testing → production testing. And still, real feedback only came after actual use.

**I designed for incomplete information.** Many technical details only emerged mid-project. The CLM integration plan changed multiple times. I learned to design the full vision while shipping incrementally — the partner page needed to work for partial integration today and full integration six months later.

One example: we spent weeks designing an approval flow for pushing partners to production — complicated both technically and in the UI. In a user test, we discovered from the actual users that this step didn't carry the risk we assumed. They could just manually fix mistakes in CLM. That saved us a huge amount of work.

> 📸 **[IMAGE: DESIGN ITERATIONS]** *A collage or side-by-side of how a key screen evolved over iterations — for example, the partner creation page going from a single form to the multi-step CLM-integrated version. If you have screenshots of the evolution.*

> 📸 **[IMAGE: FIGMA MAKE PROTOTYPE]** *A screenshot of the Figma Make live prototype if you have one — this supports your point about it being a game changer for testing.*

---

## Impact

**Mean Time to Configure dropped from 67 days to 8 working days** — confirmed by Sales Engineering's own tracking. Our north star target is 24 hours for technical onboarding (contract signing to staging credentials), which is now achievable for straightforward partners.

> 📸 **[IMAGE: SLACK PROOF]** *The Slack message from jo.larby: "Our Mean Time To Configure prior to automation is sitting at 67 days, however, since Operational Efficiency, we are down to 8 working days!!" — This is your single most powerful visual. Don't bury it.*

Beyond the numbers:

- **Sales Engineering can onboard more partners in less time** — directly enabling revenue growth.
- **Multiple teams save hours per partner** — less chasing, fewer Jira tickets, fewer emails.
- **Higher partner satisfaction** — shorter wait times and fewer errors.
- **The work is still ongoing** — adding scopes to applications, editing promoter codes, and continuing the CLM integration are all active.

---

## What I Learned

**Observe, don't just ask.** I sat with Loyalty Ops and watched them work instead of relying on what they said. The real process was always messier than the described one.

**Design for the system, not the feature.** Small changes in sequencing or ownership unlocked massive improvements. This project taught me to think in systems — how teams, tools and processes connect — not just screens.

**When experience can't come first, protect it in small ways.** During the heavy integration phase, pixel-perfect UI wasn't the priority. But I still invested in cloning, pre-filling, better error messages and consistent terminology. Those small things kept the product usable while the technical foundation was being built.

**Being a solo designer on a technical project means becoming bilingual.** I learned backend architecture not because I wanted to but because I had to. It made me a better designer — I stopped proposing things that couldn't be built and started co-creating solutions with developers.

**Trust takes time and showing up.** We traveled to London, ran workshops, sat with teams. Building relationships with six different teams across the organisation wasn't optional — it was the foundation that made the technical work possible.
