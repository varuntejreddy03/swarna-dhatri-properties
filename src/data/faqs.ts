import { FaqItem, DocumentTrustItem } from '../types';

export const FAQS: FaqItem[] = [
  {
    id: "booking-amount",
    category: "booking",
    question: "What is the token booking amount to reserve a plot?",
    answer: "You can reserve any available plot in Swarna Bindu Avenue (Phase 1 or Phase 2) with a booking amount of just ₹20,000. Upon payment, your chosen plot number is immediately locked and removed from public inventory. The ₹1,50,000 down payment follows within 10 days of booking."
  },
  {
    id: "spot-registration",
    category: "legal",
    question: "When is the official legal plot registration executed?",
    answer: "Registration can be done on payment of 50% of the plot value within 10 days of booking (for example ₹2,00,000 on a 121 sq.yd plot at ₹3,300 per sq.yd, whose total is ₹3,99,300). Alternatively, pay ₹20,000 booking plus ₹1,50,000 down payment within 10 days and clear the balance through EMI."
  },
  {
    id: "lrs-charges",
    category: "legal",
    question: "Who pays for the LRS (Layout Regularisation Scheme) charges?",
    answer: "Swarna Dhatri Properties bears 100% of all statutory LRS charges directly. As an investor or home builder, you will face zero hidden regularisation or surprise municipal fees."
  },
  {
    id: "emi-facility",
    category: "emi",
    question: "What financing and EMI options are available?",
    answer: "After the ₹20,000 booking and the ₹1,50,000 down payment (within 10 days), the balance can be paid in monthly EMIs. EMI is available for a maximum of 24 months only. For a 121 sq.yd plot at ₹3,300 per sq.yd (total ₹3,99,300), the balance of ₹2,29,300 can be spread over up to 24 months. Our team will share the exact schedule in writing."
  },
  {
    id: "tuesday-visiting",
    category: "location",
    question: "Why is the office and site closed on Tuesdays?",
    answer: "Our corporate headquarters in Miyapur and our Zaheerabad site operations remain closed on Tuesdays for weekly maintenance and administrative record updates. Free chauffeured site visits operate from Wednesday through Monday, 10:00 AM to 6:00 PM IST."
  },
  {
    id: "gajam-conversion",
    category: "booking",
    question: "What is the conversion rate between Gajam and Square Feet?",
    answer: "In Telangana real estate conventions, 1 Gajam is exactly 1 Square Yard, equivalent to 9 Square Feet. For instance, a standard 200 Gajam plot equals 1,800 Square Feet (approx. 167.2 Square Metres)."
  },
  {
    id: "vastu-compliance",
    category: "vastu",
    question: "Are the plots laid out according to Vastu Shastra principles?",
    answer: "Yes. Swarna Bindu Avenue-2 is surveyed strictly according to authentic Vedic Vastu Shastra guidelines, featuring cardinal East and North facing orientations, wide symmetrical avenues, and pristine road corner alignments."
  },
  {
    id: "nimz-potential",
    category: "location",
    question: "Why is Zaheerabad NIMZ considered a premier investment corridor?",
    answer: "The Zaheerabad National Investment and Manufacturing Zone (NIMZ) spans 12,618 acres with government backing, anchors major industrial facilities like Mahindra & Mahindra and Triton EV, and lies along the high-speed NH-65 Mumbai corridor and the proposed Mumbai–Hyderabad High Speed Rail alignment."
  }
];

export const TRUST_VAULT_ITEMS: DocumentTrustItem[] = [
  {
    id: "nala-conversion",
    title: "100% Nala Conversion Certificate",
    description: "Official Revenue Department order confirming complete conversion of agricultural land into non-agricultural (N/A) layout status.",
    status: "verified",
    statusNote: "Original Revenue Sanction Available for Review at Miyapur Office",
    badge: "Government Sanctioned"
  },
  {
    id: "clear-title-ec",
    title: "30-Year Encumbrance Certificate (EC)",
    description: "Nil Encumbrance Certificate verifying zero legal disputes, claims, bank liens, or third-party liabilities over 30 years.",
    status: "verified",
    statusNote: "Telangana Registration & Stamps Department EC Vetted",
    badge: "100% Freehold Title"
  },
  {
    id: "spot-registration-process",
    title: "Guaranteed Spot Registration Workflow",
    description: "Registered sale deed executed directly in the buyer's name at the local Sub-Registrar office upon 50% payment clearance.",
    status: "verified",
    statusNote: "Standardized Stamp Duty & Sale Deed Execution Process",
    badge: "50% Spot Registration"
  },
  {
    id: "lrs-guarantee",
    title: "Developer LRS Undertaking Bond",
    description: "Legally binding company commitment declaring that all Layout Regularisation Scheme (LRS) fees are 100% borne by the developer.",
    status: "verified",
    statusNote: "Zero Extra Liability for Buyer Guaranteed in Sale Agreement",
    badge: "100% Paid by Company"
  },
  {
    id: "layout-survey-map",
    title: "Demarcated CAD Survey & Boundary Map",
    description: "Certified total station survey plan documenting exact coordinates, 30' road widths, and individual plot dimensions.",
    status: "verified",
    statusNote: "Physical Boundary Kerb Stones Fixed On-Site",
    badge: "Total Station Surveyed"
  },
  {
    id: "red-sandalwood-plantation",
    title: "Red Sandalwood Plantation Custody",
    description: "Nurtured high-value Pterocarpus santalinus saplings with drip irrigation provision providing exponential capital timber returns.",
    status: "verified",
    statusNote: "Avenue Plantings Maintained by Developer Estate Team",
    badge: "High Commercial Value"
  }
];
