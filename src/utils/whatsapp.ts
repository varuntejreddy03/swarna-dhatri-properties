import { Plot } from '../types';
import { COMPANY } from '../data/company';
import { PAYMENT_PLAN } from '../data/paymentPlan';

const projectLabel = (plot: Plot): string =>
  plot.phaseId === 'avenue-1' ? 'Swarna Bindu Avenue-1 (Phase 1)' : 'Swarna Bindu Avenue-2 (Phase 2)';

export function getWhatsAppSharePlotUrl(plot: Plot): string {
  const price = (plot.areaSqYds * plot.pricePerSqYd).toLocaleString('en-IN');
  const message = `Hello! Check out this plot in ${projectLabel(plot)} (Zaheerabad Smart City NIMZ) by Swarna Dhatri Properties:
- Plot #${plot.number} (${plot.areaSqYds} Gajam / ${plot.areaSqYds * 9} sq.ft)
- Facing: ${plot.facing} · ${plot.roadWidthFt} ft road
- Total Price: ₹${price} (@ ₹${plot.pricePerSqYd}/sq.yd)
- Booking: ₹${PAYMENT_PLAN.bookingAmount.toLocaleString('en-IN')} + ₹${PAYMENT_PLAN.downPaymentAmount.toLocaleString('en-IN')} down payment within ${PAYMENT_PLAN.downPaymentDays} days, balance in EMI (max ${PAYMENT_PLAN.maxEmiMonths} months)
- Or ${PAYMENT_PLAN.spotRegistrationPercent}% payment within ${PAYMENT_PLAN.spotRegistrationDays} days for registration
View interactive layout: https://swarnadhatri.com/plot-explorer?phase=${plot.phaseId}&plot=${encodeURIComponent(plot.number)}`;

  return `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
}

export function getWhatsAppPlotInquiryUrl(plot: Plot): string {
  const message = `Hello Swarna Dhatri Team, I am interested in inquiring and reserving Plot #${plot.number} (${plot.areaSqYds} Gajam / Sq.Yd, ${plot.facing} Facing) in ${projectLabel(plot)}, Zaheerabad NIMZ. Please share the full survey plan and schedule a site visit.`;

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
