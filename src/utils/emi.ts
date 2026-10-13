/**
 * Financial calculation helper for real estate plots
 */

export interface EmiResult {
  totalCost: number;
  bookingAmount: number;
  downPaymentAmount: number;
  loanAmount: number;
  monthlyEmi: number;
  totalInterest: number;
  totalPayable: number;
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

export function calculateEmi({
  areaSqYds,
  pricePerSqYd,
  bookingAmount = 20000,
  downPaymentPercent = 30,
  annualInterestRate = 9.5,
  tenureYears = 5
}: {
  areaSqYds: number;
  pricePerSqYd: number;
  bookingAmount?: number;
  downPaymentPercent?: number;
  annualInterestRate?: number;
  tenureYears?: number;
}): EmiResult {
  const totalCost = areaSqYds * pricePerSqYd;
  const downPaymentAmount = Math.max(bookingAmount, (totalCost * downPaymentPercent) / 100);
  const loanAmount = Math.max(0, totalCost - downPaymentAmount);

  const monthlyRate = annualInterestRate / 12 / 100;
  const months = tenureYears * 12;

  let monthlyEmi = 0;
  if (loanAmount > 0 && monthlyRate > 0) {
    monthlyEmi = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
  } else if (loanAmount > 0) {
    monthlyEmi = loanAmount / months;
  }

  const totalPayable = downPaymentAmount + (monthlyEmi * months);
  const totalInterest = Math.max(0, (monthlyEmi * months) - loanAmount);

  const totalCostFormatted = formatLakhsCrores(totalCost);
  const monthlyEmiFormatted = formatLakhsCrores(monthlyEmi);

  return {
    totalCost,
    bookingAmount,
    downPaymentAmount,
    loanAmount,
    monthlyEmi: Math.round(monthlyEmi),
    totalInterest: Math.round(totalInterest),
    totalPayable: Math.round(totalPayable),
    totalCostWordsEn: totalCostFormatted,
    monthlyEmiWordsEn: monthlyEmiFormatted
  };
}

export function calculatePlotSizeFromBudget({
  monthlyBudget,
  pricePerSqYd = 3300,
  downPaymentPercent = 30,
  annualInterestRate = 9.5,
  tenureYears = 5
}: {
  monthlyBudget: number;
  pricePerSqYd?: number;
  downPaymentPercent?: number;
  annualInterestRate?: number;
  tenureYears?: number;
}): { estimatedGajam: number; totalCost: number; downPayment: number } {
  const monthlyRate = annualInterestRate / 12 / 100;
  const months = tenureYears * 12;
  
  // Principal = EMI * ( (1+r)^n - 1 ) / ( r * (1+r)^n )
  const loanAmount = (monthlyBudget * (Math.pow(1 + monthlyRate, months) - 1)) / (monthlyRate * Math.pow(1 + monthlyRate, months));
  
  // Total cost = Loan / (1 - downPaymentPercent/100)
  const totalCost = loanAmount / (1 - (downPaymentPercent / 100));
  const estimatedGajam = Math.round(totalCost / pricePerSqYd);
  const downPayment = totalCost * (downPaymentPercent / 100);

  return {
    estimatedGajam: Math.max(100, estimatedGajam),
    totalCost: Math.round(totalCost),
    downPayment: Math.round(downPayment)
  };
}
