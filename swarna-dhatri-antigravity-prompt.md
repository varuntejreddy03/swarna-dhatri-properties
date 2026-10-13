# ANTIGRAVITY MASTER PROMPT — Swarna Dhatri Properties Pvt Ltd Website

Paste everything below this line into Antigravity.

---

## 0. HOW TO WORK (read first)

You are a senior product designer + creative frontend engineer building an **award-calibre (Awwwards / CSS Design Awards / FWA level) real estate website for the Indian market, designed for Telugu-speaking buyers**. Do not produce a generic "real estate template". Every section must feel designed for this brand, this land, and these buyers.

Work in this order and show me each artifact before moving on:
1. **Plan artifact**: site map, design tokens, component list, data model, feature list, risks.
2. **Design direction artifact**: moodboard in words, colour palette, type scale, motion principles, 3 hero concepts, then pick one and say why.
3. **Build**: foundation → data → sections → interactions → bilingual → SEO/perf → QA.
4. **Browser QA**: open the site in the browser at 360px, 390px, 768px, 1440px and screenshot each major section. Fix what looks off before telling me it is done.

Never invent facts (RERA number, approvals, distances, ROI percentages). Anything unknown goes in `src/data/*.ts` as a clearly marked `TODO_CONFIRM_WITH_CLIENT` placeholder and is listed at the end in a "Client must confirm" checklist.

---

## 1. THE CLIENT

**Swarna Dhatri Properties Private Limited**: open plots / layout developer, Hyderabad, Telangana.

- Phone / WhatsApp: **6304804450** (tel: +91 63048 04450)
- Email: **Swarnadhatrihyd@gmail.com**
- Address: 305, 3rd Floor, Sai Ranga Bhaskar Residency, Near Sai Ranga Theater, Miyapur, Hyderabad 500049
- Business: Real estate, open plots
- Office hours: **10:00 AM – 6:00 PM IST, Tuesday holiday (closed)**

**Logo** (provided as image, use as-is, never redraw): gold script wordmark "Swarna Dhatri", a rainbow-coloured coconut/palm tree leaning on a gold roof line, green double rule, teal caps "PROPERTIES PRIVATE LIMITED". Create an SVG/PNG-with-transparency version for header, footer, favicon (palm only), and OG image.

**Brand colours (sample from logo, then refine as tokens):**
- Swarna Gold ≈ `#E5A823` (primary brand, headings, accents)
- Dhatri Green ≈ `#6DBE45` (rules, success, CTA hover)
- Deep Teal ≈ `#0E8F73` (secondary text, trust elements)
- Palm rainbow accents (red, orange, yellow, green, cyan, blue, purple, magenta) used ONLY as sparse celebratory accents (palm mark, coupon, loading), never as page backgrounds.
- Add a deep forest/ink neutral (`#0B2A22`-ish) and a warm ivory (`#FFF9EA`-ish) for contrast. Gold on white fails contrast for body text, so use gold for display/large text and decorative elements only, and darker teal/ink for body.

---

## 2. THE FLAGSHIP PROJECT (feature heavily)

### Swarna Bindu Avenue-2 (current, hero project)
- Location: **Zaheerabad Smart City – NIMZ**, Sangareddy district, Telangana
- **50 acres Mega Project**, **Nala Conversion** done (show as badge: "Nala Converted")
- Price: **₹3,300 per sq. yd.** (marketing flyer, Avenue-2)
- Booking: **₹20,000 only**
- **Spot registration on 50% amount**
- **Flexible EMI options available**
- **Coupon on every booking: win between ₹10,000 and ₹1 Lakh**

### Swarna Bindu Avenue (earlier phase, Telugu flyer)
- Same Zaheerabad Smart City – NIMZ location, 50 acres, Nala Conversion
- East face **₹4,500 / gajam**, West face **₹4,000 / gajam** (gajam = sq. yd.)
- Booking ₹20,000, spot registration on 50% amount, EMI available

> ⚠️ The two flyers show different prices. Model them as **two separate projects** in the data file (`avenue-1`, `avenue-2`), each with its own price, facing-wise pricing and status. Add `priceAsOf` and a visible disclaimer "Prices subject to change. Confirm with sales team." Put this discrepancy in the client-confirm checklist.

### Project highlights (from brochure, use exact meaning)
N/A (non-agricultural) approved plots · 33×30 ft roads *(confirm exact road widths)* · gravel roads · layout as per Vastu · entrance gate · transformer · borewell · red sandal plantation · kerbing stone · poles & wire fencing · water connection · **company pays the LRS charges**

### Location highlights (from brochure)
Mahindra (tractors & auto manufacturing) – Zaheerabad · Mungi Brothers by Mahindra (bus body) · Avanti Bufa by Mahindra (car seats, super-structure) · Alfa Engineerings by Mahindra (chassis frames) · MG Automotive by Mahindra (bus body) · Hatsun Agro Product Ltd (dairy) – Zaheerabad · **Proposed Mumbai–Hyderabad bullet train corridor, Zaheerabad planned as a station** · Ketaki Sangameshwara Temple – Jharasangam · Sri Dattagiri Maharaj Temple – Jharasangam · Rock Wool (automobile heat sheet) – Digwal · Piramal (pharma) – Digwal · MRF Company – Sadasivpet · Pepsi Co – Sadasivpet · WOXSEN University – Sadasivpet · IIT Hyderabad – Kandhi, Sangareddy · NH-65 Mumbai Highway · Toll Plaza · Regional Ring Road (RRR)

### NIMZ explainer (from brochure)
National Investment and Manufacturing Zone near Zaheerabad, proposed by TSIIC, about **12,635 acres** across Nyalkal and Jharasangam mandals, under DIPP. Companies named: Hyundai (R&D facility + test track), Mahindra & Mahindra (existing Zaheerabad hub), Triton EV (MoU 2021, ~₹2,100 crore), VEM Technologies (defence & aerospace, ~₹1,000 crore). Other clusters: food & agro-processing, electrical equipment, machinery & metal, transport equipment.
Phrase these carefully as "proposed / planned / MoU signed / reported", **never as guarantees of appreciation**. Include a source/disclaimer line.

### Offer
Coupon with every booking (₹10,000 – ₹1 Lakh). Treat as a campaign object in data with `startsOn/endsOn` (TODO_CONFIRM) and T&C placeholder.

---

## 3. WHO THE VISITOR IS (design for this mindset)

Primary visitors: Telugu-speaking families in Hyderabad / Telangana / AP, first-time plot buyers, salaried middle class, small business owners, NRIs buying through family, and agents/referrers. Most arrive on **Android phones, on 4G, via WhatsApp forwards, Instagram/Facebook ads and Google search**.

What actually moves a Telugu buyer, and what the site must answer in the first scroll:
1. **Trust before beauty**: "Is the land clean? Is it approved? Will I get registration?" Show approvals, document checklist, transparent pricing, office address, real team, real site photos/video. No fake testimonials.
2. **Family decides together**: easy "share with family on WhatsApp" for any plot/page.
3. **Vastu matters**: East/North facing preferred; show facing clearly; Vastu-friendly filter; compass.
4. **Units they think in**: *gajam* (sq. yd.), plus sq. ft., guntha, acre. Prices in lakh / crore with Telugu words (e.g., "₹16.5 లక్షలు").
5. **EMI & small booking amount**: "₹20,000 to book" is the hook. Make EMI math instant and honest.
6. **Future story**: NIMZ, Hyundai, bullet train, RRR, NH-65. Explain it simply, with sources, without hype.
7. **Site visit is the real conversion**: free pickup, easy date/time, WhatsApp confirmation. Remember office is closed Tuesdays.
8. **Language**: Telugu first-class, not a Google-translate afterthought. Natural conversational Telugu, English toggle one tap away.
9. **Auspicious / emotional layer**: land as "ground under the family's future", Dasara/Diwali/Ugadi/Sankranti offer moments, but tasteful, not kitsch.

---

## 4. CONCEPT & DESIGN DIRECTION

**Creative concept: "Swarna Dhatri: Golden Earth."** Dhatri = earth/mother-bearer; Swarna = gold. The site is a journey from *soil → plot → home → growth*. Use the palm-on-roof logo as the narrative symbol (palm = Telangana's landscape + prosperity; roof = home).

Visual language:
- Warm ivory canvas, deep forest-green ink, liquid-gold accents, with a *very* sparing rainbow-palm gradient as a signature "celebration" accent.
- Editorial typography: expressive serif/script display for hero moments echoing the logo script (e.g., Playfair Display / Cormorant for English display), clean sans for UI (Inter / Plus Jakarta Sans), and **excellent Telugu type**: *Noto Sans Telugu* for UI, *Noto Serif Telugu* or *Ramabhadra/Anek Telugu* for display. Test conjuncts and line-height (Telugu needs ~1.6–1.75).
- Layout: large confident type, generous whitespace, asymmetric grids, layered parallax land contours, topographic-line motif (survey/contour lines), subtle paper-grain texture.
- Motion: purposeful, smooth, 60fps. Scroll-driven storytelling (GSAP ScrollTrigger / Framer Motion), hero land "grows" plot lines onto a landscape, numbers count up, map routes draw themselves. Always honour `prefers-reduced-motion`.
- Imagery: use placeholder aerial/landscape images clearly labelled `REPLACE_WITH_REAL_SITE_PHOTO`, and structure for a drone video hero (`hero.mp4` + poster + low-bandwidth fallback). **Do not use fake stock "luxury villas"**; this is plots, show land, roads, avenues, windmills, greenery, gates.
- Wind turbines + green hills (present in client flyers) are part of their visual identity; echo them subtly.

**Avoid:** generic blue "corporate real estate" look, stock couples shaking hands, carousel-of-everything, cluttered flyer-style collage, giant pop-ups, autoplay audio.

Deliver **3 hero concepts** on paper, then build the strongest:
- A: scroll-driven aerial → layout reveal with plot lines drawing in
- B: split hero, Telugu headline vs. English, with live "Open now / Closed today (Tuesday)" badge and price chip
- C: 'Golden hour' full-bleed landscape with parallax windmills and a floating booking card

---

## 5. SITE MAP

1. **Home**
2. **Projects**: list + detail pages (`/projects/swarna-bindu-avenue-2`, `/projects/swarna-bindu-avenue`)
3. **Why Zaheerabad & NIMZ**: story page
4. **Plot Explorer**: interactive layout map (see §6)
5. **Tools**: EMI calculator, Gajam/Sq.ft/Guntha/Acre converter, Budget → plots finder
6. **Offers**: coupon campaign
7. **Site Visit booking**
8. **Why Swarna Dhatri**: trust, documents, process, team
9. **Gallery & Videos**
10. **FAQs** (EN/TE)
11. **Blog / Guides** (SEO): e.g., "How to check DTCP/HMDA approval", "What is LRS?", "Gajam vs sq ft", "NIMZ Zaheerabad explained"
12. **Contact**
13. Legal: Privacy, Disclaimer, Terms

---

## 6. SIGNATURE & NEW-IDEA FEATURES (this is where it wins awards)

Build these as polished, working, frontend-only experiences (data from JSON):

1. **Interactive Plot Explorer (SVG layout map)**
   - Hand-built SVG layout with plot numbers, sizes (gajam), facing, road width, status (Available / Booked / Hold). Use **sample generated data clearly marked as sample** until the client provides the real layout.
   - Filters: facing (East/West/North/South), size range, budget, corner plots, **Vastu-friendly** toggle.
   - Click a plot → side panel with size in gajam/sq.ft, price, EMI estimate, facing, "Share to family on WhatsApp", "Book site visit for this plot".
   - Pinch-zoom + pan on mobile, keyboard accessible, zero-JS-library fallback list view.

2. **"Gajam Mind" unit converter, built-in everywhere**
   - Any area shown has a tap-to-switch chip: gajam ⇄ sq.ft ⇄ sq.m ⇄ guntha ⇄ acre (1 gajam = 9 sq.ft; 1 guntha = 121 gajam; 1 acre = 4,840 gajam / 40 guntha). Verify before shipping.

3. **Smart EMI + "What can I afford?" calculator**
   - Inputs: plot size, price/gajam (prefilled), booking amount (₹20,000), down payment %, tenure, interest rate. Output: monthly EMI, total cost, in lakh/crore words in Telugu & English. Clear disclaimer: indicative only, no bank commitment.
   - Reverse mode: "My monthly budget is ₹X → suggested plot size."

4. **Vastu Compass**
   - Animated compass that lets the user pick facing; explains East/West/North/South in plain Telugu/English and filters the plot map. Keep claims modest and respectful, not superstition-selling.

5. **Golden Corridor map (Zaheerabad connectivity story)**
   - A stylised, animated route map (SVG, no heavy map SDK) from Miyapur → NH-65 → Sadasivpet → Digwal → Zaheerabad/NIMZ with landmark pins (Mahindra, Hatsun, Piramal, IIT-H, WOXSEN, MRF, PepsiCo, RRR, proposed bullet train station). Scroll draws the route; tapping a pin shows a card. Add an actual Google Maps embed + "Get directions" button for the site and the office.

6. **NIMZ Timeline "Land of Factories"**
   - Scroll timeline: MoU/announcements → companies → infrastructure (RRR, NH-65, bullet train proposal). Every card carries a status tag: *Existing / Under development / Proposed / MoU signed*, and a source note. This builds trust and avoids hype.

7. **Coupon Reveal (gamified, honest)**
   - Scratch-card / gift-box animation (echoing the flyer's coupon) in the Offers page. It must **not** pretend to award a real prize online; label as "Illustration. Your coupon is issued at booking." Terms link visible.

8. **Plan My Site Visit (WhatsApp-first)**
   - 3-step: pick date → pick time slot → name & number. **Block Tuesdays and out-of-hours slots**; show friendly Telugu message if user picks Tuesday. Submit opens a pre-filled WhatsApp message to 6304804450 and also offers "Request call back". Mention free site-visit pickup *only if client confirms* (TODO).

9. **Live "Open now / Closed today" status pill** in header using IST: Open 10–6, closed Tuesdays, and shows "Opens tomorrow 10 AM" etc.

10. **"Share with Family" everywhere**: one-tap WhatsApp share of the project/plot with a beautiful OG card; also copy-link and generate a **shareable PDF-style brochure view** (print-friendly CSS) of the project.

11. **Document Trust Vault**
    - Checklist section: Approval/layout permission, N/A conversion, Nala conversion, LRS (company-paid), encumbrance, title, RERA (if applicable), registration process. Each item has a status slot (`verified: true/false`, `docLink`). Do **not** show a tick without real client confirmation, so default to "Ask our team".

12. **Voice enquiry (progressive enhancement)**
    - Mic button using Web Speech API (Telugu `te-IN`) to fill the name/need field; hide gracefully if unsupported.

13. **Language toggle: తెలుగు | English** persistent, no layout shift, URL-based (`/te/…`, `/en/…`) with proper `hreflang`. Default to Telugu for Telugu-locale browsers; otherwise English with a visible Telugu prompt.

14. **Low-bandwidth mode**: detects `navigator.connection.saveData`/slow 2G-3G, swaps video for poster, defers heavy animation.

15. **Micro-delight**: palm-leaf loader animation, cursor-follow gold glint on CTAs (desktop only), number counters, haptic-style button press, sound **off** by default (no audio at all unless user opts in).

---

## 7. HOME PAGE FLOW (suggested, refine as designer)

1. Header: logo, nav, language toggle, open/closed pill, sticky **Call** + **WhatsApp** buttons (mobile bottom bar).
2. Hero: emotional Telugu + English headline, e.g. *"మీ కుటుంబ భవిష్యత్తుకు బంగారు పునాది"* / "A golden foundation for your family's future." (have a native-quality Telugu copy check noted in the checklist). Price chip "₹3,300/గజం నుండి", "₹20,000తో బుక్ చేయండి", primary CTA *Book Site Visit*, secondary *Explore Plots*.
3. Trust strip: 50 Acres · Nala Converted · N/A Approved · Company pays LRS · Spot registration · EMI available.
4. Flagship project card (Swarna Bindu Avenue-2) with mini plot-map teaser.
5. "Why Zaheerabad / NIMZ" scroll story + Golden Corridor map.
6. Project amenities as illustrated icons (gate, 33×30 roads, gravel roads, borewell, transformer, red sandal, kerbing, fencing, water connection).
7. Plot Explorer teaser + EMI calculator.
8. Offer section (coupon reveal).
9. How buying works (5 steps: enquiry → site visit → choose plot → book ₹20,000 → registration).
10. Trust vault + FAQs.
11. Gallery / drone video.
12. Final CTA band + map + address + hours.
13. Footer with legal disclaimer, social links (placeholders), RERA placeholder.

---

## 8. BILINGUAL CONTENT RULES

- All copy lives in `src/i18n/en.json` and `src/i18n/te.json`. No hard-coded strings in components.
- Telugu copy should be natural, warm, simple, the kind a Hyderabad sales executive would say, not stiff textbook Telugu. Keep the common English loanwords people actually use (EMI, booking, registration, plot, layout, road) in Telugu script or Latin as appropriate.
- Numbers: use ₹ and Indian grouping (₹3,30,000 style via `Intl.NumberFormat('en-IN')`), keep Western digits for clarity, add Telugu words for lakh/crore (లక్షలు / కోట్లు) in headline figures.
- Mark any machine-written Telugu with `// TE_REVIEW_NEEDED` so a native speaker can proof it.

---

## 9. TECH STACK & ARCHITECTURE

- **Frontend-only** (no backend needed): **Vite + React 18 + TypeScript + Tailwind CSS**, **Framer Motion** + **GSAP ScrollTrigger** (lazy-loaded), React Router, `react-i18next`.
- SVG for maps/plot layout, no heavy map SDK; Google Maps iframe lazy-loaded only on interaction.
- Data in typed files: `src/data/company.ts`, `projects.ts`, `plots.sample.ts`, `nimz.ts`, `landmarks.ts`, `faqs.ts`, `offers.ts`.
- Forms: WhatsApp deep link (`https://wa.me/916304804450?text=...`), `tel:` and `mailto:`; abstract a `submitLead()` function so a form backend (Formspree / Google Sheet / StaffArc API) can be plugged in later.
- Folder structure clean, components small, design tokens in `tailwind.config` + CSS variables, Storybook-style `/styleguide` route showing tokens and components.
- Deploy-ready for Vercel/Netlify with correct SPA fallbacks, `robots.txt`, `sitemap.xml`.

---

## 10. QUALITY BAR (non-negotiable)

**Performance:** Lighthouse mobile ≥ 90 Performance, ≥ 95 Accessibility/SEO/Best Practices. LCP < 2.5s on mid-range Android over 4G. Images AVIF/WebP with `srcset`, lazy-load, explicit dimensions (no CLS). Font subsetting + `font-display: swap`, preload only critical fonts (including Telugu subset).

**Accessibility (WCAG 2.2 AA):** contrast, focus rings, skip link, ARIA for the plot map (provide table/list alternative), keyboard-operable everything, reduced-motion support, large touch targets (≥ 48px).

**SEO (India local):**
- Title/meta in both languages; `LocalBusiness` + `RealEstateAgent` + `Place`/`Product` (project) JSON-LD; `FAQPage` schema; Open Graph/Twitter cards with a designed OG image per project.
- Target queries (EN + TE): "open plots in Zaheerabad", "NIMZ Zaheerabad plots", "plots near Hyundai NIMZ", "DTCP/N/A approved plots Sangareddy", "plots near Zaheerabad bullet train station", "ఝరాసంగం ప్లాట్లు", "జహీరాబాద్ ప్లాట్లు", "గజం భూమి".
- Google Business-friendly NAP (name, address, phone) consistent in footer/contact.

**Compliance & honesty:**
- Footer disclaimer: images/renders are artistic impressions; infrastructure items are proposed/planned as per public information; prices and offers subject to change; buyers should verify documents. RERA / approval numbers shown only if provided (`TODO_CONFIRM`).
- No guaranteed-returns language ("double your money"). Use "growth potential, subject to market conditions".
- Privacy: tiny consent line near forms; no tracking scripts beyond optional GA4 placeholder.

**Testing:** mobile-first at 360px; test low-end device throttling; test Telugu rendering; test Tuesday/off-hours logic with mocked dates; test every CTA link.

---

## 11. ASSETS I WILL SUPPLY / PLACEHOLDERS TO CREATE

- Logo (provided), flyers (provided), brochure page (provided): extract colours, copy facts only, **do not embed the flyers as full-page images**.
- Placeholders to create and mark clearly: hero drone video, site photos (roads, gate, avenue plantation), layout plan (real plot data), windmill/landscape images, team photos, office photo, testimonial videos, RERA number, approval documents.

---

## 12. FINAL DELIVERABLES

1. Running site (`npm run dev`) with all pages and features above.
2. `README.md`: how to edit data, change prices/offers, add plots, add languages, deploy.
3. `CLIENT_CONFIRM.md`: checklist of every placeholder/unknown (RERA no., approvals, price discrepancy between Avenue and Avenue-2, road widths "33×30", offer dates & T&C, free-pickup claim, real plot inventory, Telugu copy review, social links, GA ID).
4. Browser-test screenshots of hero, plot explorer, EMI calculator, Golden Corridor, offers, contact on mobile + desktop.
5. A short "why this could win an award" note listing the 5 most distinctive ideas actually implemented.

Start with the Plan artifact now. Do not start coding until I approve the plan and the hero concept.
