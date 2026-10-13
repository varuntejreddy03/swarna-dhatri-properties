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
- [ ] **Exact Road Widths**: Flyer notes "33×30 ft roads". Confirm whether the main spine is 33 ft and internal cross-streets are 30 ft, or if 40-ft approach roads exist.
- [ ] **Survey / CAD Plot Layout**: `src/data/plots.sample.ts` currently provides 42 realistic sample plots (150–300 sq.yd) for interactive demonstration. Client should supply final approved plot numbering and dimension blueprint to replace sample coordinates.

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
