// Map dimensions - these match our SVG viewBox
const MAP_WIDTH = 1009.6727;
const MAP_HEIGHT = 665.96301;

// The SVG uses a simple equirectangular projection
// Map bounds (approximate for the Natural Earth projection in the SVG)
const MAP_LEFT_LNG = -180;
const MAP_RIGHT_LNG = 180;
const MAP_TOP_LAT = 83.6;  // Arctic
const MAP_BOTTOM_LAT = -56; // Antarctic (cut off in most world maps)

export function latLngToPixel(lat: number, lng: number): { x: number; y: number } {
  // Convert longitude to x (linear mapping)
  const x = ((lng - MAP_LEFT_LNG) / (MAP_RIGHT_LNG - MAP_LEFT_LNG)) * MAP_WIDTH;
  
  // Convert latitude to y (linear mapping, inverted because y increases downward)
  const y = ((MAP_TOP_LAT - lat) / (MAP_TOP_LAT - MAP_BOTTOM_LAT)) * MAP_HEIGHT;
  
  return { x, y };
}

export function pixelToLatLng(x: number, y: number): { lat: number; lng: number } {
  const lng = MAP_LEFT_LNG + (x / MAP_WIDTH) * (MAP_RIGHT_LNG - MAP_LEFT_LNG);
  const lat = MAP_TOP_LAT - (y / MAP_HEIGHT) * (MAP_TOP_LAT - MAP_BOTTOM_LAT);
  
  return { lat, lng };
}

