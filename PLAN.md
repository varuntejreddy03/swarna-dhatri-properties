# ARCHITECTURE & SPECIFICATION PLAN
## Swarna Dhatri Properties Private Limited — Official Web Platform

---

### 1. Site Map & Route Hierarchy
- **/** (Home): Hero, Trust Strip, Current Projects, Golden Corridor Route, Interactive Plot Explorer, Amenities Grid, Smart EMI & Gajam Calculator, NIMZ Timeline, Coupon Scratch Reveal, 5-Step Buying Process, Document Trust Vault, FAQs, Site Visit Booking & Office Desk.
- **/projects**: Phase comparison between Swarna Bindu Avenue-2 (₹3,300/yd) and Avenue Phase 1 (₹4,000–₹4,500/yd).
- **/projects/:slug**: Deep project detail with downloadable/printable PDF-ready brochure view, interactive layout, EMI estimator, and link deed checklist.
- **/why-zaheerabad-nimz**: Strategic growth story of the 12,635-acre TSIIC NIMZ, industrial anchors (Mahindra, Hyundai R&D, Triton EV, VEM Tech), and high-speed rail corridor.
- **/plot-explorer**: Full-screen interactive SVG layout canvas with facing filters (East/West/North/North-East), corner plots, Vastu toggle, budget slider, and zero-JS table fallback.
- **/tools**: Financial and land measurement suite:
  - "Gajam Mind" Unit Converter (Gajam ⇄ Sq.Ft ⇄ Sq.M ⇄ Guntha ⇄ Acre)
  - Smart EMI Calculator with Telugu/English crore-lakh wording
  - Reverse Affordability Calculator ("My monthly budget is ₹X → plot size")
  - Vastu Shastra Compass with cardinal guidelines.
- **/offers**: Fortune coupon reveal (₹10,000 to ₹1 Lakh) issued upon ₹20,000 token booking, with transparent legal disclaimer.
- **/book-visit**: 3-step site visit reservation with IST timezone holiday blocking (Tuesdays closed) and optional speech-to-text voice input.
- **/about**: Company pedigree, leadership values, and physical office verification (Miyapur Sai Ranga Bhaskar Residency).
- **/gallery**: Authentic ground photography (demarcated roads, red sandalwood plantation, transformers) and low-bandwidth poster streaming.
- **/faqs**: Bilingual searchable knowledgebase covering LRS, Nala conversion, spot registration, and Vastu.
- **/guides**: Educational buyer guides explaining DTCP/HMDA rules, land conversion procedures, and units.
- **/contact**: Direct phone, WhatsApp deep-link, Google Maps directions, and working hours desk.
- **/legal**: Terms of Service, Privacy Policy, and Advertising Disclaimers.
- **/styleguide**: Design tokens showcase and component catalog.
- **/te/\*** and **/en/\***: URL-based language routes synced with alternate `hreflang` metadata.

---

### 2. Design Tokens
- **Swarna Gold** (`#E5A823`, dark: `#C78B17`): Primary brand signature, display typography, accent highlights.
- **Dhatri Green** (`#6DBE45`, dark: `#529C30`): Organic earth, agricultural prosperity, verified badges, action buttons.
- **Forest Ink** (`#0B2A22`, deepest: `#071A15`): Body text, high-contrast display cards, luxury foundations.
- **Warm Ivory** (`#FFFDF7`, dark: `#FDF8EB`): Soft paper-textured background avoiding clinical stark white.
- **Palm Rainbow Gradient**: Sparing festive accents on coupon reveals and brand badges.
- **Typography**:
  - English Display: *Cormorant Garamond* (editorial luxury serif).
  - Telugu Display & Body: *Noto Sans Telugu* & *Noto Serif Telugu* with `line-height: 1.65` for complex conjuncts.
  - UI Sans: *Plus Jakarta Sans* for numbers, badges, and controls.

---

### 3. Component Architecture
- `Header.tsx`: Responsive navigation with live IST status pill, low-bandwidth mode chip, visible Telugu prompt, and URL-swapping language switch.
- `Footer.tsx`: Comprehensive NAP data, legal disclaimer, quick links, and RERA placeholder.
- `PlotExplorer.tsx`: Hand-crafted SVG map with zoom/pan controls, Vastu/facing filters, keyboard accessibility (`tabIndex`, `role="button"`), and table alternative.
- `EmiCalculator.tsx`: Dual-mode forward EMI & reverse budget plot sizing calculator with Indian number formatting.
- `UnitConverter.tsx`: Bidirectional Telangana land unit conversion.
- `VastuCompass.tsx`: Cardinal compass explaining East, West, North, and North-East plot orientations.
- `GoldenCorridorMap.tsx`: Stylized NH-65 highway storytelling from Miyapur to Zaheerabad with industrial landmark pins.
- `NimzTimeline.tsx`: Chronological milestone tracker with status tags (*Existing / Proposed / MoU Signed*).
- `CouponReveal.tsx`: Gamified scratch-card reveal with canvas-confetti and clear disclaimer.
- `BookVisitForm.tsx`: Form engine with IST Tuesday holiday validation and Web Speech API mic helper.
- `DocumentTrustVault.tsx`: Document verification checklist with explicit "Ask Our Team" defaults.
- `BottomMobileNav.tsx`: Sticky quick-action bar for mobile phone calls, WhatsApp, and booking.

---

### 4. Typed Data Models (`src/data/`)
- `company.ts`: Address, coordinates, phone (+91 63048 04450), email, IST hours (10 AM - 6 PM), Tuesday holiday flag.
- `projects.ts`: Project specifications for Swarna Bindu Avenue-2 and Phase 1, pricing, amenities, and disclaimers.
- `plots.sample.ts`: 42 sample plots with coordinates, dimensions, facing, road width, and status.
- `landmarks.ts`: Major industrial hubs along the NH-65 corridor.
- `nimz.ts`: Historical background and enterprise investments in the 12,635-acre zone.
- `faqs.ts` & `offers.ts`: FAQs, document vault items, and festival booking coupon parameters.

---

### 5. Identified Risks & Mitigations
1. **Pricing Discrepancy between Flyers**: Modeled as distinct phases with clear disclaimers and listed in `CLIENT_CONFIRM.md`.
2. **Timezone Shifts on Tuesday Holiday**: Isolated date parsing to local calendar components (`YYYY-MM-DD` split) preventing UTC midnight skew.
3. **Bandwidth Limitations on Rural 3G**: Added `navigator.connection.saveData` detection with automatic poster swapping and deferred media.
4. **SVG Accessibility**: Added ARIA labels, keyboard focus rings, and an accessible table fallback.
