import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarClock, CheckCircle2, FileSignature, Wallet } from 'lucide-react';
import { PAYMENT_PLAN } from '../data/paymentPlan';
import { calculateEmi, formatIndianCurrency } from '../utils/emi';

interface PaymentPlanProps {
  areaSqYds?: number;
  pricePerSqYd?: number;
}

/** Worked example of the two ways to buy: booking + down payment + EMI, or 50% registration. */
export const PaymentPlan: React.FC<PaymentPlanProps> = ({
  areaSqYds = PAYMENT_PLAN.standardPlotSqYd,
  pricePerSqYd = PAYMENT_PLAN.exampleRatePerSqYd
}) => {
  const plan = calculateEmi({ areaSqYds, pricePerSqYd });
  const roundedHalf = Math.round(plan.spotRegistrationAmount / 1000) * 1000;

  return (
    <div className="w-full bg-white rounded-3xl border border-stone-200/90 shadow-[0_15px_50px_-10px_rgba(0,0,0,0.08)] overflow-hidden">
      <div className="p-6 sm:p-8 bg-[#0A1C16] text-[#F5EBD4] border-b border-[#D4A84D]/20">
        <span className="px-3 py-0.5 rounded-full bg-[#D4A84D]/20 text-[#EBD4A4] border border-[#D4A84D]/30 font-bold text-[10px] uppercase tracking-widest">
          Simple Payment Plan
        </span>
        <h3 className="text-xl sm:text-2xl font-bold font-serif text-white mt-2">Two easy ways to own your plot</h3>
        <p className="text-xs text-stone-300 mt-1 font-light">
          Example: {areaSqYds} sq.yd plot × ₹{pricePerSqYd.toLocaleString('en-IN')} = {' '}
          <span className="text-[#D4A84D] font-bold">{formatIndianCurrency(plan.totalCost)}</span> · {PAYMENT_PLAN.roadWidthFt} ft road
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-[#FCFBF7]">
        <div className="p-6 sm:p-8 space-y-4 border-b md:border-b-0 md:border-r border-stone-200">
          <div className="flex items-center gap-2">
            <Wallet className="w-5 h-5 text-[#C89732]" />
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#0A1C16]">Option A · Down Payment + EMI</h4>
          </div>
          <ol className="space-y-3 text-sm">
            <li className="flex items-start justify-between gap-3">
              <span className="text-stone-600">
                <span className="font-bold text-[#0A1C16]">1. Booking</span>
                <span className="block text-xs text-stone-400">To block your plot</span>
              </span>
              <span className="font-mono font-bold text-amber-600">{formatIndianCurrency(plan.bookingAmount)}</span>
            </li>
            <li className="flex items-start justify-between gap-3">
              <span className="text-stone-600">
                <span className="font-bold text-[#0A1C16]">2. Down payment</span>
                <span className="block text-xs text-stone-400">Within {PAYMENT_PLAN.downPaymentDays} days of booking</span>
              </span>
              <span className="font-mono font-bold text-stone-800">{formatIndianCurrency(plan.downPaymentAmount)}</span>
            </li>
            <li className="flex items-start justify-between gap-3">
              <span className="text-stone-600">
                <span className="font-bold text-[#0A1C16]">3. Balance in EMI</span>
                <span className="block text-xs text-stone-400">Up to {PAYMENT_PLAN.maxEmiMonths} months (maximum)</span>
              </span>
              <span className="text-right">
                <span className="font-mono font-bold text-stone-800 block">{formatIndianCurrency(plan.loanAmount)}</span>
                <span className="text-xs text-emerald-700 font-semibold">≈ {formatIndianCurrency(plan.monthlyEmi)} / month</span>
              </span>
            </li>
          </ol>
        </div>

        <div className="p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2">
            <FileSignature className="w-5 h-5 text-[#C89732]" />
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#0A1C16]">Option B · {PAYMENT_PLAN.spotRegistrationPercent}% Registration</h4>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-stone-200 space-y-1.5">
            <div className="flex items-baseline justify-between gap-3">
              <span className="text-sm text-stone-600">Pay {PAYMENT_PLAN.spotRegistrationPercent}% within {PAYMENT_PLAN.spotRegistrationDays} days</span>
              <span className="font-mono font-bold text-emerald-700 text-lg">≈ {formatIndianCurrency(roundedHalf)}</span>
            </div>
            <p className="text-xs text-stone-500">
              {PAYMENT_PLAN.spotRegistrationPercent}% of {formatIndianCurrency(plan.totalCost)} and your plot is registered in your name.
            </p>
          </div>
          <ul className="space-y-1.5 text-xs text-stone-600">
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" /> EMI is offered for a maximum of {PAYMENT_PLAN.maxEmiMonths} months</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" /> {PAYMENT_PLAN.roadWidthFt} ft wide roads on every plot</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" /> 100% LRS charges paid by the company</li>
          </ul>
          <div className="flex flex-wrap gap-2 pt-1">
            <Link
              to="/book-visit"
              className="inline-flex items-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#C89732] via-[#D4A84D] to-[#B07E23] text-[#0A1C16] font-bold text-xs uppercase tracking-wider shadow-gold hover:brightness-105 transition-all"
            >
              <CalendarClock className="w-4 h-4" />
              <span>Book a Site Visit</span>
            </Link>
            <Link
              to="/tools"
              className="inline-flex items-center gap-2 py-2.5 px-4 rounded-xl border border-stone-300 hover:bg-stone-100 text-stone-700 font-bold text-xs uppercase tracking-wider transition-colors"
            >
              <span>Open EMI Calculator</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
