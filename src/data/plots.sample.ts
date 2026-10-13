import { Plot, Facing, PlotStatus } from '../types';

/**
 * SAMPLE PLOT INVENTORY
 * NOTE: Generated sample layout data for preview & interactive demonstration.
 * Must be updated with actual CAD/survey layout drawing numbers from client.
 */

const facings: Facing[] = ['East', 'West', 'North', 'South', 'North-East', 'North-West'];
const statuses: PlotStatus[] = ['available', 'available', 'available', 'booked', 'available', 'hold'];

export const SAMPLE_PLOTS: Plot[] = Array.from({ length: 42 }).map((_, index) => {
  const plotNum = index + 1;
  const col = index % 7;
  const row = Math.floor(index / 7);

  // Standard sizes in Telangana open plots: 150, 167, 183, 200, 242, 300, 400 gajam
  const sizes = [150, 167, 183, 200, 240, 267, 300];
  const areaSqYds = sizes[index % sizes.length];
  
  // Realistic facing distribution based on road orientation
  let facing: Facing = 'East';
  if (row % 2 === 0) {
    facing = col < 3 ? 'East' : 'North';
  } else {
    facing = col > 4 ? 'North-East' : 'West';
  }

  // Corners are at edges of blocks
  const isCorner = col === 0 || col === 6 || row === 0 || row === 5;
  const isVastuCompliant = facing === 'East' || facing === 'North' || facing === 'North-East';
  const status: PlotStatus = index === 3 || index === 8 || index === 17 || index === 25 || index === 33
    ? 'booked'
    : index === 11 || index === 29
    ? 'hold'
    : 'available';

  const pricePerSqYd = 3300; // Avenue-2 standard base price

  return {
    id: `plot-${plotNum}`,
    number: plotNum,
    areaSqYds,
    facing,
    roadWidthFt: isCorner ? 40 : 33,
    status,
    isCorner,
    isVastuCompliant,
    pricePerSqYd,
    dimensionsFt: `${Math.round(Math.sqrt(areaSqYds * 9) * 0.9)} × ${Math.round(Math.sqrt(areaSqYds * 9) * 1.1)} ft`,
    coordinates: {
      x: 60 + col * 125,
      y: 70 + row * 95,
      width: 110,
      height: 80
    }
  };
});
