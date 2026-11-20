# Avighna Financial Services

A standalone, multi-page financial advisory website built with clean, semantic HTML, Tailwind CSS via CDN, and vanilla JavaScript. No build step, package manager, framework, or npm dependency is required.

## Run Locally

Open `index.html` directly in any modern browser, or serve this folder with any static HTTP server. The Tailwind CSS, Lucide Icons, and Google Fonts are loaded from standard CDNs.

## Project Structure & Pages

The project is organized into clean, independent `.html` files, making content easy to find and edit directly in HTML:

- **`index.html`** — Home page: Hero banner, quick financial simulator, 4 core pillars, traditional vs. fiduciary comparison table, trust statistics, verified Pune client testimonials, and partner syndication badges.
- **`services.html`** — All advisory verticals & catalog: Category filtering (Loans, Insurance, Investments) and all 12 service cards with key feature checklists.
- **`calculators.html`** — Full financial calculator suite:
  1. Systematic Investment Plan (SIP) Wealth Estimator with milestone projections and WhatsApp export
  2. Loan EMI Calculator with principal/interest breakdown
  3. Retirement & FIRE Planner with lifestyle inflation modeling
  4. Term Life Insurance (Human Life Value - HLV) Estimator
- **`why-us.html`** — Why Avighna: Mission, vision, 4 operating tenets, 4-step structured advisory process, and 30+ institutional partner ecosystem (banks, AMCs, insurers).
- **`contact.html`** — Contact & advisory desk: Direct message form, contact details, consultation hours, coverage zones, and frequently asked questions (FAQs) by topic.
- **Legal & Compliance Pages**:
  - `privacy-policy.html` — Privacy policy aligned with India's DPDP Act, 2023
  - `terms-and-conditions.html` — Terms and conditions
  - `cookie-policy.html` — Cookie policy
  - `grievance-redressal.html` — Grievance redressal mechanism
  - `disclaimer.html` — Regulatory disclosures and disclaimers

## JavaScript Files

- **`app.js`** — Handles interactivity only (no HTML strings): live calculator math, slider event listeners, category tabs, FAQ accordions, and interactive modals (Free Financial Checkup & Client Wealth Portal).
- **`consent-forms.js`** — Ensures DPDP-compliant consent checkboxes on inquiry forms.
- **`cookie-consent.js`** — Manages user cookie preferences in local storage.
- **`grievance-form.js`** — Manages client-side grievance email drafting.
