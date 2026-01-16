'use client';

import { useEffect, useState } from 'react';

interface WorldMapProps {
  onMapLoaded?: () => void;
}

export default function WorldMap({ onMapLoaded }: WorldMapProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger callback after animation completes
    const timer = setTimeout(() => {
      setIsLoaded(true);
      onMapLoaded?.();
    }, 2500);
    
    return () => clearTimeout(timer);
  }, [onMapLoaded]);

  return (
    <svg
      viewBox="0 0 2000 1000"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
      aria-label="World map"
    >
      <defs>
        <style>
          {`
            .land {
              fill: none;
              stroke: rgba(255, 255, 255, 0.6);
              stroke-width: 1.5;
              stroke-linejoin: round;
              stroke-linecap: round;
            }
          `}
        </style>
      </defs>
      
      {/* Clean minimal world map - Equirectangular projection */}
      <g className="continents">
        {/* North America - Canada & Alaska */}
        <path
          className="land map-path"
          style={{ animationDelay: '0s' }}
          d="M 220,130 L 200,135 L 175,130 L 155,140 L 140,155 L 130,175 L 115,195 L 95,210 
             L 85,235 L 90,260 L 100,280 L 120,295 L 140,310 L 160,335 L 175,360 L 195,380 L 220,395 
             L 250,405 L 285,400 L 320,385 L 345,360 L 360,335 L 370,305 L 365,275 L 350,250 L 330,230 
             L 305,215 L 280,200 L 260,180 L 245,160 L 235,140 L 220,130
             M 170,175 L 180,165 L 200,160 L 225,165 L 245,180 L 255,200 L 250,225 L 235,245 L 210,255 
             L 185,250 L 165,235 L 155,210 L 160,185 L 170,175
             M 95,155 L 80,165 L 70,185 L 75,210 L 90,225 L 110,220 L 120,200 L 115,175 L 100,160 L 95,155"
        />
        
        {/* USA */}
        <path
          className="land map-path"
          style={{ animationDelay: '0.1s' }}
          d="M 130,280 L 115,295 L 105,320 L 110,345 L 125,365 L 145,380 L 170,390 L 200,395 L 235,390 
             L 270,380 L 300,365 L 325,345 L 340,320 L 345,295 L 335,270 L 315,255 L 290,250 L 260,255 
             L 230,265 L 200,275 L 170,280 L 140,280 L 130,280
             M 65,300 L 55,320 L 60,345 L 80,360 L 105,355 L 115,335 L 105,315 L 85,305 L 65,300"
        />
        
        {/* Mexico & Central America */}
        <path
          className="land map-path"
          style={{ animationDelay: '0.15s' }}
          d="M 170,395 L 155,420 L 145,450 L 150,480 L 170,505 L 195,520 L 220,515 L 240,495 L 250,470 
             L 245,445 L 230,420 L 210,400 L 185,395 L 170,395
             M 230,490 L 220,510 L 225,535 L 245,555 L 265,560 L 280,545 L 275,520 L 255,505 L 235,500 L 230,490
             M 280,535 L 275,555 L 285,575 L 305,580 L 320,565 L 315,545 L 295,535 L 280,535"
        />
        
        {/* South America */}
        <path
          className="land map-path"
          style={{ animationDelay: '0.2s' }}
          d="M 320,555 L 305,580 L 295,615 L 300,655 L 320,695 L 350,730 L 385,755 L 420,770 L 450,775 
             L 475,765 L 495,740 L 505,705 L 500,665 L 485,625 L 460,590 L 425,560 L 385,545 L 350,545 L 320,555
             M 440,770 L 435,810 L 445,850 L 470,880 L 495,895 L 515,885 L 520,855 L 505,825 L 480,800 L 455,785 L 440,770
             M 495,860 L 485,895 L 495,930 L 520,950 L 545,945 L 555,915 L 540,885 L 515,870 L 495,860"
        />
        
        {/* Greenland */}
        <path
          className="land map-path"
          style={{ animationDelay: '0.25s' }}
          d="M 580,70 L 555,85 L 540,110 L 545,145 L 565,175 L 595,195 L 630,200 L 665,190 L 690,165 
             L 700,135 L 695,100 L 675,75 L 645,60 L 610,60 L 580,70"
        />
        
        {/* Iceland */}
        <path
          className="land map-path"
          style={{ animationDelay: '0.28s' }}
          d="M 730,155 L 720,170 L 725,190 L 745,200 L 770,195 L 785,175 L 780,155 L 760,145 L 740,150 L 730,155"
        />
        
        {/* UK & Ireland */}
        <path
          className="land map-path"
          style={{ animationDelay: '0.3s' }}
          d="M 835,220 L 825,235 L 830,260 L 850,280 L 875,285 L 895,270 L 900,245 L 890,225 L 865,215 L 845,215 L 835,220
             M 810,250 L 800,265 L 805,285 L 825,295 L 840,285 L 835,265 L 820,255 L 810,250"
        />
        
        {/* Western Europe (Iberian Peninsula, France) */}
        <path
          className="land map-path"
          style={{ animationDelay: '0.35s' }}
          d="M 845,310 L 830,330 L 825,360 L 840,390 L 870,410 L 905,415 L 935,400 L 955,370 L 960,340 
             L 950,310 L 925,290 L 895,285 L 865,295 L 845,310
             M 905,290 L 920,275 L 945,270 L 975,280 L 995,300 L 1005,330 L 995,355 L 970,365 L 945,355 
             L 930,330 L 925,305 L 905,290"
        />
        
        {/* Scandinavia */}
        <path
          className="land map-path"
          style={{ animationDelay: '0.4s' }}
          d="M 955,130 L 940,145 L 935,175 L 950,210 L 980,240 L 1015,255 L 1050,250 L 1075,225 
             L 1085,190 L 1075,155 L 1050,125 L 1015,110 L 980,115 L 955,130
             M 1000,170 L 1010,155 L 1035,150 L 1060,160 L 1075,185 L 1070,210 L 1050,225 L 1025,220 
             L 1005,200 L 1000,175 L 1000,170"
        />
        
        {/* Central & Eastern Europe */}
        <path
          className="land map-path"
          style={{ animationDelay: '0.45s' }}
          d="M 1005,270 L 995,290 L 1000,320 L 1020,350 L 1050,370 L 1085,375 L 1115,360 L 1135,335 
             L 1140,300 L 1125,270 L 1100,250 L 1065,245 L 1035,255 L 1005,270"
        />
        
        {/* Russia */}
        <path
          className="land map-path"
          style={{ animationDelay: '0.5s' }}
          d="M 1100,120 L 1080,135 L 1075,165 L 1090,200 L 1120,230 L 1160,250 L 1210,260 L 1270,255 
             L 1330,240 L 1400,220 L 1470,200 L 1540,185 L 1610,180 L 1680,190 L 1740,210 L 1790,240 
             L 1820,270 L 1835,300 L 1830,335 L 1805,360 L 1765,375 L 1720,380 L 1670,375 L 1620,360 
             L 1570,340 L 1520,315 L 1470,295 L 1420,280 L 1370,275 L 1320,280 L 1270,295 L 1220,310 
             L 1175,320 L 1140,320 L 1115,305 L 1100,280 L 1095,250 L 1100,215 L 1115,180 L 1125,150 L 1120,125 L 1100,120"
        />
        
        {/* Africa */}
        <path
          className="land map-path"
          style={{ animationDelay: '0.55s' }}
          d="M 925,420 L 905,445 L 895,480 L 905,520 L 930,560 L 970,600 L 1020,640 L 1070,670 
             L 1120,690 L 1165,695 L 1205,685 L 1235,660 L 1255,625 L 1260,585 L 1250,545 L 1225,510 
             L 1190,480 L 1150,460 L 1105,445 L 1060,440 L 1015,440 L 975,430 L 945,420 L 925,420
             M 1130,695 L 1135,735 L 1155,770 L 1185,795 L 1220,805 L 1250,795 L 1270,770 L 1275,735 
             L 1265,700 L 1240,680 L 1205,675 L 1170,680 L 1145,690 L 1130,695"
        />
        
        {/* Madagascar */}
        <path
          className="land map-path"
          style={{ animationDelay: '0.58s' }}
          d="M 1305,665 L 1295,690 L 1300,720 L 1320,750 L 1350,770 L 1375,760 L 1385,730 L 1375,700 
             L 1355,675 L 1330,660 L 1305,665"
        />
        
        {/* Middle East */}
        <path
          className="land map-path"
          style={{ animationDelay: '0.6s' }}
          d="M 1140,370 L 1125,395 L 1130,430 L 1155,460 L 1195,480 L 1240,485 L 1285,475 L 1320,450 
             L 1340,415 L 1340,380 L 1320,350 L 1285,330 L 1245,325 L 1205,335 L 1170,355 L 1140,370
             M 1260,395 L 1280,415 L 1310,425 L 1340,420 L 1365,400 L 1375,370 L 1365,345 L 1340,330 
             L 1310,335 L 1285,355 L 1265,375 L 1260,395"
        />
        
        {/* India */}
        <path
          className="land map-path"
          style={{ animationDelay: '0.65s' }}
          d="M 1370,385 L 1355,415 L 1360,455 L 1385,495 L 1425,530 L 1470,555 L 1515,565 L 1550,555 
             L 1570,525 L 1570,490 L 1550,455 L 1515,425 L 1475,400 L 1430,385 L 1390,385 L 1370,385
             M 1475,555 L 1465,590 L 1475,625 L 1505,650 L 1545,655 L 1575,635 L 1585,600 L 1570,570 
             L 1540,555 L 1505,555 L 1475,555"
        />
        
        {/* Sri Lanka */}
        <path
          className="land map-path"
          style={{ animationDelay: '0.67s' }}
          d="M 1530,605 L 1520,625 L 1530,650 L 1555,665 L 1580,655 L 1590,630 L 1575,610 L 1550,605 L 1530,605"
        />
        
        {/* Southeast Asia */}
        <path
          className="land map-path"
          style={{ animationDelay: '0.7s' }}
          d="M 1580,460 L 1565,490 L 1575,530 L 1605,565 L 1650,595 L 1695,610 L 1735,600 L 1760,570 
             L 1765,530 L 1745,495 L 1710,465 L 1665,445 L 1620,445 L 1585,455 L 1580,460
             M 1670,610 L 1660,645 L 1680,680 L 1720,705 L 1765,710 L 1800,690 L 1815,655 L 1800,620 
             L 1765,600 L 1720,600 L 1685,605 L 1670,610"
        />
        
        {/* China */}
        <path
          className="land map-path"
          style={{ animationDelay: '0.75s' }}
          d="M 1520,310 L 1500,340 L 1505,380 L 1535,415 L 1580,440 L 1635,450 L 1695,445 L 1750,425 
             L 1795,395 L 1825,355 L 1835,310 L 1820,270 L 1785,240 L 1740,225 L 1690,225 L 1640,240 
             L 1595,265 L 1555,290 L 1520,310"
        />
        
        {/* Korea */}
        <path
          className="land map-path"
          style={{ animationDelay: '0.78s' }}
          d="M 1770,320 L 1760,345 L 1770,375 L 1795,400 L 1825,410 L 1850,395 L 1860,365 L 1850,340 
             L 1825,320 L 1795,315 L 1770,320"
        />
        
        {/* Japan */}
        <path
          className="land map-path"
          style={{ animationDelay: '0.8s' }}
          d="M 1865,290 L 1855,315 L 1865,345 L 1890,370 L 1920,385 L 1950,380 L 1970,355 L 1975,325 
             L 1960,300 L 1935,285 L 1905,280 L 1880,285 L 1865,290
             M 1890,380 L 1880,405 L 1895,430 L 1925,445 L 1955,440 L 1975,420 L 1970,395 L 1945,380 
             L 1915,380 L 1890,380"
        />
        
        {/* Philippines */}
        <path
          className="land map-path"
          style={{ animationDelay: '0.83s' }}
          d="M 1800,510 L 1790,535 L 1800,565 L 1825,585 L 1855,590 L 1880,575 L 1890,545 L 1875,520 
             L 1850,505 L 1820,505 L 1800,510
             M 1820,590 L 1810,615 L 1825,640 L 1855,655 L 1880,645 L 1890,620 L 1875,600 L 1845,595 L 1820,590"
        />
        
        {/* Indonesia */}
        <path
          className="land map-path"
          style={{ animationDelay: '0.85s' }}
          d="M 1680,640 L 1660,670 L 1675,705 L 1715,735 L 1765,755 L 1820,760 L 1875,750 L 1920,725 
             L 1945,690 L 1945,650 L 1920,620 L 1875,600 L 1825,595 L 1770,605 L 1720,625 L 1680,640
             M 1890,680 L 1905,705 L 1940,720 L 1975,715 L 2000,695 L 2005,665 L 1985,645 L 1955,640 
             L 1920,650 L 1895,665 L 1890,680"
        />
        
        {/* Papua New Guinea */}
        <path
          className="land map-path"
          style={{ animationDelay: '0.87s' }}
          d="M 1920,610 L 1935,625 L 1960,630 L 1985,620 L 2000,600 L 1995,580 L 1975,565 L 1950,565 
             L 1930,575 L 1920,595 L 1920,610"
        />
        
        {/* Australia */}
        <path
          className="land map-path"
          style={{ animationDelay: '0.9s' }}
          d="M 1720,760 L 1695,790 L 1690,835 L 1710,880 L 1750,920 L 1805,950 L 1865,965 L 1925,960 
             L 1975,935 L 2010,895 L 2030,845 L 2030,795 L 2010,750 L 1975,715 L 1930,695 L 1880,695 
             L 1830,710 L 1785,735 L 1750,755 L 1720,760
             M 1965,815 L 1985,795 L 2000,815 L 1995,845 L 1975,860 L 1950,850 L 1945,825 L 1955,810 L 1965,815"
        />
        
        {/* Tasmania */}
        <path
          className="land map-path"
          style={{ animationDelay: '0.92s' }}
          d="M 1910,955 L 1900,975 L 1915,995 L 1945,1000 L 1970,985 L 1975,960 L 1955,945 L 1925,945 L 1910,955"
        />
        
        {/* New Zealand */}
        <path
          className="land map-path"
          style={{ animationDelay: '0.95s' }}
          d="M 2035,885 L 2025,910 L 2035,940 L 2060,965 L 2090,975 L 2115,960 L 2125,930 L 2110,905 
             L 2080,890 L 2055,885 L 2035,885
             M 2070,970 L 2060,995 L 2075,1020 L 2105,1035 L 2130,1025 L 2140,1000 L 2125,980 L 2095,975 L 2070,970"
        />
        
        {/* Antarctica */}
        <path
          className="land map-path"
          style={{ animationDelay: '1s' }}
          d="M 100,960 L 200,950 L 350,945 L 500,950 L 650,960 L 800,965 L 950,960 L 1100,955 
             L 1250,960 L 1400,965 L 1550,960 L 1700,955 L 1850,960 L 2000,970
             M 400,970 L 380,985 L 400,1000 L 450,995 L 470,975 L 440,965 L 400,970
             M 700,975 L 680,995 L 705,1010 L 760,1005 L 785,985 L 755,970 L 700,975
             M 1200,965 L 1175,985 L 1200,1005 L 1260,1000 L 1290,980 L 1255,965 L 1200,965"
        />
      </g>
    </svg>
  );
}
