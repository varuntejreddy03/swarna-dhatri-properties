# Swarna Dhatri Properties Pvt Ltd — Official Web Platform

> Award-calibre bilingual real estate platform for **Swarna Dhatri Properties Private Limited**, specialized in master-planned open plots at **Zaheerabad Smart City – NIMZ**, Telangana.

---

## 🌟 Why This Could Win an Award (5 Most Distinctive Ideas)

1. **"Gajam Mind" Built-in Real Estate Metric System**: Telugu land buyers evaluate plots in *gajam* (sq.yd), *guntha*, and *acres*. The platform treats this as a first-class citizen everywhere: every plot, slider, and calculator converts seamlessly without cognitive load.
2. **Interactive Hand-Crafted SVG Plot Explorer with Vastu Orientation**: Interactive layout canvas allowing buyers to filter by cardinal direction (East/North/West/South), budget, and corner plots, with instant monthly EMI projections and one-tap WhatsApp sharing directly to family members.
3. **Real-Time IST Business Logic & Tuesday Holiday Protection**: Automatically checks Indian Standard Time (UTC+5:30) and respects the client's Tuesday holiday policy. The live status pill indicates office availability, and the site-visit booking engine gracefully blocks Tuesdays with culturally respectful guidance.
4. **"Golden Corridor" Highway Storytelling**: Rather than heavy, slow third-party mapping SDKs, an artisanal animated SVG route illustrates the highway journey from Miyapur along NH-65 to Zaheerabad/NIMZ with landmark industrial pins (Mahindra, Hatsun, Piramal, IIT-H, WOXSEN, Bullet Train station).
5. **Authentic Cultural & Bilingual Ergonomics**: Built with native-feeling conversational Telugu (`te-IN`) alongside English, incorporating generous line heights for Telugu conjuncts, speech-recognition voice inquiries, and honest gamified scratch-coupon reveals.

---

## 🚀 Quick Start & Development

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build optimized production bundle
npm run build

# 4. Preview production build
npm run preview
```

---

## 🛠️ Data Management Architecture

All core business data is separated into cleanly typed files in `src/data/`:

| Data File | Purpose | How to Update |
| :--- | :--- | :--- |
| `src/data/company.ts` | Contact info, address, office hours, RERA status | Edit phone, email, hours, or address coordinates |
| `src/data/projects.ts` | Project phases, pricing, amenities, highlights | Update `pricePerSqYd`, booking tokens, or highlights |
| `src/data/layouts.ts` | Phase 1 / Phase 2 layout metadata (rates, land analysis, sheet viewBox) | Change rates or sheet details |
| `src/data/layoutPlots.generated.ts` | Every plot (number, area, facing, outline) read from the approved CAD sheets | Generated from the PDFs — don't hand-edit |
| `src/data/plotStatus.ts` | Live inventory overrides (`available`/`booked`/`hold`) keyed by plot id | Mark plots as booked / on hold |
| `src/data/paymentPlan.ts` | Booking ₹20,000, ₹1,50,000 down payment in 10 days, EMI max 24 months, 50% registration | Change payment terms once, everywhere |
| `public/layouts/*.svg` | Vector copies of the two approved layout sheets (Phase 1 & Phase 2) | Replace when a new sheet is approved |
| `src/data/offers.ts` | Festival coupon campaigns & terms | Update prize ranges, start/end dates, and rules |
| `src/data/landmarks.ts` | Industrial landmarks along NH-65 corridor | Add or adjust distances and coordinates |
| `src/data/nimz.ts` | NIMZ facts, government timelines, corporate MoUs | Add new industrial investments or gazettes |
| `src/data/faqs.ts` | Bilingual FAQs & Document Trust Vault items | Add questions or update verification badges |

---

## 🌐 Bilingual URL-Based Routing & Content (`src/i18n/`)

- **URL-Based Prefixes**: Full deep-link support for both `/te/...` and `/en/...` routes with dynamic `<link rel="alternate" hreflang="...">` tags in document head.
- **English Strings**: `src/i18n/en.json`
- **Telugu Strings**: `src/i18n/te.json`
- **Configuration**: `src/i18n/config.ts` (Persists language preference in `localStorage` and syncs `<html lang="...">`).
- **Visible Telugu Prompt**: When visitors default to English, a dismissible bilingual prompt invites them to view in Telugu.

---

## ⚡ Low-Bandwidth Mode & Offline Considerations
- Automatically monitors `navigator.connection` for `saveData` flags and slow 2G/3G connections.
- Defers high-bandwidth drone videos, presenting lightweight static posters and reducing network strain.
- Full zero-JavaScript fallback table view provided for the Interactive Plot Explorer.

---

## 📄 Key Project Artifacts
- **[PLAN.md](file:///c:/Users/varun/Downloads/Swarna%20Dhatri%20Properties%20Pvt%20Ltd/PLAN.md)**: Site map, design tokens, component catalog, data models, and risk mitigations.
- **[DESIGN_DIRECTION.md](file:///c:/Users/varun/Downloads/Swarna%20Dhatri%20Properties%20Pvt%20Ltd/DESIGN_DIRECTION.md)**: Brand moodboard, color palette, Telugu typography line heights, and 3 hero concepts.
- **[CLIENT_CONFIRM.md](file:///c:/Users/varun/Downloads/Swarna%20Dhatri%20Properties%20Pvt%20Ltd/CLIENT_CONFIRM.md)**: Checklist of items requiring client confirmation (RERA number, Nala orders, active rate card, road widths).

---

## 🚢 Deployment (Vercel / Netlify / Cloudflare Pages)

The project compiles to a pure client-side static distribution (`dist/`).

### Deploy to Vercel:
```bash
npx vercel --prod
```

### Deploy to Netlify:
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- A `_redirects` file with `/*  /index.html  200` ensures client-side routing works on all deep URLs.

