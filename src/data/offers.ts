export interface BookingCampaign {
  id: string;
  name: string;
  minPrize: number;
  maxPrize: number;
  minPrizeFormatted: string;
  maxPrizeFormatted: string;
  badge: string;
  startsOn: string;
  endsOn: string;
  bookingThreshold: number; // ₹20,000
  disclaimer: string;
  terms: string[];
}

export const BOOKING_OFFER: BookingCampaign = {
  id: "golden-privilege-2026",
  name: "Swarna Dhatri Executive Fortune Privilege",
  minPrize: 10000,
  maxPrize: 100000,
  minPrizeFormatted: "₹10,000",
  maxPrizeFormatted: "₹1,00,000 (1 Lakh)",
  badge: "Assured Privilege on Every Spot Booking",
  startsOn: "Current Celebration Launch Window",
  endsOn: "Limited Allocation Period",
  bookingThreshold: 20000,
  disclaimer: "Digital illustrative preview. An official sealed physical Privilege Certificate is handed over directly upon plot token payment at our Miyapur corporate office or on-site.",
  terms: [
    "Applicable on every confirmed spot booking with a minimum advance token of ₹20,000.",
    "Prize privilege value ranges between ₹10,000 and ₹1,00,000.",
    "The full voucher value is credited directly toward your plot consideration at time of registration.",
    "Available for a limited time across Swarna Bindu Avenue developments.",
    "Swarna Dhatri Properties Private Limited reserves standard administrative terms."
  ]
};
