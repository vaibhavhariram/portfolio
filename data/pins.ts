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
    title: 'CampusFlow & Elytra',
    subtitle: 'Bay Area Projects',
    description: '[PLACEHOLDER: Add description of CampusFlow, Elytra, and other Bay Area projects. What they do, your role, impact.]',
    heroImage: '/images/projects/campusflow.png',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    links: [
      { label: 'CampusFlow Demo', url: '#', primary: true },
      { label: 'Elytra GitHub', url: '#' }
    ]
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
    subtitle: 'AI Copilot for Urban Planning',
    description: '[PLACEHOLDER: Describe Paprika - AI copilot for urban planners, automates zoning analysis and development feasibility assessments for SF parcels. Your flagship project.]',
    heroImage: '/images/projects/paprika.png',
    tags: ['Next.js', 'PostGIS', 'Claude API', 'DataSF'],
    links: [
      { label: 'View Demo', url: '#', primary: true },
      { label: 'GitHub', url: '#' }
    ],
    featured: true
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
    subtitle: "Computer Science & Geography '28",
    description: '[PLACEHOLDER: Describe your Berkeley experience - major, interesting classes, URAP research program, clubs, what you love about it.]',
    heroImage: '/images/education/berkeley.png',
    tags: ['Computer Science', 'Geography', 'URAP'],
    links: [
      { label: 'Coursework', url: '#' }
    ]
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
    subtitle: 'Satellite Imagery Research',
    description: '[PLACEHOLDER: Describe the URAP research project - detecting crypto mining facilities in El Salvador using satellite imagery, multi-spectral analysis (NDVI, NDWI, land surface temperature, night lights).]',
    heroImage: '/images/research/el-salvador.png',
    tags: ['Google Earth Engine', 'Remote Sensing', 'Python', 'NDVI', 'Multi-spectral'],
    links: [
      { label: 'Research Paper', url: '#', primary: true }
    ]
  },
  {
    id: 'chennai',
    location: 'Chennai, India',
    coordinates: {
      lat: 13.0827,
      lng: 80.2707,
      display: "13.0827°N, 80.2707°E"
    },
    category: 'research',
    title: 'Urban Heat Island Study',
    subtitle: 'Climate & Urban Planning Research',
    description: '[PLACEHOLDER: Describe the urban heat island research on Chennai - methodology, findings, implications for urban planning.]',
    heroImage: '/images/research/chennai.png',
    tags: ['GIS', 'Remote Sensing', 'Climate', 'Urban Planning'],
    links: [
      { label: 'View Analysis', url: '#', primary: true }
    ]
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
    title: 'My Hometown',
    subtitle: 'Where It All Began',
    description: '[PLACEHOLDER: Story about your hometown in Tamil Nadu - family roots, visits, cultural connection.]',
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
      lat: 43.8781,
      lng: -86.6298,
      display: "41.8781°N, 87.6298°W"
    },
    category: 'interests',
    title: 'Chicago Sports',
    subtitle: 'Sports',
    description: 'grew up a big bulls and bears fan. soldier field and united center have unmatched energy. waiting for the next d-rose, my rome odunze jersey, and maybe a underdog championship run.',
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
    title: 'Chelsea FC',
    subtitle: 'Football',
    description: 'former home, stil my spiritual abode. up the chels! here is a picture of me attending a friendly game in charlotte!]',
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
    title: 'my connection to the big apple',
    subtitle: 'what does new york mean to me?',
    description: 'from my favorite TV show (How I Met Your Mother) to the dosa guy in central park and everywhere from broadway to brooklyn and everything in between- i need to spend my 20s here.',
    heroImage: '/images/interests/himym.jpg',
  },
  {
    id: 'tokyo',
    location: 'Tokyo, Japan',
    coordinates: {
      lat: 35.6762,
      lng: 139.6503,
      display: "35.6762°N, 139.6503°E"
    },
    category: 'interests',
    title: 'Anime',
    subtitle: 'niche i was into ',
    description: '[PLACEHOLDER: Your relationship with anime - favorites, recommendations, what draws you to it.]',
    heroImage: '/images/interests/anime.jpg',
  },
  {
    id: 'singapore',
    location: 'Singapore',
    coordinates: {
      lat: 1.3521,
      lng: 103.8198,
      display: "1.3521°N, 103.8198°E"
    },
    category: 'interests',
    title: 'Crazy Rich Asians',
    subtitle: 'Favorite Movie',
    description: '[PLACEHOLDER: Why this movie matters to you, representation, favorite scenes.]',
    heroImage: '/images/interests/cra.jpg',
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

