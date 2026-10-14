import { NimzTimelineItem } from '../types';

export const NIMZ_FACTS = [
  { label: "Total Notified Area", value: "12,635+ Acres", desc: "Across Nyalkal & Jharasangam mandals" },
  { label: "Phase 1 Development", value: "3,245 Acres", desc: "Priority execution across key clusters" },
  { label: "Projected Employment", value: "2.6+ Lakhs", desc: "Direct engineering & industrial jobs" },
  { label: "Estimated Investment", value: "₹38,000+ Cr", desc: "Combined public & private capital" },
  { label: "Expressway Transit", value: "NH-65 Corridor", desc: "Direct 6-lane link to Hyderabad ORR/RRR" },
  { label: "High-Speed Rail", value: "Bullet Train DPR", desc: "Mumbai–Pune–Zaheerabad–Hyderabad stoppage" }
];

export const NIMZ_KEY_PILLARS = [
  {
    title: "12,635+ Acre Integrated Mega-Zone",
    subtitle: "National Manufacturing Policy",
    description: "One of India's largest government-sanctioned National Investment & Manufacturing Zones (NIMZ), developed jointly by NICDIT (Government of India) and TGIIC (Government of Telangana).",
    highlights: ["Phase 1 priority spanning 3,245 acres", "17 identified revenue villages including Nyalkal & Jharasangam", "Fully self-contained industrial smart city masterplan"]
  },
  {
    title: "Dedicated SPV & Fast-Track Approvals",
    subtitle: "NICDIT Zaheerabad Smart City Ltd",
    description: "Operated through an institutional Special Purpose Vehicle ensuring single-window clearance, uninterrupted 3-phase industrial power, direct water canals from Singur, and round-the-clock security infrastructure.",
    highlights: ["Direct equity participation from Central & State Govts", "Plug-and-play industrial parcel infrastructure", "Clear non-polluting and eco-friendly zoning guidelines"]
  },
  {
    title: "Automotive, EV & Advanced Manufacturing",
    subtitle: "Global Industrial Anchors",
    description: "Zaheerabad is the established auto epicenter of South India. Anchored by Mahindra & Mahindra's operational vehicle plant and Triton EV's multi-crore EV manufacturing park, attracting global supply-chain ancillaries.",
    highlights: ["Mahindra & Mahindra tractor and commercial plant", "Triton EV multi-billion electric vehicle and battery park", "Aerospace, defense, engineering, and logistics clusters"]
  },
  {
    title: "Multimodal Logistics & Golden Corridor",
    subtitle: "Highways, Rail & Airport Access",
    description: "Positioned along the 6-lane NH-65 Mumbai–Hyderabad Highway with rapid connectivity to Hyderabad Outer Ring Road (ORR) and the upcoming Regional Ring Road (RRR). Seamless link to Bidar Airport (25 km) and RGIA Hyderabad.",
    highlights: ["Proposed Mumbai–Pune–Hyderabad Bullet Train stoppage", "Direct rail sidings on Secunderabad–Manmad broad gauge line", "Multi-modal dry port and container freight stations"]
  }
];

export const NIMZ_SECTORS = [
  { name: "Automotive & Electric Vehicles (EV)", desc: "Electric vehicle assembly, battery manufacturing, auto components, commercial transports.", icon: "Car" },
  { name: "Aerospace, Defense & Heavy Engineering", desc: "Precision machinery, defense equipment manufacturing, metal fabrications.", icon: "Shield" },
  { name: "Electrical & Electronic System Design (ESDM)", desc: "Semiconductors, electronic hardware, power transmission equipment.", icon: "Zap" },
  { name: "Pharmaceuticals & Biotechnology", desc: "Non-polluting formulations, bio-agro research, healthcare packaging.", icon: "Activity" },
  { name: "Agro & Food Processing Parks", desc: "Cold chain logistics, modern warehousing, packaged food processing.", icon: "Wheat" },
  { name: "Integrated Logistics & Warehousing Hubs", desc: "Inland container depots, multi-modal freight terminals, FTWZs.", icon: "Truck" }
];

export const NIMZ_TIMELINE: NimzTimelineItem[] = [
  {
    id: "nimz-notification",
    yearOrPhase: "National Gazette",
    title: "12,635-Acre NIMZ Sanctioned by Central & State Governments",
    companyOrSector: "National Manufacturing Policy / TGIIC & NICDIT",
    description: "Zaheerabad NIMZ officially notified under the National Manufacturing Policy as a premier integrated industrial mega-city, enjoying prioritized national infrastructure grants and statutory single-window clearances.",
    statusTag: "Existing",
    investmentScale: "Central & State Equity",
    sourceNote: "Government of India Gazette Notification / NICDC"
  },
  {
    id: "phase1-acquisition",
    yearOrPhase: "Phase 1 Execution",
    title: "Phase 1 Priority Development across 3,245 Acres",
    companyOrSector: "NICDIT Zaheerabad Industrial Smart City Limited",
    description: "Targeted infrastructure rollout across core clusters including Bardhipur, Cheelapally, Yelgoi, Rukmapur, and Mungi for arterial internal roads, power substations, and water networks.",
    statusTag: "Under development",
    investmentScale: "₹3,500+ Crores Infrastructure",
    sourceNote: "TGIIC Project Status Report (nimz.in)"
  },
  {
    id: "mahindra-expansion",
    yearOrPhase: "Industrial Anchor",
    title: "Mahindra & Mahindra Mega Manufacturing Complex",
    companyOrSector: "Automotive & Electric Mobility",
    description: "Operational tractor and commercial vehicle production powerhouse employing thousands of technical professionals, with recent multi-crore electric vehicle (EV) capacity expansions.",
    statusTag: "Existing",
    investmentScale: "₹1,000+ Crores",
    sourceNote: "Mahindra Group Strategic Investments"
  },
  {
    id: "triton-ev-hub",
    yearOrPhase: "EV & Green Tech",
    title: "Triton EV Multi-Crore Electric Vehicle & Battery Facility",
    companyOrSector: "Electric Vehicles & Energy Storage",
    description: "Land allocation and bilateral accords for an advanced electric truck, defense EV, and lithium energy storage manufacturing ecosystem producing high-skill employment.",
    statusTag: "MoU signed",
    investmentScale: "₹2,100 Crores",
    sourceNote: "Telangana Industry Ministry Bilateral Accord"
  },
  {
    id: "nh65-rrr-connectivity",
    yearOrPhase: "Highway Expansion",
    title: "NH-65 6-Lane Expressway & Regional Ring Road (RRR) Integration",
    companyOrSector: "National Highways Authority of India (NHAI)",
    description: "High-speed arterial expressway providing transit to Hyderabad Financial District in under 75 minutes, with planned cloverleaf interchanges to the upcoming Northern Regional Ring Road (RRR).",
    statusTag: "Under development",
    investmentScale: "National Highway Project",
    sourceNote: "NHAI Strategic Corridors Plan"
  },
  {
    id: "bullet-train-stoppage",
    yearOrPhase: "High Speed Rail",
    title: "Proposed Mumbai–Pune–Zaheerabad–Hyderabad Bullet Train Station",
    companyOrSector: "National High Speed Rail Corporation (NHSRCL)",
    description: "Feasibility study completed for the 711 km high-speed rail corridor, designating a landmark passenger and economic stoppage at Zaheerabad, cutting travel time to Hyderabad to just 22 minutes.",
    statusTag: "Proposed",
    investmentScale: "National High Speed Corridor",
    sourceNote: "NHSRCL Detailed Project Report (DPR)"
  }
];
