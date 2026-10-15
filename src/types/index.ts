export type Facing = 'East' | 'West' | 'North' | 'South' | 'North-East' | 'North-West' | 'South-East' | 'South-West';

export type PlotStatus = 'available' | 'booked' | 'hold';

export type PhaseId = 'avenue-1' | 'avenue-2';

export interface Plot {
  /** Unique across both layouts, e.g. "avenue-2-17" (plot numbers on the sheets can repeat) */
  id: string;
  /** Plot number exactly as printed on the CAD sheet (can carry a leading zero or a "/1" suffix) */
  number: string;
  phaseId: PhaseId;
  areaSqYds: number; // Gajam (Sq. Yards)
  facing: Facing;
  roadWidthFt: number;
  status: PlotStatus;
  isCorner: boolean;
  isVastuCompliant: boolean;
  pricePerSqYd: number;
  /** Approximate frontage × depth in feet, measured from the drawing (regular plots only) */
  dimensionsFt?: string;
  /** SVG path outlining the plot on the layout sheet (sheet coordinates) */
  path: string;
  /** Plot label position on the layout sheet (sheet coordinates) */
  cx: number;
  cy: number;
}

export interface Project {
  id: string;
  slug: string;
  name: string;
  phase: string;
  tagline: string;
  location: string;
  totalAcres: number;
  nalaConverted: boolean;
  naApproved: boolean;
  pricePerSqYd: number;
  pricePerSqYdEast?: number;
  pricePerSqYdWest?: number;
  priceAsOf: string;
  bookingAmount: number;
  spotRegistrationPercentage: number;
  emiAvailable: boolean;
  couponOffer: string;
  description: string;
  highlights: string[];
  amenities: {
    name: string;
    icon: string;
    description: string;
  }[];
  isFlagship: boolean;
}

export interface Landmark {
  id: string;
  name: string;
  category: 'industry' | 'education' | 'transport' | 'spiritual';
  distanceMinutes: string;
  distanceKm: string;
  description: string;
  statusTag: 'Existing' | 'Under development' | 'Proposed' | 'MoU signed';
  position: { xPercent: number; yPercent: number };
}

export interface NimzTimelineItem {
  id: string;
  yearOrPhase: string;
  title: string;
  companyOrSector: string;
  description: string;
  statusTag: 'Existing' | 'Under development' | 'Proposed' | 'MoU signed';
  investmentScale?: string;
  sourceNote: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'booking' | 'legal' | 'location' | 'emi' | 'vastu';
}

export interface DocumentTrustItem {
  id: string;
  title: string;
  description: string;
  status: 'verified' | 'in_progress' | 'ask_team';
  statusNote: string;
  badge: string;
}
