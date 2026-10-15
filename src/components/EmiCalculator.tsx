import React, { useState, useMemo } from 'react';
import { calculateEmi, calculatePlotSizeFromBudget, formatIndianCurrency } from '../utils/emi';
import { EMI_TENURE_OPTIONS_MONTHS, PAYMENT_PLAN } from '../data/paymentPlan';
import { CheckCircle2, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export const EmiCalculator: React.FC = () => {
  // Mode: standard (Plot size -> EMI), reverse (Budget -> Plot size)
  const [activeMode, setActiveMode] = useState<'standard' | 'reverse'>('standard');

  // Standard Mode Inputs
  const [areaSqYds, setAreaSqYds] = useState<number>(PAYMENT_PLAN.standardPlotSqYd);
  const [pricePerSqYd, setPricePerSqYd] = useState<number>(PAYMENT_PLAN.exampleRatePerSqYd);
  const [tenureMonths, setTenureMonths] = useState<number>(PAYMENT_PLAN.maxEmiMonths);
  const [interestRate, setInterestRate] = useState<number>(0);

  // Reverse Mode Inputs
  const [monthlyBudget, setMonthlyBudget] = useState<number>(10000);

  // Standard calculation
  const emiData = useMemo(() => {
    return calculateEmi({
      areaSqYds,
      pricePerSqYd,
      annualInterestRate: interestRate,
      tenureMonths
    });
  }, [areaSqYds, pricePerSqYd, tenureMonths, interestRate]);

  // Projected 3-year capital appreciation at conservative 18% CAGR for Zaheerabad NIMZ
  const projectedAppreciation = useMemo(() => {
    const principal = areaSqYds * pricePerSqYd;
    const year3Value = Math.round(principal * Math.pow(1 + 0.18, 3));
    const netGain = year3Value - principal;
    return { year3Value, netGain };
  }, [areaSqYds, pricePerSqYd]);

  // Reverse calculation
  const reverseData = useMemo(() => {
    return calculatePlotSizeFromBudget({
      monthlyBudget,
      pricePerSqYd,
      annualInterestRate: interestRate,
      tenureMonths
    });
  }, [monthlyBudget, pricePerSqYd, tenureMonths, interestRate]);

  return (
    <div className="w-full bg-white rounded-3xl border border-stone-200/90 shadow-[0_15px_50px_-10px_rgba(0,0,0,0.08)] overflow-hidden">
      {/* Header and Mode switcher tabs */}
      <div className="p-6 sm:p-8 bg-[#0A1C16] text-[#F5EBD4] border-b border-[#D4A84D]/20">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-0.5 rounded-full bg-[#D4A84D]/20 text-[#EBD4A4] border border-[#D4A84D]/30 font-bold text-[10px] uppercase tracking-widest">
                Financial Advisory Tool
              </span>
              <span className="text-xs text-stone-300 font-light">
                • ₹{PAYMENT_PLAN.bookingAmount.toLocaleString('en-IN')} Booking · EMI up to {PAYMENT_PLAN.maxEmiMonths} months
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-white mt-1.5">
              Smart Investment & EMI Wealth Planner
            </h3>
            <p className="text-xs text-stone-300 mt-1 max-w-xl font-light">
              Clear, transparent calculations for business leaders and salaried professionals with zero hidden charges.
            </p>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex items-center p-1 bg-[#0E2820] border border-white/10 rounded-2xl">
            <button
              onClick={() => setActiveMode('standard')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeMode === 'standard'
                  ? 'bg-[#C89732] text-[#0A1C16] shadow-sm'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              Plot Size → Calculate EMI
            </button>
            <button
              onClick={() => setActiveMode('reverse')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeMode === 'reverse'
                  ? 'bg-[#C89732] text-[#0A1C16] shadow-sm'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              Monthly Budget → Suggest Plot
            </button>
          </div>
        </div>
      </div>

      {/* Main Calculation Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Left Inputs (7 Cols) */}
        <div className="lg:col-span-7 p-6 sm:p-8 bg-[#FCFBF7] space-y-6 border-b lg:border-b-0 lg:border-r border-stone-200">
          {activeMode === 'standard' ? (
            /* Mode 1: Standard Plot Size -> EMI */
            <div className="space-y-6">
              {/* Plot Size (Gajam) */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-700">
                    Plot Size (Gajam / Square Yards):
                  </label>
                  <span className="text-base font-bold font-serif text-[#0A1C16]">
                    {areaSqYds} Gajam <span className="text-xs font-sans text-stone-500 font-normal">({areaSqYds * 9} sq.ft)</span>
                  </span>
                </div>
                <input
                  type="range"
                  min={75}
                  max={250}
                  step={1}
                  value={areaSqYds}
                  onChange={(e) => setAreaSqYds(Number(e.target.value))}
                  className="w-full accent-[#C89732] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-stone-400 mt-1">
                  <span>75 Gajam</span>
                  <span className="text-[#C89732] font-semibold">Standard plot: ~{PAYMENT_PLAN.standardPlotSqYd} Gajam · {PAYMENT_PLAN.roadWidthFt} ft road</span>
                  <span>250 Gajam</span>
                </div>
              </div>

              {/* Rate per Sq.Yd */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-700">
                    Rate per Sq. Yard (Launch Price):
                  </label>
                  <span className="text-base font-bold font-serif text-[#0A1C16]">
                    ₹{pricePerSqYd.toLocaleString('en-IN')} <span className="text-xs font-sans text-stone-500 font-normal">/ sq.yd</span>
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPricePerSqYd(3300)}
                    className={`py-2 px-3 rounded-xl border text-xs font-bold transition-all ${
                      pricePerSqYd === 3300
                        ? 'border-[#C89732] bg-[#C89732]/10 text-[#0A1C16]'
                        : 'border-stone-200 bg-white text-stone-600 hover:bg-stone-50'
                    }`}
                  >
                    ₹3,300 (Phase 2)
                  </button>
                  <button
                    type="button"
                    onClick={() => setPricePerSqYd(4000)}
                    className={`py-2 px-3 rounded-xl border text-xs font-bold transition-all ${
                      pricePerSqYd === 4000
                        ? 'border-[#C89732] bg-[#C89732]/10 text-[#0A1C16]'
                        : 'border-stone-200 bg-white text-stone-600 hover:bg-stone-50'
                    }`}
                  >
                    ₹4,000 (Ph.1 West)
                  </button>
                  <button
                    type="button"
                    onClick={() => setPricePerSqYd(4500)}
                    className={`py-2 px-3 rounded-xl border text-xs font-bold transition-all ${
                      pricePerSqYd === 4500
                        ? 'border-[#C89732] bg-[#C89732]/10 text-[#0A1C16]'
                        : 'border-stone-200 bg-white text-stone-600 hover:bg-stone-50'
                    }`}
                  >
                    ₹4,500 (Ph.1 East)
                  </button>
                </div>
              </div>

              {/* Fixed upfront payments */}
              <div className="p-4 rounded-2xl bg-white border border-stone-200 space-y-2 text-xs">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-700 block">
                  Upfront Payments (fixed):
                </span>
                <div className="flex justify-between">
                  <span className="text-stone-500">Booking token</span>
                  <span className="font-mono font-bold text-amber-600">
                    {formatIndianCurrency(PAYMENT_PLAN.bookingAmount)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Down payment (within {PAYMENT_PLAN.downPaymentDays} days)</span>
                  <span className="font-mono font-bold text-stone-800">
                    {formatIndianCurrency(PAYMENT_PLAN.downPaymentAmount)}
                  </span>
                </div>
                <p className="text-[11px] text-emerald-700 font-semibold">
                  Or pay {PAYMENT_PLAN.spotRegistrationPercent}% within {PAYMENT_PLAN.spotRegistrationDays} days and register the plot.
                </p>
              </div>

              {/* Tenure (months) */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-700 block mb-2">
                    EMI Tenure: {tenureMonths} Months <span className="text-stone-400 normal-case font-normal">(max {PAYMENT_PLAN.maxEmiMonths})</span>
                  </label>
                  <div className="grid grid-cols-4 gap-1.5">
                    {EMI_TENURE_OPTIONS_MONTHS.map((m) => (
                      <button
                        key={m}
                        type="button"
                        onClick={() => setTenureMonths(m)}
                        className={`py-2 rounded-xl text-xs font-bold border transition-all ${
                          tenureMonths === m
                            ? 'bg-[#0A1C16] text-[#D4A84D] border-[#0A1C16]'
                            : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                        }`}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-700 block mb-2">
                    Interest (if any): {interestRate}%
                  </label>
                  <input
                    type="range"
                    min={0}
                    max={12}
                    step={0.5}
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full accent-[#C89732] cursor-pointer mt-2"
                  />
                  <div className="flex justify-between text-[11px] text-stone-400 mt-1">
                    <span>0%</span>
                    <span>12%</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Mode 2: Reverse Budget -> Suggested Plot Size */
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-700">
                    Target Monthly EMI Outflow:
                  </label>
                  <span className="text-xl font-bold font-serif text-[#0A1C16]">
                    ₹{monthlyBudget.toLocaleString('en-IN')} <span className="text-xs font-sans text-stone-500 font-normal">/ month</span>
                  </span>
                </div>
                <input
                  type="range"
                  min={3000}
                  max={40000}
                  step={500}
                  value={monthlyBudget}
                  onChange={(e) => setMonthlyBudget(Number(e.target.value))}
                  className="w-full accent-[#C89732] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-stone-400 mt-1">
                  <span>₹3,000 / mo</span>
                  <span className="text-[#C89732] font-semibold">Over {tenureMonths} months after the ₹{(PAYMENT_PLAN.bookingAmount + PAYMENT_PLAN.downPaymentAmount).toLocaleString('en-IN')} upfront</span>
                  <span>₹40,000 / mo</span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-stone-200 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block">
                  Recommended Configuration:
                </span>
                <div className="flex items-baseline justify-between">
                  <span className="text-stone-600 text-xs">Recommended Plot Size:</span>
                  <span className="text-2xl font-bold font-serif text-[#0A1C16]">
                    {reverseData.estimatedGajam} Gajam (Sq.Yds)
                  </span>
                </div>
                <div className="flex items-baseline justify-between text-xs">
                  <span className="text-stone-600">Total Plot Consideration (@ ₹{pricePerSqYd.toLocaleString('en-IN')}/yd):</span>
                  <span className="font-mono font-bold text-stone-900">
                    ₹{reverseData.totalCost.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex items-baseline justify-between text-xs">
                  <span className="text-stone-600">Booking + Down Payment (upfront):</span>
                  <span className="font-mono font-bold text-emerald-700">
                    ₹{reverseData.upfrontTotal.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Developer Guarantees Callout */}
          <div className="p-4 rounded-2xl bg-white border border-stone-200 flex items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span className="text-stone-700 font-medium">100% LRS Charges Borne by Swarna Dhatri Properties</span>
            </div>
            <span className="text-emerald-700 font-bold">₹0 Hidden Fee</span>
          </div>
        </div>

        {/* Right Output Dashboard (5 Cols) */}
        <div className="lg:col-span-5 p-6 sm:p-8 bg-white flex flex-col justify-between space-y-6">
          <div className="space-y-6">
            {/* Primary KPI Card: Monthly EMI */}
            <div className="p-6 rounded-2xl bg-[#0A1C16] text-[#F5EBD4] border border-[#D4A84D]/30 shadow-md space-y-3">
              <span className="text-[10px] text-stone-400 block uppercase tracking-widest font-semibold">
                Estimated Monthly Outflow
              </span>
              <div className="text-3xl sm:text-4xl font-bold font-serif text-[#D4A84D]">
                ₹{emiData.monthlyEmi.toLocaleString('en-IN')}
                <span className="text-xs font-sans text-stone-300 font-normal ml-1">/ month</span>
              </div>
              <p className="text-[11px] text-stone-300 font-light">
                Balance paid over {emiData.tenureMonths} months{interestRate > 0 ? ` @ ${interestRate}% p.a.` : ''}
              </p>
            </div>

            {/* Financial Breakdown Table */}
            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between py-1.5 border-b border-stone-100">
                <span className="text-stone-500">Total Plot Value:</span>
                <span className="font-bold text-[#0A1C16] font-mono">
                  {formatIndianCurrency(emiData.totalCost)}
                </span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-stone-100">
                <span className="text-stone-500">Booking Token:</span>
                <span className="font-bold text-amber-600 font-mono">
                  {formatIndianCurrency(emiData.bookingAmount)}
                </span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-stone-100">
                <span className="text-stone-500">Down Payment (within {PAYMENT_PLAN.downPaymentDays} days):</span>
                <span className="font-bold text-stone-800 font-mono">
                  {formatIndianCurrency(emiData.downPaymentAmount)}
                </span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-stone-100">
                <span className="text-stone-500">Balance in EMI ({emiData.tenureMonths} months):</span>
                <span className="font-bold text-stone-800 font-mono">
                  {formatIndianCurrency(emiData.loanAmount)}
                </span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-stone-500">
                  Or {PAYMENT_PLAN.spotRegistrationPercent}% Registration (within {PAYMENT_PLAN.spotRegistrationDays} days):
                </span>
                <span className="font-bold text-emerald-700 font-mono">
                  {formatIndianCurrency(emiData.spotRegistrationAmount)}
                </span>
              </div>
            </div>

            {/* Projected Capital Appreciation Card */}
            <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/70 space-y-2">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[#C89732]" />
                <span className="text-xs font-bold text-amber-900 uppercase tracking-wider">
                  Projected 3-Year Capital Appreciation:
                </span>
              </div>
              <div className="flex justify-between items-baseline text-xs">
                <span className="text-stone-600">Estimated Value @ 18% CAGR:</span>
                <span className="text-base font-bold font-serif text-[#0A1C16]">
                  {formatIndianCurrency(projectedAppreciation.year3Value)}
                </span>
              </div>
              <div className="flex justify-between items-baseline text-[11px] text-emerald-700 font-semibold">
                <span>Estimated Capital Gain:</span>
                <span>+{formatIndianCurrency(projectedAppreciation.netGain)}</span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="space-y-2.5 pt-2">
            <Link
              to="/book-visit"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#C89732] via-[#D4A84D] to-[#B07E23] text-[#0A1C16] font-bold text-xs uppercase tracking-wider shadow-gold hover:brightness-105 transition-all text-center"
            >
              <span>Schedule VIP Visit & Lock Rate</span>
            </Link>
            <p className="text-[10px] text-stone-400 text-center">
              * Indicative calculations for strategic investment planning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
