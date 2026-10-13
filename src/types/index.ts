export type Facing = 'East' | 'West' | 'North' | 'South' | 'North-East' | 'North-West' | 'South-East' | 'South-West';

export type PlotStatus = 'available' | 'booked' | 'hold';

export interface Plot {
  id: string;
  number: number;
  areaSqYds: number; // Gajam (Sq. Yards)
  facing: Facing;
  roadWidthFt: number;
  status: PlotStatus;
  isCorner: boolean;
  isVastuCompliant: boolean;
  pricePerSqYd: number;
  dimensionsFt?: string;
  coordinates: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
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
