# EMCx Website Modernization Spec

- Version: 0.3 (implementation in progress)
- Date: 2026-03-09
- Project: Energy Management Consulting, LLC (EMCx) public website
- Hosting target: Azure Static Web Apps

## 1) Project Goals

This update must make the following points clear to visitors:

1. EMCx is a **minority-owned small business**.
2. EMCx offers **Commissioning services**:
   - New building commissioning
   - Retro-commissioning
   - On-going commissioning
3. EMCx offers **Assessment services**:
   - Facility assessment
   - Systems assessment
   - Controls assessment
4. EMCx provides **controls services**:
   - Controls installation
   - Controls integration
   - Controls service
5. The website must allow interested parties to submit a message and trigger an email notification using **SendGrid**.
6. The site should include **three engineers** with short bios.

## 2) Current-State Analysis (Repository Audit)

### Current stack

- Static single-page site centered on `index.html`.
- Legacy frontend libraries (Bootstrap + jQuery plugins + template assets).
- No package manager/build pipeline detected (`package.json` not present).
- Azure Static Web Apps GitHub Action exists with:
  - `app_location: "/"`
  - `api_location: ""` (no backend/API configured yet)

### Existing content status

- Services and portfolio sections exist.
- Existing site already references small business/minority business language under contact/business info.
- Team section with personnel cards exists but is fully commented out.
- Contact details are visible (address, phone, email).

### Functional gaps

- No active contact form currently submits data.
- `js/contact-form-script.js` posts to `php/form-process.php`, but no PHP backend exists in repo.
- Current contact form markup is commented out and does not expose required fields to users.
- No anti-spam/rate-limiting flow for lead capture.

### Quality/UX gaps

- Content and structure are template-heavy with several unused/commented blocks.
- Older JS/CSS dependencies increase maintenance risk.
- Copy quality has typos/inconsistent capitalization in several sections.
- Accessibility and semantic markup need modernization pass.

## 3) Target State (Product + Content)

## Messaging hierarchy (home page)

1. Who we are: EMCx, minority-owned small business.
2. What we do: Commissioning, Assessment, and Controls services.
3. Why trust us: portfolio highlights, certifications/memberships, company credentials.
4. Who will serve you: three engineer bios.
5. Call to action: contact form + direct contact options.

## Proposed page sections

1. Hero: concise value statement + primary CTA.
2. Company credibility strip: minority-owned small business + relevant credentials.
3. Services:
   - Commissioning (new/retro/on-going)
   - Assessment (facility/systems/controls)
   - Controls (installation/integration/service)
4. Selected projects/portfolio with easy ongoing updates.
5. Engineer team cards (3 short bios).
6. Contact section:
   - Form (name, email, company, phone optional, message)
   - Direct email/phone/address

## 4) Technical Architecture Recommendation

## Frontend

- Recommended path: migrate to **Vue 3 + Vite** while staying on Azure Static Web Apps.
- Build the site as a small maintainable SPA with componentized sections (Hero, Services, Team, Portfolio, Contact).
- Store portfolio/team/service data in editable content files (JSON/TS objects) so projects can be added quickly without template surgery.
- Keep visual modernization scope practical for this release (no unnecessary architectural complexity).

## Contact form backend (SendGrid)

- Add Azure Static Web Apps API function at `/api/contact`.
- Runtime: Node.js Azure Function.
- Responsibilities:
  - Validate/sanitize payload.
  - Server-side spam checks (basic honeypot + length/content checks).
  - Send email via SendGrid.
  - Return structured success/error response for UI.

### Required environment variables (Azure)

- `SENDGRID_API_KEY`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL`
- Optional: `CONTACT_CC_EMAIL`, `CONTACT_SUBJECT_PREFIX`

### Security and reliability controls

- Do not expose SendGrid API key in client-side code.
- Add per-IP rate limiting strategy (or equivalent anti-abuse control).
- Log function errors for troubleshooting.
- Graceful client error messages on submission failure.

## Azure CI/CD updates

- Update SWA workflow to include `api_location` once API folder is created.
- Add local run instructions for frontend + API.
- Add lightweight validation checks before deployment.

## 5) Execution Plan (Phased)

## Phase 1: Content + IA alignment

- Finalize service taxonomy and key messaging.
- Confirm three engineer bios/headshots.
- Draft final homepage copy.

## Phase 2: Frontend modernization

- Initialize Vue 3 + Vite project structure and routing strategy (single-page section navigation).
- Rework section structure and navigation for clarity.
- Improve responsive behavior and accessibility.
- Clean obsolete template blocks/assets.
- Implement data-driven portfolio model for frequent updates.

## Phase 3: Contact workflow

- Implement `/api/contact` Azure Function.
- Integrate SendGrid and secure configuration.
- Connect frontend form to API with validation and status feedback.

## Phase 4: Hardening + launch

- Cross-device QA (mobile/tablet/desktop).
- Basic performance/accessibility pass.
- Production secret setup and smoke test on Azure SWA.

## 6) Definition of Done

- Site clearly communicates minority-owned small business status.
- Services are grouped and described as requested.
- Three engineer bios are published.
- Contact form successfully sends email via SendGrid in production.
- UX is responsive and modernized on major viewport sizes.
- No dead form paths or broken links/scripts remain.

## 7) Task Tracker (Living Checklist)

## Discovery and planning

- [x] Audit current repository and deployment setup
- [x] Capture business and content requirements from stakeholder prompt
- [x] Confirm open questions listed in Section 8

## Content

- [ ] Finalize approved homepage headline/subheadline
- [ ] Finalize minority-owned/small business statement wording
- [ ] Finalize Commissioning service copy
- [ ] Finalize Assessment service copy
- [ ] Finalize Controls service copy
- [x] Collect and finalize 3 engineer bios and headshots

## Frontend

- [x] Decide framework path for this release (Vue 3 migration vs incremental static refactor)
- [x] Refactor `index.html` section order and navigation
- [x] Add/refresh team section for 3 engineers
- [x] Implement modernized visual styling updates
- [x] Remove dead/commented template blocks not in use
- [x] Validate responsive layout across breakpoints (initial pass)
- [x] Accessibility pass (initial pass: headings, alt text, form labels, focus states, live region)
- [x] Implement data-driven portfolio entries to support frequent project additions

## Contact + backend

- [x] Create Azure Function API project (e.g., `api/contact`)
- [x] Implement POST `/api/contact` with validation
- [x] Add SendGrid integration in function
- [x] Add spam controls (honeypot/rate limits)
- [x] Connect frontend form submission to `/api/contact`
- [x] Add client-side success/error UX states

## DevOps and release

- [x] Update SWA workflow `api_location`
- [ ] Configure Azure production secrets
- [ ] End-to-end test in staging/preview environment
- [ ] Production smoke test after deployment
- [ ] Document operational runbook (how to update copy/bios/contact config)

## 8) Open Questions Requiring Confirmation

All previously open questions are now confirmed:

1. Contact inbox: `[redacted-contact-inbox]`
2. SendGrid From address: `[redacted-sender]`
3. Framework: proceed with Vue 3 migration

## 9) Captured Team Bios (Provided 2026-03-09)

1. Nigel Gray
   - Title: Chief Executive Officer (CEO)
   - Bio: Nigel Gray has been in the construction industry for nearly 25 years. He is competent in both commissioning and controls. He lives in Atlanta, GA with his family.
   - Headshot: `img/team/team1.jpg`

2. Ray Melancon
   - Title: Chief Operating Officer (COO), Commissioning and Controls Engineer
   - Bio: Ray Melancon is a commissioning and controls engineer. He received his QCxP from UW Madison, his LEED GA from the USGBC, and is Niagara N4 certified. He lives in Atlanta, GA with his family.
   - Headshot: `img/team/team2.jpg`

3. Erik Merz
   - Title: Controls Director
   - Bio: Erik Merz has been leading the controls integration process for over 25 years. He is an expert in Niagara N4 and AX. He is comfortable with Johnson Controls FX and Metasys and is certified and proficient on several controls and equipment platforms. Erik lives in Jacksonville, NC.
   - Headshot: `img/team/team3.jpg`

## 10) Recommended Immediate Next Step

- Configure Azure Static Web Apps application settings (`SENDGRID_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`) and run a staging smoke test of the new Vue site + `/api/contact` email flow.
