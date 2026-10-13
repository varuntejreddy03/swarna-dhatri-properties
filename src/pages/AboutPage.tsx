import React from 'react';
import { COMPANY } from '../data/company';
import { DocumentTrustVault } from '../components/DocumentTrustVault';
import { ShieldCheck, HeartHandshake, MapPin, Phone, Mail, Award, CheckCircle2 } from 'lucide-react';
import { Logo } from '../components/Logo';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-16">
      {/* Brand Ethos Hero */}
      <div className="max-w-3xl space-y-3">
        <span className="px-3.5 py-1 rounded-full bg-[#D4A84D]/15 text-[#8E6219] border border-[#D4A84D]/30 text-[10px] font-bold uppercase tracking-widest inline-block">
          Corporate Philosophy & Proven Pedigree
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold font-serif text-[#0A1C16] leading-tight">
          Swarna Dhatri: Golden Earth for Generations to Come
        </h1>
        <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-light pt-1">
          In classical Sanskrit, <span className="font-semibold text-stone-900">Dhatri</span> signifies Mother Earth, the ultimate nurturer and bearer of abundance; <span className="font-semibold text-stone-900">Swarna</span> represents the purest gold. Our mission is to provide ambitious families and forward-looking investors with unencumbered, high-growth plotted land founded on uncompromising legal integrity.
        </p>
      </div>

      {/* Narrative Card: The Emblem & Values */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[#FCFBF7] border border-stone-200 grid grid-cols-1 md:grid-cols-12 gap-10 items-center shadow-sm">
        <div className="md:col-span-5 flex flex-col items-center text-center p-8 bg-white rounded-2xl border border-stone-200/90 shadow-sm space-y-3">
          <Logo size="lg" />
          <span className="text-xs text-stone-500 font-bold uppercase tracking-wider block">
            The Swarna Dhatri Seal of Trust
          </span>
          <p className="text-xs text-stone-600 leading-relaxed italic font-light">
            "A crown of golden foliage sheltering enduring foundations — embodying Telangana’s thriving soil and every family’s vision of intergenerational wealth."
          </p>
        </div>

        <div className="md:col-span-7 space-y-5 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <h3 className="text-2xl font-bold font-serif text-[#0A1C16]">
            Our 4 Pillars of Developer Integrity
          </h3>
          <div className="space-y-4 pt-1">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#0A1C16]">100% Clear Title Verification: </strong>
                <span className="font-light">Every acre undergoes thorough 30-year revenue encumbrance verification, validated by top legal practitioners before layout demarcation.</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#0A1C16]">Zero Buyer LRS Liability: </strong>
                <span className="font-light">Unlike unorganized brokers who shift regularisation costs onto buyers, Swarna Dhatri pays all Layout Regularisation Scheme charges directly.</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#0A1C16]">Spot Registration on 50% Payment: </strong>
                <span className="font-light">We execute registered sale deeds at the local Sub-Registrar office immediately upon clearance of half the plot value.</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#0A1C16]">Transparent Family Advisory: </strong>
                <span className="font-light">We invite families, elders, and independent legal advisors to review our physical records at our Miyapur headquarters in complete confidence.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Document Trust Vault Section */}
      <div>
        <DocumentTrustVault />
      </div>

      {/* Corporate Location & Transparency */}
      <div className="p-8 sm:p-10 rounded-3xl bg-[#0A1C16] text-[#F5EBD4] shadow-xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center border border-[#D4A84D]/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-grid opacity-20 pointer-events-none" />

        <div className="space-y-3 relative z-10">
          <span className="text-[10px] font-bold text-[#D4A84D] uppercase tracking-widest block">
            Executive Headquarters
          </span>
          <h3 className="text-2xl font-bold font-serif text-white">
            Miyapur Corporate Office, Hyderabad
          </h3>
          <p className="text-xs text-stone-300 leading-relaxed font-light">
            Conveniently situated adjacent to Sai Ranga Theater on the main Miyapur arterial road. Visit our executive desk to review certified CAD masterplans and plan your site visit.
          </p>
          <div className="text-xs text-stone-300 space-y-1.5 pt-2 font-light">
            <div><strong className="text-white">Address:</strong> 305, 3rd Floor, Sai Ranga Bhaskar Residency, Near Sai Ranga Theater, Miyapur, Hyderabad 500049.</div>
            <div><strong className="text-white">Hours:</strong> 10:00 AM – 6:00 PM IST (Wednesday to Monday)</div>
            <div className="text-amber-300 font-semibold">★ Tuesday Weekly Closed</div>
          </div>
        </div>

        <div className="space-y-3 relative z-10">
          <a
            href={`tel:${COMPANY.phone}`}
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#C89732] hover:bg-[#D4A84D] text-[#0A1C16] font-bold text-xs uppercase tracking-wider shadow-gold transition-all"
          >
            <Phone className="w-4 h-4" />
            <span>Call Executive Desk: {COMPANY.phoneFormatted}</span>
          </a>
          <a
            href={`mailto:${COMPANY.email}`}
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs border border-white/20 transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>Email: {COMPANY.email}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
