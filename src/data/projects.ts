import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: "avenue-2",
    slug: "swarna-bindu-avenue-2",
    name: "Swarna Bindu Avenue-2",
    phase: "Phase 2 (Flagship Mega Township)",
    tagline: "50-Acre Master-Planned Plotted Development in Zaheerabad Smart City NIMZ",
    location: "Zaheerabad Smart City – NIMZ Corridor, Sangareddy Dist, Telangana",
    totalAcres: 50,
    nalaConverted: true,
    naApproved: true,
    pricePerSqYd: 3300,
    priceAsOf: "Current Launch Offering",
    bookingAmount: 20000,
    spotRegistrationPercentage: 50,
    emiAvailable: true,
    couponOffer: "Win ₹10,000 to ₹1,00,000 Fortune Privilege on every spot booking",
    description: "Swarna Bindu Avenue-2 represents the gold standard of plotted real estate investment along the booming Zaheerabad NIMZ corridor. Spread across 50 sprawling acres of fertile, clear-title land, this master-planned development integrates 30' wide tree-lined roads, underground utilities, high-yield red sandalwood plantation, and and a simple payment plan: ₹20,000 booking, ₹1,50,000 down payment within 10 days and the balance in up to 24 EMIs — or register on 50% payment within 10 days.",
    highlights: [
      "50-Acre Master-Planned Mega Layout",
      "100% Nala Conversion Completed & N/A Sanctioned",
      "Immediate Booking with ₹20,000 Token",
      "Spot Registration on 50% Payment (within 10 days)",
      "100% LRS Charges Borne by Company",
      "₹1,50,000 Down Payment in 10 Days, Balance in up to 24 EMIs",
      "30 Ft Wide Roads with Engineered Kerbing",
      "High-Yield Red Sandalwood Plantation on Boundaries",
      "Dedicated High-Capacity Transformer & Borewell Water",
      "Secured Perimeter Wire Fencing & Majestic Grand Arch",
      "100% Vastu-Compliant East & North Focused Plots"
    ],
    amenities: [
      { name: "Majestic Entrance Arch", icon: "Gate", description: "Secured gated entrance with round-the-clock watchman security cabin" },
      { name: "30 Ft Wide Roads", icon: "Road", description: "Durable all-weather roads with engineered kerbing stones and storm drains" },
      { name: "Red Sandalwood Plantation", icon: "Tree", description: "High-value commercial timber saplings nurtured along boundary avenues" },
      { name: "Borewell & Water Network", icon: "Droplets", description: "Dedicated deep borewell with distributed underground water pipelines" },
      { name: "3-Phase Power Transformer", icon: "Zap", description: "Dedicated electricity transformer with integrated illumination poles" },
      { name: "Perimeter Security Fencing", icon: "Shield", description: "Heavy-duty stone boundary pillars with continuous barbed wire fencing" },
      { name: "100% Vastu Orientation", icon: "Compass", description: "Every plot surveyed strictly adhering to traditional Vedic Vastu principles" },
      { name: "Zero Buyer LRS Liability", icon: "CheckCircle", description: "All Layout Regularisation Scheme fees paid directly by developer" }
    ],
    isFlagship: true
  },
  {
    id: "avenue-1",
    slug: "swarna-bindu-avenue",
    name: "Swarna Bindu Avenue (Phase 1)",
    phase: "Phase 1 (Established Community)",
    tagline: "Prime Open Plots with Dedicated East and West Facing Inventory",
    location: "Zaheerabad Smart City – NIMZ, Sangareddy Dist, Telangana",
    totalAcres: 50,
    nalaConverted: true,
    naApproved: true,
    pricePerSqYd: 4000,
    pricePerSqYdEast: 4500,
    pricePerSqYdWest: 4000,
    priceAsOf: "Facing-wise Inventory Pricing",
    bookingAmount: 20000,
    spotRegistrationPercentage: 50,
    emiAvailable: true,
    couponOffer: "Win ₹10,000 to ₹1,00,000 Privilege Voucher on spot booking",
    description: "The pioneering inaugural phase of Swarna Bindu Avenue, featuring mature internal landscaping, established access roads, and premium East and West facing residential plots positioned minutes from the Mahindra & Mahindra manufacturing complex.",
    highlights: [
      "East Facing Plots: ₹4,500 / sq.yd",
      "West Facing Plots: ₹4,000 / sq.yd",
      "50 Acres Fully Nala Converted Land",
      "Spot Registration on 50% Payment (within 10 days)",
      "₹1,50,000 Down Payment in 10 Days, Balance in up to 24 EMIs",
      "Complete LRS Regularisation Borne by Developer",
      "100% Encumbrance-Free Clear Title"
    ],
    amenities: [
      { name: "Grand Entrance Arch", icon: "Gate", description: "Architectural gateway with gated security" },
      { name: "30 Ft Internal Roads", icon: "Road", description: "Well-demarcated wide gravel internal roads" },
      { name: "Red Sandalwood Trees", icon: "Tree", description: "Mature commercial plantation value" },
      { name: "Water Supply System", icon: "Droplets", description: "Central borewell water distribution" },
      { name: "Power Grid Connectivity", icon: "Zap", description: "Dedicated transformer and streetlighting" },
      { name: "Demarcation & Fencing", icon: "Shield", description: "Precision boundary corner stones" }
    ],
    isFlagship: false
  }
];
