import React from 'react';
import { GoldenCorridorMap } from '../components/GoldenCorridorMap';
import { NimzTimeline } from '../components/NimzTimeline';
import { NIMZ_FACTS, NIMZ_KEY_PILLARS, NIMZ_SECTORS } from '../data/nimz';
import { 
  Building2, 
  Train, 
  Factory, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Car, 
  Zap, 
  Activity, 
  Wheat, 
  Truck, 
  ExternalLink,
  MapPin,
  TrendingUp,
  Cpu
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const WhyZaheerabadPage: React.FC = () => {
  const getSectorIcon = (iconName: string) => {
    switch (iconName) {
      case 'Car': return <Car className="w-5 h-5 text-[#B8860B]" />;
      case 'Shield': return <ShieldCheck className="w-5 h-5 text-[#B8860B]" />;
      case 'Zap': return <Zap className="w-5 h-5 text-[#B8860B]" />;
      case 'Activity': return <Activity className="w-5 h-5 text-[#B8860B]" />;
      case 'Wheat': return <Wheat className="w-5 h-5 text-[#B8860B]" />;
      case 'Truck': return <Truck className="w-5 h-5 text-[#B8860B]" />;
      default: return <Cpu className="w-5 h-5 text-[#B8860B]" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-16">
      {/* ─── Page Hero ─── */}
      <div className="max-w-3xl space-y-3">
        <span className="px-3.5 py-1 rounded-full bg-[#B8860B]/10 text-[#B8860B] border border-[#B8860B]/20 text-[10px] font-bold uppercase tracking-widest inline-block">
          Official NIMZ Strategic Dossier
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#2D2D2D] leading-tight">
          Why Zaheerabad Smart City NIMZ is Telangana’s Premier Industrial Super-Hub
        </h1>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-light pt-1">
          Spanning over <strong className="font-semibold text-gray-900">12,635+ acres</strong> across Nyalkal and Jharasangam mandals, the Zaheerabad National Investment & Manufacturing Zone (NIMZ) is a landmark smart industrial city project developed jointly by the Government of India (NICDIT) and the Government of Telangana (TGIIC).
        </p>
      </div>

      {/* ─── Key NIMZ Facts Band (Updated from nimz.in) ─── */}
      <div className="p-8 rounded-lg bg-[#1A1A1A] text-white border border-gray-800 shadow-sm">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center divide-y-0">
          {NIMZ_FACTS.map((fact, idx) => (
            <div key={idx} className="space-y-1">
              <span className="text-2xl sm:text-3xl font-serif font-bold text-[#D4A574] block">
                {fact.value}
              </span>
              <span className="text-xs font-semibold text-white block uppercase tracking-wider">
                {fact.label}
              </span>
              <span className="text-[11px] text-gray-400 font-light block">
                {fact.desc}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ─── About NIMZ: 4 Structural Pillars ─── */}
      <div className="space-y-6">
        <div>
          <span className="text-xs font-semibold text-[#B8860B] uppercase tracking-wider block">
            National Manufacturing Policy
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2D2D2D] mt-1">
            Understanding the 12,635-Acre NIMZ Mega-Project
          </h2>
          <p className="text-sm text-gray-600 mt-1 max-w-2xl font-light">
            Insights sourced directly from the official Zaheerabad NIMZ smart city masterplan (nimz.in), establishing it as South India's largest planned industrial corridor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {NIMZ_KEY_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg bg-white border border-[#E8E4DF] shadow-sm space-y-4 hover:border-[#B8860B]/50 transition-colors"
            >
              <div>
                <span className="text-[10px] font-bold text-[#B8860B] uppercase tracking-wider block font-mono">
                  {pillar.subtitle}
                </span>
                <h3 className="text-lg font-serif font-bold text-[#2D2D2D] mt-1">
                  {pillar.title}
                </h3>
              </div>

              <p className="text-xs text-gray-600 leading-relaxed font-light">
                {pillar.description}
              </p>

              <div className="space-y-2 pt-2 border-t border-gray-100 text-xs">
                {pillar.highlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-gray-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#4A7C59] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Target Industrial Clusters (From nimz.in) ─── */}
      <div className="p-8 rounded-lg bg-[#FAFAF8] border border-[#E8E4DF] space-y-8">
        <div>
          <span className="text-xs font-semibold text-[#B8860B] uppercase tracking-wider block">
            Economic Engine
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2D2D2D] mt-1">
            Core Target Manufacturing & Growth Sectors
          </h2>
          <p className="text-sm text-gray-600 mt-1 max-w-2xl font-light">
            The zone is systematically partitioned into non-polluting manufacturing, technology, and logistics clusters designed to generate over 2.6 lakh employment opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {NIMZ_SECTORS.map((sector, idx) => (
            <div key={idx} className="p-5 rounded-lg bg-white border border-[#E8E4DF] space-y-2 hover:shadow-md transition-shadow">
              <div className="p-2.5 rounded-lg bg-[#B8860B]/10 w-fit">
                {getSectorIcon(sector.icon)}
              </div>
              <h4 className="text-sm font-serif font-bold text-[#2D2D2D]">
                {sector.name}
              </h4>
              <p className="text-xs text-gray-500 leading-relaxed font-light">
                {sector.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="pt-2 text-xs text-gray-500 flex flex-wrap items-center justify-between gap-3 border-t border-gray-200">
          <span>* Sectoral distribution conforms to the approved TGIIC & NICDIT Master Zoning Plan.</span>
          <a
            href="https://www.nimz.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#B8860B] hover:underline inline-flex items-center gap-1 font-medium"
          >
            <span>Learn more at official NIMZ portal (nimz.in)</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* ─── Interactive Corridor Map Component ─── */}
      <div className="space-y-4">
        <div>
          <span className="text-xs font-semibold text-[#B8860B] uppercase tracking-wider block">
            Strategic Proximity
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2D2D2D] mt-1">
            Connectivity Matrix & Surrounding Anchors
          </h2>
          <p className="text-sm text-gray-600 mt-1 font-light">
            Direct access along the NH-65 Mumbai–Hyderabad corridor, 75 mins to Hyderabad Financial District and 25 mins to Bidar Airport.
          </p>
        </div>
        <GoldenCorridorMap />
      </div>

      {/* ─── Timeline Component ─── */}
      <div className="space-y-4">
        <NimzTimeline />
      </div>

      {/* ─── Action Footer Callout ─── */}
      <div className="p-8 sm:p-10 rounded-lg bg-[#1A1A1A] text-white space-y-4 max-w-4xl mx-auto text-center border border-gray-800 shadow-lg">
        <span className="text-xs font-semibold text-[#D4A574] uppercase tracking-wider block">
          Plotted Development Advantage
        </span>
        <h3 className="text-2xl sm:text-3xl font-serif font-bold leading-snug">
          Own Clear-Title Freehold Land at the Epicenter of NIMZ
        </h3>
        <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto font-light leading-relaxed">
          Swarna Bindu Avenue-2 is situated directly along this economic growth corridor. 100% Nala converted, company-paid LRS, starting from ₹3,300/sq.yd with 50% spot registration.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
          <Link
            to="/plot-explorer"
            className="px-6 py-3.5 rounded-lg bg-[#B8860B] hover:bg-[#96690A] text-white font-medium text-xs transition-colors"
          >
            Explore Masterplan CAD
          </Link>
          <Link
            to="/book-visit"
            className="px-6 py-3.5 rounded-lg border border-gray-600 hover:border-gray-400 text-white font-medium text-xs transition-colors"
          >
            Schedule VIP Site Visit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhyZaheerabadPage;
