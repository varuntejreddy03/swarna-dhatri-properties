# DESIGN DIRECTION & CREATIVE MANIFESTO
## Swarna Dhatri: "Golden Earth" (స్వర్ణ ధాత్రి)

---

### 1. Moodboard in Words
*Liquid afternoon sunlight descending over black-soil Telangana agricultural fields; graceful wind turbines rotating against a deep turquoise dusk horizon; the tactile authenticity of handmade cotton stamp papers, ancient boundary stones etched with Telugu script, and the festive, golden anticipation of a family laying the foundation brick for their grandchildren's wealth.*

---

### 2. Colour Palette & Design Tokens
- **Swarna Gold** (`#E5A823` / `#C78B17`): Represents prosperity, solar energy, and foundational value. Used for display headlines, pricing badges, and hero borders.
- **Dhatri Green** (`#6DBE45` / `#529C30`): Represents the nourishing earth, vegetation, Vastu balance, and verified approval badges.
- **Deep Teal / Forest Ink** (`#0E8F73` / `#0B2A22` / `#071A15`): High-contrast ink providing AAA readability without harsh black on white.
- **Warm Ivory Canvas** (`#FFFDF7` / `#FDF8EB`): Soft earthen paper tone providing warmth and welcoming tactile presence.
- **Palm Rainbow Gradient**: A disciplined, sparing accent echoing the multi-hued palm fronds of the corporate mark, restricted solely to celebration moments (scratch reveal, success badges).

---

### 3. Type Scale & Telugu Typography Rules
- **Display Typography (English)**: *Cormorant Garamond* (Weights: 600, 700). Evokes architectural dignity and timeless heritage.
- **Telugu Typography**: *Noto Sans Telugu* (Body & UI) and *Noto Serif Telugu* (Headings). Tested at line heights `1.65` to `1.75` to ensure complex Telugu conjuncts (*vothulu* and *guninthalu*) never clip or collide.
- **UI & Numbers**: *Plus Jakarta Sans* (Weights: 400, 600, 800) for clean legible legibility at small sizes.

---

### 4. Motion Principles
1. **Soil to Structure**: Elements reveal with upward gentle easing (`cubic-bezier(0.16, 1, 0.3, 1)`), simulating foundations emerging from the earth.
2. **Honour Reduced Motion**: Every motion query strictly honors `prefers-reduced-motion: reduce`, defaulting to zero-offset opacity fades.
3. **Tactile Haptics**: Buttons compress subtly (`active:scale-95`) giving tactile feedback on touchscreen Android devices.

---

### 5. The Three Hero Concepts
- **Concept A (Topographic Layout Reveal)**: An interactive aerial topographic scroll where contour lines resolve into demarcated 50-acre plot boundaries as the user scrolls.
- **Concept B (Split Cultural Hero)**: Dual-language juxtaposition with live IST office status pill, real-time Tuesday closure warning, and immediate ₹3,300/yd starting price chip.
- **Concept C (Golden Hour Windmill Landscape)**: Full-bleed cinematic landscape echoing the flyer's wind turbine silhouettes, with a floating high-conversion site visit booking card.

#### The Chosen Direction: Hybrid Concept B + C
We selected the **Split Cultural Hero with Golden Earth Atmosphere** because Telugu real estate buyers prioritize **immediate trust, transparent pricing, and operational authenticity** over abstract animations. Placing the live IST operational badge, ₹3,300/yd pricing badge, and ₹20,000 booking token immediately above the fold establishes unshakeable confidence before the first scroll.
