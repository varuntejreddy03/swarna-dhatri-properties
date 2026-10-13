import { Landmark } from '../types';

export const LANDMARKS: Landmark[] = [
  {
    id: "nimz-core",
    name: "Zaheerabad NIMZ Core Industrial Hub",
    category: "industry",
    distanceMinutes: "12 - 15 Mins",
    distanceKm: "9.5 km",
    description: "Telangana's flagship 12,618-acre National Investment and Manufacturing Zone generating over 2.5 lakh direct & indirect employment opportunities.",
    statusTag: "Under development",
    position: { xPercent: 52, yPercent: 42 }
  },
  {
    id: "mahindra-plant",
    name: "Mahindra & Mahindra Mega Manufacturing Plant",
    category: "industry",
    distanceMinutes: "10 Mins",
    distanceKm: "7 km",
    description: "Operational tractor and commercial vehicle production powerhouse employing thousands of skilled technical workforce.",
    statusTag: "Existing",
    position: { xPercent: 38, yPercent: 35 }
  },
  {
    id: "triton-ev",
    name: "Triton EV Mega Manufacturing Facility",
    category: "industry",
    distanceMinutes: "15 Mins",
    distanceKm: "11 km",
    description: "Multi-billion EV manufacturing hub bringing advanced robotics, lithium battery fabrication, and ancillary industrial suppliers.",
    statusTag: "MoU signed",
    position: { xPercent: 65, yPercent: 48 }
  },
  {
    id: "nh65-highway",
    name: "NH-65 Hyderabad–Mumbai National Highway",
    category: "transport",
    distanceMinutes: "5 Mins",
    distanceKm: "2.8 km",
    description: "6-lane high-speed national arterial corridor connecting Hyderabad Financial District to Solapur and Mumbai.",
    statusTag: "Existing",
    position: { xPercent: 28, yPercent: 62 }
  },
  {
    id: "bullet-train",
    name: "Proposed High-Speed Bullet Train Stoppage",
    category: "transport",
    distanceMinutes: "18 Mins",
    distanceKm: "14 km",
    description: "Proposed Mumbai–Pune–Zaheerabad–Hyderabad bullet train corridor station, reducing transit to Hyderabad to under 25 minutes.",
    statusTag: "Proposed",
    position: { xPercent: 78, yPercent: 30 }
  },
  {
    id: "zaheerabad-town",
    name: "Zaheerabad Commercial Center & Railway Station",
    category: "transport",
    distanceMinutes: "8 Mins",
    distanceKm: "5.5 km",
    description: "Major regional junction with multi-specialty hospitals, ICICI/SBI banks, elite CBSE schools, and daily rail connections.",
    statusTag: "Existing",
    position: { xPercent: 45, yPercent: 70 }
  },
  {
    id: "ketaki-sangameshwar",
    name: "Historic Ketaki Sangameshwar Temple (Jharasangam)",
    category: "spiritual",
    distanceMinutes: "20 Mins",
    distanceKm: "16 km",
    description: "Renowned centuries-old temple sanctuary situated at the holy confluence of sacred rivers, popular across the Deccan plateau.",
    statusTag: "Existing",
    position: { xPercent: 82, yPercent: 75 }
  },
  {
    id: "iit-hyderabad",
    name: "IIT Hyderabad (Kandi) & Sangareddy Hub",
    category: "education",
    distanceMinutes: "45 Mins",
    distanceKm: "42 km",
    description: "Premier national technical institution and Sangareddy district administrative headquarters along the Golden Corridor.",
    statusTag: "Existing",
    position: { xPercent: 15, yPercent: 82 }
  }
];
