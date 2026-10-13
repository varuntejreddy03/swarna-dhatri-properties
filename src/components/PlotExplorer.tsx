import React, { useState, useMemo } from 'react';
import { SAMPLE_PLOTS } from '../data/plots.sample';
import { Plot, Facing, PlotStatus } from '../types';
import { calculateEmi, formatIndianCurrency, formatLakhsCrores } from '../utils/emi';
import { getWhatsAppSharePlotUrl, getWhatsAppPlotInquiryUrl } from '../utils/whatsapp';
import { 
  Filter, 
  Compass, 
  Share2, 
  Calendar, 
  Layers, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw,
  CheckCircle2,
  XCircle,
  Clock,
  Sparkles,
  Info,
  Maximize2
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface PlotExplorerProps {
  initialPlotId?: string;
  isCompact?: boolean;
}

export const PlotExplorer: React.FC<PlotExplorerProps> = ({
  initialPlotId,
  isCompact = false
}) => {
  // Filter States
  const [facingFilter, setFacingFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [vastuOnly, setVastuOnly] = useState<boolean>(false);
  const [cornerOnly, setCornerOnly] = useState<boolean>(false);
  const [maxBudget, setMaxBudget] = useState<number>(2000000);
  const [viewMode, setViewMode] = useState<'svg' | 'table'>('svg');

  // SVG Pan/Zoom state
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [selectedPlot, setSelectedPlot] = useState<Plot | null>(() => {
    if (initialPlotId) {
      return SAMPLE_PLOTS.find(p => p.id === initialPlotId) || SAMPLE_PLOTS[0];
    }
    return SAMPLE_PLOTS[0];
  });

  // Filter Logic
  const filteredPlots = useMemo(() => {
    return SAMPLE_PLOTS.filter((plot) => {
      if (facingFilter !== 'all' && plot.facing !== facingFilter) return false;
      if (statusFilter !== 'all' && plot.status !== statusFilter) return false;
      if (vastuOnly && !plot.isVastuCompliant) return false;
      if (cornerOnly && !plot.isCorner) return false;
      const plotTotalCost = plot.areaSqYds * plot.pricePerSqYd;
      if (plotTotalCost > maxBudget) return false;
      return true;
    });
  }, [facingFilter, statusFilter, vastuOnly, cornerOnly, maxBudget]);

  const activePlotEmi = useMemo(() => {
    if (!selectedPlot) return null;
    return calculateEmi({
      areaSqYds: selectedPlot.areaSqYds,
      pricePerSqYd: selectedPlot.pricePerSqYd,
      downPaymentPercent: 30,
      tenureYears: 5
    });
  }, [selectedPlot]);

  const getStatusColor = (status: PlotStatus, isSelected: boolean) => {
    if (isSelected) return 'fill-[#D4A84D] stroke-[#4E320A] stroke-[3]';
    switch (status) {
      case 'available':
        return 'fill-[#E8F3ED] stroke-[#3A7253] hover:fill-[#D0E7DA] cursor-pointer';
      case 'booked':
        return 'fill-stone-200 stroke-stone-400 cursor-not-allowed opacity-60';
      case 'hold':
        return 'fill-amber-100 stroke-amber-400 cursor-pointer';
      default:
        return 'fill-stone-100 stroke-stone-300';
    }
  };

  return (
    <div className="w-full bg-white rounded-3xl border border-stone-200/90 shadow-[0_15px_50px_-10px_rgba(0,0,0,0.08)] overflow-hidden">
      {/* Header controls & filter banner */}
      <div className="p-5 sm:p-7 bg-[#0A1C16] text-[#F5EBD4] border-b border-[#D4A84D]/20">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-0.5 rounded-full bg-[#D4A84D]/20 text-[#EBD4A4] border border-[#D4A84D]/30 font-bold text-[10px] uppercase tracking-widest">
                Interactive Masterplan CAD
              </span>
              <span className="text-xs text-stone-300 flex items-center gap-1 font-light">
                <span>• Swarna Bindu Avenue-2 (50 Acres)</span>
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-white mt-1.5">
              Surveyed Plot Navigator & Inventory Explorer
            </h3>
            <p className="text-xs text-stone-300 mt-1 max-w-2xl font-light">
              Inspect surveyed demarcations, cardinal Vastu facings, boulevard road widths, and transparent EMI calculations.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-center">
            <button
              onClick={() => setViewMode(viewMode === 'svg' ? 'table' : 'svg')}
              className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold backdrop-blur-sm border border-white/10 transition-all flex items-center gap-2"
            >
              <Layers className="w-4 h-4 text-[#D4A84D]" />
              <span>{viewMode === 'svg' ? 'Switch to Inventory List' : 'Switch to Masterplan CAD'}</span>
            </button>
          </div>
        </div>

        {/* Filter Controls Row */}
        <div className="mt-6 pt-5 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          {/* Facing Filter */}
          <div>
            <label className="block text-stone-300 font-medium mb-1.5 uppercase tracking-wider text-[10px]">
              Facing Orientation:
            </label>
            <select
              value={facingFilter}
              onChange={(e) => setFacingFilter(e.target.value)}
              className="w-full bg-[#0E2820] border border-white/15 rounded-xl px-3 py-2 text-white font-medium focus:outline-none focus:border-[#D4A84D]"
            >
              <option value="all">All Facings (East, West, North, South)</option>
              <option value="East">East Facing (Highly Auspicious)</option>
              <option value="West">West Facing (Prime Commercial Axis)</option>
              <option value="North">North Facing (Kubera Wealth Direction)</option>
              <option value="North-East">North-East (Ishanya Cardinal)</option>
            </select>
          </div>

          {/* Status Filter */}
          <div>
            <label className="block text-stone-300 font-medium mb-1.5 uppercase tracking-wider text-[10px]">
              Inventory Status:
            </label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full bg-[#0E2820] border border-white/15 rounded-xl px-3 py-2 text-white font-medium focus:outline-none focus:border-[#D4A84D]"
            >
              <option value="all">All Inventory ({SAMPLE_PLOTS.length} Plots)</option>
              <option value="available">Available for Spot Booking</option>
              <option value="hold">Reserved on Token Advance</option>
              <option value="booked">Booked & Registered</option>
            </select>
          </div>

          {/* Budget Filter */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-stone-300 font-medium uppercase tracking-wider text-[10px]">
                Budget Ceiling:
              </label>
              <span className="text-[#D4A84D] font-bold">
                {formatLakhsCrores(maxBudget)}
              </span>
            </div>
            <input
              type="range"
              min={400000}
              max={2000000}
              step={50000}
              value={maxBudget}
              onChange={(e) => setMaxBudget(Number(e.target.value))}
              className="w-full accent-[#D4A84D] cursor-pointer"
            />
          </div>

          {/* Checkbox Toggles */}
          <div className="flex flex-col justify-end gap-2">
            <label className="inline-flex items-center gap-2 cursor-pointer text-stone-200">
              <input
                type="checkbox"
                checked={vastuOnly}
                onChange={(e) => setVastuOnly(e.target.checked)}
                className="rounded accent-[#D4A84D] w-4 h-4 cursor-pointer"
              />
              <span className="text-xs">Vastu Compliant Plots Only</span>
            </label>
            <label className="inline-flex items-center gap-2 cursor-pointer text-stone-200">
              <input
                type="checkbox"
                checked={cornerOnly}
                onChange={(e) => setCornerOnly(e.target.checked)}
                className="rounded accent-[#D4A84D] w-4 h-4 cursor-pointer"
              />
              <span className="text-xs">Corner & Dual Road Plots Only</span>
            </label>
          </div>
        </div>

        {/* Status Legend */}
        <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-stone-400 font-medium text-[11px] uppercase tracking-wider">Legend:</span>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-[#E8F3ED] border border-[#3A7253]" />
              <span className="text-stone-300">Available</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-amber-100 border border-amber-400" />
              <span className="text-stone-300">Reserved (Hold)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-stone-300 border border-stone-400" />
              <span className="text-stone-400">Booked / Registered</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-[#D4A84D] border border-[#4E320A]" />
              <span className="text-amber-200 font-bold">Selected Plot</span>
            </div>
          </div>

          <div className="text-[11px] text-stone-400">
            Showing <span className="text-[#D4A84D] font-bold">{filteredPlots.length}</span> of {SAMPLE_PLOTS.length} surveyed plots
          </div>
        </div>
      </div>

      {/* Main Interactive Explorer Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Left: Masterplan Map / CAD Area (8 Cols) */}
        <div className="lg:col-span-8 bg-[#06130E] p-4 sm:p-6 flex flex-col justify-between relative overflow-hidden border-b lg:border-b-0 lg:border-r border-stone-200">
          {/* Subtle Blueprint grid background */}
          <div className="absolute inset-0 bg-blueprint-grid opacity-30 pointer-events-none" />

          {/* Interactive Zoom Controls Overlay */}
          {viewMode === 'svg' && (
            <div className="absolute top-6 right-6 z-10 flex items-center gap-1.5 bg-[#0A1C16]/90 border border-white/15 backdrop-blur-md rounded-xl p-1 shadow-lg text-white">
              <button
                onClick={() => setZoomLevel((prev) => Math.min(prev + 0.25, 2.0))}
                className="p-2 hover:bg-white/15 rounded-lg transition-colors"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4 text-[#D4A84D]" />
              </button>
              <button
                onClick={() => setZoomLevel((prev) => Math.max(prev - 0.25, 0.75))}
                className="p-2 hover:bg-white/15 rounded-lg transition-colors"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4 text-[#D4A84D]" />
              </button>
              <button
                onClick={() => setZoomLevel(1)}
                className="p-2 hover:bg-white/15 rounded-lg transition-colors text-xs font-semibold px-2"
                title="Reset Zoom"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <span className="text-[10px] text-stone-400 px-1 font-mono">
                {Math.round(zoomLevel * 100)}%
              </span>
            </div>
          )}

          {/* Orientation Compass Overlay */}
          <div className="absolute top-6 left-6 z-10 bg-[#0A1C16]/80 border border-white/10 backdrop-blur-sm rounded-xl px-2.5 py-1.5 flex items-center gap-2 text-[11px] text-[#F5EBD4]">
            <Compass className="w-4 h-4 text-[#D4A84D] animate-spin" style={{ animationDuration: '30s' }} />
            <span className="font-semibold font-mono tracking-wider">NORTH ↑ (Vastu Aligned)</span>
          </div>

          {/* View Mode 1: Interactive SVG Layout CAD */}
          {viewMode === 'svg' ? (
            <div className="w-full overflow-auto py-8 flex items-center justify-center min-h-[460px]">
              <div
                style={{
                  transform: `scale(${zoomLevel})`,
                  transformOrigin: 'center center',
                  transition: 'transform 0.2s ease-out'
                }}
                className="w-full max-w-[700px]"
              >
                <svg
                  viewBox="0 0 680 440"
                  className="w-full h-auto drop-shadow-2xl select-none"
                >
                  {/* Master layout perimeter boundary */}
                  <rect
                    x="20"
                    y="20"
                    width="640"
                    height="400"
                    rx="16"
                    fill="#081611"
                    stroke="#D4A84D"
                    strokeWidth="2"
                    strokeDasharray="6 4"
                  />

                  {/* Red Sandalwood plantation buffer zone around perimeter */}
                  <rect
                    x="26"
                    y="26"
                    width="628"
                    height="388"
                    rx="12"
                    fill="none"
                    stroke="#2C573F"
                    strokeWidth="1.5"
                  />
                  <text x="340" y="38" textAnchor="middle" fill="#94C2A7" fontSize="9" fontWeight="bold" letterSpacing="1.5">
                    ★ PERIMETER RED SANDALWOOD TIMBER GREEN BELT & SECURED FENCING ★
                  </text>

                  {/* Main Entrance & Security Gate Arch */}
                  <g>
                    <rect x="290" y="396" width="100" height="24" rx="4" fill="#C89732" stroke="#FAF6EE" strokeWidth="1" />
                    <text x="340" y="412" textAnchor="middle" fill="#0A1C16" fontSize="10" fontWeight="bold">
                      GRAND ENTRANCE ARCH (33 FT ROAD)
                    </text>
                  </g>

                  {/* Main Boulevard 33 Ft Road */}
                  <rect x="320" y="55" width="40" height="345" fill="#141E28" stroke="#D4A84D" strokeWidth="1" strokeDasharray="4 4" />
                  <text
                    x="340"
                    y="220"
                    textAnchor="middle"
                    fill="#EBD4A4"
                    fontSize="9"
                    fontWeight="bold"
                    transform="rotate(-90 340 220)"
                    letterSpacing="2"
                  >
                    33 FT MAIN BOULEVARD ROAD
                  </text>

                  {/* Cross 30 Ft Internal Roads */}
                  <rect x="40" y="160" width="600" height="30" fill="#141E28" stroke="#D4A84D" strokeWidth="0.8" strokeDasharray="4 4" />
                  <text x="180" y="179" textAnchor="middle" fill="#DFBC72" fontSize="9" fontWeight="bold" letterSpacing="1">
                    30 FT INTERNAL CROSS ROAD
                  </text>
                  <text x="500" y="179" textAnchor="middle" fill="#DFBC72" fontSize="9" fontWeight="bold" letterSpacing="1">
                    30 FT INTERNAL CROSS ROAD
                  </text>

                  <rect x="40" y="290" width="600" height="30" fill="#141E28" stroke="#D4A84D" strokeWidth="0.8" strokeDasharray="4 4" />
                  <text x="180" y="309" textAnchor="middle" fill="#DFBC72" fontSize="9" fontWeight="bold" letterSpacing="1">
                    30 FT INTERNAL CROSS ROAD
                  </text>
                  <text x="500" y="309" textAnchor="middle" fill="#DFBC72" fontSize="9" fontWeight="bold" letterSpacing="1">
                    30 FT INTERNAL CROSS ROAD
                  </text>

                  {/* Surveyed Individual Plots */}
                  {SAMPLE_PLOTS.map((plot) => {
                    const isSelected = selectedPlot?.id === plot.id;
                    const isFiltered = filteredPlots.some(p => p.id === plot.id);
                    const colorClass = getStatusColor(plot.status, isSelected);

                    return (
                      <g
                        key={plot.id}
                        onClick={() => setSelectedPlot(plot)}
                        className={`transition-all duration-200 ${
                          isFiltered ? 'opacity-100' : 'opacity-25'
                        }`}
                      >
                        <rect
                          x={plot.coordinates.x}
                          y={plot.coordinates.y}
                          width={plot.coordinates.width}
                          height={plot.coordinates.height}
                          rx="4"
                          className={`${colorClass} transition-colors`}
                        />

                        {/* Plot Number */}
                        <text
                          x={plot.coordinates.x + plot.coordinates.width / 2}
                          y={plot.coordinates.y + plot.coordinates.height / 2 - 3}
                          textAnchor="middle"
                          fill={isSelected ? '#0A1C16' : '#0A1C16'}
                          fontSize={plot.isCorner ? "10" : "11"}
                          fontWeight="bold"
                          pointerEvents="none"
                        >
                          #{plot.number}
                        </text>

                        {/* Plot Size (Gajam) */}
                        <text
                          x={plot.coordinates.x + plot.coordinates.width / 2}
                          y={plot.coordinates.y + plot.coordinates.height / 2 + 10}
                          textAnchor="middle"
                          fill={isSelected ? '#0A1C16' : '#2C573F'}
                          fontSize="9"
                          fontWeight={isSelected ? "bold" : "normal"}
                          pointerEvents="none"
                        >
                          {plot.areaSqYds} yd
                        </text>

                        {/* Corner indicator badge */}
                        {plot.isCorner && (
                          <circle
                            cx={plot.coordinates.x + plot.coordinates.width - 6}
                            cy={plot.coordinates.y + 6}
                            r="3.5"
                            fill="#D4A84D"
                            stroke="#0A1C16"
                            strokeWidth="1"
                          />
                        )}
                      </g>
                    );
                  })}
                </svg>
              </div>
            </div>
          ) : (
            /* View Mode 2: Interactive Table View */
            <div className="w-full overflow-x-auto min-h-[460px] max-h-[500px]">
              <table className="w-full text-left text-xs text-stone-200">
                <thead className="bg-[#0A1C16] text-[#D4A84D] uppercase font-mono tracking-wider sticky top-0">
                  <tr>
                    <th className="p-3">Plot #</th>
                    <th className="p-3">Area (Sq.Yds)</th>
                    <th className="p-3">Facing</th>
                    <th className="p-3">Road Width</th>
                    <th className="p-3">Total Value</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 font-medium">
                  {filteredPlots.map((plot) => {
                    const isSelected = selectedPlot?.id === plot.id;
                    const price = plot.areaSqYds * plot.pricePerSqYd;
                    return (
                      <tr
                        key={plot.id}
                        onClick={() => setSelectedPlot(plot)}
                        className={`hover:bg-white/5 cursor-pointer transition-colors ${
                          isSelected ? 'bg-[#D4A84D]/20 text-white font-bold' : ''
                        }`}
                      >
                        <td className="p-3">#{plot.number} {plot.isCorner && <span className="text-[#D4A84D]">(Corner)</span>}</td>
                        <td className="p-3">{plot.areaSqYds} Gajam</td>
                        <td className="p-3">{plot.facing}</td>
                        <td className="p-3">{plot.roadWidthFt} Ft</td>
                        <td className="p-3 font-mono text-[#D4A84D]">₹{price.toLocaleString('en-IN')}</td>
                        <td className="p-3">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold ${
                              plot.status === 'available'
                                ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/30'
                                : plot.status === 'hold'
                                ? 'bg-amber-950 text-amber-300 border border-amber-500/30'
                                : 'bg-stone-800 text-stone-400'
                            }`}
                          >
                            {plot.status}
                          </span>
                        </td>
                        <td className="p-3">
                          <button
                            onClick={() => setSelectedPlot(plot)}
                            className="px-2.5 py-1 rounded bg-[#D4A84D] text-[#0A1C16] font-bold text-[10px]"
                          >
                            Inspect
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}

          {/* Bottom layout note */}
          <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between text-[11px] text-stone-400">
            <span>* Survey coordinates mapped directly from certified layout plan.</span>
            <span className="text-[#D4A84D]">All plots 100% Nala Converted with LRS borne by developer.</span>
          </div>
        </div>

        {/* Right: Selected Plot Specification & Financial Summary (4 Cols) */}
        <div className="lg:col-span-4 p-6 sm:p-7 bg-[#FCFBF7] flex flex-col justify-between space-y-6">
          {selectedPlot ? (
            <div className="space-y-6">
              {/* Plot Header & Badges */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full bg-[#0A1C16] text-[#D4A84D] font-bold text-xs uppercase tracking-wider font-mono">
                    Plot #{selectedPlot.number}
                  </span>

                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                      selectedPlot.status === 'available'
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                        : selectedPlot.status === 'hold'
                        ? 'bg-amber-100 text-amber-800 border border-amber-300'
                        : 'bg-stone-200 text-stone-700'
                    }`}
                  >
                    {selectedPlot.status === 'available' ? 'Available to Book' : selectedPlot.status}
                  </span>
                </div>

                <h4 className="text-2xl font-bold font-serif text-[#0A1C16]">
                  {selectedPlot.areaSqYds} Gajam (Sq. Yards)
                </h4>
                <p className="text-xs text-stone-500 mt-0.5">
                  Equivalent to {(selectedPlot.areaSqYds * 9).toLocaleString('en-IN')} Square Feet
                </p>
              </div>

              {/* Technical Specifications Matrix */}
              <div className="p-4 rounded-2xl bg-white border border-stone-200 space-y-2.5 text-xs shadow-sm">
                <div className="flex justify-between items-center py-1 border-b border-stone-100">
                  <span className="text-stone-500">Cardinal Facing:</span>
                  <span className="font-bold text-[#0A1C16] flex items-center gap-1">
                    <Compass className="w-3.5 h-3.5 text-[#C89732]" />
                    <span>{selectedPlot.facing} Facing</span>
                  </span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-stone-100">
                  <span className="text-stone-500">Access Boulevard:</span>
                  <span className="font-semibold text-stone-800">{selectedPlot.roadWidthFt} Feet Wide</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-stone-100">
                  <span className="text-stone-500">Vastu Compliance:</span>
                  <span className="font-bold text-emerald-700 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>100% Vastu Aligned</span>
                  </span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-stone-500">Corner Placement:</span>
                  <span className="font-semibold text-stone-800">
                    {selectedPlot.isCorner ? 'Yes (Dual Road Junction)' : 'Standard Mid-Avenue'}
                  </span>
                </div>
              </div>

              {/* Transparent Financial Structure */}
              <div className="p-5 rounded-2xl bg-[#0A1C16] text-[#F5EBD4] space-y-3.5 shadow-md border border-[#D4A84D]/30">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs text-stone-400 uppercase tracking-wider font-semibold">
                    Total Consideration:
                  </span>
                  <span className="text-2xl font-bold font-serif text-[#D4A84D]">
                    ₹{(selectedPlot.areaSqYds * selectedPlot.pricePerSqYd).toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="text-[11px] text-stone-300 space-y-2 pt-2 border-t border-white/10">
                  <div className="flex justify-between">
                    <span className="text-stone-400">Launch Rate:</span>
                    <span className="font-mono">₹{selectedPlot.pricePerSqYd.toLocaleString('en-IN')} / sq.yd</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-400">Reservation Token:</span>
                    <span className="font-mono text-amber-300 font-bold">₹20,000 only</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-400">50% Spot Registration:</span>
                    <span className="font-mono text-emerald-300 font-bold">
                      ₹{((selectedPlot.areaSqYds * selectedPlot.pricePerSqYd) * 0.5).toLocaleString('en-IN')}
                    </span>
                  </div>
                  {activePlotEmi && (
                    <div className="flex justify-between pt-1 border-t border-white/10">
                      <span className="text-stone-400">Estimated Monthly EMI (5 Yrs):</span>
                      <span className="font-mono text-white font-bold">
                        ₹{activePlotEmi.monthlyEmi.toLocaleString('en-IN')} / mo
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between pt-1 border-t border-white/10">
                    <span className="text-stone-400">LRS Charges:</span>
                    <span className="text-emerald-400 font-bold">100% Paid by Company</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5">
                <Link
                  to={`/book-visit?plot=${selectedPlot.number}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#C89732] via-[#D4A84D] to-[#B07E23] text-[#0A1C16] font-bold text-xs uppercase tracking-wider shadow-gold hover:brightness-105 transition-all text-center"
                >
                  <Calendar className="w-4 h-4 text-[#0A1C16]" />
                  <span>Reserve Visit for Plot #{selectedPlot.number}</span>
                </Link>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={getWhatsAppPlotInquiryUrl(selectedPlot)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs transition-colors text-center"
                  >
                    <span>WhatsApp Inquiry</span>
                  </a>

                  <a
                    href={getWhatsAppSharePlotUrl(selectedPlot)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-stone-300 hover:bg-stone-100 text-stone-700 font-bold text-xs transition-colors text-center"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Share Details</span>
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-8 text-center text-stone-500 space-y-2">
              <Info className="w-8 h-8 mx-auto text-stone-400" />
              <p className="text-xs">Select any plot on the masterplan map to inspect technical specifications and financing options.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
