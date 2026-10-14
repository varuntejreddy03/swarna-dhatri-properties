import React from 'react';
import { NIMZ_TIMELINE } from '../data/nimz';
import { Building2, TrendingUp, ShieldCheck, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';

export const NimzTimeline: React.FC = () => {
  return (
    <div className="w-full bg-white rounded-lg border border-[#E8E4DF] shadow-sm p-6 sm:p-10 space-y-8">
      <div className="max-w-3xl mx-auto text-center space-y-2">
        <span className="text-xs font-semibold text-[#B8860B] uppercase tracking-wider block">
          Strategic Industrial Milestones
        </span>
        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#2D2D2D]">
          Zaheerabad NIMZ Development Roadmap
        </h3>
        <p className="text-xs sm:text-sm text-gray-500 font-light max-w-xl mx-auto">
          Tracking government approvals, Phase 1 execution, anchor EV & auto investments, and national transit upgrades driving land appreciation.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Central Vertical Timeline Rule */}
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -ml-px w-0.5 bg-[#E8E4DF]" />

        <div className="space-y-8 md:space-y-10">
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
                <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-white border-2 border-[#B8860B] items-center justify-center z-10 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B8860B]" />
                </div>

                {/* Content Box (Half Width) */}
                <div className="w-full md:w-1/2">
                  <div className="p-6 rounded-lg bg-[#FAFAF8] border border-[#E8E4DF] hover:border-[#B8860B]/50 hover:shadow-md transition-all space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="px-2.5 py-0.5 rounded bg-[#1A1A1A] text-[#D4A574] font-mono text-[10px] font-semibold uppercase tracking-wider">
                        {item.yearOrPhase}
                      </span>
                      {item.investmentScale && (
                        <span className="text-xs font-semibold text-[#4A7C59] bg-[#4A7C59]/10 px-2 py-0.5 rounded">
                          {item.investmentScale}
                        </span>
                      )}
                    </div>

                    <h4 className="text-base font-serif font-bold text-[#2D2D2D] leading-snug">
                      {item.title}
                    </h4>

                    <span className="text-[11px] font-semibold text-[#B8860B] uppercase tracking-wider block">
                      Sector: {item.companyOrSector}
                    </span>

                    <p className="text-xs text-gray-600 leading-relaxed font-light">
                      {item.description}
                    </p>

                    <div className="pt-2 border-t border-gray-200/60 flex items-center justify-between text-[10px] text-gray-500">
                      <span>Source: {item.sourceNote}</span>
                      <span className="px-2 py-0.5 rounded bg-gray-200 text-gray-700 font-medium">{item.statusTag}</span>
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

export default NimzTimeline;
