import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { PlotExplorer } from '../components/PlotExplorer';
import { VastuCompass } from '../components/VastuCompass';
import { UnitConverter } from '../components/UnitConverter';
import { PhaseId } from '../types';

export const PlotExplorerPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialPlot = searchParams.get('plot');
  const phaseParam = searchParams.get('phase');
  const initialPhase: PhaseId = phaseParam === 'avenue-1' ? 'avenue-1' : 'avenue-2';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="max-w-3xl space-y-2">
        <span className="px-3.5 py-1 rounded-full bg-[#D4A84D]/15 text-[#8E6219] border border-[#D4A84D]/30 text-[10px] font-bold uppercase tracking-widest inline-block">
          Approved Layout Plans
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold font-serif text-[#0A1C16] leading-tight">
          Swarna Bindu Avenue Layout Explorer
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
          The approved layout plans of Phase 1 and Phase 2, exactly as drawn. Filter by facing, corner position and budget, then select any plot to see its size, 30-ft road access and payment schedule.
        </p>
      </div>

      {/* Main Interactive Map & Details */}
      <PlotExplorer key={`${initialPhase}-${initialPlot ?? ''}`} initialPhase={initialPhase} initialPlotNumber={initialPlot ?? undefined} />

      {/* Supplementary Tools */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
        <VastuCompass />
        <UnitConverter />
      </div>
    </div>
  );
};
