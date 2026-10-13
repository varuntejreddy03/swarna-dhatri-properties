import React from 'react';
import { NIMZ_TIMELINE } from '../data/nimz';
import { Building2, TrendingUp, ShieldCheck, ExternalLink, Calendar } from 'lucide-react';

export const NimzTimeline: React.FC = () => {
  return (
    <div className="w-full bg-white rounded-3xl border border-stone-200/90 shadow-[0_15px_50px_-10px_rgba(0,0,0,0.08)] p-6 sm:p-10">
      <div className="max-w-3xl mx-auto text-center mb-10 space-y-2">
        <span className="px-3.5 py-1 rounded-full bg-[#D4A84D]/15 text-[#8E6219] border border-[#D4A84D]/30 font-bold text-[10px] uppercase tracking-widest inline-block">
          Industrial Capital Momentum
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#0A1C16]">
          12,618-Acre NIMZ Strategic Development Milestones
        </h3>
        <p className="text-xs sm:text-sm text-stone-600 font-light max-w-xl mx-auto">
          Tracking multi-billion dollar industrial investments, EV corridors, and national transit execution driving plotted land appreciation.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Central Vertical Timeline Rule */}
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -ml-px w-0.5 bg-gradient-to-b from-[#C89732] via-[#D4A84D] to-stone-200" />

        <div className="space-y-8 md:space-y-12">
          {NIMZ_TIMELINE.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={item.id}
                className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-10 ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot Indicator */}
                <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#0A1C16] border-2 border-[#D4A84D] items-center justify-center z-10 shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A84D]" />
                </div>

                {/* Content Box (Half Width) */}
                <div className="w-full md:w-1/2">
                  <div className="p-6 rounded-2xl bg-[#FCFBF7] border border-stone-200 hover:border-[#D4A84D]/50 hover:shadow-lg transition-all duration-300 space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="px-2.5 py-0.5 rounded-md bg-[#0A1C16] text-[#D4A84D] font-mono text-[10px] font-bold uppercase tracking-wider">
                        {item.yearOrPhase}
                      </span>
                      {item.investmentScale && (
                        <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                          {item.investmentScale}
                        </span>
                      )}
                    </div>

                    <h4 className="text-base sm:text-lg font-bold font-serif text-[#0A1C16] leading-snug">
                      {item.title}
                    </h4>

                    <span className="text-[11px] font-bold text-[#8E6219] uppercase tracking-wider block">
                      Sector: {item.companyOrSector}
                    </span>

                    <p className="text-xs text-stone-600 leading-relaxed font-light">
                      {item.description}
                    </p>

                    <div className="pt-2 border-t border-stone-200/60 flex items-center justify-between text-[10px] text-stone-400">
                      <span>Source: {item.sourceNote}</span>
                      <span className="px-2 py-0.5 rounded bg-stone-100 text-stone-600 font-medium">{item.statusTag}</span>
                    </div>
                  </div>
                </div>

                {/* Empty Half Space for symmetric alignment */}
                <div className="hidden md:block w-1/2" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
