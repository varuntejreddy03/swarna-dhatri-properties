import React from 'react';
import { CouponReveal } from '../components/CouponReveal';
import { BOOKING_OFFER } from '../data/offers';
import { Sparkles, Gift, CheckCircle2, AlertCircle, FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const OffersPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-14">
      {/* Header */}
      <div className="max-w-3xl space-y-2">
        <span className="px-3.5 py-1 rounded-full bg-[#D4A84D]/15 text-[#8E6219] border border-[#D4A84D]/30 text-[10px] font-bold uppercase tracking-widest inline-block">
          Executive Privilege Scheme
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold font-serif text-[#0A1C16] leading-tight">
          {BOOKING_OFFER.name}
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
          Every confirmed spot booking with a ₹20,000 token advance is eligible for an assured launch consideration certificate valued between ₹10,000 and ₹1,00,000.
        </p>
      </div>

      {/* Privilege Card Widget */}
      <CouponReveal />

      {/* Campaign Details & Terms & Conditions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-7 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-5">
          <div className="flex items-center gap-2.5">
            <Gift className="w-5 h-5 text-[#C89732]" />
            <h3 className="text-lg font-bold font-serif text-[#0A1C16]">
              Privilege Overview & Parameters
            </h3>
          </div>

          <div className="space-y-3 text-xs text-stone-700">
            <div className="flex justify-between py-2 border-b border-stone-100">
              <span className="text-stone-500">Value Range:</span>
              <span className="font-bold text-[#0A1C16]">{BOOKING_OFFER.minPrizeFormatted} to {BOOKING_OFFER.maxPrizeFormatted}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-stone-100">
              <span className="text-stone-500">Eligibility:</span>
              <span className="font-bold text-[#0A1C16]">Every Spot Reservation with ₹20,000 Token</span>
            </div>
            <div className="flex justify-between py-2 border-b border-stone-100">
              <span className="text-stone-500">Campaign Window:</span>
              <span className="font-semibold text-[#8E6219]">{BOOKING_OFFER.startsOn}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-stone-100">
              <span className="text-stone-500">Applicable Developments:</span>
              <span className="font-semibold text-stone-800">Swarna Bindu Avenue-2 & Phase 1</span>
            </div>
          </div>
        </div>

        <div className="p-7 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-5">
          <div className="flex items-center gap-2.5">
            <FileText className="w-5 h-5 text-stone-500" />
            <h3 className="text-lg font-bold font-serif text-[#0A1C16]">
              Privilege Guidelines & Terms
            </h3>
          </div>

          <ul className="space-y-3 text-xs text-stone-600 font-light">
            {BOOKING_OFFER.terms.map((term, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>{term}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
