import React, { useState } from 'react';
import { UNITS, convertUnits, UnitType } from '../utils/units';
import { ArrowRightLeft, Sparkles, Compass } from 'lucide-react';

export const UnitConverter: React.FC = () => {
  const [value, setValue] = useState<number>(200);
  const [fromUnit, setFromUnit] = useState<UnitType>('gajam');
  const [toUnit, setToUnit] = useState<UnitType>('sqft');

  const convertedValue = convertUnits(value, fromUnit, toUnit);

  const swapUnits = () => {
    const temp = fromUnit;
    setFromUnit(toUnit);
    setToUnit(temp);
  };

  return (
    <div className="w-full bg-white rounded-3xl border border-stone-200/90 shadow-[0_15px_50px_-10px_rgba(0,0,0,0.08)] p-6 sm:p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-[10px] font-bold text-[#8E6219] uppercase tracking-widest block">
            Telangana Real Estate Standards
          </span>
          <h4 className="text-xl font-bold font-serif text-[#0A1C16] mt-0.5">
            Land Unit Measurement Converter
          </h4>
        </div>
        <div className="p-2.5 rounded-2xl bg-[#D4A84D]/15 text-[#C89732]">
          <ArrowRightLeft className="w-5 h-5" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
        {/* Input Value */}
        <div className="sm:col-span-4">
          <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-500 mb-1">
            Area Value:
          </label>
          <input
            type="number"
            min={1}
            value={value}
            onChange={(e) => setValue(Math.max(1, Number(e.target.value)))}
            className="w-full p-3 rounded-xl bg-[#FCFBF7] border border-stone-200 text-stone-900 font-bold text-sm focus:outline-none focus:border-[#C89732]"
          />
        </div>

        {/* From Unit */}
        <div className="sm:col-span-3">
          <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-500 mb-1">
            From Unit:
          </label>
          <select
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value as UnitType)}
            className="w-full p-3 rounded-xl bg-[#FCFBF7] border border-stone-200 text-stone-900 text-xs font-semibold focus:outline-none focus:border-[#C89732]"
          >
            {Object.values(UNITS).map((u) => (
              <option key={u.id} value={u.id}>
                {u.label}
              </option>
            ))}
          </select>
        </div>

        {/* Swap Button */}
        <div className="sm:col-span-2 flex justify-center pt-4">
          <button
            type="button"
            onClick={swapUnits}
            className="p-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-[#0A1C16] transition-colors"
            title="Swap Units"
          >
            <ArrowRightLeft className="w-4 h-4 text-[#C89732]" />
          </button>
        </div>

        {/* To Unit */}
        <div className="sm:col-span-3">
          <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-500 mb-1">
            To Unit:
          </label>
          <select
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value as UnitType)}
            className="w-full p-3 rounded-xl bg-[#FCFBF7] border border-stone-200 text-stone-900 text-xs font-semibold focus:outline-none focus:border-[#C89732]"
          >
            {Object.values(UNITS).map((u) => (
              <option key={u.id} value={u.id}>
                {u.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Result Card */}
      <div className="p-5 rounded-2xl bg-[#0A1C16] text-[#F5EBD4] flex items-center justify-between border border-[#D4A84D]/30 shadow-md">
        <div>
          <span className="text-[10px] text-stone-400 uppercase tracking-widest font-semibold block">
            Converted Result:
          </span>
          <div className="text-2xl sm:text-3xl font-bold font-serif text-[#D4A84D] mt-0.5">
            {convertedValue.toLocaleString('en-IN')}{' '}
            <span className="text-sm font-sans font-normal text-stone-300">
              {UNITS[toUnit].symbol}
            </span>
          </div>
        </div>
        <div className="text-right text-[11px] text-stone-300 font-light hidden sm:block">
          <span>Standard: 1 Gajam = 1 Sq. Yard = 9 Sq. Ft</span>
        </div>
      </div>
    </div>
  );
};
