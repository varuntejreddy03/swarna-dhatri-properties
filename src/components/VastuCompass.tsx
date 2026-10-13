import React, { useState } from 'react';
import { Compass, CheckCircle2, Sparkles, Sun, ShieldCheck } from 'lucide-react';

interface VastuDirection {
  id: string;
  name: string;
  sanskrit: string;
  rulingDeity: string;
  element: string;
  description: string;
  recommendation: string;
  rating: string;
}

const VASTU_DATA: VastuDirection[] = [
  {
    id: 'east',
    name: 'East Facing',
    sanskrit: 'Purva',
    rulingDeity: 'Indra & Surya (Sun God)',
    element: 'Fire / Solar Light',
    description: 'Basking in the first rays of the dawn, East-facing open plots channel boundless vitality, spiritual clarity, and dynamic health for the entire household.',
    recommendation: 'Ideal for main residential entrance gates, living pavilions, and meditation gardens.',
    rating: 'Highly Auspicious'
  },
  {
    id: 'north',
    name: 'North Facing',
    sanskrit: 'Uttara',
    rulingDeity: 'Lord Kubera (Custodian of Wealth)',
    element: 'Water / Abundance',
    description: 'Ruled by Kubera and the magnetic North pole, this orientation has historically been selected by financial leaders and enterprise builders for enduring prosperity.',
    recommendation: 'Exceptional for financial prosperity, treasury orientation, and front grand entrances.',
    rating: 'Supreme Prosperity'
  },
  {
    id: 'north-east',
    name: 'North-East (Ishanya)',
    sanskrit: 'Ishanya',
    rulingDeity: 'Lord Shiva (Divine Consciousness)',
    element: 'Water & Ether',
    description: 'The sacred crown corner of Vedic architecture. Retaining lower boundary levels and water features here attracts pure spiritual equilibrium.',
    recommendation: 'Prime corner plot position. Retain open lawns, underground borewells, or sacred trees.',
    rating: 'Most Sacred Cardinal'
  },
  {
    id: 'west',
    name: 'West Facing',
    sanskrit: 'Pashchima',
    rulingDeity: 'Lord Varuna (Preserver of Order)',
    element: 'Air / Stability',
    description: 'Associated with enduring fame, stable commercial enterprise, and long-term administrative success.',
    recommendation: 'Favored for executive homes and commercial frontage along 33-ft boulevards.',
    rating: 'Stability & Success'
  },
  {
    id: 'south',
    name: 'South Facing',
    sanskrit: 'Dakshina',
    rulingDeity: 'Lord Yama (Virtue & Dharma)',
    element: 'Earth / Energy',
    description: 'A powerful, high-energy direction that yields great accomplishments when designed with elevated plinths and proper entrance positioning.',
    recommendation: 'Construct with solid rear boundary walls and elevated Southern master suites.',
    rating: 'Vigorous Energy'
  }
];

export const VastuCompass: React.FC = () => {
  const [selectedDirection, setSelectedDirection] = useState<VastuDirection>(VASTU_DATA[0]);

  return (
    <div className="w-full bg-white rounded-3xl border border-stone-200/90 shadow-[0_15px_50px_-10px_rgba(0,0,0,0.08)] p-6 sm:p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-[10px] font-bold text-[#8E6219] uppercase tracking-widest block">
            Vedic Spatial Wisdom
          </span>
          <h4 className="text-xl font-bold font-serif text-[#0A1C16] mt-0.5">
            Vastu Orientation Matrix & Plot Guidance
          </h4>
        </div>
        <div className="p-2.5 rounded-2xl bg-[#D4A84D]/15 text-[#C89732]">
          <Compass className="w-5 h-5 animate-spin" style={{ animationDuration: '40s' }} />
        </div>
      </div>

      {/* Direction selector tabs */}
      <div className="flex flex-wrap gap-2">
        {VASTU_DATA.map((dir) => (
          <button
            key={dir.id}
            onClick={() => setSelectedDirection(dir)}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedDirection.id === dir.id
                ? 'bg-[#0A1C16] text-[#D4A84D] shadow-sm'
                : 'bg-[#FCFBF7] text-stone-700 border border-stone-200 hover:bg-stone-100'
            }`}
          >
            <span>{dir.name}</span>
            <span className="text-[10px] text-stone-400 font-normal ml-1">({dir.sanskrit})</span>
          </button>
        ))}
      </div>

      {/* Selected Direction Deep-Dive Card */}
      <div className="p-6 rounded-2xl bg-[#FCFBF7] border border-stone-200 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200/60 pb-3">
          <div>
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">
              Orientation Analysis:
            </span>
            <h5 className="text-lg font-bold font-serif text-[#0A1C16]">
              {selectedDirection.name} ({selectedDirection.sanskrit})
            </h5>
          </div>
          <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
            {selectedDirection.rating}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 text-xs">
          <div>
            <span className="text-stone-400 block text-[10px] uppercase font-bold">Governing Energy:</span>
            <span className="font-semibold text-stone-800">{selectedDirection.rulingDeity}</span>
          </div>
          <div>
            <span className="text-stone-400 block text-[10px] uppercase font-bold">Primary Element:</span>
            <span className="font-semibold text-stone-800">{selectedDirection.element}</span>
          </div>
        </div>

        <p className="text-xs text-stone-600 leading-relaxed font-light">
          {selectedDirection.description}
        </p>

        <div className="p-3.5 rounded-xl bg-white border border-stone-200 text-xs text-stone-700 flex items-start gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-[#0A1C16] block">Architectural Recommendation:</span>
            <span className="font-light">{selectedDirection.recommendation}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
