import Section from '@/components/Section';
import DirectoryLinks from '@/components/DirectoryLinks';
import ProjectItem from '@/components/ProjectItem';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="max-w-[720px] mx-auto px-5 md:px-8 py-12 md:py-20">
        {/* hero */}
        <section className="mb-12 md:mb-16">
          <p className="text-[15px] text-[#a0a0a0] mb-1">hey, i&apos;m</p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Vaibhav Hariram</h1>
        </section>

        {/* directory */}
        <section className="mb-12 md:mb-16">
          <DirectoryLinks />
        </section>

        {/* intro */}
        <Section>
          <p className="text-[15px] leading-relaxed text-[#e0e0e0]">
            building the next frontier of dev tools — stay tuned for a little something called Kado
          </p>
          <p className="text-[15px] leading-relaxed text-[#e0e0e0]">
            prev. swe intern at Railinc (2x), building gis-driven tools for freight rail operations + terminal workflows
          </p>
          <p className="text-[15px] leading-relaxed text-[#e0e0e0]">
            studying cs @ berkeley
          </p>
          <p className="text-[15px] leading-relaxed text-[#e0e0e0]">
            doing llm tool research for berkeley&apos;s Gorilla Project (affiliated with BAIR + Sky Computing Lab)
          </p>
          <p className="text-[15px] leading-relaxed text-[#e0e0e0]">
            researcher @ uc berkeley (eecs), satellite imagery + ML to detect crypto mining development in el salvador (Potts Lab)
          </p>
        </Section>

        {/* personal projects */}
        <Section title="personal projects">
          <ProjectItem
            name="atlas"
            description="predictive multi-modal transportation router combining dijkstra/a*/contraction hierarchies with traffic models"
            stack="stack: python • graph algos • routing"
          />
          <ProjectItem
            name="swandb"
            description="real-time visualization platform to find high-risk evacuation corridors"
            stack="stack: (see repo)"
          />
          <ProjectItem
            name="roadsense (aka Camino)"
            description="CV system that finds road damage from dashcam video + maps it for cities"
            stack="stack: pytorch • yolov8 • opencv"
          />
          <ProjectItem
            name="paprika"
            description="zoning intelligence lookup for sf properties"
            stack="stack: postgresql • postgis • next.js"
          />
        </Section>

        {/* open source */}
        <Section title="open source">
          <p className="text-[15px] leading-relaxed text-[#e0e0e0] py-1">
            geofilter — geojson spatial filter library (~1m+ points/sec)
          </p>
          <p className="text-[15px] leading-relaxed text-[#e0e0e0] py-1">
            reqbench — cli load testing (p50/p95/p99 + throughput)
          </p>
          <p className="text-[15px] leading-relaxed text-[#e0e0e0] py-1">
            contributed to HF Transformers + PostGIS
          </p>
        </Section>

        {/* lore */}
        <Section title="lore">
          <p className="text-[15px] leading-relaxed text-[#e0e0e0]">
            pretty good at geography trivia
          </p>
          <p className="text-[15px] leading-relaxed text-[#e0e0e0]">
            played trevor rainbolt in ranked geoguessr. got absolutely cooked tho
          </p>
          <p className="text-[15px] leading-relaxed text-[#e0e0e0]">
            played carnatic violin for 10 years
          </p>
          <p className="text-[15px] leading-relaxed text-[#e0e0e0]">
            huge chelsea fan + chicago sports
          </p>
          <p className="text-[15px] leading-relaxed text-[#e0e0e0]">
            grew up in cary, north carolina. escaped.
          </p>
        </Section>

        {/* tl;dr */}
        <Section title="tl;dr">
          <p className="text-[15px] leading-relaxed text-[#e0e0e0]">
            i love geospatial ai/ml + geotech: geospatial data, machine learning, and real systems people actually use
          </p>
        </Section>

        {/* currently */}
        <Section title="currently">
          <p className="text-[15px] leading-relaxed text-[#e0e0e0]">
            berkeley → scale and build wherever and whatever i can
          </p>
          <p className="text-[15px] leading-relaxed text-[#e0e0e0]">
            still thinking about that caleb williams throw…
          </p>
        </Section>

        {/* some other things */}
        <Section title="some other things">
          <p className="text-[15px] leading-relaxed text-[#e0e0e0]">
            coursework: data structures, discrete math, structure of computer programs, networking + internet protocols, computer vision, data science, probably more ai/ml
          </p>
          <p className="text-[15px] leading-relaxed text-[#e0e0e0]">
            tools: python, typescript, react/next.js, postgresql/postgis, pytorch, xgboost, scikit-learn, gis tooling, aws, docker
          </p>
          <p className="text-[15px] leading-relaxed text-[#e0e0e0]">
            interests: cities + public transportation, collecting old maps, tamil culture, soccer jerseys, geoguessr, chicago sports, international music
          </p>
          <p className="text-[15px] leading-relaxed text-[#e0e0e0]">
            less frequently: south indian movies, home decor, sketching, online chess, sparkling water
          </p>
        </Section>

        {/* other things */}
        <Section title="other things">
          <p className="text-[15px] leading-relaxed text-[#e0e0e0]">
            used to watch anime a little bit
          </p>
          <p className="text-[15px] leading-relaxed text-[#e0e0e0]">
            trying to learn to dj and cook (or both at the same time)
          </p>
          <p className="text-[15px] leading-relaxed text-[#e0e0e0]">
            will run a marathon this year
          </p>
          <p className="text-[15px] leading-relaxed text-[#e0e0e0]">
            trying to attend more hackathons
          </p>
          <p className="text-[15px] leading-relaxed text-[#e0e0e0]">
            roast my spotify playlists
          </p>
        </Section>

        {/* footer */}
        <footer className="mt-16 pt-8 border-t border-[#2a2a2f]">
          <p className="text-[14px] text-[#6b6b6b] leading-relaxed">
            this page changes often. if you&apos;re reading this, feel free to reach out. if you&apos;re from stanford, no.
          </p>
        </footer>
      </div>
    </main>
  );
}
