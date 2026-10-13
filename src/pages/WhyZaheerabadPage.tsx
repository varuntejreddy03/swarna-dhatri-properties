import React from 'react';
import { GoldenCorridorMap } from '../components/GoldenCorridorMap';
import { NimzTimeline } from '../components/NimzTimeline';
import { NIMZ_FACTS } from '../data/nimz';
import { Building2, Train, Factory, ShieldCheck, ExternalLink, ArrowRight, Compass, TrendingUp, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export const WhyZaheerabadPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-16">
      {/* Page Hero */}
      <div className="max-w-3xl space-y-3">
        <span className="px-3.5 py-1 rounded-full bg-[#D4A84D]/15 text-[#8E6219] border border-[#D4A84D]/30 text-[10px] font-bold uppercase tracking-widest inline-block">
          Strategic Investment Dossier
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold font-serif text-[#0A1C16] leading-tight">
          Why Zaheerabad Smart City NIMZ is Telangana’s Next Industrial Super-Hub
        </h1>
        <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-light pt-1">
          Explore the macroeconomic drivers transforming the Zaheerabad corridor: 12,618 acres of government-notified NIMZ, global automotive manufacturing anchors, NH-65 expressway expansion, and proposed high-speed bullet train connectivity.
        </p>
      </div>

      {/* 4 Pillars of Growth Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-sm space-y-3 hover:border-[#D4A84D]/50 transition-colors">
          <div className="w-12 h-12 rounded-2xl bg-[#0A1C16] text-[#D4A84D] flex items-center justify-center font-bold">
            <Factory className="w-6 h-6" />
          </div>
          <h4 className="text-lg font-bold font-serif text-[#0A1C16]">
            12,618-Acre NIMZ
          </h4>
          <p className="text-xs text-stone-600 leading-relaxed font-light">
            Premier National Investment & Manufacturing Zone notified across Nyalkal and Jharasangam mandals with dedicated central infrastructure funding.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-sm space-y-3 hover:border-[#D4A84D]/50 transition-colors">
          <div className="w-12 h-12 rounded-2xl bg-[#0A1C16] text-[#D4A84D] flex items-center justify-center font-bold">
            <Train className="w-6 h-6" />
          </div>
          <h4 className="text-lg font-bold font-serif text-[#0A1C16]">
            High Speed Bullet Train
          </h4>
          <p className="text-xs text-stone-600 leading-relaxed font-light">
            Proposed Mumbai–Pune–Zaheerabad–Hyderabad high-speed rail corridor with an intended passenger stoppage, reducing Hyderabad transit to under 25 minutes.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-sm space-y-3 hover:border-[#D4A84D]/50 transition-colors">
          <div className="w-12 h-12 rounded-2xl bg-[#0A1C16] text-[#D4A84D] flex items-center justify-center font-bold">
            <Zap className="w-6 h-6" />
          </div>
          <h4 className="text-lg font-bold font-serif text-[#0A1C16]">
            Automotive & EV Epicenter
          </h4>
          <p className="text-xs text-stone-600 leading-relaxed font-light">
            Mahindra & Mahindra’s sprawling operational mega-complex alongside Triton EV’s multi-crore electric vehicle manufacturing park.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-sm space-y-3 hover:border-[#D4A84D]/50 transition-colors">
          <div className="w-12 h-12 rounded-2xl bg-[#0A1C16] text-[#D4A84D] flex items-center justify-center font-bold">
            <TrendingUp className="w-6 h-6" />
          </div>
          <h4 className="text-lg font-bold font-serif text-[#0A1C16]">
            NH-65 Expressway Upgrades
          </h4>
          <p className="text-xs text-stone-600 leading-relaxed font-light">
            6-lane national arterial expressway with seamless connectivity to Hyderabad Outer Ring Road (ORR) at Patancheru and the upcoming Regional Ring Road (RRR).
          </p>
        </div>
      </div>

      {/* Key NIMZ Facts Band */}
      <div className="p-8 rounded-3xl bg-[#0A1C16] text-[#F5EBD4] border border-[#D4A84D]/30 shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-grid opacity-20 pointer-events-none" />
        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {NIMZ_FACTS.map((fact, idx) => (
            <div key={idx} className="space-y-1">
              <span className="text-2xl sm:text-3xl font-bold font-serif text-[#D4A84D] block">
                {fact.value}
              </span>
              <span className="text-xs font-bold text-white block uppercase tracking-wider">
                {fact.label}
              </span>
              <span className="text-[11px] text-stone-300 font-light block">
                {fact.desc}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Corridor Map Component */}
      <div className="space-y-4">
        <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#0A1C16]">
          Commute & Strategic Proximity
        </h3>
        <GoldenCorridorMap />
      </div>

      {/* Timeline Component */}
      <div className="space-y-4">
        <NimzTimeline />
      </div>

      {/* Action Footer Callout */}
      <div className="p-8 rounded-3xl bg-[#FCFBF7] border border-stone-200 text-center space-y-4 max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold font-serif text-[#0A1C16]">
          Secure Your Plot in the Heart of NIMZ
        </h3>
        <p className="text-xs sm:text-sm text-stone-600 max-w-xl mx-auto font-light">
          Swarna Bindu Avenue-2 is positioned at the epicenter of this economic growth. Plots start from ₹3,300/sq.yd with 50% spot registration.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            to="/plot-explorer"
            className="px-6 py-3.5 rounded-xl bg-[#C89732] hover:bg-[#D4A84D] text-[#0A1C16] font-bold text-xs uppercase tracking-wider shadow-gold transition-all"
          >
            Explore Masterplan CAD
          </Link>
          <Link
            to="/book-visit"
            className="px-6 py-3.5 rounded-xl bg-[#0A1C16] hover:bg-[#14382C] text-white font-bold text-xs uppercase tracking-wider transition-all"
          >
            Schedule VIP Site Visit
          </Link>
        </div>
      </div>
    </div>
  );
};
