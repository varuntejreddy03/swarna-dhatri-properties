import { Facing, PhaseId, Plot } from '../types';
import { PHASE1_RAW_PLOTS, PHASE2_RAW_PLOTS, RawLayoutPlot } from './layoutPlots.generated';
import { PLOT_STATUS_OVERRIDES } from './plotStatus';
import { PAYMENT_PLAN } from './paymentPlan';

export interface LayoutStat {
  label: string;
  sqYds: number;
  /** Percentage as printed on the sheet (Phase 1 only) */
  percent?: number;
}

export interface LayoutMeta {
  id: PhaseId;
  label: string;
  name: string;
  /** Vector copy of the CAD sheet (public/layouts) */
  sheetUrl: string;
  /** Visible region of the sheet: x, y, width, height */
  viewBox: [number, number, number, number];
  plotCountOnSheet: number;
  acresLabel: string;
  survey: string;
  stats: LayoutStat[];
  totalSqYds: number;
  /** Rate card by facing (₹ per sq.yd) */
  rates: Partial<Record<Facing, number>> & { default: number };
  rateNote: string;
}

export const LAYOUTS: Record<PhaseId, LayoutMeta> = {
  'avenue-1': {
    id: 'avenue-1',
    label: 'Phase 1',
    name: 'Swarna Bindu Avenue – 1',
    sheetUrl: '/layouts/swarna-bindu-avenue-phase-1.svg',
    viewBox: [74, 49, 693, 1094],
    plotCountOnSheet: 52,
    acresLabel: 'Ac 2-00 Gts',
    survey: 'Sy.No. 93/1/1/1/2, 93/1/1/1/1/2, 93/2, 93/1/2 · Devarampalle Village, Jharasangam Mandal, Sangareddy Dt.',
    stats: [
      { label: 'Plotted area', sqYds: 6718.0, percent: 69.41 },
      { label: 'Road area', sqYds: 2696.36, percent: 27.86 },
      { label: 'Open area', sqYds: 264.58, percent: 2.73 }
    ],
    totalSqYds: 9678.94,
    rates: { East: 4500, West: 4000, default: 4000 },
    rateNote: 'East facing ₹4,500 · West facing ₹4,000 per sq.yd'
  },
  'avenue-2': {
    id: 'avenue-2',
    label: 'Phase 2',
    name: 'Swarna Bindu Avenue – 2',
    sheetUrl: '/layouts/swarna-bindu-avenue-phase-2.svg',
    viewBox: [10, 7, 1171, 828],
    plotCountOnSheet: 237,
    acresLabel: 'Ac 9.20',
    survey: 'Sy.No. 89 & 91 · Devarampalle Village, Jharasangam Mandal, Sangareddy District',
    stats: [
      { label: 'Plotted area', sqYds: 29936 },
      { label: 'Road area', sqYds: 13072 },
      { label: 'Park area', sqYds: 2260 }
    ],
    totalSqYds: 45270,
    rates: { default: 3300 },
    rateNote: '₹3,300 per sq.yd on every plot'
  }
};

export const PHASE_ORDER: PhaseId[] = ['avenue-1', 'avenue-2'];

const FACING_BY_CODE: Record<RawLayoutPlot['f'], Facing> = { E: 'East', W: 'West', N: 'North', S: 'South' };

function toPlots(phaseId: PhaseId, raw: RawLayoutPlot[]): Plot[] {
  const meta = LAYOUTS[phaseId];
  return raw.map((r, index) => {
    const facing = FACING_BY_CODE[r.f];
    const id = `${phaseId}-${phaseId === 'avenue-1' ? r.n : index + 1}`;
    return {
      id,
      number: r.n,
      phaseId,
      areaSqYds: r.a,
      facing,
      roadWidthFt: PAYMENT_PLAN.roadWidthFt,
      status: PLOT_STATUS_OVERRIDES[id] ?? 'available',
      isCorner: r.c === 1,
      isVastuCompliant: facing === 'East' || facing === 'North',
      pricePerSqYd: meta.rates[facing] ?? meta.rates.default,
      dimensionsFt: r.w,
      path: r.d,
      cx: r.x,
      cy: r.y
    };
  });
}

export const LAYOUT_PLOTS: Record<PhaseId, Plot[]> = {
  'avenue-1': toPlots('avenue-1', PHASE1_RAW_PLOTS),
  'avenue-2': toPlots('avenue-2', PHASE2_RAW_PLOTS)
};

export function findPlot(phaseId: PhaseId, number: string): Plot | undefined {
  return LAYOUT_PLOTS[phaseId].find((p) => p.number === number);
}
