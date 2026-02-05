export type PinCategory = 
  | 'projects' 
  | 'research' 
  | 'education' 
  | 'personal' 
  | 'travel' 
  | 'bucket' 
  | 'interests';

export interface Pin {
  id: string;
  location: string;
  coordinates: {
    lat: number;
    lng: number;
    display: string;
  };
  category: PinCategory;
  title: string;
  subtitle?: string;
  description: string;
  heroImage?: string;
  tags?: string[];
  links?: {
    label: string;
    url: string;
    primary?: boolean;
  }[];
  featured?: boolean;
}

export const categoryColors: Record<PinCategory, string> = {
  projects: '#3b82f6',
  research: '#14b8a6',
  education: '#a855f7',
  personal: '#f59e0b',
  travel: '#22c55e',
  bucket: '#ffffff',
  interests: '#ec4899',
};

export const categoryLabels: Record<PinCategory, string> = {
  projects: 'Projects',
  research: 'Research',
  education: 'Education',
  personal: 'Personal',
  travel: 'Travel',
  bucket: 'Bucket List',
  interests: 'Interests',
};

export const pins: Pin[] = [
  // ============ PROJECTS ============
  {
    id: 'bay-area-projects',
    location: 'San Francisco Bay Area',
    coordinates: {
      lat: 37.4419,
      lng: -122.1430,
      display: "37.4419°N, 122.1430°W"
    },
    category: 'projects',
    title: 'Atlas & FireGraph',
    subtitle: 'Routing & Geospatial Visualization',
    description: 'Atlas: Predictive multi-modal transportation router—500K+ OpenStreetMap segments, Dijkstra/A*/Contraction Hierarchies, XGBoost traffic prediction (92% accuracy), sub-100ms query latency. FireGraph: Real-time geospatial platform combining live fire perimeters, wind vectors, and population density to surface high-risk evacuation corridors across California; NIFC, CAL FIRE, NOAA pipelines, WebGL mapping.',
    heroImage: '/images/projects/campusflow.png',
    tags: ['FastAPI', 'PostgreSQL', 'Redis', 'XGBoost', 'Next.js', 'Deck.gl', 'PostGIS', 'OpenRouteService'],
    links: []
  },
  {
    id: 'paprika',
    location: 'San Francisco, CA',
    coordinates: {
      lat: 37.7749,
      lng: -122.4194,
      display: "37.7749°N, 122.4194°W"
    },
    category: 'projects',
    title: 'Paprika',
    subtitle: 'Founding Engineer',
    description: 'Architected zoning intelligence system processing 150K+ San Francisco parcels using PostGIS spatial queries and RAG-based LLM pipelines, reducing parcel feasibility analysis from ~5 hours to 90 seconds. Built document understanding pipeline for municipal code parsing (400+ zoning sections, 94% citation accuracy via Claude API). Shipped production MVP in 30 days as sole engineer: Next.js/TypeScript frontend, PostGIS backend, 6 municipal API integrations, validated with 3 real estate firms.',
    heroImage: '/images/projects/paprika.png',
    tags: ['Next.js', 'TypeScript', 'PostGIS', 'Claude API', 'RAG'],
    links: [],
    featured: true
  },
  {
    id: 'railinc',
    location: 'Raleigh, NC',
    coordinates: {
      lat: 35.7796,
      lng: -78.6382,
      display: "35.7796°N, 78.6382°W"
    },
    category: 'projects',
    title: 'Railinc Corp.',
    subtitle: 'Software Engineering Intern · Summer 2024 & 2025',
    description: 'Consulted with technical product teams from 20+ freight rail clients (BNSF, CSX, Union Pacific) to scope GIS feature requirements. Built full-stack functionality with React and Java Spring Boot for RIGIS terminal operations system (99.8% uptime). Developed Python ETL pipeline processing 100K+ station records, reducing manual data cleaning by 75%. Optimized PostGIS queries with spatial indexing and geometry simplification, cutting geospatial query runtime by 40% and API response times from 500ms to 300ms.',
    heroImage: '',
    tags: ['React', 'Java', 'Spring Boot', 'PostGIS', 'Python', 'ETL'],
    links: []
  },

  // ============ EDUCATION ============
  {
    id: 'berkeley',
    location: 'Berkeley, CA',
    coordinates: {
      lat: 37.8719,
      lng: -122.2585,
      display: "37.8719°N, 122.2585°W"
    },
    category: 'education',
    title: 'UC Berkeley',
    subtitle: "B.A. Computer Science · Minor in Urban/City Planning",
    description: 'B.A. in Computer Science with a minor in Urban/City Planning. GPA: 3.9. Relevant coursework: Data Structures, Discrete Math, Structure of Computer Programs, Introduction to Internet Protocols.',
    heroImage: '/images/education/berkeley.png',
    tags: ['Computer Science', 'Urban Planning', 'Data Structures', 'Discrete Math'],
    links: []
  },

  // ============ RESEARCH ============
  {
    id: 'el-salvador',
    location: 'San Salvador, El Salvador',
    coordinates: {
      lat: 13.6929,
      lng: -89.2182,
      display: "13.6929°N, 89.2182°W"
    },
    category: 'research',
    title: 'Crypto Mining Detection',
    subtitle: 'Potts Lab, UC Berkeley · Sep 2025 – Present',
    description: 'Developing ML model to identify crypto mining developments in El Salvador using multi-spectral analysis—NDVI, NDWI, and land surface temperature. Built change detection pipeline in Google Earth Engine processing satellite imagery across 5-year windows; Random Forest classification to isolate vegetation loss and thermal patterns.',
    heroImage: '/images/research/el-salvador.png',
    tags: ['Google Earth Engine', 'Python', 'Landsat', 'Sentinel', 'Random Forest', 'NDVI', 'NDWI'],
    links: []
  },

  // ============ PERSONAL ============
  {
    id: 'cary',
    location: 'Cary, NC',
    coordinates: {
      lat: 35.7915,
      lng: -78.7811,
      display: "35.7915°N, 78.7811°W"
    },
    category: 'personal',
    title: 'Where I Grew Up',
    subtitle: 'Home Base',
    description: '[PLACEHOLDER: Personal story about growing up in Cary, NC. What shaped you, memories, why it matters.]',
    heroImage: '/images/personal/cary.jpg',
  },
  {
    id: 'tiruchirappalli',
    location: 'Tiruchirappalli, Tamil Nadu',
    coordinates: {
      lat: 10.7905,
      lng: 78.7047,
      display: "10.7905°N, 78.7047°E"
    },
    category: 'personal',
    title: 'Tamil Culture · My Hometown',
    subtitle: 'Where It All Began',
    description: 'Family roots and cultural connection to Tamil Nadu. Hometown and heritage that shape who I am.',
    heroImage: '/images/personal/trichy.jpg',
  },

  // ============ TRAVEL ============
  {
    id: 'antarctica',
    location: 'Antarctica',
    coordinates: {
      lat: -58.0,
      lng: 0.0,
      display: "58.0000°S, 0.0000°E"
    },
    category: 'travel',
    title: 'Antarctica',
    subtitle: 'winter 2025. once in a lifetime experience.',
    description: '',
    heroImage: '/images/travel/antarctica.jpg',
  },
  {
    id: 'prague',
    location: 'Prague, Czech Republic',
    coordinates: {
      lat: 50.0755,
      lng: 14.4378,
      display: "50.0755°N, 14.4378°E"
    },
    category: 'travel',
    title: 'Prague',
    subtitle: 'Recent Travel',
    description: 'traveled to prague in summer 2024. coolest city ever.',
    heroImage: '/images/travel/prague.jpg',
  },
  {
    id: 'hcmc',
    location: 'Ho Chi Minh City, Vietnam',
    coordinates: {
      lat: 10.8231,
      lng: 106.6297,
      display: "10.8231°N, 106.6297°E"
    },
    category: 'travel',
    title: 'Ho Chi Minh City',
    subtitle: 'Recent Travel',
    description: '[PLACEHOLDER: Vietnam trip details, experiences, food, culture.]',
    heroImage: '/images/travel/hcmc.jpg',
  },

  // ============ INTERESTS ============
  {
    id: 'chicago',
    location: 'Chicago, IL',
    coordinates: {
      lat: 41.8781,
      lng: -87.6298,
      display: "41.8781°N, 87.6298°W"
    },
    category: 'interests',
    title: 'Soccer Jerseys & Chicago Sports',
    subtitle: 'Interests',
    description: 'Grew up a big Bulls and Bears fan. Soldier Field and United Center have unmatched energy. Love collecting soccer jerseys and following the game.',
    heroImage: '',
  },
  {
    id: 'london',
    location: 'London, UK',
    coordinates: {
      lat: 51.5074,
      lng: -0.1278,
      display: "51.5074°N, 0.1278°W"
    },
    category: 'interests',
    title: 'Soccer Jerseys',
    subtitle: 'Chelsea FC',
    description: 'Former home, still my spiritual abode. Up the Chels! Attended a friendly in Charlotte.',
    heroImage: '/images/interests/chelsea.jpg',
  },
  {
    id: 'nyc',
    location: 'New York City, NY',
    coordinates: {
      lat: 40.7128,
      lng: -74.0060,
      display: "40.7128°N, 74.0060°W"
    },
    category: 'interests',
    title: 'Real Estate & Cities',
    subtitle: 'Interests',
    description: 'From urban design to how cities work. Fascinated by real estate, development, and spending time in places like NYC—Broadway to Brooklyn and everything in between.',
    heroImage: '/images/interests/himym.jpg',
  },

  // ============ BUCKET LIST ============
  {
    id: 'cape-town',
    location: 'Cape Town, South Africa',
    coordinates: {
      lat: -33.9249,
      lng: 18.4241,
      display: "33.9249°S, 18.4241°E"
    },
    category: 'bucket',
    title: 'Cape Town',
    subtitle: 'Future Destination',
    description: "Haven't made it here yet. But one day. Maybe there's a project waiting here too.",
  },
  {
    id: 'sydney',
    location: 'Sydney, Australia',
    coordinates: {
      lat: -33.8688,
      lng: 151.2093,
      display: "33.8688°S, 151.2093°E"
    },
    category: 'bucket',
    title: 'Sydney',
    subtitle: 'Future Destination',
    description: "Haven't made it here yet. But one day. Maybe there's a project waiting here too.",
  },
  {
    id: 'seoul',
    location: 'Seoul, South Korea',
    coordinates: {
      lat: 37.5665,
      lng: 126.9780,
      display: "37.5665°N, 126.9780°E"
    },
    category: 'bucket',
    title: 'Seoul',
    subtitle: 'Future Destination',
    description: "Haven't made it here yet. But one day. Maybe there's a project waiting here too.",
  },
];

