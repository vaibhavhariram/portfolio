// Map dimensions - these match the SVG viewBox (2000 x 1000)
const MAP_WIDTH = 2000;
const MAP_HEIGHT = 1000;

// The SVG uses a simple equirectangular projection
// Map bounds (standard equirectangular projection)
const MAP_LEFT_LNG = -180;
const MAP_RIGHT_LNG = 180;
const MAP_TOP_LAT = 90;   // North Pole
const MAP_BOTTOM_LAT = -90; // South Pole

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
  
  // Convert latitude to y (linear mapping, inverted because y increases downward)
  // lat 90 -> y 0, lat -90 -> y 1000
  const y = ((90 - clampedLat) / 180) * MAP_HEIGHT;
  
  return { x, y };
}

export function pixelToLatLng(x: number, y: number): { lat: number; lng: number } {
  const lng = (x / MAP_WIDTH) * 360 - 180;
  const lat = 90 - (y / MAP_HEIGHT) * 180;
  
  return { lat, lng };
}

// Export map dimensions for use in components
export const MAP_DIMENSIONS = {
  width: MAP_WIDTH,
  height: MAP_HEIGHT,
};
