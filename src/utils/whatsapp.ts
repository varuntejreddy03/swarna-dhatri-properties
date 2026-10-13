import { Plot } from '../types';
import { COMPANY } from '../data/company';

export function getWhatsAppSharePlotUrl(plot: Plot): string {
  const price = (plot.areaSqYds * plot.pricePerSqYd).toLocaleString('en-IN');
  const message = `Hello! Check out this premium plot in Swarna Bindu Avenue-2 (Zaheerabad Smart City NIMZ) by Swarna Dhatri Properties:
- Plot #${plot.number} (${plot.areaSqYds} Gajam / ${plot.areaSqYds * 9} sq.ft)
- Facing: ${plot.facing}
- Total Price: ₹${price} (@ ₹${plot.pricePerSqYd}/sq.yd)
- Booking Token: ₹20,000 only
- Spot Registration: 50%
View interactive layout: https://swarnadhatri.com/plot-explorer?plot=${plot.number}`;

  return `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
}

export function getWhatsAppPlotInquiryUrl(plot: Plot): string {
  const message = `Hello Swarna Dhatri Team, I am interested in inquiring and reserving Plot #${plot.number} (${plot.areaSqYds} Gajam / Sq.Yd, ${plot.facing} Facing) in Swarna Bindu Avenue-2 Zaheerabad NIMZ. Please share the full survey plan and schedule a site visit.`;

  return `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function getWhatsAppSiteVisitUrl(formData: {
  name: string;
  phone: string;
  date: string;
  slot: string;
  pickupRequired: boolean;
  notes?: string;
}): string {
  const message = `Hello Swarna Dhatri Properties, I want to confirm my VIP Site Visit to Swarna Bindu Avenue-2:
- Name: ${formData.name}
- Phone: ${formData.phone}
- Date: ${formData.date}
- Preferred Slot: ${formData.slot}
- Complimentary Pickup: ${formData.pickupRequired ? 'Yes (From Miyapur / Hyderabad)' : 'Own Transport'}
${formData.notes ? `- Special Requests / Selected Plots: ${formData.notes}` : ''}
Please confirm my concierge appointment.`;

  return `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function getWhatsAppGeneralInquiryUrl(): string {
  const message = `Hello Swarna Dhatri Properties, I would like to explore luxury open plots in Swarna Bindu Avenue-2 Zaheerabad NIMZ, including current pricing, plot availability, and custom EMI plans.`;

  return `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(message)}`;
}
