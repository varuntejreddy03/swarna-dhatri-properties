import { PlotStatus } from '../types';

/**
 * Live inventory overrides, keyed by plot id (e.g. "avenue-2-17" = the 17th label on the Phase 2 sheet,
 * "avenue-1-12" = plot 12 on the Phase 1 sheet). Any plot not listed here is shown as "available".
 *
 * Example:
 *   'avenue-2-17': 'booked',
 *   'avenue-1-5': 'hold',
 */
export const PLOT_STATUS_OVERRIDES: Record<string, PlotStatus> = {};
