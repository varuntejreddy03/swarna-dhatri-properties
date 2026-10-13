import React from 'react';
import { EmiCalculator } from '../components/EmiCalculator';
import { UnitConverter } from '../components/UnitConverter';
import { VastuCompass } from '../components/VastuCompass';
import { Calculator, ArrowRightLeft, Compass, Info } from 'lucide-react';

export const ToolsPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-14">
      {/* Header */}
      <div className="max-w-3xl space-y-2">
        <span className="px-3.5 py-1 rounded-full bg-[#D4A84D]/15 text-[#8E6219] border border-[#D4A84D]/30 text-[10px] font-bold uppercase tracking-widest inline-block">
          Financial & Land Advisory Suite
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold font-serif text-[#0A1C16] leading-tight">
          Smart Investment & Land Calculation Suite
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
          Engineered specifically for plotted real estate buyers in Telangana: calculate monthly EMIs, discover optimal plot sizes based on monthly budget, and convert land units seamlessly.
        </p>
      </div>

      {/* 1. Smart EMI Calculator */}
      <section className="space-y-4">
        <EmiCalculator />
      </section>

      {/* 2. Unit Converter & Vastu Compass */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <UnitConverter />
        <VastuCompass />
      </section>
    </div>
  );
};
