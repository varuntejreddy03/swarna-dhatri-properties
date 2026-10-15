/**
 * Single source of truth for the booking / payment terms shown across the site.
 * Update here and every page (explorer, calculator, FAQs, offers) follows.
 */
export const PAYMENT_PLAN = {
  /** Token to block the plot */
  bookingAmount: 20000,
  /** Down payment to be paid after booking */
  downPaymentAmount: 150000,
  /** Days (from booking) to pay the down payment */
  downPaymentDays: 10,
  /** EMI is offered for at most this many months */
  maxEmiMonths: 24,
  /** Alternative route: pay this share of the plot value and register */
  spotRegistrationPercent: 50,
  /** Days (from booking) to pay the 50% and register */
  spotRegistrationDays: 10,
  /** Every internal road on both layouts */
  roadWidthFt: 30,
  /** Typical plot size on the layouts (121 sq.yd on the sheets) */
  standardPlotSqYd: 121,
  /** Launch rate used in the worked example (Swarna Bindu Avenue - Phase 2) */
  exampleRatePerSqYd: 3300
} as const;

export const EMI_TENURE_OPTIONS_MONTHS = [6, 12, 18, 24] as const;
