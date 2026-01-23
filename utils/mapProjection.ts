// Map dimensions - these match the SVG viewBox (2000 x 857)
// The simplemaps world SVG uses 2000x857 with equirectangular projection
const MAP_WIDTH = 2000;
const MAP_HEIGHT = 857;

// The SVG uses a simple equirectangular projection
// Map bounds - calibrated for the simplemaps SVG
const MAP_LEFT_LNG = -180;
const MAP_RIGHT_LNG = 180;
const MAP_TOP_LAT = 83.6;   // Approximate top latitude of the map
const MAP_BOTTOM_LAT = -60; // Approximate bottom latitude (adjusted to show more of Antarctica)

// Clamp a value to a range
function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

export function latLngToPixel(lat: number, lng: number): { x: number; y: number } {
  // Clamp coordinates to valid map bounds to prevent off-screen pins
  const clampedLat = clamp(lat, MAP_BOTTOM_LAT, MAP_TOP_LAT);
  const clampedLng = clamp(lng, MAP_LEFT_LNG, MAP_RIGHT_LNG);
  
  // Convert longitude to x (linear mapping)
  // lng -180 -> x 0, lng 180 -> x 2000
  const x = ((clampedLng + 180) / 360) * MAP_WIDTH;
  
  // Convert latitude to y (linear mapping for the visible range)
  // Map from [MAP_TOP_LAT, MAP_BOTTOM_LAT] to [0, MAP_HEIGHT]
  const latRange = MAP_TOP_LAT - MAP_BOTTOM_LAT;
  const y = ((MAP_TOP_LAT - clampedLat) / latRange) * MAP_HEIGHT;
  
  return { x, y };
}

export function pixelToLatLng(x: number, y: number): { lat: number; lng: number } {
  const lng = (x / MAP_WIDTH) * 360 - 180;
  const latRange = MAP_TOP_LAT - MAP_BOTTOM_LAT;
  const lat = MAP_TOP_LAT - (y / MAP_HEIGHT) * latRange;
  
  return { lat, lng };
}

// Export map dimensions for use in components
export const MAP_DIMENSIONS = {
  width: MAP_WIDTH,
  height: MAP_HEIGHT,
};
