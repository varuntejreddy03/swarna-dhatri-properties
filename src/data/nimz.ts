import { NimzTimelineItem } from '../types';

export const NIMZ_FACTS = [
  { label: "Total Notified Area", value: "12,618 Acres", desc: "Across Nyalkal & Jharasangam mandals" },
  { label: "Expected Employment", value: "2.5+ Lakhs", desc: "Direct & indirect technical workforce" },
  { label: "Expressway Transit", value: "NH-65 Axis", desc: "Direct link to Hyderabad ORR" },
  { label: "High-Speed Rail", value: "Proposed DPR", desc: "Mumbai-Pune-Zaheerabad-Hyderabad bullet train" }
];

export const NIMZ_TIMELINE: NimzTimelineItem[] = [
  {
    id: "nimz-notification",
    yearOrPhase: "Phase 1 - Master Notification",
    title: "12,618-Acre NIMZ Gazette Notification by Central & State Govt",
    companyOrSector: "National Manufacturing Policy / Govt of Telangana",
    description: "Zaheerabad NIMZ officially designated as one of India's premier integrated manufacturing zones, securing fast-track environmental sanctions and tax exemptions.",
    statusTag: "Existing",
    investmentScale: "Central Infrastructure Grant",
    sourceNote: "Telangana State Industrial Infrastructure Corporation (TSIIC) Masterplan"
  },
  {
    id: "mahindra-expansion",
    yearOrPhase: "Industrial Anchor",
    title: "Mahindra & Mahindra Automotive & Tractor Mega Complex",
    companyOrSector: "Automotive & Electric Mobility",
    description: "Ongoing operations and multi-crore EV assembly upgrades, cementing Zaheerabad as the automotive powerhouse of South India.",
    statusTag: "Existing",
    investmentScale: "₹1,000+ Crores",
    sourceNote: "Mahindra Group Strategic Investments"
  },
  {
    id: "triton-ev-hub",
    yearOrPhase: "Next-Gen EV Corridor",
    title: "Triton EV Mega Manufacturing & Battery Facility MoU",
    companyOrSector: "Electric Vehicles & Clean Energy",
    description: "Land allocation and state-level approvals for a cutting-edge electric truck and energy storage production ecosystem.",
    statusTag: "MoU signed",
    investmentScale: "₹2,100 Crores",
    sourceNote: "Telangana Industry Ministry Bilateral Accord"
  },
  {
    id: "nh65-six-laning",
    yearOrPhase: "Connectivity Acceleration",
    title: "NH-65 Expressway Upgrades & Regional Ring Road (RRR)",
    companyOrSector: "National Highways Authority of India (NHAI)",
    description: "Direct expressway transit linking Zaheerabad directly to the Outer Ring Road (ORR) at Patancheru and the upcoming Northern RRR spur.",
    statusTag: "Under development",
    investmentScale: "National Highway Project",
    sourceNote: "NHAI Strategic Corridors Plan"
  },
  {
    id: "bullet-train-stoppage",
    yearOrPhase: "High Speed Transit",
    title: "Mumbai–Pune–Hyderabad Bullet Train Corridor Stoppage",
    companyOrSector: "National High Speed Rail Corporation (NHSRCL)",
    description: "Feasibility study completed for the 711 km bullet train corridor, proposing a key passenger & economic stoppage at Zaheerabad.",
    statusTag: "Proposed",
    investmentScale: "High Speed Rail Network",
    sourceNote: "NHSRCL Detailed Project Report (DPR)"
  }
];
