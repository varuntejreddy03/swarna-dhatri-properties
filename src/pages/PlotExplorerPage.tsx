import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { PlotExplorer } from '../components/PlotExplorer';
import { VastuCompass } from '../components/VastuCompass';
import { UnitConverter } from '../components/UnitConverter';
import { ShieldCheck, Info } from 'lucide-react';

export const PlotExplorerPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialPlot = searchParams.get('plot');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="max-w-3xl space-y-2">
        <span className="px-3.5 py-1 rounded-full bg-[#D4A84D]/15 text-[#8E6219] border border-[#D4A84D]/30 text-[10px] font-bold uppercase tracking-widest inline-block">
          CAD Masterplan Inventory
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold font-serif text-[#0A1C16] leading-tight">
          Swarna Bindu Avenue-2 Masterplan Explorer
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
          Explore every demarcated plot across the 50-acre layout. Filter by Vastu cardinal facing, corner position, and budget ceiling. Select any plot to inspect exact dimensions, road widths, and financial schedules.
        </p>
      </div>

      {/* Main Interactive Map & Details */}
      <PlotExplorer initialPlotId={initialPlot ? `plot-${initialPlot}` : undefined} />

      {/* Supplementary Tools */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
        <VastuCompass />
        <UnitConverter />
      </div>
    </div>
  );
};
