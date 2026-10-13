export type UnitType = 'gajam' | 'sqft' | 'sqm' | 'guntha' | 'acre';

export interface UnitDetail {
  id: UnitType;
  label: string;
  symbol: string;
  toGajam: (val: number) => number;
  fromGajam: (gajam: number) => number;
}

/**
 * Standard conversions in Telangana Land Measurement:
 * 1 Gajam = 1 Sq Yard = 9 Sq Feet
 * 1 Gajam ≈ 0.836127 Sq Metres
 * 1 Guntha = 121 Gajam (121 Sq Yards = 1,089 Sq Feet)
 * 1 Acre = 4,840 Gajam = 40 Gunthas (43,560 Sq Feet)
 */
export const UNITS: Record<UnitType, UnitDetail> = {
  gajam: {
    id: 'gajam',
    label: 'Gajam (Square Yards)',
    symbol: 'Gajam / Sq.Yd',
    toGajam: (val) => val,
    fromGajam: (g) => g
  },
  sqft: {
    id: 'sqft',
    label: 'Square Feet',
    symbol: 'sq.ft',
    toGajam: (val) => val / 9,
    fromGajam: (g) => g * 9
  },
  sqm: {
    id: 'sqm',
    label: 'Square Metres',
    symbol: 'sq.m',
    toGajam: (val) => val / 0.836127,
    fromGajam: (g) => g * 0.836127
  },
  guntha: {
    id: 'guntha',
    label: 'Guntha',
    symbol: 'Guntha',
    toGajam: (val) => val * 121,
    fromGajam: (g) => g / 121
  },
  acre: {
    id: 'acre',
    label: 'Acre',
    symbol: 'Acres',
    toGajam: (val) => val * 4840,
    fromGajam: (g) => g / 4840
  }
};

export function convertUnits(value: number, from: UnitType, to: UnitType): number {
  if (from === to) return value;
  const inGajam = UNITS[from].toGajam(value);
  const result = UNITS[to].fromGajam(inGajam);
  return Math.round(result * 100) / 100;
}
