import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { LAYOUTS, LAYOUT_PLOTS, PHASE_ORDER } from '../data/layouts';
import { PAYMENT_PLAN } from '../data/paymentPlan';
import { PhaseId, Plot, PlotStatus } from '../types';
import { calculateEmi, formatIndianCurrency, formatLakhsCrores } from '../utils/emi';
import { getWhatsAppSharePlotUrl, getWhatsAppPlotInquiryUrl } from '../utils/whatsapp';
import {
  Compass,
  Share2,
  Calendar,
  Layers,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  CheckCircle2,
  Info,
  LocateFixed,
  Move
} from 'lucide-react';

interface PlotExplorerProps {
  initialPhase?: PhaseId;
  /** Plot number as printed on the sheet, e.g. "12" */
  initialPlotNumber?: string;
}

const MIN_ZOOM = 1;
const MAX_ZOOM = 8;
const BUDGET_MAX = 1000000;
const BUDGET_MIN = 300000;

const statusLabel: Record<PlotStatus, string> = {
  available: 'Available to Book',
  hold: 'Reserved (Hold)',
  booked: 'Booked / Registered'
};

const plotClassName = (plot: Plot, isSelected: boolean, isMatch: boolean, filtersActive: boolean): string => {
  if (!isMatch) return 'fill-white/80 pointer-events-none';
  if (isSelected) return 'fill-[#D4A84D]/70 stroke-[#4E320A] stroke-[1.6] cursor-pointer';
  switch (plot.status) {
    case 'booked':
      return 'fill-stone-500/45 stroke-stone-600 stroke-[0.4] cursor-pointer';
    case 'hold':
      return 'fill-amber-400/45 stroke-amber-600 stroke-[0.4] cursor-pointer';
    default:
      return filtersActive
        ? 'fill-emerald-600/25 hover:fill-[#D4A84D]/50 cursor-pointer'
        : 'fill-transparent hover:fill-[#D4A84D]/40 cursor-pointer';
  }
};

const compareNumbers = (a: Plot, b: Plot) => {
  const na = parseInt(a.number, 10);
  const nb = parseInt(b.number, 10);
  if (na !== nb) return na - nb;
  return a.number.localeCompare(b.number);
};

export const PlotExplorer: React.FC<PlotExplorerProps> = ({
  initialPhase = 'avenue-2',
  initialPlotNumber
}) => {
  const [phaseId, setPhaseId] = useState<PhaseId>(initialPhase);
  const layout = LAYOUTS[phaseId];
  const plots = LAYOUT_PLOTS[phaseId];

  // Filter states
  const [facingFilter, setFacingFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [vastuOnly, setVastuOnly] = useState<boolean>(false);
  const [cornerOnly, setCornerOnly] = useState<boolean>(false);
  const [maxBudget, setMaxBudget] = useState<number>(BUDGET_MAX);
  const [viewMode, setViewMode] = useState<'plan' | 'list'>('plan');

  const [selectedId, setSelectedId] = useState<string | null>(() => {
    if (initialPlotNumber) {
      const found = LAYOUT_PLOTS[initialPhase].find((p) => p.number === initialPlotNumber);
      if (found) return found.id;
    }
    return null;
  });
  const selectedPlot = useMemo(() => plots.find((p) => p.id === selectedId) ?? null, [plots, selectedId]);

  // ---- Pan / zoom on the sheet ----
  const scrollRef = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState<number>(1);
  const [box, setBox] = useState<{ w: number; h: number }>({ w: 800, h: 640 });
  /** Sheet fraction (fx, fy) to keep under viewport offset (ox, oy) once the new zoom is laid out */
  const pendingCenter = useRef<{ fx: number; fy: number; ox?: number; oy?: number } | null>(null);
  const measured = useRef<boolean>(false);
  const [tick, setTick] = useState<number>(0);
  const dragRef = useRef<{ x: number; y: number; left: number; top: number; moved: boolean } | null>(null);

  const [vbX, vbY, vbW, vbH] = layout.viewBox;
  const aspect = vbW / vbH;
  // "Contain" fit at zoom 1: the whole sheet is visible without scrolling
  const baseWidth = Math.max(280, Math.min(box.w, box.h * aspect));
  const mapWidth = baseWidth * zoom;
  const mapHeight = mapWidth / aspect;

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || typeof ResizeObserver === 'undefined') return;
    measured.current = false;
    const measure = () => {
      setBox({ w: el.clientWidth, h: el.clientHeight });
      measured.current = true;
      setTick((t) => t + 1);
    };
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    measure();
    return () => ro.disconnect();
  }, [viewMode]);

  useLayoutEffect(() => {
    const el = scrollRef.current;
    const c = pendingCenter.current;
    if (!el || !c || !measured.current) return;
    const mapLeft = Math.max(0, (el.clientWidth - mapWidth) / 2);
    el.scrollLeft = c.fx * mapWidth + mapLeft - (c.ox ?? el.clientWidth / 2);
    el.scrollTop = c.fy * mapHeight - (c.oy ?? el.clientHeight / 2);
    pendingCenter.current = null;
  }, [zoom, mapWidth, mapHeight, tick]);

  const zoomRef = useRef<number>(zoom);
  zoomRef.current = zoom;
  const dimsRef = useRef({ mapWidth, mapHeight });
  dimsRef.current = { mapWidth, mapHeight };

  /** Zoom by `factor`, keeping the sheet point under (clientX, clientY) fixed (viewport centre if omitted). */
  const zoomBy = useCallback((factor: number, clientX?: number, clientY?: number) => {
    const el = scrollRef.current;
    const next = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, zoomRef.current * factor));
    if (!el || next === zoomRef.current) return;
    const r = el.getBoundingClientRect();
    const ox = clientX !== undefined ? clientX - r.left : el.clientWidth / 2;
    const oy = clientY !== undefined ? clientY - r.top : el.clientHeight / 2;
    const { mapWidth: mw, mapHeight: mh } = dimsRef.current;
    const mapLeft = Math.max(0, (el.clientWidth - mw) / 2);
    pendingCenter.current = {
      fx: (el.scrollLeft + ox - mapLeft) / mw,
      fy: (el.scrollTop + oy) / mh,
      ox,
      oy
    };
    setZoom(next);
    setTick((t) => t + 1);
  }, []);

  const resetZoom = useCallback(() => {
    pendingCenter.current = null;
    setZoom(1);
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0;
      scrollRef.current.scrollTop = 0;
    }
  }, []);

  // Ctrl + wheel (also trackpad pinch) zooms towards the cursor; plain wheel keeps scrolling the page / sheet
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (!e.ctrlKey) return;
      e.preventDefault();
      zoomBy(e.deltaY < 0 ? 1.25 : 1 / 1.25, e.clientX, e.clientY);
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [viewMode, zoomBy]);

  const locatePlot = useCallback(
    (plot: Plot) => {
      setViewMode('plan');
      const target = Math.max(zoom, 4);
      pendingCenter.current = { fx: (plot.cx - vbX) / vbW, fy: (plot.cy - vbY) / vbH };
      setZoom(target);
      setTick((t) => t + 1);
    },
    [zoom, vbX, vbY, vbW, vbH]
  );

  // Switching phase: reset the view and selection
  const switchPhase = (next: PhaseId) => {
    if (next === phaseId) return;
    setPhaseId(next);
    setSelectedId(null);
    setFacingFilter('all');
    setStatusFilter('all');
    setZoom(1);
    pendingCenter.current = null;
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0;
      scrollRef.current.scrollTop = 0;
    }
  };

  // Deep link (?plot=12): zoom to the plot once on mount
  useEffect(() => {
    if (initialPlotNumber && selectedPlot) locatePlot(selectedPlot);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el || e.pointerType === 'touch') return; // touch uses native scrolling
    dragRef.current = { x: e.clientX, y: e.clientY, left: el.scrollLeft, top: el.scrollTop, moved: false };
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    const d = dragRef.current;
    if (!el || !d) return;
    const dx = e.clientX - d.x;
    const dy = e.clientY - d.y;
    if (!d.moved && Math.hypot(dx, dy) > 5) d.moved = true;
    if (d.moved) {
      el.scrollLeft = d.left - dx;
      el.scrollTop = d.top - dy;
    }
  };
  const endDrag = () => {
    // keep `moved` readable for the click that follows pointerup
    window.setTimeout(() => {
      dragRef.current = null;
    }, 0);
  };
  const handlePlotClick = (plot: Plot) => {
    if (dragRef.current?.moved) return;
    setSelectedId(plot.id);
  };

  // ---- Filtering ----
  const facingOptions = useMemo(() => {
    const counts = new Map<string, number>();
    plots.forEach((p) => counts.set(p.facing, (counts.get(p.facing) ?? 0) + 1));
    return ['East', 'West', 'North', 'South']
      .filter((f) => counts.has(f))
      .map((f) => ({ value: f, count: counts.get(f) as number }));
  }, [plots]);

  const matchIds = useMemo(() => {
    const ids = new Set<string>();
    plots.forEach((plot) => {
      if (facingFilter !== 'all' && plot.facing !== facingFilter) return;
      if (statusFilter !== 'all' && plot.status !== statusFilter) return;
      if (vastuOnly && !plot.isVastuCompliant) return;
      if (cornerOnly && !plot.isCorner) return;
      if (plot.areaSqYds * plot.pricePerSqYd > maxBudget) return;
      ids.add(plot.id);
    });
    return ids;
  }, [plots, facingFilter, statusFilter, vastuOnly, cornerOnly, maxBudget]);

  const filtersActive =
    facingFilter !== 'all' || statusFilter !== 'all' || vastuOnly || cornerOnly || maxBudget < BUDGET_MAX;
  const listPlots = useMemo(() => plots.filter((p) => matchIds.has(p.id)).sort(compareNumbers), [plots, matchIds]);

  const activePlotEmi = useMemo(() => {
    if (!selectedPlot) return null;
    return calculateEmi({
      areaSqYds: selectedPlot.areaSqYds,
      pricePerSqYd: selectedPlot.pricePerSqYd
    });
  }, [selectedPlot]);

  const totalAvailable = plots.filter((p) => p.status === 'available').length;

  return (
    <div className="w-full bg-white rounded-3xl border border-stone-200/90 shadow-[0_15px_50px_-10px_rgba(0,0,0,0.08)] overflow-hidden">
      {/* Header controls & filter banner */}
      <div className="p-5 sm:p-7 bg-[#0A1C16] text-[#F5EBD4] border-b border-[#D4A84D]/20">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-0.5 rounded-full bg-[#D4A84D]/20 text-[#EBD4A4] border border-[#D4A84D]/30 font-bold text-[10px] uppercase tracking-widest">
                Approved Layout Plan
              </span>
              <span className="text-xs text-stone-300 font-light">
                • {layout.name} · {layout.acresLabel} · {layout.totalSqYds.toLocaleString('en-IN')} sq.yd
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-white mt-1.5">
              Surveyed Plot Navigator & Inventory Explorer
            </h3>
            <p className="text-xs text-stone-300 mt-1 max-w-2xl font-light">
              The official layout sheets, drawn exactly as approved. Tap any plot to see its size, facing, price and payment schedule. {layout.rateNote}.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-center">
            <button
              onClick={() => setViewMode(viewMode === 'plan' ? 'list' : 'plan')}
              className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold backdrop-blur-sm border border-white/10 transition-all flex items-center gap-2"
            >
              <Layers className="w-4 h-4 text-[#D4A84D]" />
              <span>{viewMode === 'plan' ? 'Switch to Inventory List' : 'Switch to Layout Plan'}</span>
            </button>
          </div>
        </div>

        {/* Phase switcher */}
        <div className="mt-5 inline-flex p-1 rounded-2xl bg-[#0E2820] border border-white/10" role="tablist" aria-label="Choose layout phase">
          {PHASE_ORDER.map((id) => (
            <button
              key={id}
              role="tab"
              aria-selected={phaseId === id}
              onClick={() => switchPhase(id)}
              className={`px-4 sm:px-6 py-2 rounded-xl text-xs font-bold transition-all ${
                phaseId === id ? 'bg-[#C89732] text-[#0A1C16] shadow-sm' : 'text-stone-300 hover:text-white'
              }`}
            >
              {LAYOUTS[id].label}
              <span className="hidden sm:inline font-normal opacity-80"> · {LAYOUTS[id].name.replace('Swarna Bindu ', '')}</span>
            </button>
          ))}
        </div>

        {/* Filter Controls Row */}
        <div className="mt-5 pt-5 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div>
            <label className="block text-stone-300 font-medium mb-1.5 uppercase tracking-wider text-[10px]">
              Facing Orientation:
            </label>
            <select
              value={facingFilter}
              onChange={(e) => setFacingFilter(e.target.value)}
              className="w-full bg-[#0E2820] border border-white/15 rounded-xl px-3 py-2 text-white font-medium focus:outline-none focus:border-[#D4A84D]"
            >
              <option value="all">All Facings</option>
              {facingOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.value} Facing ({o.count})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-stone-300 font-medium mb-1.5 uppercase tracking-wider text-[10px]">
              Inventory Status:
            </label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full bg-[#0E2820] border border-white/15 rounded-xl px-3 py-2 text-white font-medium focus:outline-none focus:border-[#D4A84D]"
            >
              <option value="all">All Inventory ({plots.length} Plots)</option>
              <option value="available">Available for Booking</option>
              <option value="hold">Reserved on Token Advance</option>
              <option value="booked">Booked & Registered</option>
            </select>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-stone-300 font-medium uppercase tracking-wider text-[10px]">Budget Ceiling:</label>
              <span className="text-[#D4A84D] font-bold">
                {maxBudget >= BUDGET_MAX ? 'No limit' : formatLakhsCrores(maxBudget)}
              </span>
            </div>
            <input
              type="range"
              min={BUDGET_MIN}
              max={BUDGET_MAX}
              step={25000}
              value={maxBudget}
              onChange={(e) => setMaxBudget(Number(e.target.value))}
              className="w-full accent-[#D4A84D] cursor-pointer"
            />
          </div>

          <div className="flex flex-col justify-end gap-2">
            <label className="inline-flex items-center gap-2 cursor-pointer text-stone-200">
              <input
                type="checkbox"
                checked={vastuOnly}
                onChange={(e) => setVastuOnly(e.target.checked)}
                className="rounded accent-[#D4A84D] w-4 h-4 cursor-pointer"
              />
              <span className="text-xs">East / North (Vastu) Facing Only</span>
            </label>
            <label className="inline-flex items-center gap-2 cursor-pointer text-stone-200">
              <input
                type="checkbox"
                checked={cornerOnly}
                onChange={(e) => setCornerOnly(e.target.checked)}
                className="rounded accent-[#D4A84D] w-4 h-4 cursor-pointer"
              />
              <span className="text-xs">Corner Plots Only</span>
            </label>
          </div>
        </div>

        {/* Status Legend */}
        <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-stone-400 font-medium text-[11px] uppercase tracking-wider">Legend:</span>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-emerald-600/30 border border-emerald-500" />
              <span className="text-stone-300">Matches filters</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-amber-400/60 border border-amber-500" />
              <span className="text-stone-300">Reserved (Hold)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-stone-400 border border-stone-500" />
              <span className="text-stone-400">Booked / Registered</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-[#D4A84D] border border-[#4E320A]" />
              <span className="text-amber-200 font-bold">Selected Plot</span>
            </div>
          </div>

          <div className="text-[11px] text-stone-400">
            Showing <span className="text-[#D4A84D] font-bold">{matchIds.size}</span> of {plots.length} plots ·{' '}
            <span className="text-emerald-300 font-semibold">{totalAvailable} available</span>
          </div>
        </div>
      </div>

      {/* Main Interactive Explorer Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Left: Layout sheet (8 Cols) */}
        <div className="lg:col-span-8 bg-stone-100 p-3 sm:p-5 flex flex-col gap-3 relative border-b lg:border-b-0 lg:border-r border-stone-200 min-w-0">
          {viewMode === 'plan' ? (
            <>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-[11px] text-stone-600">
                  <Compass className="w-4 h-4 text-[#C89732]" />
                  <span className="font-semibold tracking-wider">NORTH ↑</span>
                  <span className="hidden sm:inline text-stone-400">·</span>
                  <span className="hidden sm:flex items-center gap-1 text-stone-500">
                    <Move className="w-3 h-3" /> Zoom in (or double-click / Ctrl + scroll), then drag to move around
                  </span>
                </div>
                <div className="flex items-center gap-1 bg-[#0A1C16] border border-white/15 rounded-xl p-1 shadow-lg text-white">
                  <button
                    onClick={() => zoomBy(1 / 1.4)}
                    disabled={zoom <= MIN_ZOOM}
                    className="p-2 hover:bg-white/15 rounded-lg transition-colors disabled:opacity-40"
                    title="Zoom Out"
                    aria-label="Zoom out"
                  >
                    <ZoomOut className="w-4 h-4 text-[#D4A84D]" />
                  </button>
                  <button
                    onClick={() => zoomBy(1.4)}
                    disabled={zoom >= MAX_ZOOM}
                    className="p-2 hover:bg-white/15 rounded-lg transition-colors disabled:opacity-40"
                    title="Zoom In"
                    aria-label="Zoom in"
                  >
                    <ZoomIn className="w-4 h-4 text-[#D4A84D]" />
                  </button>
                  <button
                    onClick={resetZoom}
                    className="p-2 hover:bg-white/15 rounded-lg transition-colors"
                    title="Reset Zoom"
                    aria-label="Reset zoom"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[10px] text-stone-400 px-1.5 font-mono w-10 text-center">
                    {Math.round(zoom * 100)}%
                  </span>
                </div>
              </div>

              {/* The CAD sheet: vector drawing + clickable plot outlines on top */}
              <div
                ref={scrollRef}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={endDrag}
                onPointerLeave={endDrag}
                onDoubleClick={(e) => zoomBy(2, e.clientX, e.clientY)}
                className={`w-full h-[70vh] min-h-[420px] max-h-[760px] overflow-auto rounded-xl bg-white border border-stone-300 shadow-inner overscroll-contain ${
                  zoom > 1 ? 'cursor-grab active:cursor-grabbing' : ''
                }`}
              >
                <div
                  className="relative bg-white"
                  style={{ width: mapWidth, height: mapHeight, margin: mapWidth < box.w ? '0 auto' : undefined }}
                >
                  <img
                    key={layout.sheetUrl}
                    src={layout.sheetUrl}
                    alt={`${layout.name} approved layout plan`}
                    draggable={false}
                    className="absolute inset-0 w-full h-full select-none"
                  />
                  <svg
                    viewBox={`${vbX} ${vbY} ${vbW} ${vbH}`}
                    className="absolute inset-0 w-full h-full select-none"
                    role="group"
                    aria-label={`${layout.name} plots`}
                  >
                    {plots.map((plot) => {
                      const isSelected = selectedId === plot.id;
                      const isMatch = matchIds.has(plot.id);
                      return (
                        <path
                          key={plot.id}
                          d={plot.path}
                          onClick={() => handlePlotClick(plot)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setSelectedId(plot.id);
                            }
                          }}
                          tabIndex={isMatch ? 0 : -1}
                          role="button"
                          aria-label={`Plot ${plot.number}, ${plot.areaSqYds} square yards, ${plot.facing} facing, ${statusLabel[plot.status]}`}
                          className={`transition-colors outline-none focus-visible:stroke-[#4E320A] focus-visible:stroke-[1.6] ${plotClassName(
                            plot,
                            isSelected,
                            isMatch,
                            filtersActive
                          )}`}
                        >
                          <title>{`Plot ${plot.number} · ${plot.areaSqYds} sq.yd · ${plot.facing} facing`}</title>
                        </path>
                      );
                    })}
                  </svg>
                </div>
              </div>
            </>
          ) : (
            <div className="w-full overflow-auto h-[70vh] min-h-[420px] max-h-[760px] rounded-xl bg-[#06130E]">
              <table className="w-full text-left text-xs text-stone-200">
                <thead className="bg-[#0A1C16] text-[#D4A84D] uppercase font-mono tracking-wider sticky top-0">
                  <tr>
                    <th className="p-3">Plot #</th>
                    <th className="p-3">Area (Sq.Yds)</th>
                    <th className="p-3">Facing</th>
                    <th className="p-3">Road</th>
                    <th className="p-3">Total Value</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 font-medium">
                  {listPlots.map((plot) => {
                    const isSelected = selectedId === plot.id;
                    const price = plot.areaSqYds * plot.pricePerSqYd;
                    return (
                      <tr
                        key={plot.id}
                        onClick={() => setSelectedId(plot.id)}
                        className={`hover:bg-white/5 cursor-pointer transition-colors ${
                          isSelected ? 'bg-[#D4A84D]/20 text-white font-bold' : ''
                        }`}
                      >
                        <td className="p-3">
                          #{plot.number} {plot.isCorner && <span className="text-[#D4A84D]">(Corner)</span>}
                        </td>
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
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedId(plot.id);
                              locatePlot(plot);
                            }}
                            className="px-2.5 py-1 rounded bg-[#D4A84D] text-[#0A1C16] font-bold text-[10px]"
                          >
                            Show on plan
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                  {listPlots.length === 0 && (
                    <tr>
                      <td colSpan={7} className="p-8 text-center text-stone-400">
                        No plots match the current filters.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}

          {/* Land analysis as printed on the sheet */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-[11px] text-stone-600">
            <span className="font-semibold text-stone-700">Land analysis (per sheet):</span>
            {layout.stats.map((s) => (
              <span key={s.label}>
                {s.label}: <span className="font-semibold text-stone-800">{s.sqYds.toLocaleString('en-IN')} sq.yd</span>
                {s.percent !== undefined && <span className="text-stone-400"> ({s.percent}%)</span>}
              </span>
            ))}
            <span>
              Total: <span className="font-semibold text-stone-800">{layout.totalSqYds.toLocaleString('en-IN')} sq.yd</span>
            </span>
          </div>
          <div className="text-[11px] text-stone-500 flex flex-wrap items-center justify-between gap-1">
            <span>* Plan reproduced from the approved layout sheet. All dimensions in feet; roads are {PAYMENT_PLAN.roadWidthFt} ft wide.</span>
            <span className="text-[#8E6219]">LRS charges borne by the company.</span>
          </div>
        </div>

        {/* Right: Selected Plot Specification & Financial Summary (4 Cols) */}
        <div className="lg:col-span-4 p-6 sm:p-7 bg-[#FCFBF7] flex flex-col justify-between space-y-6">
          {selectedPlot ? (
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full bg-[#0A1C16] text-[#D4A84D] font-bold text-xs uppercase tracking-wider font-mono">
                    {layout.label} · Plot #{selectedPlot.number}
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
                    {statusLabel[selectedPlot.status]}
                  </span>
                </div>

                <h4 className="text-2xl font-bold font-serif text-[#0A1C16]">
                  {selectedPlot.areaSqYds} Gajam (Sq. Yards)
                </h4>
                <p className="text-xs text-stone-500 mt-0.5">
                  Equivalent to {(selectedPlot.areaSqYds * 9).toLocaleString('en-IN')} Square Feet
                  {selectedPlot.dimensionsFt && <> · approx. {selectedPlot.dimensionsFt} ft</>}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-stone-200 space-y-2.5 text-xs shadow-sm">
                <div className="flex justify-between items-center py-1 border-b border-stone-100">
                  <span className="text-stone-500">Road-facing side:</span>
                  <span className="font-bold text-[#0A1C16] flex items-center gap-1">
                    <Compass className="w-3.5 h-3.5 text-[#C89732]" />
                    <span>{selectedPlot.facing} Facing</span>
                  </span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-stone-100">
                  <span className="text-stone-500">Access Road:</span>
                  <span className="font-semibold text-stone-800">{selectedPlot.roadWidthFt} Feet Wide</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-stone-100">
                  <span className="text-stone-500">Vastu:</span>
                  {selectedPlot.isVastuCompliant ? (
                    <span className="font-bold text-emerald-700 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{selectedPlot.facing} (Auspicious)</span>
                    </span>
                  ) : (
                    <span className="font-semibold text-stone-800">{selectedPlot.facing} Facing</span>
                  )}
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-stone-500">Corner Placement:</span>
                  <span className="font-semibold text-stone-800">
                    {selectedPlot.isCorner ? 'Yes (Corner Plot)' : 'Standard Mid-Avenue'}
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

                {activePlotEmi && (
                  <div className="text-[11px] text-stone-300 space-y-2 pt-2 border-t border-white/10">
                    <div className="flex justify-between">
                      <span className="text-stone-400">Rate:</span>
                      <span className="font-mono">₹{selectedPlot.pricePerSqYd.toLocaleString('en-IN')} / sq.yd</span>
                    </div>

                    <p className="pt-1 text-[10px] uppercase tracking-wider text-[#D4A84D] font-bold">
                      Option A · Booking + Down Payment + EMI
                    </p>
                    <div className="flex justify-between">
                      <span className="text-stone-400">1. Booking (token):</span>
                      <span className="font-mono text-amber-300 font-bold">
                        {formatIndianCurrency(activePlotEmi.bookingAmount)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-400">2. Down payment (in {PAYMENT_PLAN.downPaymentDays} days):</span>
                      <span className="font-mono text-white font-bold">
                        {formatIndianCurrency(activePlotEmi.downPaymentAmount)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-400">3. Balance in EMI (max {PAYMENT_PLAN.maxEmiMonths} months):</span>
                      <span className="font-mono text-white font-bold">
                        {formatIndianCurrency(activePlotEmi.loanAmount)}
                      </span>
                    </div>
                    <div className="flex justify-between pt-1 border-t border-white/10">
                      <span className="text-stone-400">≈ Monthly EMI ({activePlotEmi.tenureMonths} months):</span>
                      <span className="font-mono text-emerald-300 font-bold">
                        {formatIndianCurrency(activePlotEmi.monthlyEmi)} / mo
                      </span>
                    </div>

                    <p className="pt-2 text-[10px] uppercase tracking-wider text-[#D4A84D] font-bold border-t border-white/10">
                      Option B · {PAYMENT_PLAN.spotRegistrationPercent}% Registration
                    </p>
                    <div className="flex justify-between">
                      <span className="text-stone-400">
                        Pay {PAYMENT_PLAN.spotRegistrationPercent}% within {PAYMENT_PLAN.spotRegistrationDays} days:
                      </span>
                      <span className="font-mono text-emerald-300 font-bold">
                        {formatIndianCurrency(activePlotEmi.spotRegistrationAmount)}
                      </span>
                    </div>

                    <div className="flex justify-between pt-1 border-t border-white/10">
                      <span className="text-stone-400">LRS Charges:</span>
                      <span className="text-emerald-400 font-bold">100% Paid by Company</span>
                    </div>
                    <p className="text-[10px] text-stone-500 leading-snug">
                      EMI shown is the balance ÷ {activePlotEmi.tenureMonths} months; final schedule is confirmed by the sales team.
                    </p>
                  </div>
                )}
              </div>

              <div className="space-y-2.5">
                <button
                  type="button"
                  onClick={() => locatePlot(selectedPlot)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-[#C89732]/60 text-[#8E6219] hover:bg-[#C89732]/10 font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  <LocateFixed className="w-4 h-4" />
                  <span>Locate on Layout Plan</span>
                </button>
                <Link
                  to={`/book-visit?plot=${encodeURIComponent(selectedPlot.number)}&phase=${selectedPlot.phaseId}`}
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
              <p className="text-xs">
                Select any plot on the layout plan to see its size, facing, price and payment schedule.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
