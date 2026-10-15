import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { BookVisitForm } from '../components/BookVisitForm';
import { COMPANY } from '../data/company';
import { MapPin, Phone, Clock, Calendar, CheckCircle2, ShieldCheck, Car } from 'lucide-react';

export const BookVisitPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const plot = searchParams.get('plot');
  const phaseParam = searchParams.get('phase');
  const phaseLabel = phaseParam === 'avenue-1' ? 'Phase 1' : phaseParam === 'avenue-2' ? 'Phase 2' : undefined;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-14">
      {/* Header */}
      <div className="max-w-3xl space-y-2">
        <span className="px-3.5 py-1 rounded-full bg-[#D4A84D]/15 text-[#8E6219] border border-[#D4A84D]/30 text-[10px] font-bold uppercase tracking-widest inline-block">
          Complimentary Chauffeur Experience
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold font-serif text-[#0A1C16] leading-tight">
          Schedule Your VIP Site Inspection
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
          Experience ground reality firsthand before making a financial commitment. Walk the 30-ft roads, review red sandalwood trees, and inspect boundary markers. Complimentary AC chauffeur pickup arranged from Miyapur (Wed–Mon).
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Booking Form */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-sm">
          <BookVisitForm prefilledPlot={plot ?? undefined} prefilledPhase={phaseLabel} />
        </div>

        {/* Guidelines & Office Details */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-7 rounded-3xl bg-[#0A1C16] text-[#F5EBD4] shadow-xl space-y-5 border border-[#D4A84D]/30">
            <span className="text-[10px] font-bold text-[#D4A84D] uppercase tracking-widest block">
              Departure & Concierge Point
            </span>
            <h3 className="text-xl font-bold font-serif text-white">
              Swarna Dhatri Corporate Office
            </h3>
            <p className="text-xs text-stone-300 leading-relaxed font-light">
              305, 3rd Floor, Sai Ranga Bhaskar Residency, Near Sai Ranga Theater, Miyapur, Hyderabad 500049.
            </p>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs space-y-2">
              <div className="flex items-center gap-2 text-[#EBD4A4] font-bold">
                <Clock className="w-4 h-4 text-[#D4A84D]" />
                <span>Operating Hours: 10:00 AM – 6:00 PM IST</span>
              </div>
              <div className="text-amber-300 font-semibold pl-6 text-[11px]">
                ★ Weekly Holiday: Tuesday Closed (Wed–Mon Operating)
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`tel:${COMPANY.phone}`}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#C89732] hover:bg-[#D4A84D] text-[#0A1C16] font-bold text-xs uppercase tracking-wider shadow-gold transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call Desk: {COMPANY.phoneFormatted}</span>
              </a>
            </div>
          </div>

          {/* What to Expect Card */}
          <div className="p-7 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-4">
            <h4 className="text-xs font-bold font-serif text-[#0A1C16] uppercase tracking-wider">
              What to Expect on Your VIP Site Tour:
            </h4>
            <ul className="space-y-3 text-xs text-stone-600 font-light">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Guided private tour across all 50 acres and demarcated corner stones.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Physical inspection of deep borewells, power transformers, and plantation growth.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>On-site title documentation inspection (Nala conversion certified orders).</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Zero sales pressure: dedicated time for family discussion and consultation.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
