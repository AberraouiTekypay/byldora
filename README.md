# BYLDORA — Construction Procurement Intelligence

> **Construction procurement, intelligently executed.**  
> Turn BOQs and project requirements into structured RFQs, comparable supplier bids, and executable procurement decisions.

---

## Overview

BYLDORA is enterprise procurement infrastructure purpose-built for the commercial realities of the construction and capital projects industry. Unlike generic procurement software or consumer spreadsheet workflows, BYLDORA is engineered around the deep, technical complexities of building contracts: hierarchical bills of quantities (BOQ), trade lot divisions, specification compliance, commercial exclusions, delivery milestone logistics, retention clauses, and payment term valuation.

BYLDORA was architected to bridge the digital gap in global and emerging growth markets: suppliers can quote via their preferred methods—including WhatsApp, marked-up Excel files, or scanned PDFs—while the buyer’s procurement team evaluates offers through a normalized, apples-to-apples commercial matrix.

---

## Key Capabilities

1. **BOQ Intelligence Schedule**
   * Automated line-item extraction from complex multi-division spreadsheets and schedules.
   * Standardized categorization across Civil, MEP, Façades, Finishes, and FF&E.
   * Critical long-lead item tracking (14–26 week fabrication horizons).

2. **RFQ Trade Bundling & Omnichannel Dissemination**
   * Dynamic grouping of thousands of line items into scoped trade packages.
   * Frictionless dispatch across Web Portal, Direct Corporate Email, and verified WhatsApp links.
   * Specification code mapping (Eurocodes, ASHRAE, ASTM, Uniclass, CSI MasterFormat).

3. **AI Bid Normalization & Economic Reconciliation Engine**
   * Detects hidden exclusions (e.g., omitted freight or crane hoists) before contract signing.
   * Calculates true landed transaction cost rather than simply accepting headline quote face values.
   * Evaluates working capital impact of 60/90-day credit terms versus advance deposits.

4. **Certified Award & Purchase Order Studio**
   * Generates legally binding, itemized Purchase Orders (PO) upon commercial signoff.
   * Incorporates standard contractual retention clauses (5–10% performance holdback).
   * Print-ready, high-resolution documentation with digital SHA-256 audit stamps.

---

## Product Architecture

* **Framework:** [Next.js 15](https://nextjs.org/) (App Router, React 19)
* **Language:** TypeScript 5
* **Styling & Design System:** Tailwind CSS
* **Color Palette:**
  * BYLDORA Navy: `#0B1220`
  * Graphite: `#1C2636`
  * Electric Blue: `#2563EB`
  * Cyan Accent: `#0EA5E9`
  * Warm Off-White: `#F8FAFC`
* **Icons:** [Lucide React](https://lucide.dev/)
* **Deployment:** [Vercel](https://vercel.com/)

---

## Getting Started

### Prerequisites

* Node.js 18.18+ or 20+
* npm, pnpm, or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/AberraouiTekypay/byldora.git

# Navigate to project directory
cd byldora

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

---

## Demo Credentials & Persona Quick Switcher

The live deployment provides instant evaluation access with pre-configured roles:

1. **Chief Procurement Officer (CPO):** Full financial authority, project budget overview (MAD 82.4M), and contract award signoff.
2. **Lead Estimator & Quantity Surveyor:** BOQ line item management, package scoping, and RFQ issuance.
3. **Regional Supplier / Bidder:** Quotation submission portal, specification variance declaration, and delivery lead time inputs.

---

## Ownership & Branding

Every public-facing page reflects the BYLDORA brand identity.

**An EM300.co Company**
