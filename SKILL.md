---
name: multipro-contractor-engine
description: End-to-end framework for engineering, ranking, and scaling MultiPro Digital (multiprodigital.com) and its exclusive territory lockout engine for epoxy flooring and concrete coating contractors. Covers Next.js App Router SSG, territory lockout silos, JSON-LD schemas (FAQPage, ProfessionalService, Breadcrumbs), trade CRO (instant garage estimator, 60s audit forms), and automated IndexNow search ingestion.
---

# MultiPro Digital: Contractor Local Engine (Master Runbook)

A specialized operating framework and technical runbook for engineering, ranking, and scaling **MultiPro Digital (`multiprodigital.com`)** — the premier digital partner for epoxy flooring and concrete coating contractors across the United States.

Use this skill whenever building new location pages, optimizing SEO and schema architectures, enhancing conversion rate optimization (CRO), executing client outreach, or scaling territory lockouts.

---

## 1. Core Operating Model & Brand Value Proposition

MultiPro Digital does not operate as a generic digital agency. It is engineered specifically for concrete coating shop owners, built on strict industry principles:

1. **Strict 1-Shop Territory Lockout:**
   * MultiPro partners with **strictly one concrete coating contractor per metropolitan market**.
   * When an epoxy business locks down a market (e.g., Dallas–Fort Worth, Houston, Phoenix), all competing coating shops in that territory are permanently locked out.
2. **Zero Shared Leads (Anti-Angi / Anti-Thumbtack):**
   * Eliminates the brutal race-to-the-bottom where lead brokers resell the same phone number to 4–5 contractors for $90 each.
   * Every inbound call, quote request, and moisture-test inquiry rings directly on the partner contractor’s phone.
3. **Pre-Qualifying Estimator Software:**
   * Stops contractors from burning diesel driving 45 minutes across town to quote tire-kickers who thought a professional coating was a $300 big-box paint kit.
   * Built-in instant garage floor pricing estimator pre-educates homeowners on commercial square-foot rates ($5.50–$7.50+/sq ft) before they book an on-site moisture test.
4. **Month-to-Month Partnership (Zero Hostage Contracts):**
   * No 6- or 12-month lock-in contracts.
   * Contractors retain 100% ownership of their domain, Google Business Profile (GBP), and brand assets at all times.

---

## 2. Technical Stack: 100/100 Core Web Vitals Static Engine

Avoid bloated CMS platforms (WordPress, heavy builders) that create 4–8 second mobile load times and cause homeowners to bounce. MultiPro runs on an ultra-optimized static generation pipeline:

* **Framework:** Next.js 16.2.2 (App Router) + Turbopack + TypeScript + React 19.
* **Styling System:** Tailwind CSS with Dark Luxury Contractor Theme:
  * Deep Navy Background: `#0b1f38`
  * Slate Card Surface: `#0c182b`
  * High-Contrast Dark Inner: `#06101e`
  * Brand Lime Accents: `#9afb16` (or `brand-lime`)
  * Electric Trust Blue: `#1da4ff`
* **Prerender & SSG Pipeline:**
  * Fully static prerendering (`output: 'export'` compatible or Turbopack SSG).
  * `generateStaticParams()` dynamically prerenders all 20+ routes with zero runtime database queries.
* **Hosting & CI/CD:** Vercel edge delivery connected to GitHub (`mahabubkabir40-ai/multipro-digital.git` on `main`).
* **Performance Benchmarks:** Sub-1.5s mobile First Contentful Paint (FCP), 0ms Cumulative Layout Shift (CLS), 100/100 Core Web Vitals.

---

## 3. Territory Silo Architecture & Internal Linking Rules

MultiPro employs a strict hierarchical directory structure to maximize topical relevance and geographic authority without creating doorway pages:

```text
/                                               -> Homepage (Brand Authority, Estimator, Portfolio Proof, Trade FAQ)
/locations/                                     -> Territory Lockout Directory Hub (Live status across all metros)
/locations/{city}-epoxy-contractor-marketing/   -> Hyper-Local Territory Lockout Page (e.g., /locations/tampa-epoxy-contractor-marketing)
/free-audit/                                    -> Dedicated 60-Second Video Audit Funnel
/about/                                         -> Company Story, Anti-Agency Philosophy & Trade Ethics
/contact/                                       -> Direct Contact & Support Channel
/success/                                       -> High-Converting Form Submission Confirmation
```

> [!IMPORTANT]
> **Strict URL Slug Pattern (MANDATORY & UNBREAKABLE):**
> Every single location page MUST strictly adhere to this exact slug format:
> `https://www.multiprodigital.com/locations/{city}-epoxy-contractor-marketing`
> * Live Example: `https://www.multiprodigital.com/locations/tampa-epoxy-contractor-marketing`
> * Live Example: `https://www.multiprodigital.com/locations/dallas-epoxy-contractor-marketing`
> * Live Example: `https://www.multiprodigital.com/locations/houston-epoxy-contractor-marketing`
> * Live Example: `https://www.multiprodigital.com/locations/phoenix-epoxy-contractor-marketing`
> * Live Example: `https://www.multiprodigital.com/locations/austin-epoxy-contractor-marketing`
> 
> **Never change or abbreviate this pattern** (do NOT use `/locations/{city}` or `/locations/{city}-epoxy`). All internal linking meshes, canonical tags, sitemap entries, and IndexNow API submissions rely on this exact URL structure.

### The "3-Link Rule" & Internal Mesh Standards:
* **Parent-to-Child:** The `/locations` directory links down to all active territory city pages.
* **Child-to-Parent:** Every city page links back to `/locations` and `/`.
* **Territory Cross-Linking (Nearby Markets):** Every city page links directly to 2–3 geographically adjacent markets (e.g., Dallas links to Houston, Austin, and Phoenix).
* **Zero Orphan Pages:** Every page has a click-depth of $\le 2$ from the root homepage.
* **The "3-Link Rule" on Editorial Content:**
  * **Link #1 (Authority):** Homepage (`/`)
  * **Link #2 (Trust):** Locations Hub (`/locations`) or About (`/about`)
  * **Link #3 (Credibility):** Recognized industry technical authority (e.g., ICRI at `https://www.icri.org`, ASTM at `https://www.astm.org`, or AMPP at `https://www.ampp.org`).

---

## 4. Multi-Type Structured Data (JSON-LD) Specification

Every page injects rich, validated JSON-LD schema into the document head for maximum Google rich snippet visibility:

### 1. Root ProfessionalService & WebSite Schema (`/`)
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.multiprodigital.com/#website",
      "url": "https://www.multiprodigital.com/",
      "name": "MultiPro Digital",
      "description": "Exclusive digital marketing and Google Maps ranking systems for concrete coating & epoxy flooring contractors."
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://www.multiprodigital.com/#service",
      "name": "MultiPro Digital",
      "url": "https://www.multiprodigital.com/",
      "telephone": "+1-888-530-5080",
      "priceRange": "$$$",
      "serviceType": [
        "Epoxy Flooring Contractor Marketing",
        "Google Maps 3-Pack Optimization for Concrete Coating Shops",
        "Instant Garage Floor Estimator Software",
        "Sub-1.5s High-Speed Showroom Websites"
      ]
    }
  ]
}
```

### 2. High-Intent `FAQPage` Schema (Homepage & Location Pages)
Injected on both `src/app/page.tsx` and dynamically generated on `src/app/locations/[city]/page.tsx`. Every question must reflect authentic contractor concerns:
* Agency burn experiences and real epoxy technical knowledge.
* 100% lead exclusivity vs. Angi shared leads.
* Filtering cheap $400 tire-kickers via live estimators.
* Realistic Google 3-Pack ranking timelines (45–90 days).
* Ownership of Google Business Profile and month-to-month terms.

### 3. Hierarchical `BreadcrumbList` Schema
Every subpage contains complete breadcrumb hierarchy:
* Position 1: Home (`https://www.multiprodigital.com`)
* Position 2: Territories (`https://www.multiprodigital.com/locations`)
* Position 3: Specific City (`https://www.multiprodigital.com/locations/{city}`)

---

## 5. Mobile Direct-Response & Trade CRO Engine

Trade contractors and homeowners are 75%+ mobile. The conversion flow eliminates friction while establishing undeniable authority:

1. **Right-Aligned Hero Claim Form (`CityAuditForm.tsx`):**
   * Placed prominently on the right side of the hero section on desktop; stacks smoothly on mobile.
   * Captures: Name, Business Name, City & State (with dynamic placeholder), Phone Number, Email, Website/GBP link.
   * Includes invisible anti-spam honeypots (`_honey`, `_hp_company_website`) and timestamp verification (`_ts`).
   * Dispatches automated alerts via `/api/contact`.
2. **Interactive Instant Garage Floor Estimator (`Estimator.tsx`):**
   * Live pricing calculation for 2-car, 3-car, and custom garage dimensions.
   * Calculates realistic square-footage rates ($5.50–$7.50/sq ft) based on flake, quartz, or metallic coating systems.
   * Pre-qualifies homeowners before scheduling on-site moisture tests.
3. **Live Territory Lockout Badge:**
   * Dynamic status indicator (`OPEN`, `PENDING`, `LOCKED`) with glowing animation.
   * Communicates scarcity: *"Strictly 1 Shop Locked Out"*.
4. **Strict Trade Language Constraint:**
   * Strictly zero generic marketing jargon (no "leads", "sales funnels", "lead generation", "conversion rate", "pipeline", "buyer persona").
   * Mandatory concrete trade terminology: "diamond grinding", "CSP profile (ICRI CSP 2–3)", "pot-life management", "polyurea crack mending", "moisture vapor barrier / calcium chloride testing (ASTM F1869/F2170)", "full broadcast flake", "aliphatic polyaspartic topcoat", "stem walls", "hot-tire pickup".

---

## 6. Automated Search Engine Ingestion (IndexNow & Sitemap)

Never wait weeks for Google or Bing crawler cycles. MultiPro includes built-in real-time search engine notification:

### API Route: `/api/index-now` (`src/app/api/index-now/route.ts`)
* Uses host `www.multiprodigital.com` and verification key `78d38865f1e1499da689269788f28712`.
* Dynamically aggregates all static and active location URLs from `src/config/locations.ts`.
* Pings `https://api.indexnow.org/indexnow` on demand.
* Triggerable via terminal:
  ```powershell
  powershell -Command "Invoke-RestMethod -Uri 'https://www.multiprodigital.com/api/index-now' -Method Get"
  ```

### Dynamic XML Sitemap & Robots Protocol:
* `src/app/sitemap.ts`: Automatically compiles all routes with `lastModified` and image metadata tags.
* `src/app/robots.ts`: Grants open crawler access with `max-image-preview: large` and `max-snippet: -1` directives.

---

## 7. National Territory Rollout Protocol (2–3 Cities / Week)

To prevent Google’s algorithmic "Doorway Page" spam filters while maintaining brand exclusivity, follow this strict expansion schedule:

* **Cadence:** **2 to 3 cities per week** (8 to 12 cities per month).
* **Target:** Expand MultiPro from 5 to **17 exclusive market lockouts nationwide**:
  * **Week 1:** San Antonio, TX • Orlando, FL • Las Vegas, NV
  * **Week 2:** Atlanta, GA • Charlotte, NC • Nashville, TN
  * **Week 3:** Miami–Ft. Lauderdale, FL • Raleigh–Durham, NC • Jacksonville, FL
  * **Week 4:** Denver, CO • Salt Lake City, UT • Kansas City, MO/KS

### Mandatory Checklist for Adding Any New City Page:
1. **Define Location Data in `src/config/locations.ts`:**
   * **Mandatory Slug Format:** `{city}-epoxy-contractor-marketing` (e.g., `tampa-epoxy-contractor-marketing`, `orlando-epoxy-contractor-marketing`, `san-antonio-epoxy-contractor-marketing`). Never deviate from or alter this pattern.
   * Real slab physics (caliche bedrock, expansive clay, salt efflorescence, freeze-thaw spalling).
   * Affluent 3-car garage suburbs (e.g., Frisco, The Woodlands, Scottsdale, Lakewood Ranch, Westlake Hills).
   * Exact price bands (average ticket $5,200–$8,500; sq-ft rate $5.50–$7.50).
   * Authority citations (ICRI, ASTM, AMPP).
   * 5 localized contractor-to-agency Q&As.
2. **Cross-Link Nearby Markets:** Connect to 2–3 adjacent territory pages.
3. **Build & Verify:** Run `npm run build` to ensure static page prerendering compiles with 0 errors.
4. **Deploy & Index:** Commit and push to `origin/main` (Vercel), then ping `/api/index-now`.

---

## 8. Zero-Budget Client Acquisition Playbook ($0 Ad Spend)

How to sign paying epoxy contractor partnerships ($1,500–$2,500/mo) using the website as an authority closing weapon:

1. **The "Rank #7 to #12" Google Maps Sniper Strategy:**
   * Search Google Maps for `"epoxy flooring [City]"` or `"garage floor coating [City]"`.
   * Target contractors sitting on ranks #7 to #12. They have equipment, trailers, and crews, but are losing 80% of call volume to the top 3 spots.
2. **The 60-Second Video Audit (Free via Loom / Phone Screen Recorder):**
   * Show their current Google Maps rank and missing geo-signals.
   * Open their specific city lockout page on MultiPro (`multiprodigital.com/locations/[city]...`).
   * Highlight the live 3-car garage pricing estimator and the **1-Shop Territory Lockout** badge.
   * Close with authentic scarcity: *"We strictly take one shop in [City]. If you want to claim this territory before we offer it to another crew, let us know."*
3. **Instagram DM & SMS Outreach:**
   * Search `#epoxyflooring[city]` on Instagram.
   * Compliment their real flake and stem wall prep work.
   * Send a direct, no-fluff invitation to review their city's territory lockout page.
4. **Contractor Group Value Drops:**
   * Share screenshots of the instant square-foot estimator in Facebook contractor communities to demonstrate how to filter out $300 DIY paint shoppers.
