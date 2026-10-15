# CLIENT CONFIRMATION CHECKLIST
## Swarna Dhatri Properties Private Limited — Official Website

This document lists all placeholder values, marketing flyer discrepancies, and required verifications that require client confirmation before public advertising.

---

### 1. Legal & Regulatory Verifications
- [ ] **TS RERA Registration Number**: Currently configured as `TODO_CONFIRM_WITH_CLIENT` in `src/data/company.ts`. Please confirm whether Swarna Bindu Avenue-2 has a registered RERA number, an applied filing number, or falls under exemption criteria (e.g. Gram Panchayat / DTCP pre-approval).
- [ ] **Nala Conversion Order Details**: Mentioned as "Nala Converted" on marketing flyers. Please supply the exact proceedings order number and issue date from the Revenue Divisional Officer (RDO) / Collector for investor documentation records.
- [ ] **Layout Regularisation Scheme (LRS)**: Website highlights "Company pays 100% LRS charges". Confirm that this policy is unconditionally applicable to all registered plots in Avenue-2.

---

### 2. Pricing & Facing Discrepancy (Avenue vs. Avenue-2)
- [ ] **Price Reconciliation**:
  - Marketing flyer (Avenue-2) states: **₹3,300 per sq. yd.** (Booking ₹20,000, 50% spot registration).
  - Telugu flyer (Avenue Phase 1) states: **East Facing ₹4,500 / sq. yd.** and **West Facing ₹4,000 / sq. yd.**
  - *Current Implementation*: Modeled as two distinct phases (`avenue-2` and `avenue-1`) in `src/data/projects.ts` with prominent disclaimers ("Prices subject to change; confirm with sales team"). Please confirm current active inventory pricing.

---

### 3. Physical Layout & Road Widths
- [x] **Road widths**: Updated to **30 ft** everywhere (both layout sheets show "30' Wide Road"). The earlier "33 ft" mentions were removed.
- [x] **Survey / CAD Plot Layout**: The explorer now shows the real Phase 1 and Phase 2 layout sheets (`public/layouts/`), with plot numbers and areas read from the PDFs (`src/data/layoutPlots.generated.ts`).
- [ ] **Phase 2 sheet inconsistencies** (reproduced as drawn, please confirm): the sheet says *237 plots* and a plotted area of *29,936 sq.yd*, but it carries **244 plot labels** whose areas add up to **29,665 sq.yd**. Plot number **91 appears twice** (areas 113 and 224), number **224 is missing**, and there is one **91/1** (154 sq.yd). Numbers run up to 243.
- [ ] **Acreage**: The sheets give Phase 1 = Ac 2-00 (9,678.94 sq.yd, 52 plots) and Phase 2 = Ac 9.20 (45,270 sq.yd). Marketing copy elsewhere still says "50 Acres" — confirm whether that is the wider township and update the copy if not.
- [ ] **Facing / corner flags**: The sheets don't print facing. It is derived from the road-frontage side drawn on each plot (Phase 1: plots on the west column and the right-hand column face West, the middle column faces East — matching the ₹4,500 East / ₹4,000 West rates). Corner plots on Phase 1 are 1, 22, 23, 45, 46. Please verify.
- [ ] **Live inventory**: all plots show as *available* until statuses are entered in `src/data/plotStatus.ts`.

---

### 3b. Payment terms (new)
- [ ] Booking **₹20,000**; down payment **₹1,50,000 within 10 days**; balance in EMI for a **maximum of 24 months**; or **50% registration within 10 days** (₹2,00,000 on the 121 sq.yd × ₹3,300 = ₹3,99,300 example). Terms live in `src/data/paymentPlan.ts`.
- [ ] Confirm whether the ₹1,50,000 down payment **includes** the ₹20,000 booking (the site currently treats them as separate: ₹1,70,000 upfront).
- [ ] Confirm whether the ₹1,50,000 down payment is the same for every plot size, and whether the EMI carries **interest** (the calculator defaults to 0% with a slider; the plot panel shows balance ÷ 24).

---

### 4. Promotion & Coupon Campaign
- [ ] **Fortune Coupon Offer Dates**: Configured in `src/data/offers.ts` with `startsOn` and `endsOn` marked as `TODO_CONFIRM_WITH_CLIENT`. Confirm specific festival period (e.g., Dasara/Diwali/Ugadi) and total prize pool cap.
- [ ] **Physical Coupon Redemption**: Confirm that coupons are physical scratch cards handed over upon ₹20,000 token payment at the Miyapur office or site office.

---

### 5. Operations & Customer Logistics
- [ ] **Weekly Holiday (Tuesday)**: The site strictly blocks Tuesday site visit bookings and displays a "Closed Today" IST pill. Confirm that office hours are strictly 10:00 AM – 6:00 PM Wed–Mon with Tuesday closed.
- [ ] **Complimentary Site Visit Pickup**: Confirm pickup pickup points (Miyapur Sai Ranga Bhaskar Residency) and advance notice required (e.g., 24 hours prior).

---

### 6. Copywriting & Digital Integrations
- [ ] **Telugu Copy Review**: Native Hyderabad real estate tone has been implemented across `src/i18n/te.json`. Any custom regional phrasing should be proofread by local sales leadership.
- [ ] **Official Social Media & WhatsApp Links**: Primary WhatsApp target is set to `+91 63048 04450` (`Swarnadhatrihyd@gmail.com`). Confirm YouTube, Facebook, and Instagram handles.
- [ ] **Google Analytics 4 (GA4) / Meta Pixel**: Provide Measurement ID for tracking ad conversions.
