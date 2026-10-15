/**
 * Financial calculation helper for real estate plots.
 *
 * Payment structure (see data/paymentPlan.ts):
 *   Booking token  ->  Down payment (within N days)  ->  Balance in EMIs (max 24 months)
 *   or
 *   Spot registration on 50% of the plot value (within N days)
 */
import { PAYMENT_PLAN } from '../data/paymentPlan';

export interface EmiResult {
  totalCost: number;
  bookingAmount: number;
  downPaymentAmount: number;
  /** booking + down payment */
  upfrontTotal: number;
  /** balance to be paid through EMIs */
  loanAmount: number;
  tenureMonths: number;
  monthlyEmi: number;
  totalInterest: number;
  totalPayable: number;
  /** 50% of the plot value for the spot-registration route */
  spotRegistrationAmount: number;
  totalCostWordsEn: string;
  monthlyEmiWordsEn: string;
}

export function formatIndianCurrency(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(Math.round(amount));
}

export function formatLakhsCrores(amount: number): string {
  if (amount >= 10000000) {
    const cr = (amount / 10000000).toFixed(2);
    return `₹${cr} Cr`;
  }
  if (amount >= 100000) {
    const lk = (amount / 100000).toFixed(2);
    return `₹${lk} Lakhs`;
  }
  return formatIndianCurrency(amount);
}

function emiFor(principal: number, annualInterestRate: number, months: number): number {
  if (principal <= 0 || months <= 0) return 0;
  const monthlyRate = annualInterestRate / 12 / 100;
  if (monthlyRate <= 0) return principal / months;
  const growth = Math.pow(1 + monthlyRate, months);
  return (principal * monthlyRate * growth) / (growth - 1);
}

export function calculateEmi({
  areaSqYds,
  pricePerSqYd,
  bookingAmount = PAYMENT_PLAN.bookingAmount,
  downPaymentAmount: downPaymentInput = PAYMENT_PLAN.downPaymentAmount,
  annualInterestRate = 0,
  tenureMonths = PAYMENT_PLAN.maxEmiMonths
}: {
  areaSqYds: number;
  pricePerSqYd: number;
  bookingAmount?: number;
  downPaymentAmount?: number;
  annualInterestRate?: number;
  tenureMonths?: number;
}): EmiResult {
  const totalCost = areaSqYds * pricePerSqYd;
  const months = Math.min(Math.max(1, Math.round(tenureMonths)), PAYMENT_PLAN.maxEmiMonths);

  const booking = Math.min(bookingAmount, totalCost);
  const downPaymentAmount = Math.min(downPaymentInput, Math.max(0, totalCost - booking));
  const upfrontTotal = booking + downPaymentAmount;
  const loanAmount = Math.max(0, totalCost - upfrontTotal);

  const monthlyEmi = emiFor(loanAmount, annualInterestRate, months);
  const totalInterest = Math.max(0, monthlyEmi * months - loanAmount);
  const totalPayable = upfrontTotal + monthlyEmi * months;

  return {
    totalCost,
    bookingAmount: booking,
    downPaymentAmount,
    upfrontTotal,
    loanAmount,
    tenureMonths: months,
    monthlyEmi: Math.round(monthlyEmi),
    totalInterest: Math.round(totalInterest),
    totalPayable: Math.round(totalPayable),
    spotRegistrationAmount: Math.round((totalCost * PAYMENT_PLAN.spotRegistrationPercent) / 100),
    totalCostWordsEn: formatLakhsCrores(totalCost),
    monthlyEmiWordsEn: formatLakhsCrores(monthlyEmi)
  };
}

export function calculatePlotSizeFromBudget({
  monthlyBudget,
  pricePerSqYd = PAYMENT_PLAN.exampleRatePerSqYd,
  annualInterestRate = 0,
  tenureMonths = PAYMENT_PLAN.maxEmiMonths
}: {
  monthlyBudget: number;
  pricePerSqYd?: number;
  annualInterestRate?: number;
  tenureMonths?: number;
}): { estimatedGajam: number; totalCost: number; downPayment: number; upfrontTotal: number } {
  const months = Math.min(Math.max(1, Math.round(tenureMonths)), PAYMENT_PLAN.maxEmiMonths);
  const monthlyRate = annualInterestRate / 12 / 100;

  // Principal financed by the EMI: P = EMI * ((1+r)^n - 1) / (r * (1+r)^n)
  const financed =
    monthlyRate > 0
      ? (monthlyBudget * (Math.pow(1 + monthlyRate, months) - 1)) / (monthlyRate * Math.pow(1 + monthlyRate, months))
      : monthlyBudget * months;

  const upfrontTotal = PAYMENT_PLAN.bookingAmount + PAYMENT_PLAN.downPaymentAmount;
  const totalCost = financed + upfrontTotal;
  const estimatedGajam = Math.floor(totalCost / pricePerSqYd);

  return {
    estimatedGajam: Math.max(0, estimatedGajam),
    totalCost: Math.round(totalCost),
    downPayment: PAYMENT_PLAN.downPaymentAmount,
    upfrontTotal
  };
}
